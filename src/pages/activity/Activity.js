import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import SignUp from '../../template/SignUp'
import { EventRegistration } from '../../template'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation, FreeMode, EffectFade } from 'swiper'
import cat from '../../img/activity/activityhome1.png'
import dog from '../../img/activity/activityhome2.png'
import twodog from '../../img/activity/activityhome3.png'

function Activity() {
  const [activity, setActivity] = useState([])

  useEffect(() => {
    fetch(`http://localhost:3002/activity/activity-list/api`, {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((activity) => {
        console.log(typeof activity)

        const activities = [...activity]
        activities.forEach((el) => {
          console.log(el)
          const activities = [...activity]
          const img = el.activity_image.split(',')
          const bigImage = img[0]
          el.activity_img = bigImage
          console.log('activities', activities)
        })

        // Sort activities by date
        activities.sort((a, b) => {
          const aDate = new Date(a.activity_dateend).getTime()
          const bDate = new Date(b.activity_dateend).getTime()
          return bDate - aDate
        })

        setActivity(activities)
      })
      .catch((error) => console.error(error))
  }, [])

  const now = new Date().getTime()

  return (
    <>
      <Swiper
        style={{
          '--swiper-navigation-color': 'white',
          '--swiper-navigation-size': '30px',
        }}
        centeredSlides={true}
        effect={'fade'}
        speed={2000}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        slidesPerView={1}
        modules={[EffectFade, Autoplay, Pagination]}
        loop={true}
        className="activity-home-swiper"
      >
        <SwiperSlide>
          <img src={cat} alt="" className="swiper-img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={dog} alt="" className="swiper-img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={twodog} alt="" className="swiper-img" />
        </SwiperSlide>
      </Swiper>
      {/* <div>
        search: <input type="search" />
      </div> */}
      <div className="productContent col-12">
        {activity.map((el, idx) => {
          const endDate = new Date(el.activity_dateend).getTime()
          const expired = endDate < now
          return (
            <div className="productCard col-4 m-auto" key={idx}>
              <h5 className="title">{el.activity_name}</h5>
              <p className="description">
                活動日期 :
                {new Date(el.activity_datestart).toString('yyyy-MM-dd')}
              </p>
              <p className="title">
                截止日期:{new Date(el.activity_dateend).toString('yyyy-MM-dd')}
              </p>
              <section className="buttons">
                {!expired && (
                  <button className="button-collection">
                    <Link to={`/ActivitySignUp/${el.activity_id}`}>
                      <SignUp />
                    </Link>
                  </button>
                )}
                <Link to={`/activitydetail/${el.activity_id}`}>
                  <EventRegistration />
                </Link>
              </section>
              <img
                src={`http://localhost:3002/uploads/${el.activity_img}`}
                alt=""
              />
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Activity
