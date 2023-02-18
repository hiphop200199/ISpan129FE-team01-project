import blackDog from '../../img/layout/camylla-battani-JgdgKvYgiwI-unsplash.jpg'
import brownDog from '../../img/layout/ayla-verschueren-bpkBLrotO28-unsplash.jpg'
import chris from '../../img/layout/activityred.jpg'
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";


import 'swiper/swiper-bundle.css'
function Activity() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
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
        <SwiperSlide>
          <img src={chris} alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  )
}
export default Activity
