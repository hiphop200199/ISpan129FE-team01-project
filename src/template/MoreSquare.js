import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
function MoreSquare({ product_id, type_id }) {
  // const [id, setID] = useState('')
  // type_id !== 1
  //   ? `/product/Detail/${product_id}`
  //   : `/hotel/Detail/${product_id}`
  // console.log(type_id)
  const [URL, setURL] = useState('')
  // 利用type_id辨識共用元件應該導向哪個網址
  useEffect(() => {
    switch (type_id) {
      case 1:
        setURL(`/product/Detail/${product_id}`)
        break
      case 2:
        setURL(`/course/${product_id}`)
        break
      case 3:
        setURL(`/hotel/Detail/${product_id}`)
        break
      case 4:
        setURL(`/meals/${product_id}`)
        break
      default:
        setURL(`/product/Detail/${product_id}`)
    }
  }, [product_id, type_id])
  // console.log(product_id)
  return (
    <>
      {/* 黃色小按鈕(圓弧形): 看更多，已結束，立即訂房 */}
      <button
        type="button"
        className="btn btn-secondary btn-sm min-width-auto "
        // onClick={setID}
      >
        {/* <Link to={'/product/Detail/' + product_id}>看更多</Link> */}
        <Link to={URL}>看更多</Link>
      </button>
    </>
  )
}
export default MoreSquare
