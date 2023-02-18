import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretRight } from '@fortawesome/free-solid-svg-icons'
function MoreRound() {
  return (
    <>
      {/* 黃色小按鈕(方形): 看更多，已結束，立即訂房 */}
      <button
        type="button"
        className="btn btn-secondary btn-sm min-width-auto radius-5px"
      >
        看更多
      </button>
    </>
  )
}
export default MoreRound
