import { useState } from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCaretRight } from '@fortawesome/free-solid-svg-icons'
function AddToCartLg({ product }) {
  // const productData = { ...product }
  // console.log(productData)
  // 判斷是否有購物車，沒有的話設為空陣列
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem('cart')) || []
  )

  // 點擊按鈕時觸發的事件
  const handleAddCart = () => {
    let found = false
    const newCart = cart.map((item) => {
      if (item.product_id === product.product_id) {
        found = true
        return {
          ...item,
          products_quantity: item.products_quantity + 1,
        }
      }
      return item
    })

    if (!found) {
      const newItem = {
        product_id: product.product_id,
        product_type: product.product_type,
        product_name: product.product_name,
        products_price: product.products_price,
        product_image: product.product_image,
        products_quantity: 1,
      }
      newCart.push(newItem)
    }

    setCart(newCart)
    localStorage.setItem('cart', JSON.stringify(newCart))
  }
  return (
    <>
      {/* 大的按鈕: 加入購物車 */}
      <button
        type="button"
        className="btn btn-primary btn-lg"
        onClick={handleAddCart}
      >
        加入購物車
      </button>
    </>
  )
}
export default AddToCartLg
