import React from 'react'
import { useState } from 'react'
import { Step, NextStepLg } from '../../template'

function CheckoutFlow() {
  const [tagCheck, setTagCheck] = useState('tab1')
  const handleChange = (event) => {
    setTagCheck(event.target.id)
  }
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem('cart')) || []
  )
  console.log(items)
  // if (items) {
  //   setItems(JSON.parse(localStorage.getItem('cart')))
  // }
  return (
    <>
      <Step />
      <main className="checkoutFlow ">
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
          <label for="tab1" className="tabs__label">
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
        <div className="button_group col-10 m-auto">
          <NextStepLg />
        </div>
        <section className="recommended-products">
          <h1 className="product-title col-10">猜你喜歡</h1>
          <article className="product">
            <div className="card">
              <img src="" alt="" />
            </div>
          </article>
        </section>
      </main>
    </>
  )
}

export default CheckoutFlow
