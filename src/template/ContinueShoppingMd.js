import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretRight } from '@fortawesome/free-solid-svg-icons'
function ContinueShoppingLg() {
  return (
    <>
      {/* 中的按鈕: 繼續選購，回上一步 */}
      <button
        type="button"
        className="btn btn-outline-primary btn-md min-width-auto"
      >
        繼續選購
      </button>
    </>
  )
}
export default ContinueShoppingLg
