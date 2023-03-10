import { set } from 'date-fns'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Step, NextStepLg, PreviousStep, SquareAccounts } from '../../template'

function CheckoutFlow() {
  const navigate = useNavigate()
  // 取得購物車頁籤
  const [tagCheck, setTagCheck] = useState('tab1')
  const handleChange = (event) => {
    setTagCheck(event.target.id)
  }
  // 取得購物車資料
  const items = JSON.parse(localStorage.getItem('cart')) || []
  const detailData = [...items]
  // console.log(typeof detailData)

  // 計算購物車商品總額
  const totalPrice = () => {
    let cartTotal = 0
    items.forEach((items) => {
      const itemTotal = items.product_qry * items.product_price
      cartTotal += itemTotal
    })
    return cartTotal
  }
  const total = totalPrice()

  // 信用卡欄位資料
  const [payment, setPayment] = useState('')

  // 取得會員地址
  const id = localStorage.getItem('id')
  const [member, setMember] = useState(null)
  const [isChecked, setIsChecked] = useState(false)
  // 取得會員資料
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`http://localhost:3002/member/${id}`)
        if (!res.ok) {
          throw new Error('network error')
        }
        const memberData = await res.json()
        if (memberData) {
          setMember(...memberData)
        } else {
          throw new Error('member not found')
        }
      } catch (error) {
        console.error('Error fetching member data:', error)
      }
    }
    // 如果checkBox被用戶選擇，取得資料
    // 取消則清除資料
    if (isChecked) {
      fetchData()
    } else {
      setMember(null)
    }
  }, [id, isChecked])
  // 當checkBox狀態改變時更新狀態值
  const handleCheckBoxChange = (event) => {
    setIsChecked(event.target.checked)
    if (!event.target.checked) {
      setMember({
        recipient_name: '',
        recipient_address: '',
        recipient_mobile: '',
      })
    }
  }
  // 畫面顯示的表單狀態
  const [showNextStep, setShowNextStep] = useState(true)
  const [showFrom, setShowForm] = useState(false)
  const [addOrder, setAddOrder] = useState(false)

  // 點擊下一步後顯示表單, 並隱藏下一步的按鈕
  const handleNext = () => {
    if (showNextStep) {
      setShowForm(true)
      setShowNextStep(false)
    } else {
      // 回上一步以外，一併清除可能已被點擊的表單欄位
      setShowForm(false)
      setShowNextStep(true)
      setIsChecked(false)
      setMember({
        recipient_name: '',
        recipient_address: '',
        recipient_recipient_phone: '',
      })
    }
  }
  // 發送表單的API
  const sendFormData = (data) => {
    return fetch(`http://localhost:3002/order/${id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
  }

  // 取得回傳的OrderID
  const [orderID, setOrderID] = useState('')
  const [orderData, setOrderData] = useState([])

  // 取得最新結帳的訂單資料API
  const getOrderData = (orderID) => {
    return fetch(`http://localhost:3002/orderList/orderDetail/${orderID}`).then(
      (res) => res.json()
    )
  }

  const handelSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const formString = Object.fromEntries(formData.entries())
    const AddDetailData = { detailData, ...formString }
    try {
      // 第一次
      const res = await sendFormData(AddDetailData)
      if (res.ok) {
        const data = await res.json()
        const { order_id } = data
        localStorage.setItem('cart', JSON.stringify([]))
        setAddOrder(true)
        setOrderID(order_id)
        const orderData = await getOrderData(order_id)
        // const orderDataArray = Object.values(orderData)
        setOrderData(orderData)
        console.log(orderData)
      } else {
        throw new Error('Failed to submit form')
      }
    } catch (error) {
      console.error(error)
    }
  }
  // 計算訂單總金額
  const [totalOrder, setTotalOrder] = useState(0)
  useEffect(() => {
    const totalOrderPrice = () => {
      let orderTotal = 0
      orderData.forEach((item) => {
        const itemTotal = item.product_quantity * item.product_price
        orderTotal += itemTotal
      })
      return orderTotal
    }

    setTotalOrder(totalOrderPrice())
  }, [orderData])

  // const totalOrder = totalOrderPrice()
  // 發送表單的API
  // const sendFormData = (data) => {
  //   return fetch(`http://localhost:3002/order/${id}`, {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(data),
  //   })
  // }

  // // 取得回傳的OrderID
  // const [orderID, setOrderID] = useState('')
  // const [orderData, setOrderData] = useState([])

  // 取得最新結帳的訂單資料API
  // const getOrderData = (orderId) => {
  //   return fetch(`http://localhost:3002/orderList/orderDetail/${orderID}`).then(
  //     (res) => res.json()
  //   )
  // }
  // // 送出表單
  // // const handelSubmit = (e) => {
  // //   // 先取消表單的預設送出行為並用FormData API獲得表單資料
  // //   e.preventDefault()
  // //   const formData = new FormData(e.target)
  // //   // 連同購物車資料傳送給後端
  // //   const formString = Object.fromEntries(formData.entries())
  // //   const AddDetailData = { detailData, ...formString }
  // //   sendFormData(AddDetailData)
  // //     .then((res) => {
  // //       if (res.ok) {
  // //         const newItem = []
  // //         localStorage.setItem('cart', JSON.stringify(newItem))
  // //         setAddOrder(true)
  // //         // console.log(res)
  // //         setOrderID(res.oid)
  // //         // 取得訂單資料
  // //         return getOrderData(res.oid)
  // //       } else {
  // //         console.log(res.error)
  // //       }
  // //     })
  // //     .then((orderData) => {
  // //       if (orderData.success) {
  // //         setOrderData(orderData)
  // //       }
  // //     })
  // //     .catch((error) => alert(error.message))
  // // }
  // // const handelSubmit = (e) => {
  // //   e.preventDefault()
  // //   const formData = new FormData(e.target)
  // //   const formString = Object.fromEntries(formData.entries())
  // //   const AddDetailData = { detailData, ...formString }
  // //   sendFormData(AddDetailData)
  // //     .then((res) => {
  // //       if (res.ok) {
  // //         return res.json()
  // //       } else {
  // //         throw new Error('Failed to submit form')
  // //       }
  // //     })
  // //     .then((data) => {
  // //       const { oid } = data
  // //       localStorage.setItem('cart', JSON.stringify([]))
  // //       setAddOrder(true)
  // //       setOrderID(oid)
  // //       return getOrderData(oid)
  // //     })
  // //     .then((orderData) => {
  // //       setOrderData(orderData);
  // //       setOrderLoading(false);
  // //     })
  // //   }
  // // 計算訂單總額
  // const totalOrderPrice = () => {
  //   let cartTotal = 0
  //   items.forEach((items) => {
  //     const itemTotal = items.product_quantity * items.product_price
  //     cartTotal += itemTotal
  //   })
  //   return cartTotal
  // }
  // const totalOrder = totalOrderPrice()

  // fetch(`http://localhost:3002/orderList/orderDetail/${orderID}`)
  return (
    <>
      <Step />
      <main className="checkoutFlow d-flex justify-content-center align-items-center">
        <div className="tabs col-10 ">
          <input
            type="radio"
            className="tabs__radio"
            name="tabs-example"
            id="tab1"
            onChange={handleChange}
            checked={tagCheck === 'tab1'}
            // onChange={handleChange}
            // checked={tagCheck}
          />
          <label htmlFor="tab1" className="tabs__label">
            我的購物車
          </label>
          <div className="tabs__content">
            <table>
              <thead>
                <tr>
                  <th>商品圖</th>
                  <th>名稱</th>
                  {/* <th>規格</th> */}
                  <th>價格</th>
                  <th>數量</th>
                  <th>小計</th>
                  {/* <th>操作</th> */}
                </tr>
              </thead>
              <tbody>
                {items.map(
                  (
                    {
                      product_id,
                      product_name,
                      product_price,
                      product_image,
                      product_qry,
                    },
                    index
                  ) => (
                    <tr key={product_id}>
                      <td>
                        <img
                          src={`http://localhost:3002/uploads/${item.product_image}`}
                          alt={item.product_name}
                        />
                      </td>
                      <td>{product_name}</td>
                      <td>{product_price}</td>
                      <td>{product_qry}</td>
                      <td>{product_qry * product_price}</td>
                      {/* <td>從購物車刪除</td> */}
                    </tr>
                  )
                )}
              </tbody>
            </table>
          </div>
        </div>
        <div className="d-flex flex-column col-10 m-auto">
          <div className="d-flex justify-content-between border-bottom mb-2 pb-2">
            <p className="m-0 p-0">運費:</p>
            <p className="m-0 p-0">全館免運</p>
          </div>
          <div className="d-flex justify-content-between mb-2 pb-2">
            <p className="m-0 p-0">合計:</p>
            <p className="m-0 pe-3">{total}</p>
          </div>
          <div className="d-flex justify-content-end">
            <NextStepLg />
          </div>
        </div>
        {/* <section className="recommended-product">
          <h1 className="product-title col-10">猜你喜歡</h1>
          <article className="product">
            <div className="card">
              <img src="" alt="" />
            </div>
          </div>
        </main>
      )}
    </>
  )
}

export default CheckoutFlow
