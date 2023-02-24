import photo from '../../img/course/dog-and-boy.jpg'
import { AddToCartLg, AddToFavoritesLg } from '../../template'
function CourseDetail() {
  return (
    <>
      <div className="course-detail-container">
        <div className="course-detail-photo-wrapper">
          <img src={photo} alt="product-photo" />
        </div>
        <div className="course-detail-information">
          <h1 className="product-name">寵物概論</h1>
          <span className="course-detail-teacher">講師:任升海</span>
          <span className="product-unit">時數:72hrs</span>
          <p className="product-article">
            您養過寵物嗎?這堂課教您養寵物前的基本認知、注意事項，減少不必要的煩惱!
          </p>
          <h2 className="product-price">NT.1280</h2>
          <div className="product-button-wrapper">
            {/* <button className="product-add-collection">加入收藏</button>
              <button className="product-add-cart">加入購物車</button> */}
            <AddToFavoritesLg />
            <AddToCartLg />
          </div>
        </div>
      </div>
    </>
  )
}

export default CourseDetail
