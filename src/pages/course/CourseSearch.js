import { Link, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
function CourseSearch() {
  const [courseName, setCourseName] = useState('')
  const [courses, setCourses] = useState([])
  const { typeID } = useParams()

  useEffect(() => {
    fetch(`http://localhost:3002/product/list-product/${typeID}`)
      .then((res) => res.json())
      .then((data) => setCourses(data))
      .catch((error) => console.log(error))
  }, [courseName, typeID])

  const trainingCourses = () => {
    fetch(`http://localhost:3002/product/list-product/${typeID}`)
      .then((res) => res.json())
      .then((data) => {
        setCourses(data)
        const train = data.filter((item) => item.product_class === '寵物訓練')
        setCourses(train)
      })
      .catch((error) => console.log(error))
  }
  const interactiveCourses = () => {
    fetch(`http://localhost:3002/product/list-product/${typeID}`)
      .then((res) => res.json())
      .then((data) => {
        setCourses(data)
        const interact = data.filter(
          (item) => item.product_class === '寵物互動'
        )
        setCourses(interact)
      })
      .catch((error) => console.log(error))
  }
  const petKnowledges = () => {
    fetch(`http://localhost:3002/product/list-product/${typeID}`)
      .then((res) => res.json())
      .then((data) => {
        setCourses(data)
        const knowledge = data.filter(
          (item) => item.product_class === '寵物知識'
        )
        setCourses(knowledge)
      })
      .catch((error) => console.log(error))
  }
  const takeCarePets = () => {
    fetch(`http://localhost:3002/product/list-product/${typeID}`)
      .then((res) => res.json())
      .then((data) => {
        setCourses(data)
        const care = data.filter((item) => item.product_class === '寵物照顧')
        setCourses(care)
      })
      .catch((error) => console.log(error))
  }
  const findOneCourse = () => {
    if (courseName !== '') {
      const data = courses.filter((item) => item.product_name === courseName)
      setCourses(data)
    } else {
      return
    }
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
                  <span className="product-unit">{item.product_unit}</span>
                  <p className="description">{item.product_descripttion}</p>
                  <span className="price">$.{item.product_price}</span>
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
