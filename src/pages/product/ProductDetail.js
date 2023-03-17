import photo from '../../img/productDetails/cheese.jpg'
import { AddToCartLg, AddToFavoritesLg, BackToPrevious } from '../../template'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnglesLeft } from '@fortawesome/free-solid-svg-icons'

import Header from '../../layouts/header'
import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

function ProductDetail() {
  const [product, setProduct] = useState({})

  const navigate = useNavigate()
  // 取得query string的值
  const { product_id } = useParams()
  async function fetchProductDetails() {
    try {
      const res = await fetch(
        `http://localhost:3002/product/list-detail/${product_id}`
      )
      if (!res.ok) {
        throw new Error('network res was not ok')
      }
      const product = await res.json()
      if (product) {
        setProduct(...product)
        // console.log(product)
      } else {
        // 商品不存在，導向 404 頁面或顯示錯誤訊息
        throw new Error('Product not found')
      }
    } catch (error) {
      console.error('Error fetching product data:', error)
    }
  }

  useEffect(() => {

    if (!product_id) return
    fetchProductDetails()
  }, [product_id])


  const {
    product_id: productID,
    product_type: typeID,
    product_name: name,
    product_class: productClass,
    product_descripttion: descripttion,
    product_price: price,
    product_unit: unit,
    product_image: imageUrl,
  } = product



  const id = localStorage.getItem('id')

  return (
    <>
      <BackToPrevious />
      <div className="product-container">
        <section className="product-introduction">
          <div className="product-photo-wrapper">
            <img
              className="product-photo"
              src={'http://localhost:3002/uploads/' + imageUrl}
              alt="product-photo"
            />
          </div>
          <div className="product-information">
            <h1 className="product-name">{name}</h1>
            <span className="product-unit">{unit}</span>
            <p className="product-article">
              {descripttion}
            </p>
            <h2 className="product-price">NT.{price}</h2>
            <div className="product-button-wrapper">
              {/* <button className="product-add-collection">加入收藏</button>
              <button className="product-add-cart">加入購物車</button> */}
              <AddToFavoritesLg product={product} id={id} typeID={typeID} />
              <AddToCartLg product={product} />
            </div>
          </div>
        </section>
        <section className="product-switcher">
          <ul className="product-switches">
            <li className="product-switch">
              <a href="#" className="product-switch-link">
                商品規格
              </a>
            </li>
            <li className="product-switch">
              <a href="#act2" className="product-switch-link">
                商品規格
              </a>
            </li>
            <li className="product-switch">
              <a href="#act3" className="product-switch-link">
                商品規格
              </a>
            </li>
          </ul>
        </section>
        <section className="product-spec">
          <ul className="product-list">
            <li className="product-litem">
              <p>分類:首頁&gt;商品&gt;精緻零食</p>
            </li>
            <li className="product-litem">
              <p className="product-brand">
                品牌:<span className="product-brand-name">Merrick</span>
              </p>
            </li>
            <li className="product-litem">
              <p>產地:美國</p>
            </li>
            <li className="product-litem">
              <p>【適用寵物種類】全犬種</p>
            </li>
            <li className="product-litem">
              <p>
                【注意事項】鑑賞期並非適用期,若您需退換貨商品,必須是全新完整包裝狀態.
              </p>
            </li>
          </ul>
        </section>
      </div>
    </>
  )
}
export default ProductDetail
