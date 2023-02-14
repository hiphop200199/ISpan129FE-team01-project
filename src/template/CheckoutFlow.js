import React from 'react'

function CheckoutFlow() {
  return (
    <>
      <aside className="order-step-guide">
        <div className="row">
          <div className="col">
            <div className="step1">1</div>
            <div className="steptext">確認商品</div>
          </div>
          <div className="stepline"></div>
          <div className="col">
            <div className="step2">2</div>
            <div className="steptext">填寫資料</div>
          </div>
          <div className="stepline"></div>
          <div className="col">
            <div className="step3">3</div>
            <div className="steptext">訂購成功</div>
          </div>
        </div>
      </aside>
      <main className="checkoutFlow">
        <div className="tabs">
          <input
            type="radio"
            className="tabs__radio"
            name="tabs-example"
            id="tab1"
            checked
          />
          <label for="tab1" className="tabs__label">
            商城
          </label>
          <div className="tabs__content">
            <table>
              <thead>
                <tr>
                  <th>商品圖</th>
                  <th>名稱</th>
                  <th>規格</th>
                  <th>價格</th>
                  <th>數量</th>
                  <th>小計</th>
                  <th>操作</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <img src="https://picsum.photos/id/237/90/90" alt="" />
                  </td>
                  <td>狗飼料</td>
                  <td>200g/包</td>
                  <td>NT.300</td>
                  <td>1</td>
                  <td>NT300</td>
                  <td>從購物車刪除</td>
                </tr>
                <tr>
                  <td>
                    <img src="https://picsum.photos/id/237/90/90" alt="" />
                  </td>
                  <td>狗飼料</td>
                  <td>200g/包</td>
                  <td>NT.300</td>
                  <td>1</td>
                  <td>NT300</td>
                  <td>從購物車刪除</td>
                </tr>
              </tbody>
            </table>
          </div>
          <input
            type="radio"
            className="tabs__radio"
            name="tabs-example"
            id="tab2"
          />
          <label for="tab2" className="tabs__label">
            課程
          </label>
          <div className="tabs__content">
            <table>
              <thead>
                <tr>
                  <th>商品圖</th>
                  <th>名稱</th>
                  <th>規格</th>
                  <th>價格</th>
                  <th>數量</th>
                  <th>小計</th>
                  <th>操作</th>
                </tr>
              </thead>
              <tr>
                <td>
                  <img src="https://picsum.photos/90/90?pet" alt="" />
                </td>
                <td>狗飼料</td>
                <td>200g/包</td>
                <td>NT.300</td>
                <td>1</td>
                <td>NT300</td>
                <td>從購物車刪除</td>
              </tr>
            </table>
          </div>
          <input
            type="radio"
            className="tabs__radio"
            name="tabs-example"
            id="tab3"
          />
          <label for="tab3" className="tabs__label">
            餐點
          </label>
          <input
            type="radio"
            className="tabs__radio"
            name="tabs-example"
            id="tab4"
          />
          <label for="tab4" className="tabs__label">
            活動
          </label>
        </div>
        <div className="checkout-section">
          <div className="total-amount">
            <span>合計 : NT 600</span>
          </div>
          <div className="checkout-btn">
            <button className="continue-shopping-btn">繼續選購</button>
            <button className="next-step-btn">下一步</button>
          </div>
        </div>
        <section className="recommended-products">
          <h1>猜你喜歡</h1>
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
