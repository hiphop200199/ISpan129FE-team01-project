import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
// import Card from '../../template/Card'
import MoreSquare from '../../template/MoreSquare'

function Food1() {
  const [food, setFood] = useState([]) //房型資料
  // typeID 取 App.js檔案中 path="hotel/:typeID" (:typeID是定義Param)，而typeID如何取得?是由ex: http://localhost:3000/hotel/3 那他的參數值就是3。目前hotel/3寫死是從Menu.js來的
  const { typeID } = useParams()
  // didMount
  useEffect(() => {
    fetch(`http://localhost:3002/product/list-product/${typeID}`)
      .then((res) => res.json())
      .then((food) => {
        setFood(food)
        // getRoomImg(room)
      })
      .catch((err) => console.error(err))
  }, [typeID])

  return (
    <>
      {/* <img
        src={require('../../img/hotels/hotel.js-banner.jpg')}
        alt="girl&dog"
        height="600"
      /> */}
      <div className="h-text-title">住宿房型</div>

      <div className="card-wrap rwd-container">
        {food.map((item, i) => {
          {
            /* const img = require(`../../img/meals/food/${item.img}`) */
          }
          return (
            <div className="h-card col-6 rwd-col-12" key={i}>
              <div className="h-card-left col-6">
                <div className="h-card-header">
                  <h3 className="h-card-title">{item.product_name}</h3>
                  <p className="h-card-subtitle">NT.{item.products_price}</p>
                  <p className="h-card-text">{item.products_descripttion}</p>
                </div>
                <div className="h-card-footer">
                  <span>&#9825;</span>
                  <Link to={`/reserve/${item.product_id}`}>
                    <MoreSquare />
                  </Link>
                </div>
              </div>
              <div className="h-card-right col-7">
                <img
                  src={`http://localhost:3002/uploads/${item.product_image}`}
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
export default Food1
