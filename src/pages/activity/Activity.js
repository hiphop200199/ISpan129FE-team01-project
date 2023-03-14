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
      <div className="banner-swiper">
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
            <img src={cat} alt="banner-img" className="swiper-img" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={dog} alt="" className="swiper-img" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={twodog} alt="" className="swiper-img" />
          </SwiperSlide>
        </Swiper>

        <div className="activity-banner">
          <h1 className="activity-banner-word">館內活動</h1>
        </div>
      </div>

      <div className="activity-card-page">
        <div className="activity-cards">
          {activity.map((el, idx) => {
            const endDate = new Date(el.activity_dateend).getTime()
            const expired = endDate < now
            return (
              <Link to={`/activitydetail/${el.activity_id}`}>
                <div className="acard" key={idx}>
                  <img
                    src={`http://localhost:3002/uploads/${el.activity_img}`}
                    alt=""
                    className="activity-card-img"
                  />
                  <div className="activity-card-content">
                    <div className="activity-card-p">
                      {new Date(el.activity_datestart).toString('yyyy.MM.dd')}-
                      {new Date(el.activity_dateend).toString('yyyy.MM.dd')}
                    </div>
                    <div className="activity-card-title">
                      {el.activity_name}
                    </div>
                    <div className="d-flex justify-content-between">
                      <Link to={`/activitydetail/${el.activity_id}`}>
                        <EventRegistration />
                      </Link>
                      {!expired && (
                        <Link to={`/ActivitySignUp/${el.activity_id}`}>
                          <SignUp />
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Activity
