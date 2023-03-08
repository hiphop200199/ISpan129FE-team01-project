import blackDog from '../img/layout/camylla-battani-JgdgKvYgiwI-unsplash.jpg'
import brownDog from '../img/layout/ayla-verschueren-bpkBLrotO28-unsplash.jpg'
import React, { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation, FreeMode, EffectFade } from 'swiper'
import { Link } from 'react-router-dom'

import 'swiper/css/effect-fade'
import 'swiper/css/navigation'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'
import 'swiper/swiper-bundle.css'
function HomePage() {
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
      >
        <SwiperSlide>
          <img src={blackDog} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={brownDog} alt="" />
        </SwiperSlide>
      </Swiper>

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> fe6f24c1c3fbbbed7e711aa2b10a1597ddf3b202
      <div className="about-container">
        <div className="about-row">
          <div className="col-mb-6 d-flex justify-content-center">
            <div className="card cb1 text-center">
              <div className="card-body">
                <span className="card-start fw-bold">關於毬</span>
                <p className="card-title mb-4 fw-bold">歡迎光臨~</p>
                <p className="card-text fw-bold">
                  我們是一間融合商城、餐點、課程及活動的複合式寵物友善渡假村，提供優良寵物商品及美味健康的餐點，我們也為毛孩們舉辦活動，希望飼主和寵物都能夠在毬度過美好的一天。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section>
        <div className="homehotel-moreroom">
          <Link to="/hotel/3">
            <div className="homehotel-word">查看更多房型</div>
          </Link>

        </div>
<<<<<<< HEAD
=======
      <section>
        <div className="homehotel-moreroom">
          <Link to="/hotel">查看更多房型</Link>
        </div>
>>>>>>> 2ac196aac3155a1a1fae81c9e51b77739a95fc09
=======
>>>>>>> fe6f24c1c3fbbbed7e711aa2b10a1597ddf3b202
        <div className="homehotel">
          <div className="homehotel-box">
            <div className="homehotel-zoomin">
              <img src={require('../img/hotels/hotel-single.jpg')} alt="" />
            </div>
          </div>
          <div className="homehotel-box">
            <div className="homehotel-zoomin">
              <img src={require('../img/hotels/quadruple room.jpg')} alt="" />
            </div>
            <div></div>
          </div>
          <div className="homehotel-box">
            <div className="homehotel-zoomin">
              <img
                src={require('../img/hotels/standard-double-room.jpg')}
                alt=""
              />
            </div>
          </div>
          <div className="homehotel-box">
            <div className="homehotel-zoomin">
              <img src={require('../img/hotels/tripple-room.jpg')} alt="" />
            </div>
          </div>
          <div className="homehotel-box">
            <div className="homehotel-zoomin">
              <img src={require('../img/hotels/twin-double-room.jpg')} alt="" />
            </div>
          </div>
        </div>
      </section>

      <div className="word">最新消息</div>
      <div className="new-container">
        <div className="new-box">
          <div className="new-slide-container">
            <div className="new-wrapper">
              <Swiper
                style={{
                  '--swiper-navigation-color': 'black',
                  '--swiper-navigation-size': '10px',
                }}
                slidesPerView={2}
                spaceBetween={30}
                // freeMode={true}
                navigation={true}
                // pagination={{
                //   clickable: true,
                // }}
                modules={[FreeMode, Navigation, Pagination]}
                className="new-slide-container"
              >
                <SwiperSlide className="new">
                  <div className="new">
                    <div className="new-image-box">
                      <img src={blackDog} alt="" />
                    </div>
                    <div className="new-detail">
                      <div className="newcard-title">毛手毛腳野餐盒DIY</div>
                      <div className="newcard-text">2022-01-14</div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="new">
                    <div className="new-image-box">
                      <img src={brownDog} alt="" />
                    </div>
                    <div className="new-detail">
                      <div className="newcard-title">毛手毛腳野餐盒DIY</div>
                      <div className="newcard-text">2022-01-14</div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="new">
                    <div className="new-image-box">
                      <img src={blackDog} alt="" />
                    </div>
                    <div className="new-detail">
                      <div className="newcard-title">毛手毛腳野餐盒DIY</div>
                      <div className="newcard-text">2022-01-14</div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="new">
                    <div className="new-image-box">
                      <img src={brownDog} alt="" />
                    </div>
                    <div className="new-detail">
                      <div className="newcard-title">毛手毛腳野餐盒DIY</div>
                      <div className="newcard-text">2022-01-14</div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="new">
                    <div className="new-image-box">
                      <img src={blackDog} alt="" />
                    </div>
                    <div className="new-detail">
                      <div className="newcard-title">毛手毛腳野餐盒DIY</div>
                      <div className="newcard-text">2022-01-14</div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="new">
                    <div className="new-image-box">
                      <img src={brownDog} alt="" />
                    </div>
                    <div className="new-detail">
                      <div className="newcard-title">毛手毛腳野餐盒DIY</div>
                      <div className="newcard-text">2022-01-14</div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
      {/* 
      <div className="new-container">
        <div className="new-box">
          <div className="slider-box">
            <section className="recommend">
              <div className="recommend-wrapper">
                <div className="recommend-card">
                  <div className="recommend-card-image">
                    <img src={blackDog} alt="" />
                  </div>
                  <div className="recommend-card-content">
                    <span className="recommend-card-title">
                      毛手毛腳野餐盒DIY
                    </span>
                    <span className="recommend-card_name">2022-01-14</span>
                    <p className="recommend-card_text">
                      為心愛的毛小孩親手捏製充滿愛與營養的飯糰，你一口、我一口。
                    </p>
                    <button className="recommend-card_btn">看更多</button>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div> */}
    </>
  )
}
export default HomePage
