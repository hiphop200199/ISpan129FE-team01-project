import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretRight } from '@fortawesome/free-solid-svg-icons'
function AddToCartLg() {
  return (
    <>
      {/* 大的按鈕: 加入購物車 */}
      <button type="button" className="btn btn-primary btn-lg">
        加入購物車
      </button>
    </>
  )
}
export default AddToCartLg
