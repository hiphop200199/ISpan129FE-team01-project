import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Card from '../../template/Card'
import MoreSquare from '../../template/MoreSquare'

function Hotel() {
  const [room, setRoom] = useState([]) //房型資料
  // typeID 取 App.js檔案中 path="hotel/:typeID" (:typeID是定義Param)，而typeID如何取得?是由ex: http://localhost:3000/hotel/3 那他的參數值就是3。目前hotel/3寫死是從Menu.js來的
  const { typeID } = useParams()
  // didMount
  useEffect(() => {
    fetch(`http://localhost:3002/product/list-product/${typeID}`)
      .then((res) => res.json())
      .then((room) => {
        setRoom(room)
        getRoomImg(room)
      })
      .catch((err) => console.error(err))
  }, [typeID])
  // roomData:自己定義的名稱(目前是從list-product取來的房型資料)
  const getRoomImg = (roomData) => {
    // console.log('roomData', roomData)
    roomData.forEach((element) => {
      if (element.product_image) {
        fetch(`http://localhost:3002/uploads/${element.product_image}/`)
          .then((res) => {
            // console.log('res', res)
            element.product_image = res.url //改變原本房型圖片的值，element.product_image原本為'1c48b72f-c418-4a69-bb29-6d88170827f2.jpg'
            // console.log('element.product_image', element.product_image)
          })
          .catch((err) => console.error(err))
      } else {
        element.product_image = ''
      }
      // console.log(element, 'element')
    })
  }
  // setRoom([
  //   {
  //     title: '單人房',
  //     subtitle: '1200',
  //     text: '一小床(3.5呎*6.2呎)',
  //     img: 'hotel-single.jpg',
  //   },
  //   {
  //     title: '標準雙人房',
  //     subtitle: '1800',
  //     text: '一大床(5呎*6.6呎)',
  //     img: 'standard-double-room.jpg',
  //   },
  //   {
  //     title: '雙床雙人房',
  //     subtitle: '1800',
  //     text: '一大床(5呎*6.6呎)',
  //     img: 'twin-double-room.jpg',
  //   },
  //   {
  //     title: '三人房',
  //     subtitle: '2400',
  //     text: '一大床(5呎*6.6呎)',
  //     img: 'tripple-room.jpg',
  //   },
  //   {
  //     title: '四人房',
  //     subtitle: '3000',
  //     text: '一大床(5呎*6.6呎)',
  //     img: 'quadruple room.jpg',
  //   },
  // ])
  // console.log('room', room)
  // }, [])

  return (
    <>
      <img
        src={require('../../img/hotels/hotel.js-banner.jpg')}
        alt="girl&dog"
        height="600"
      />
      <div className="h-text-title">住宿房型</div>
      {/* photo */}
      {/* <Card photo={room[0] && room[0].img} /> */}
      {/* <Card photo={'hotel-single.jpg'} /> */}
      {/* <Card photo={'logo192.png'} /> */}

      <div className="card-wrap rwd-container">
        {room.map((item, i) => {
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
                  {/* <a href="">
              <button type="button">立即訂房</button>
            </a> */}
                </div>
              </div>
              <div className="h-card-right col-7">
                {/* {item.product_image} */}
                <img src={`${item.product_image}`} alt="" />
                {/* <img src={require({item.img})} alt="" /> */}
              </div>
            </div>
          )
        })}
        {/* 死的 */}
        {/* <div className="h-card col-6">
          <div className="h-card-left col-6">
            <div className="h-card-header">
              <h3 className="h-card-title">單人房</h3>
              <p className="h-card-subtitle">NT.1200</p>
              <p className="h-card-text">一小床(3.5呎*6.2呎)</p>
            </div>
            <div className="h-card-footer">
              <Link to="/">
                <MoreSquare />
              </Link>
            </div>
          </div>
          <div className="h-card-right col-7">
            <img src={require('../../img/hotels/hotel-single.jpg')} alt="" />
          </div>
        </div> */}
      </div>
    </>
  )
}
export default Hotel
