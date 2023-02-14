import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretRight } from '@fortawesome/free-solid-svg-icons'
function AddToFavoritesMd() {
  return (
    <>
      {/* 中的按鈕: 加入收藏 */}
      <button type="button" className="btn btn-outline-primary btn-md">
        加入收藏
      </button>
    </>
  )
}
export default AddToFavoritesMd
