import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretRight } from '@fortawesome/free-solid-svg-icons'

function QuantitySelector({ productQuantity, index, updateQuantity }) {
  const [count, setCount] = useState(productQuantity)

  useEffect(() => {
    setCount(productQuantity)
  }, [productQuantity])

  const handleQuantityChange = (newCount) => {
    setCount(newCount)
    updateQuantity(index, newCount)
  }

  return (
    <>
      {/* 加減數量按鈕 */}
      <div className="calculate-btn-box">
        <button
          className="dash calculate-btn"
          disabled={count <= 1}
          onClick={() => handleQuantityChange(count - 1)}
        ></button>
        <span>{count}</span>
        <button
          className="add calculate-btn "
          onClick={() => handleQuantityChange(count + 1)}
        ></button>
      </div>
    </>
  )
}


export default QuantitySelector
