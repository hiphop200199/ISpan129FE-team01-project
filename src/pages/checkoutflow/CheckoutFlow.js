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
      const itemTotal = items.product_quantity * items.product_price
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
  const getOrderData = (orderId) => {
    return fetch(`http://localhost:3002/orderList/orderDetail/${orderId}`).then(
      (res) => res.json()
    )
  }

  const handelSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const formString = Object.fromEntries(formData.entries())
    const AddDetailData = { detailData, ...formString }
    try {
      const res = await sendFormData(AddDetailData)
      if (res.ok) {
        const data = await res.json()
        const { oid } = data
        localStorage.setItem('cart', JSON.stringify([]))
        setAddOrder(true)
        setOrderID(oid)
        const orderData = await getOrderData(oid)
        setOrderData(orderData)
      } else {
        throw new Error('Failed to submit form')
      }
    } catch (error) {
      console.error(error)
      // 如果出現異常，可以在這裡進行處理
    }
  }

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
      {!addOrder ? (
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
                        product_quantity,
                      },
                      index
                    ) => (
                      <tr key={product_id}>
                        <td>
                          <img
                            src={`http://localhost:3002/uploads/${product_image}`}
                            alt={product_name}
                          />
                        </td>
                        <td>{product_name}</td>
                        <td>{product_price}</td>
                        <td>{product_quantity}</td>
                        <td>{product_quantity * product_price}</td>
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
              {showNextStep ? <NextStepLg onClick={handleNext} /> : ''}
            </div>
          </div>
          <section className="recommended-products">
            {showFrom ? (
              <div className="d-flex flex-column col-12 m-auto">
                <form htmlFor="orderForm" onSubmit={handelSubmit}>
                  <div className="form_title">
                    <h5>收件人姓名</h5>
                    <label>
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={handleCheckBoxChange}
                      />
                      同會員資料
                    </label>
                  </div>
                  {member != null ? (
                    <div className="d-flex flex-column">
                      <label className="mb-3">
                        <input
                          className="form-control"
                          type="text"
                          id="recipient_name"
                          name="recipient_name"
                          defaultValue={member.name}
                          readOnly
                        />
                      </label>
                      <label className="mb-3">
                        <input
                          className="form-control"
                          type="text"
                          id="recipient_address"
                          name="recipient_address"
                          defaultValue={member.address}
                          readOnly
                        />
                      </label>
                      <label className="mb-3">
                        <input
                          className="form-control"
                          type="text"
                          id="recipient_phone"
                          name="recipient_phone"
                          defaultValue={member.mobile}
                        />
                      </label>
                    </div>
                  ) : (
                    <div className="d-flex flex-column">
                      <label className="mb-3">
                        <input
                          className="form-control"
                          type="text"
                          id="recipient_name"
                          name="recipient_name"
                          placeholder="收件人姓名"
                        />
                      </label>
                      <label className="mb-3">
                        <input
                          className="form-control"
                          type="text"
                          id="recipient_address"
                          name="recipient_address"
                          placeholder="收件地址"
                        />
                      </label>
                      <label className="mb-3">
                        <input
                          className="form-control"
                          type="text"
                          id="recipient_phone"
                          name="recipient_phone"
                          placeholder="聯絡電話"
                        />
                      </label>
                    </div>
                  )}

                  <select
                    className="form-select mb-3"
                    value={payment}
                    id="payment_method"
                    name="payment_method"
                    onChange={(e) => {
                      setPayment(e.target.value)
                    }}
                  >
                    <option value="" disabled>
                      請選擇付款方式
                    </option>
                    <option value="1">信用卡</option>
                    <option value="2">貨到付款</option>
                  </select>
                  <div className="d-flex justify-content-end">
                    <PreviousStep onClick={handleNext} />

                    <button
                      type="submit"
                      className="btn btn-primary btn-lg min-width-auto"
                    >
                      確認
                    </button>
                  </div>
                </form>
              </div>
            ) : (
              <>
                <h1 className="product-title col-10">猜你喜歡</h1>
                <article className="product">
                  <div className="card">
                    <img src="" alt="" />
                  </div>
                </article>
              </>
            )}
          </section>
        </main>
      ) : (
        <main className="checkoutFlow d-flex justify-content-center align-items-center">
          <div className="tabs col-10 ">
            <p> 訂單編號:{''}</p>
            <p> 訂單日期:{''}</p>
            <p> 訂單狀態:{''}</p>
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
              訂單內容
            </label>
            <div className="tabs__content">
              <table>
                <thead>
                  <tr>
                    <th>訂單編號</th>
                    <th>訂單</th>
                    <th>商品圖</th>
                    <th>名稱</th>
                    {/* <th>規格</th> */}
                    <th>價格</th>
                    <th>數量</th>
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
                        product_quantity,
                      },
                      index
                    ) => (
                      <tr key={product_id}>
                        <td>
                          <img
                            src={`http://localhost:3002/uploads/${product_image}`}
                            alt={product_name}
                          />
                        </td>
                        <td>{product_name}</td>
                        <td>{product_price}</td>
                        <td>{product_quantity}</td>
                        <td>{product_quantity * product_price}</td>
                        {/* <td>從購物車刪除</td> */}
                      </tr>
                    )
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      )}
    </>
  )
}

export default CheckoutFlow
