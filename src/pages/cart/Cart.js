import React, { useState } from 'react'

const Cart = () => {
  const [items, setItems] = useState([])

  const addItem = (item) => {
    setItems([...items, item])
  }

  const removeItem = (index) => {
    setItems(items.filter((item, i) => i !== index))
  }

  return (
    <div className="cart__sidebar">
      <main className="cart__body">
        <h2>購物車</h2>
        <table>
          <thead>
            <tr>
              <th>名稱</th>
              <th>價格</th>
              <th>數量</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr key={item.name}>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.quantity}</td>
                <td>
                  <button onClick={() => removeItem(index)}>移除</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <form
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
        </form>
      </main>
    </div>
  )
}

export default Cart
