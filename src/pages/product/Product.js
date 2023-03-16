import React from 'react'
import Header from '../../layouts/header'
import HeaderSearch from '../../layouts/HeaderSearch'
import { useState, useEffect } from 'react'
import { Card } from '../../template'
import { Link, useLocation, useParams } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import { Autoplay, Pagination } from 'swiper'
function Product() {
  const { typeID } = useParams()
  const [product, setProduct] = useState([])
  // 取得DB資料
  useEffect(() => {
    const fetchData = async () => {
      try {
        // console.log(typeID)
        const res = await fetch(
          `http://localhost:3002/product/list-product/${typeID}`
        )
        if (!res.ok) {
          throw new Error('Network res was not ok')
        }

        const data = await res.json()
        setProduct(data)
      } catch (err) {
        console.log(err)
      }
    }
    fetchData()
    // console.log(typeID)
  }, [typeID])
  return (
    <div className="productPage">
      <Header />
      <HeaderSearch />
      <div className='swiper-Content pt-3'>
        <Swiper
          className="swiper-width"
          style={{
            '--swiper-navigation-color': 'white',
            '--swiper-navigation-size': '20px',
          }}
          centeredSlides={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          slidesPerView={1}
          modules={[Autoplay, Pagination]}
          loop={true}
        >
          {product.map((product, idx) => (
            <SwiperSlide key={idx}>
              <Link to={`/product/Detail/${product.product_id}`}>
                <img
                  src={`http://localhost:3002/uploads/${product.product_image}/`}
                  alt=""
                  className="swiper-img"
                />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="productContent col-12">
        {product.map((product) => (
          <Card
            key={product.id}
            className="col-6"
            product={product}
            typeID={typeID}
          />
        ))}
      </div>
    </div >
  )
}

export default Product
