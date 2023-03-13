import React from 'react'
import { useState, useEffect } from 'react'
import { EventRegistration } from '../../template'
import { Link, useParams } from 'react-router-dom'
import SignUp from '../../template/SignUp'
import Header from '../../layouts/header'
import HeaderSearch from '../../layouts/HeaderSearch'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'

import { Autoplay, Pagination, Navigation } from 'swiper'
function Activity() {
  const [activity, setActivity] = useState([])
  // const [ActivityPhoto, setActivityPhoto] = useState([])

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const res = await fetch(`http://localhost:3002/activity/api`, {
  //       method: 'GET',
  //     })
  //     const avtivity = await res.json()
  //     setActivity(activity)
  //   }
  //   fetchData()
  // }, [])
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
      <Header />
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
        {activity.map((photo, idx) => (
          <SwiperSlide key={idx}>
            <img
              src={`http://localhost:3002/uploads/${photo.activity_image}/`}
              alt=""
              className="swiper-img"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <HeaderSearch />
      search:
      <input type="search" />
      <div className="productContent col-12">
        {activity.map((el, idx) => {
          return (
            <div className="productCard col-4 m-auto" key={idx}>
              <p className="title">{el.activity_name}</p>
              <p className="description">
                活動日期 :
                {new Date(el.activity_datestart).toString('yyyy-MM-dd')}
              </p>
              <p className="title">
                截止日期 :{new Date(el.activity_dateend).toString('yyyy-MM-dd')}
              </p>
              <section className="buttons">
                <button className="button-collection">
                  <Link to={`/ActivitySignUp/${el.activity_id}`}>
                    <SignUp />
                  </Link>
                </button>
                <Link to={`/activitydetail/${el.activity_id}`}>
                  <EventRegistration />
                </Link>
              </section>
              <img
                src={`http://localhost:3002/uploads/${el.activity_image}/`}
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
