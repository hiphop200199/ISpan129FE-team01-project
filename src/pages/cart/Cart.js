import React, { useState } from 'react'
import { QuantitySelector, SquareAccounts } from '../../template'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnglesLeft, faXmark } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
  const navigate = useNavigate()
  // 取得購物車的資料並轉成Json
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem('cart')) || []
  )
  // const [quantity, setQuantity] = useState(JSON.parse(localStorage.getItem('cart')).product_quantity)
  // 在點擊“移除”按鈕時，從購物車中刪除該商品
  const removeItem = (index) => {
    // 切割購物車的Json資料
    const newItems = [...items.slice(0, index), ...items.slice(index + 1)]
    localStorage.setItem('cart', JSON.stringify(newItems))
    // 更新狀態以重新渲染畫面
    setItems(newItems)
  }
  const updateQuantity = (index, newQuantity) => {
    const newItems = [...items]
    newItems[index].product_quantity = newQuantity
    localStorage.setItem('cart', JSON.stringify(newItems))
    setItems(newItems)
  }

  return (
    <div className="cart__sidebar">
      <main className="shopping__cart">
        <FontAwesomeIcon icon={faAnglesLeft} onClick={() => navigate(-1)} />
        <div className="cart__body">
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
                    <td><QuantitySelector
                      productQuantity={product_quantity}
                      index={index}
                      updateQuantity={updateQuantity}
                    /></td>
                    <td>
                      <button className='btn' onClick={() => removeItem(index)}><FontAwesomeIcon icon={faXmark} /></button>
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>
        {items.length > 0 ? (
          <div className="aside d-flex justify-content-center">
            <SquareAccounts className="more_color" />
          </div>
        ) : (
          '沒有選擇商品'
        )}
      </main>
    </div>
  )
}

export default Cart
