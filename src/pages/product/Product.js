import photo from '../../img/productDetails/cheese.jpg'
import { Card } from '../../template'
import Header from '../../layouts/header'
import HeaderSearch from '../../layouts/HeaderSearch'
import blackDog from '../../img/layout/ayla-verschueren-bpkBLrotO28-unsplash.jpg'
import brownDog from '../../img/layout/camylla-battani-JgdgKvYgiwI-unsplash.jpg'
import Slider from 'react-slick'
import '../../style/Product.scss'
import airpods from '../../img/productDetails/airpods.jpg'
import doll from '../../img/productDetails/doll.jpg'
const settings = {
  //   dots: true,
  infinite: true,
  slidesToShow: 1, // 一次顯示幾張
  slidesToScroll: 1, // 按下一頁的時候，要跑幾張
  autoplay: true,
  speed: 3000,
  autoplaySpeed: 5000,
  cssEase: 'linear',
  centerMode: true,
  //   context.lineWidth=width;
}

function Product() {
  return (
    <>
      <Header />
      <HeaderSearch />
      <Slider {...settings} className="slider-height">
        <img src={brownDog} alt="brownDog" />
        <img src={blackDog} alt="blackDog" />
        <img src={doll} alt="doll" />
        <img src={airpods} alt="doll" />
      </Slider>
      <div className="cardGroup">
        <Card className="card" />
        <Card className="card" />
        <Card className="card" />
        <Card className="card" />
      </div>
    </>
  )
}
export default Product
