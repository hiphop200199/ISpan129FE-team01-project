import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
function MoreSquare(props) {
  const { product_id } = props
  return (
    <>
      {/* 黃色小按鈕(圓弧形): 看更多，已結束，立即訂房 */}
      <button
        type="button"
        className="btn btn-secondary btn-sm min-width-auto "
      >
        {/* <Link to={'/product/Detail/' + product_id}>看更多</Link> */}
        <Link to={`/product/Detail/${product_id}`}>看更多</Link>
      </button>
    </>
  )
}
export default MoreSquare
