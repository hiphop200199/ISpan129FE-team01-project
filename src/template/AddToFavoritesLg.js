/* eslint-disable no-use-before-define */
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCaretRight,
  faHeart as faHeartRegular,
} from '@fortawesome/free-solid-svg-icons'
import { faHeart as faHeartOutline } from '@fortawesome/free-regular-svg-icons'

function AddToFavoritesLg() {
  const [isFavorite, setIsFavorite] = useState(false)
  const [product_id, setProduct_id] = useState('')

  useEffect(() => {
    setProduct_id()
  }, [])

  const toggleLike = async (product_id) => {
    // const product_id = product_id
    try {
      const response = await fetch(
        `http://localhost:3002/member/toggle-like/${product_id}`,
        { method: 'GET' }
      )
      const result = await response.json()

      if (result.success) {
        setIsFavorite(result.action === 'insert')
      } else {
        setIsFavorite(result.action === 'delete')
      }
    } catch (error) {
      console.error(error)
    }
  }
  function handleFavoriteClick() {
    setIsFavorite(!isFavorite)
    toggleLike(product_id)
  }

  return (
    <>
      {/* 大的按鈕: 加入收藏 */}
      <button
        type="button"
        className="btn btn-outline-primary btn-lg"
        onClick={handleFavoriteClick}
      >
        {isFavorite ? (
          <>
            <FontAwesomeIcon icon={faHeartRegular} /> 取消收藏
          </>
        ) : (
          <>
            <FontAwesomeIcon icon={faHeartOutline} /> 加入收藏
          </>
        )}
      </button>
    </>
  )
}
export default AddToFavoritesLg
