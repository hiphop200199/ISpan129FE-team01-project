import photo from '../../img/productDetails/cheese.jpg'
import { AddToCartLg, AddToFavoritesLg } from '../../template'
import Header from '../../layouts/header'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

function ProductDetail() {
  const [product, setProduct] = useState({})
  // 取得qureyStying的值
  const { id } = useParams()
  // 取得DB的資料
  useEffect(() => {
    console.log('id from URL:', id)
    fetch(`/api/product/${id}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error('network res was not ok')
        }
        return res.json()
      })
      .then((product) => {
        if (product) {
          setProduct(product)
        } else {
          // 商品不存在，導向 404 頁面或顯示錯誤訊息
          throw new Error('Product not found')
        }
      })
      .catch((error) => console.error('Error fetching product data:', error))
  }, [id])
  //     .then((product) => setData(product))
  // }, [id])
  const {
    product_id: productId,
    product_name: name,
    type_id,
    product_class,
    product_price: price,
    product_description: description,
    product_unit: unit,
  } = product
  return (
    <>
      <Header />
      <div className="product-container">
        <section className="product-introduction">
          <div className="product-photo-wrapper">
            <img className="product-photo" src={photo} alt="product-photo" />
          </div>
          <div className="product-information">
            <h1 className="product-name">潔牙零食{name}</h1>
            <span className="product-unit">200g/包{unit}</span>
            <p className="product-article">
              想必大家都能了解潔牙零食的重要性。話雖如此，浦利尼斯二世在不經意間這樣說過，痛苦有個限度，恐懼則綿綿無際。這句話看似簡單，但其中的陰鬱不禁讓人深思。泰戈爾相信，完全理智的心，恰如一柄全是鋒刃的刀，會叫使用它的人手上流血。帶著這句話，我們還要更加慎重的審視這個問題。
            </p>
            <h2 className="product-price">NT.{price}</h2>
            <div className="product-button-wrapper">
              {/* <button className="product-add-collection">加入收藏</button>
              <button className="product-add-cart">加入購物車</button> */}
              <AddToFavoritesLg />
              <AddToCartLg />
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
