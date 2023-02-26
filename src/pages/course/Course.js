import dog from '../../img/course/dog.jpg'
import child from '../../img/course/child.jpg'
import corgi from '../../img/course/corgi.jpg'
import dogAndBoy from '../../img/course/dog-and-boy.jpg'
import { Link } from 'react-router-dom'
function Course() {
  return (
    <>
      <div className="course-container">
        <section className="upper-part">
          <section className="tags">
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
          <section className="search-bar">
            <input type="search" id="search" placeholder="搜尋" />
            <button id="search-button">&#128269;</button>
          </section>
        </section>
        <section className="photos">
          <div className="big-photo-one">
            <img src={dog} alt="dog" />
          </div>
          <div className="small-photo-one">
            <img src={dogAndBoy} alt="dogAndBoy" />
          </div>
          <div className="small-photo-two">
            <img src={child} alt="child" />
          </div>
          <div className="big-photo-two">
            <img src={corgi} alt="corgi" />
          </div>
        </section>
      </div>
    </>
  )
}
export default Course
