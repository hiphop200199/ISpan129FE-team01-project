import photo from '../../img/meals/food/food.jpg'
import { AddToCartLg, AddToFavoritesLg } from '../../template'
import Header from '../../layouts/header'
import HeaderSearch from '../../layouts/HeaderSearch'
import TagSwitchingExample from '../../template/tag';

function MealsDetail() {
  return (
    <>
      <Header />
      <div className="product-container">
        <section className="product-introduction">
          <div className="product-photo-wrapper">
            <img className="product-photo" src={photo} alt="product-photo" />
          </div>
          <div className="product-information">
            <h1 className="product-name">提拉米蘇米蘭</h1>
            <span className="product-unit">200g/包</span>
            <p className="product-article">
            蛋糕般柔軟可口的義大利皇家經典米蘭麵包，外層包裹著濃郁巧克力、咖啡香氣的提拉米蘇，入口更可同時吃到水滴巧克力帶來的絕佳口感，溫潤香甜氣息口口都唇齒留香令人難忘，今年聖誕節必須”被帶走”的幸福滋味。
            </p>
            <h2 className="product-price">NT.300</h2>
            <div className="product-button-wrapper">
              {/* <button className="product-add-collection">加入收藏</button>
              <button className="product-add-cart">加入購物車</button> */}
              <AddToFavoritesLg />
              <AddToCartLg />

              <AddToCartLg />
            </div>
          </div>
        </section>
        <section className="product-switcher">
          {/* <TagSwitchingExample/> */}
        
          <ul className="product-switches">
            <li className="product-switch">
              <a href="#" className="product-switch-link">
                餐點規格
              </a>
            </li>
            <li className="product-switch">
              <a href="#act2" className="product-switch-link">
                注意事項
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
              <p>分類:首頁&gt;餐點&gt;食物</p>
            </li>
            <li className="product-litem">
              <p className="product-brand">
                成分:<span className="meals-ingredients">義大利石磨麵粉、天然奶油、乾酪、咖啡醬、水滴巧克力、白巧克力、榛果黑可可咖啡豆粉、咖啡豆粉、鮮奶、義大利天然水式酵母、AA級優質蛋</span>
              </p>
            </li>
            <li className="product-litem">
              <p>餐點卡路里:300 cal</p>
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
export default MealsDetail
