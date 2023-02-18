import blackDog from '../img/layout/camylla-battani-JgdgKvYgiwI-unsplash.jpg'
import brownDog from '../img/layout/ayla-verschueren-bpkBLrotO28-unsplash.jpg'
import React, { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper'

import 'swiper/swiper-bundle.css'
function HomePage() {
  const progressCircle = useRef(null)
  const progressContent = useRef(null)
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress)
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`
  }
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={blackDog} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={brownDog} alt="" />
        </SwiperSlide>
      </Swiper>
      <div class="homehotel">
        <div class="homehotel-box">
          <div className="homehotel-zoomin">
            <img src={require('../img/hotels/hotel-single.jpg')} alt="" />
          </div>
        </div>
        <div class="homehotel-box">
          <div className="homehotel-zoomin">
            <img src={require('../img/hotels/quadruple room.jpg')} alt="" />
          </div>
          <div></div>
        </div>
        <div class="homehotel-box">
          <div className="homehotel-zoomin">
            <img
              src={require('../img/hotels/standard-double-room.jpg')}
              alt=""
            />
          </div>
        </div>
        <div class="homehotel-box">
          <div className="homehotel-zoomin">
            <img src={require('../img/hotels/tripple-room.jpg')} alt="" />
          </div>
        </div>
        <div class="homehotel-box">
          <div className="homehotel-zoomin">
            <img src={require('../img/hotels/twin-double-room.jpg')} alt="" />
          </div>
        </div>
      </div>
      <div class="homehotel-moreroom">
        <a href="/">查看更多房型</a>
      </div>
    </>
  )
}
export default HomePage
