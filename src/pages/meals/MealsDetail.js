import photo from '../../img/meals/food/food.jpg'
import { AddToCartLg, AddToFavoritesLg } from '../../template'
import Header from '../../layouts/header'
import HeaderSearch from '../../layouts/HeaderSearch'
import TagSwitchingExample from '../../template/tag'
import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
function MealsDetail() {
  const navigate = useNavigate()
  const [mealsDetail, setmealsDetail] = useState({})
  const [reserveData, setReserveData] = useState({
    mealsCount: 1,
    petCount: 0,
    childCount: 0,
    adultCount: 1,
    selectPet: '',
    startDate: new Date(),
    endDate: new Date().setDate(new Date().getDate() + 1),
    differenceInDay: 1,
    money: 0,
    total: 0,
  })
  const { product_id } = useParams()

  useEffect(() => {
    fetch(`http://localhost:3002/product/list-detail/${product_id}`)
      .then((res) => res.json())
      .then((meals) => {
        setmealsDetail(meals[0])
        const changeReserveDataObj = {
          money: meals[0].products_price,
          total:
            meals[0].products_price *
            reserveData.differenceInDay *
            reserveData.mealsCount,
        }
        setReserveData({
          ...reserveData,
          ...changeReserveDataObj,
        })
        // getmealsDetailImg(meals[0])
      })
      .catch((err) => console.error(err))
  }, [product_id])

  // const getmealsDetailImg = (mealsData) => {
  //   if (mealsData.product_image) {
  //     fetch(`http://localhost:3002/uploads/${mealsData.product_image}/`)
  //       .then((res) => {
  //         mealsData.product_image = res.url
  //       })
  //       .catch((err) => console.error(err))
  //   } else {
  //     mealsData.product_image = ''
  //   }
  // }

  //
  function calculateNumberOfNights(checkinDate, checkoutDate, keyName) {
    const oneDay = 24 * 60 * 60 * 1000 // 一天的毫秒數
    const checkinTime = new Date(checkinDate).getTime() // 入住日期的時間戳
    const checkoutTime = new Date(checkoutDate).getTime() // 退房日期的時間戳
    const differenceInTime = checkoutTime - checkinTime // 入住日到退房日的時間差，單位為毫秒
    const differenceInDays = Math.round(differenceInTime / oneDay) // 入住日到退房日的天數
    const changeObj = {
      differenceInDay: differenceInDays,
      [keyName]: keyName === 'startDate' ? checkinDate : checkoutDate,
      money: Number(mealsDetail.products_price) * Number(differenceInDays),
      // dateKeyName 是指入住日 或 退房日的key name，所以是當選入住日時keyName為startDate；選退房日時keyName為endDate
      total:
        Number(mealsDetail.products_price) *
        differenceInDays *
        reserveData.mealsCount,
    }
    setReserveData({
      ...reserveData,
      ...changeObj,
    })
  }

  function petOptionChange(event) {
    console.log('event-', event)
    console.log('event.target.value-', event.target.value)
    setReserveData({
      ...reserveData,
      selectPet: event.target.value,
    })
  }

  return (
    <>
      <Header />
      <div className="product-container">
        <section className="product-introduction">
          <div className="product-photo-wrapper">
            <img className="product-photo" src={photo} alt="product-photo" />
          </div>
          <div className="product-information">
            <h1>{mealsDetail.product_name}</h1>
            <span className="product-unit">200g/包</span>
            <p className="product-article">
              蛋糕般柔軟可口的義大利皇家經典米蘭麵包，外層包裹著濃郁巧克力、咖啡香氣的提拉米蘇，入口更可同時吃到水滴巧克力帶來的絕佳口感，溫潤香甜氣息口口都唇齒留香令人難忘，今年聖誕節必須”被帶走”的幸福滋味。
            </p>
            <h2>NT.{mealsDetail.products_price}</h2>
            <div className="product-button-wrapper">
              {/* <button className="product-add-collection">加入收藏</button>
              <button className="product-add-cart">加入購物車</button> */}
              <AddToFavoritesLg />
              <AddToCartLg />

              <AddToCartLg />
            </div>
          </div>
        </section>
        <section className="product-switcher">
          {/* <TagSwitchingExample/> */}

          <ul className="product-switches">
            <li className="product-switch">
              <a href="#" className="product-switch-link">
                餐點規格
              </a>
            </li>
            <li className="product-switch">
              <a href="#act2" className="product-switch-link">
                注意事項
              </a>
            </li>
            <li className="product-switch">
              <a href="#act3" className="product-switch-link">
                商品規格
              </a>
            </li>
          </ul>
        </section>
        <section className="product-spec">
          <ul className="product-list">
            <li className="product-litem">
              <p>分類:首頁&gt;餐點&gt;食物</p>
            </li>
            <li className="product-litem">
              <p className="product-brand">
                成分:
                <span className="meals-ingredients">
                  義大利石磨麵粉、天然奶油、乾酪、咖啡醬、水滴巧克力、白巧克力、榛果黑可可咖啡豆粉、咖啡豆粉、鮮奶、義大利天然水式酵母、AA級優質蛋
                </span>
              </p>
            </li>
            <li className="product-litem">
              <p>餐點卡路里:300 cal</p>
            </li>
            <li className="product-litem">
              <p>【適用寵物種類】全犬種</p>
            </li>
            <li className="product-litem">
              <p>
                【注意事項】鑑賞期並非適用期,若您需退換貨商品,必須是全新完整包裝狀態.
              </p>
            </li>
          </ul>
        </section>
      </div>
    </>
  )
}
export default MealsDetail
