
import React, { useEffect } from 'react'
import { useState } from 'react'
import { Step, NextStepLg, PreviousStep, SquareAccounts } from '../../template'

function CheckoutFlow() {
  // 取得購物車頁籤
  const [tagCheck, setTagCheck] = useState('tab1')
  const handleChange = (event) => {
    setTagCheck(event.target.id)
  }
  // 取得購物車資料
  const items = JSON.parse(localStorage.getItem('cart')) || []
  // console.log(items)

  // 計算購物車商品總額
  const totalPrice = () => {
    let cartTotal = 0
    items.forEach((items) => {
      const itemTotal = items.product_qry * items.products_price
      cartTotal += itemTotal
    })
    return cartTotal
  }
  const total = totalPrice()


  // 信用卡欄位資料
  const [formData, setFormData] = useState({
    payment: '',
    cardNumber: '',
    expiryDate: '', //到期日
    securityCode: '',
    remark: '',
    name: '',
    email: '',
    phone: '',
  })
  const handleChangePayMethod = (event) => {
    const { name, value } = event.target
    setFormData({ ...formData, [name]: value })
  }
  // 取得會員收件資料
  const id = localStorage.getItem('id')
  const [member, setMember] = useState(null)
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`http://localhost:3002/member/${id}`);
        if (!res.ok) {
          throw new Error('network error');
        }
        const memberData = await res.json();
        console.log(memberData)
        if (memberData) {
          setMember(...memberData);
        } else {
          throw new Error('member not found')
        }
      } catch (error) {
        console.error('Error fetching member data:', error);
      }
    };
    // 如果checkBox被用戶選擇，取得資料
    // 取消則清除資料
    if (isChecked) {
      fetchData();
    } else {
      setMember(null);
    }
  }, [id, isChecked]);
  // 當checkBox狀態改變時更新狀態值
  const handleCheckBoxChange = (event) => {
    setIsChecked(event.target.checked)
    if (!event.target.checked) {
      setMember({
        name: '',
        address: '',
        mobile: '',
      });
    }
  }
  const [showNextStep, setShowNextStep] = useState(true)
  const [showFrom, setShowForm] = useState(false)
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
        name: '',
        address: '',
        mobile: '',
      })
    }
  }
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
                      products_price,
                      product_image,
                      product_qry,
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
                      <td>{products_price}</td>
                      <td>{product_qry}</td>
                      <td>{product_qry * products_price}</td>
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
              <form htmlFor='orderForm'>
                <div className='form_title'>
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
                      <input type="number" defaultValue={id} hidden />
                      <input
                        className="form-control"
                        type="text"
                        defaultValue={member.name}
                        readOnly
                      />
                    </label>
                    <label className="mb-3">
                      <input
                        className="form-control"
                        type="text"
                        defaultValue={member.address}
                        readOnly
                      />
                    </label>
                    <label className="mb-3">
                      <input
                        className="form-control"
                        type="text"
                        defaultValue={member.mobile}
                      />
                    </label>
                  </div>
                ) : (
                  <div className="d-flex flex-column">
                    <input type="number" defaultValue={id} hidden />
                    <label className="mb-3">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="收件人姓名"
                      />
                    </label>
                    <label className="mb-3">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="收件地址"

                      />
                    </label>
                    <label className="mb-3">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="聯絡電話"
                      />
                    </label>
                  </div>
                )}

                <select
                  className="form-select mb-3"
                  value={formData.payment}
                  name="payment"
                  onChange={handleChangePayMethod}
                >
                  <option value="" disabled>
                    請選擇付款方式
                  </option>
                  <option value="creditCard">信用卡</option>
                  <option value="onSite">貨到付款</option>
                </select>
                {formData.payment === 'creditCard' ? (
                  <>
                    <label className="mb-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="卡號"
                        value={formData.cardNumber}
                        onChange={handleChange}
                        name="cardNumber"
                      />
                    </label>

                    <label className="d-flex">
                      <div className="mb-3 col-6 pr-1">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="到期日"
                          value={formData.expiryDate}
                          onChange={handleChange}
                          name="expiryDate"
                        />
                      </div>

                      <label className="mb-3 col-6 pl-1">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="安全碼"
                          value={formData.securityCode}
                          onChange={handleChange}
                          name="securityCode"
                        />
                      </label>
                    </label>
                  </>
                ) : (
                  ''
                )}

                <button type='submit' className='btn '>
                  確認
                </button>
              </form>
              <div className="d-flex justify-content-end">
                <PreviousStep onClick={handleNext} />
              </div>
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
    </>
  )
}

export default CheckoutFlow
