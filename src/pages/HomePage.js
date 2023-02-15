import blackDog from '../img/layout/camylla-battani-JgdgKvYgiwI-unsplash.jpg'
import brownDog from '../img/layout/ayla-verschueren-bpkBLrotO28-unsplash.jpg'
import Slider from 'react-slick'

const settings = {
  dots: true,
  infinite: true,
  slidesToShow: 1, // 一次顯示幾張
  slidesToScroll: 1, // 按下一頁的時候，要跑幾張
  autoplay: true,
  speed: 3000,
  autoplaySpeed: 5000,
  cssEase: 'linear',
}
function HomePage() {
  return (
    <>
      <Slider {...settings}>
        <img src={brownDog} alt="brownDog" />
        <img src={blackDog} alt="blackDog" />
      </Slider>
    </>
  )
}
export default HomePage
