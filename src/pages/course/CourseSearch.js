import { Link } from 'react-router-dom'
import dog from '../../img/course/dog.jpg'
import child from '../../img/course/child.jpg'
import corgi from '../../img/course/corgi.jpg'
import dogAndBoy from '../../img/course/dog-and-boy.jpg'
import { useState } from 'react'
function CourseSearch() {
  const [courseName, setCourseName] = useState('')
  const [showCourses, setShowCourses] = useState([])
  return (
    <>
      <div className="course-container">
        <section className="tags">
          <section className="search-bar">
            <input
              type="search"
              id="search"
              onChange={(e) => {
                setCourseName(e.target.value)
              }}
              placeholder="搜尋"
            />
            <button id="search-button">&#128269;</button>
          </section>
          <Link to="/courseSearch">
            <button className="tag">寵物訓練</button>
          </Link>
          <Link to="/courseSearch">
            <button className="tag">寵物互動</button>
          </Link>
          <Link to="/courseSearch">
            <button className="tag">寵物知識</button>
          </Link>
          <Link to="/courseSearch">
            <button className="tag">寵物照顧</button>
          </Link>
        </section>

        <section className="course-search-results">
          <article className="course-cards">
            <div className="productCard">
              <section className="text-part">
                <h2 className="title">寵物概論</h2>
                <span className="product-unit">72hrs</span>
                <p className="description">
                  您養過寵物嗎?這堂課教您養寵物前的基本認知、注意事項，減少不必要的煩惱!
                </p>
                <span className="price">NT. 1280</span>
              </section>
              <section className="buttons">
                <button className="button-collection">&#9825;</button>
                <Link to="/courseDetail">
                  <button className="button-moreInfo">看更多</button>
                </Link>
              </section>
              {/* 圖片動態引入 ，圖片須放在public資料夾*/}
              <img src={dog} alt="" />
              {/* <img src={photo} alt="" /> */}
            </div>
          </article>
          <article className="course-cards">
            <div className="productCard">
              <section className="text-part">
                <h2 className="title">寵物清潔</h2>
                <span className="product-unit">32hrs</span>
                <p className="description">
                  讓專業獸醫師教您如何清潔寵物的口腔、毛髮等等。
                </p>
                <span className="price">NT. 600</span>
              </section>
              <section className="buttons">
                <button className="button-collection">&#9825;</button>
                <Link to="/courseDetail">
                  <button className="button-moreInfo">看更多</button>
                </Link>
              </section>
              {/* 圖片動態引入 ，圖片須放在public資料夾*/}
              <img src={child} alt="" />
              {/* <img src={photo} alt="" /> */}
            </div>
          </article>
          <article className="course-cards">
            <div className="productCard">
              <section className="text-part">
                <h2 className="title">寵物進階</h2>
                <span className="product-unit">52hrs</span>
                <p className="description">
                  指導寵物的進階概念，對寵物有更深的認識。
                </p>
                <span className="price">NT. 700</span>
              </section>
              <section className="buttons">
                <button className="button-collection">&#9825;</button>
                <Link to="/courseDetail">
                  <button className="button-moreInfo">看更多</button>
                </Link>
              </section>
              {/* 圖片動態引入 ，圖片須放在public資料夾*/}
              <img src={corgi} alt="" />
              {/* <img src={photo} alt="" /> */}
            </div>
          </article>
          <article className="course-cards">
            <div className="productCard">
              <section className="text-part">
                <h2 className="title">人寵互動</h2>
                <span className="product-unit">62hrs</span>
                <p className="description">
                  您了解您的寵物嗎?這堂課告訴您與寵物互動最重要的認知，減少不必要的煩惱!
                </p>
                <span className="price">NT. 900</span>
              </section>
              <section className="buttons">
                <button className="button-collection">&#9825;</button>
                <Link to="/courseDetail">
                  <button className="button-moreInfo">看更多</button>
                </Link>
              </section>
              {/* 圖片動態引入 ，圖片須放在public資料夾*/}
              <img src={dogAndBoy} alt="" />
              {/* <img src={photo} alt="" /> */}
            </div>
          </article>
        </section>
      </div>
    </>
  )
}

export default CourseSearch
