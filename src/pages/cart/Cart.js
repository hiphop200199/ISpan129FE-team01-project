import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

const Cart = () => {
  // 取得購物車的資料並轉成Json
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem('cart')) || []
  )
  // 在點擊“移除”按鈕時，從購物車中刪除該商品
  const removeItem = (index) => {
    // 切割購物車的Json資料
    const newItems = [...items.slice(0, index), ...items.slice(index + 1)]
    localStorage.setItem('cart', JSON.stringify(newItems))
    // 更新狀態以重新渲染畫面
    setItems(newItems)
  }

  return (
    <div className="cart__sidebar">
      <main className="cart__body">
        <h2>購物車</h2>
        <table>
          <thead>
            {/* <tr>
              <th>名稱</th>
              <th>價格</th>
              <th>數量</th>
              <th>操作</th>
            </tr> */}
          </thead>
          <tbody>
            {items.map(
              (
                { product_id, product_name, products_price, product_image, product_qry },
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
                  <td>
                    <button onClick={() => removeItem(index)}>移除</button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
        {/* <form
          onSubmit={(event) => {
            event.preventDefault()
            addItem({
              name: event.target.name.value,
              price: event.target.price.value,
              quantity: event.target.quantity.value,
            })
            event.target.reset()
          }}
        >
          <input type="text" name="name" placeholder="商品" />
          <input type="number" name="price" placeholder="價格" />
          <input type="number" name="quantity" placeholder="數量" />
          <button type="submit">加入購物車</button>
        </form> */}
        <button>
          <Link to={'/CheckoutFlow'}>結帳</Link>
        </button>
      </main>
    </div>
  )
}

export default Cart
