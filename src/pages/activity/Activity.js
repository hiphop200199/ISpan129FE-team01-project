import React from 'react'
import { useState, useEffect } from 'react'
import { EventRegistration } from '../../template'
import { Link, useParams } from 'react-router-dom'
import SignUp from '../../template/SignUp'

import Activityphoto from '../../img/activityphoto.json'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'

import { Autoplay, Pagination, Navigation } from 'swiper'
function Activity() {
  const [activity, setActivity] = useState([])

  useEffect(() => {
    fetch(`http://localhost:3002/activity/api`)
      .then((response) => response.json())
      .then((data) => {
        console.log('data', data)
        setActivity(data.rows)
      })
      .catch((error) => console.error(error))
  }, [])
  return (
    <>
      {/* <Header />
      <HeaderSearch /> */}

      <Swiper
        style={{
          '--swiper-navigation-color': 'white',
          '--swiper-navigation-size': '20px',
        }}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        navigation={true}
        slidesPerView={1}
        modules={[Autoplay, Pagination, Navigation]}
        loop={true}
      >
        {Activityphoto.map((photo, idx) => (
          <SwiperSlide key={idx}>
            <img src={photo.url} alt="" width="100%" />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="card-wrap">
        {activity.map((el, idx) => {
          return (
            <div key={idx} className="h-card col-6">
              <div className="h-card-left col-6">
                <div className="h-card-header">
                  <span hidden>{el.activity_id}</span>
                  <p className="h-card-title">{el.activity_name}</p>
                  <p className="h-card-subtitle">
                    活動日期:
                    {new Date(el.activity_datestart).toString('yyyy-MM-dd')}
                  </p>
                  <p className="h-card-text">
                    截止日期:
                    {new Date(el.activity_dateend).toString('yyyy-MM-dd')}
                  </p>
                  <span hidden>{el.activity_pettype}</span>
                  <span hidden>{el.activity_location}</span>
                  <span hidden>{el.activity_decription}</span>
                  <span hidden>{el.activity_notice}</span>
                </div>
                <div className="row justify-content-around">
                  <div className="col-6">
                    <Link to={`/ActivitySignUp/${el.activity_id}`}>
                      <SignUp />
                    </Link>
                  </div>
                  <div className="col-6">
                    <Link to={`/activitydetail/${el.activity_id}`}>
                      <EventRegistration />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="h-card-right col-7">
                <img
                  src={`http://localhost:3002/uploads/${el.activity_image}/`}
                  alt=""
                />
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Activity
