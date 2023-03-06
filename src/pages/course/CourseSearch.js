import { Link, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
function CourseSearch() {
  const [courseName, setCourseName] = useState('')
  const [courses, setCourses] = useState([])
  const { typeID } = useParams()

  const trainingCourses = () => {
    const data = courses.filter((item) => item.product_class === '寵物訓練')
    setCourses(data)
  }
  const interactiveCourses = () => {
    const data = courses.filter((item) => item.product_class === '寵物互動')
    setCourses(data)
  }
  const petKnowledges = () => {
    const data = courses.filter((item) => item.product_class === '寵物知識')
    setCourses(data)
  }
  const takeCarePets = () => {
    const data = courses.filter((item) => item.product_class === '寵物照顧')
    setCourses(data)
  }
  const findOneCourse = () => {
    if (courseName !== '') {
      const data = courses.filter((item) => item.product_name === courseName)
      setCourses(data)
    } else {
      return
    }
  }

  useEffect(() => {
    fetch(`http://localhost:3002/product/list-product/${typeID}`)
      .then((res) => res.json())
      .then((data) => setCourses(data))
      .catch((error) => console.log(error))
  }, [courseName])

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

          <button className="course-search-tag" onClick={trainingCourses}>
            寵物訓練
          </button>

          <button className="course-search-tag" onClick={interactiveCourses}>
            寵物互動
          </button>

          <button className="course-search-tag" onClick={petKnowledges}>
            寵物知識
          </button>

          <button className="course-search-tag" onClick={takeCarePets}>
            寵物照顧
          </button>
        </section>

        <section className="course-search-results">
          {courses.map((item, i) => {
            return (
              <div className="productCard" key={i}>
                <section className="text-part">
                  <h2 className="title">{item.product_name}</h2>
                  <span className="product-unit">{item.products_unit}</span>
                  <p className="description">{item.products_descripttion}</p>
                  <span className="price">$.{item.products_price}</span>
                </section>
                <section className="buttons">
                  <button className="button-collection">&#9825;</button>
                  <Link to={`/CourseDetail/${item.product_id}`}>
                    <button className="button-moreInfo">看更多</button>
                  </Link>
                </section>
                {/* 圖片動態引入 ，圖片須放在public資料夾*/}
                <img
                  src={`http://localhost:3002/uploads/${item.product_image}`}
                  alt=""
                />
                {/* <img src={photo} alt="" /> */}
              </div>
            )
          })}
        </section>
      </div>
    </>
  )
}

export default CourseSearch
