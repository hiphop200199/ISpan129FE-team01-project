import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import ReactDatePicker, { registerLocale } from 'react-datepicker'
import zhTW from 'date-fns/locale/zh-TW'
import 'react-datepicker/dist/react-datepicker.css'

registerLocale('zh-TW', zhTW)

function Reserve() {
  const navigate = useNavigate()
  const [roomDetail, setRoomDetail] = useState({}) //hotel.js的資料
  const [reserveData, setReserveData] = useState({
    roomCount: 1,
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
      .then((room) => {
        setRoomDetail(room[0])
        console.log('roomDetail', roomDetail)
        console.log('room', room)
        // const imageArray =  {room[0].product_image.split(',')}

        const changeReserveDataObj = {
          money: room[0].product_price,
          total:
            room[0].product_price *
            reserveData.differenceInDay *
            reserveData.roomCount,
        }
        setReserveData({
          ...reserveData,
          ...changeReserveDataObj,
        })
        // getRoomDetailImg(room[0])
      })

      .catch((err) => console.error(err))
  }, [product_id])
  console.log('roomDetail', roomDetail)

  // const getRoomDetailImg = (roomData) => {
  //   if (roomData.product_image) {
  //     fetch(`http://localhost:3002/uploads/${roomData.product_image}/`)
  //       .then((res) => {
  //         roomData.product_image = res.url
  //       })
  //       .catch((err) => console.error(err))
  //   } else {
  //     roomData.product_image = ''
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
      money: Number(roomDetail.product_price) * Number(differenceInDays),
      // dateKeyName 是指入住日 或 退房日的key name，所以是當選入住日時keyName為startDate；選退房日時keyName為endDate
      total:
        Number(roomDetail.product_price) *
        differenceInDays *
        reserveData.roomCount,
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
      <div className="rd-wrap">
        <div className="banner rwd-container">
          <div
            style={{
              backgroundImage: `url(http://localhost:3002/uploads/${roomDetail.product_image})`,
            }}
            className="rd-img-left rwd-col-12"
          ></div>
          <div className="rd-img-right rwd-col-12">
            <div className="img img1"></div>
            <div className="img img2"></div>

            <div className="img img3"></div>
            <div className="img img4"></div>
          </div>
        </div>
        <div className="rd-container rwd-container">
          <div className="rd-content-left rwd-col-12">
            <div className="title">
              <h1>{roomDetail.product_name}</h1>
              <h2>NT.{roomDetail.product_price}</h2>
            </div>
            <p>
              <span>床型尺寸：</span>
              {roomDetail.product_descripttion}
            </p>
            <p>
              <span>客房設施：</span>空調, 地毯, 隔音, 清潔用品, 吊衣架, 淋浴,
              吹風機, 免費盥洗用品, 獨立洗手間及浴室, 書桌, 拖鞋, 衛生紙, 電話,
              有線頻道, 平面電視, 冰箱, 電熱水壺, 毛巾, 床單。
            </p>
            <p>
              <span>所有客房以下服務免費提供：</span>
              WiFi、晨間喚醒、夜間加枕/加被、備品補充。
            </p>
            <div className="notice">
              <span>注意事項</span>
              <ul>
                <li>客人可以通過通知毬來取消住宿合同。</li>
                <li>
                  毬將於入住當日晚上10:00通知客人（若提前指定預計抵達時
                  間，時間為預定抵達時間後兩小時，至凌晨12:00）。客人未到達，住宿合同可視為客人已解除並處理。
                </li>
                <li>
                  客人可以在下午 3:00 至次日上午 10:00
                  期間使用毬的客房。但是，連續入住的話，除了到達日和離開日以外，全天都可以使用。
                </li>
              </ul>
            </div>
          </div>
          <div className="rd-content-right rwd-col-12">
            <div className="r-wrap">
              <div className="r-form">
                <div className="r-form-day">
                  <div className="check-in">
                    {/* <img src={Calendar} alt="Calendar" width={30} height={30} /> */}
                    <p>入住日期</p>
                    <ReactDatePicker
                      dateFormat="yyyy/MM/dd"
                      locale="zh-TW"
                      selected={reserveData.startDate}
                      onChange={(date) => {
                        // setReserveData({ ...reserveData, startDate: date })
                        calculateNumberOfNights(
                          date,
                          reserveData.endDate,
                          'startDate'
                        )
                      }}
                      minDate={new Date()}
                      startDate={reserveData.startDate}
                      endDate={reserveData.endDate}
                    />
                  </div>
                  <div className="check-out">
                    <p>退房日期</p>
                    <ReactDatePicker
                      className={
                        reserveData.differenceInDay <= 0 ? 'err-border' : ''
                      }
                      dateFormat="yyyy/MM/dd"
                      selected={reserveData.endDate}
                      locale="zh-TW"
                      onChange={(date) => {
                        // setReserveData({ ...reserveData, endDate: date })
                        calculateNumberOfNights(
                          reserveData.startDate,
                          date,
                          'endDate'
                        )
                      }}
                      minDate={reserveData.startDate}
                      startDate={reserveData.startDate}
                      endDate={reserveData.endDate}
                    />
                  </div>
                </div>
                {reserveData.differenceInDay <= 0 ? (
                  <small className="err-msg">
                    退房日期不得與入住日期相同，至少須住一晚
                  </small>
                ) : (
                  ''
                )}
                <div className="r-form-adult">
                  <p>房間數量</p>
                  <div className="calculate-btn-box">
                    <button
                      className="dash calculate-btn"
                      disabled={reserveData.roomCount <= 1 ? true : false}
                      onClick={() => {
                        if (reserveData.roomCount > 1) {
                          setReserveData({
                            ...reserveData,
                            ...{
                              roomCount: reserveData.roomCount - 1,
                              total:
                                roomDetail.product_price *
                                reserveData.differenceInDay *
                                (reserveData.roomCount - 1),
                            },
                          })
                        }
                      }}
                    ></button>
                    <span>{reserveData.roomCount}</span>
                    <button
                      className="add calculate-btn"
                      onClick={() => {
                        setReserveData({
                          ...reserveData,
                          ...{
                            roomCount: reserveData.roomCount + 1,
                            total:
                              roomDetail.product_price *
                              reserveData.differenceInDay *
                              (reserveData.roomCount + 1),
                          },
                        })
                      }}
                    ></button>
                  </div>
                </div>
                <div className="r-form-adult">
                  <p>成人</p>
                  <div className="calculate-btn-box">
                    <button
                      className="dash calculate-btn"
                      disabled={reserveData.adultCount <= 1 ? true : false}
                      onClick={() => {
                        if (reserveData.adultCount > 1) {
                          setReserveData({
                            ...reserveData,
                            adultCount: reserveData.adultCount - 1,
                          })
                        }
                      }}
                    ></button>
                    <span>{reserveData.adultCount}</span>
                    <button
                      className="add calculate-btn"
                      onClick={() => {
                        setReserveData({
                          ...reserveData,
                          adultCount: reserveData.adultCount + 1,
                        })
                      }}
                    ></button>
                  </div>
                </div>
                <div className="r-form-child">
                  <p>兒童</p>
                  <div className="calculate-btn-box">
                    <button
                      className="dash calculate-btn"
                      disabled={reserveData.childCount <= 0 ? true : false}
                      onClick={() => {
                        if (reserveData.childCount > 0) {
                          setReserveData({
                            ...reserveData,
                            childCount: reserveData.childCount - 1,
                          })
                        }
                      }}
                    ></button>
                    <span>{reserveData.childCount}</span>
                    <button
                      className="add calculate-btn"
                      onClick={() => {
                        setReserveData({
                          ...reserveData,
                          childCount: reserveData.childCount + 1,
                        })
                      }}
                    ></button>
                  </div>
                </div>
                <div className="r-form-pet">
                  <p>寵物 (請點選寵物數量查看寵物窩)</p>
                  <div className="calculate-btn-box">
                    <button
                      className="dash calculate-btn"
                      disabled={reserveData.petCount <= 0 ? true : false}
                      onClick={() => {
                        if (reserveData.petCount > 0) {
                          if (reserveData.petCount === 1) {
                            setReserveData({
                              ...reserveData,
                              ...{
                                petCount: reserveData.petCount - 1,
                                selectPet: '',
                              },
                            })
                          } else {
                            setReserveData({
                              ...reserveData,
                              petCount: reserveData.petCount - 1,
                            })
                          }
                        }
                      }}
                    ></button>
                    <span>{reserveData.petCount}</span>
                    <button
                      className="add calculate-btn"
                      onClick={() => {
                        setReserveData({
                          ...reserveData,
                          petCount: reserveData.petCount + 1,
                        })
                      }}
                    ></button>
                  </div>
                </div>
                {reserveData.petCount > 0 && reserveData.selectPet === '' ? (
                  <small className="err-msg">請選擇寵物窩!!</small>
                ) : (
                  ''
                )}
                {reserveData.petCount > 0 ? (
                  <div className="choose-pet-section">
                    <div className="form-check">
                      <label className="form-check-label" htmlFor="forest">
                        <img
                          src={require('../../img/hotels/cat-room1.png')}
                          alt=""
                        />
                      </label>
                      <input
                        className="form-check-input"
                        type="radio"
                        id="forest"
                        name="petBed"
                        value="forest"
                        onChange={petOptionChange}
                      />
                    </div>
                    <div className="form-check">
                      <label className="form-check-label" htmlFor="house">
                        <img
                          src={require('../../img/hotels/cat-room2.jpg')}
                          alt=""
                        />
                      </label>
                      <input
                        className="form-check-input"
                        type="radio"
                        id="house"
                        name="petBed"
                        value="house"
                        onChange={petOptionChange}
                      />
                    </div>
                  </div>
                ) : (
                  ''
                )}
              </div>
              <div className="r-price">
                <div className="price-day">
                  <p>
                    ${roomDetail.product_price} TWD *
                    {reserveData.differenceInDay}晚
                  </p>

                  <p>${reserveData.money} TWD </p>
                </div>
                <div className="room-count">
                  <p>*{reserveData.roomCount}間</p>
                </div>
                <hr />
                <div className="total-price">
                  <p>總價</p>
                  <p>${reserveData.total} TWD</p>
                </div>
              </div>
              <div className="r-btn-box">
                <button
                  type="button"
                  className="btn btn-outline-primary btn-lg min-width-auto mr-10px"
                >
                  加入收藏
                </button>
                {/* <Link to="/ReserveConfirm"> */}
                <button
                  onClick={() => {
                    console.log('reserveData-', reserveData)
                    navigate('/ReserveConfirm')
                    sessionStorage.setItem(
                      'reserveData',
                      JSON.stringify(reserveData)
                    )
                  }}
                  type="button"
                  className="btn btn-primary btn-lg min-width-auto ml-10px"
                  disabled={
                    reserveData.differenceInDay <= 0 ||
                    (reserveData.petCount > 0 && reserveData.selectPet === '')
                  } //如果退房日跟入住日同一天，預訂為disabled   或者  有點選寵物數量卻沒選擇寵物窩，預訂為disabled
                >
                  預訂
                </button>
                {/* </Link> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Reserve
