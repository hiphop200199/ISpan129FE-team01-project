import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Hotel() {
  const [room, setRoom] = useState([])
  // didMount
  useEffect(() => {
    setRoom([
      {
        title: '單人房',
        subtitle: '1200',
        text: '一小床(3.5呎*6.2呎)',
        img: 'hotel-single.jpg',
      },
      {
        title: '標準雙人房',
        subtitle: '1800',
        text: '一大床(5呎*6.6呎)',
        img: 'hotel-single.jpg',
      },
    ])
    console.log('room', room)
  }, [])

  return (
    <>
      {room.map((item, i) => {
        const img = require(`../../img/hotels/${item.img}`)
        return (
          <div className="h-card col-6" key={i}>
            <div className="h-card-left col-6">
              <div className="h-card-header">
                <h3 className="h-card-title">{item.title}</h3>
                <p className="h-card-subtitle">NT.{item.subtitle}</p>
                <p className="h-card-text">{item.text}</p>
              </div>
              <div className="h-card-footer">
                <Link to="/reserve">
                  <button type="button">立即訂房</button>
                </Link>
                {/* <a href="">
              <button type="button">立即訂房</button>
            </a> */}
              </div>
            </div>
            <div className="h-card-right col-7">
              <img src={img} alt="" />
              {/* <img src={require({item.img})} alt="" /> */}
            </div>
          </div>
        )
      })}
      {/* 死的 */}
      <div className="h-card col-6">
        <div className="h-card-left col-6">
          <div className="h-card-header">
            <h3 className="h-card-title">單人房</h3>
            <p className="h-card-subtitle">NT.1200</p>
            <p className="h-card-text">一小床(3.5呎*6.2呎)</p>
          </div>
          <div className="h-card-footer">
            <Link to="/">
              <button type="button">立即訂房</button>
            </Link>
            {/* <a href="">
              <button type="button">立即訂房</button>
            </a> */}
          </div>
        </div>
        <div className="h-card-right col-7">
          <img src={require('../../img/hotels/hotel-single.jpg')} alt="" />
        </div>
      </div>
    </>
  )
}
export default Hotel
