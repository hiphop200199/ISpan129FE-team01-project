import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretRight } from '@fortawesome/free-solid-svg-icons'
function QuantitySelector() {
  const [count, setCount] = useState(0)
  return (
    <>
      {/* 加減數量按鈕 */}
      <div className="calculate-btn-box">
        <button
          className="dash calculate-btn"
          disabled={count <= 0 ? true : false}
          onClick={() => {
            if (count > 0) {
              setCount(count - 1)
            }
          }}
        ></button>
        <span>{count}</span>
        <button
          className="add calculate-btn "
          onClick={() => {
            setCount(count + 1)
          }}
        ></button>
      </div>
    </>
  )
}
export default QuantitySelector
