import { Link } from 'react-router-dom'
import dog from '../../img/course/dog.jpg'
import { useState, useEffect } from 'react'
import axios from 'axios'
function CourseSearch() {
  const [courseName, setCourseName] = useState('')
  const [showCourses, setShowCourses] = useState([])
  const trainingCourses = () => {
    axios.get(`http://localhost:3002/courses/寵物訓練`).then((res) => {
      const courses = res.data
      setShowCourses({ courses })
    })
  }
  const interactiveCourses = () => {
    axios.get(`http://localhost:3002/courses/寵物互動`).then((res) => {
      const courses = res.data
      setShowCourses({ courses })
    })
  }
  const petKnowledges = () => {
    axios.get(`http://localhost:3002/courses/寵物知識`).then((res) => {
      const courses = res.data
      setShowCourses({ courses })
    })
  }
  const takeCarePets = () => {
    axios.get(`http://localhost:3002/courses/寵物照顧`).then((res) => {
      const courses = res.data
      setShowCourses({ courses })
    })
  }
  const findOneCourse = () => {
    const userInput = courseName
    axios.get(`http://localhost:3002/courses/${userInput}`).then((res) => {
      const courses = res.data
      setShowCourses({ courses })
    })
  }

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
            <button id="search-button" onClick={findOneCourse}>
              &#128269;
            </button>
          </section>

          <button className="tag" onClick={trainingCourses}>
            寵物訓練
          </button>

          <button className="tag" onClick={interactiveCourses}>
            寵物互動
          </button>

          <button className="tag" onClick={petKnowledges}>
            寵物知識
          </button>

          <button className="tag" onClick={takeCarePets}>
            寵物照顧
          </button>
        </section>

        <section className="course-search-results">
          {showCourses.map((item) => {
            return (
              <article className="course-cards">
                <div className="productCard">
                  <section className="text-part">
                    <h2 className="title">{item.name}</h2>
                    <span className="product-unit">{item.unit}</span>
                    <p className="description">{item.descripttion}</p>
                    <span className="price">{item.price}</span>
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
            )
          })}

          {/*<article className="course-cards">
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
              
            </div>
          </article>*/}
        </section>
      </div>
    </>
  )
}

export default CourseSearch
