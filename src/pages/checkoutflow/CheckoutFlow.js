import React from 'react'
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

  const [showNextStep, setShowNextStep] = useState(true)
  const [showFrom, setShowForm] = useState(false)
  // 點擊下一步後顯示表單, 並隱藏下一步的按鈕
  const handleClickNext = () => {
    setShowForm(true)
    setShowNextStep(false)
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
            <NextStepLg />
          </div>
        </div>
        {/* <section className="recommended-products">
          <h1 className="product-title col-10">猜你喜歡</h1>
          <article className="product">
            <div className="card">
              <img src="" alt="" />
            </div>
          </article>
        </section> */}
      </main>
    </>
  )
}

export default CheckoutFlow
