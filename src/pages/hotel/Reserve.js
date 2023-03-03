import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Calendar from '../../img/hotels/calendar-plus-regular.svg'
import ReactDatePicker, { registerLocale } from 'react-datepicker'
import zhTW from 'date-fns/locale/zh-TW'
import 'react-datepicker/dist/react-datepicker.css'

registerLocale('zh-TW', zhTW)

function Reserve() {
  const [petCount, setPetCount] = useState(0)
  const [childCount, setChildCount] = useState(0)
  const [adultCount, setAdultCount] = useState(0)
  const navigate = useNavigate()
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())

  return (
    <>
      <div className="rd-wrap">
        <div className="banner">
          <div className="rd-img-left"></div>
          <div className="rd-img-right">
            <div className="img img1"></div>
            <div className="img img2"></div>

            <div className="img img3"></div>
            <div className="img img4"></div>
          </div>
        </div>
        <div className="rd-container">
          <div className="rd-content-left">
            <div className="title">
              <h1>標準雙人房</h1>
              <h2>1800</h2>
            </div>
            <p>
              <span>床型尺寸：</span>一張標準雙人床
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
          <div className="rd-content-right">
            <div className="r-wrap">
              <div className="r-form">
                <div className="r-form-day">
                  <div className="check-in">
                    {/* <img src={Calendar} alt="Calendar" width={30} height={30} /> */}
                    <p>入住日期</p>
                    <ReactDatePicker
                      locale="zh-TW"
                      selected={startDate}
                      onChange={(date) => setStartDate(date)}
                    />
                  </div>
                  <div className="check-out">
                    {/* <img src={Calendar} alt="Calendar" width={30} height={30} /> */}
                    <p>退房日期</p>
                    <ReactDatePicker
                      selected={endDate}
                      locale="zh-TW"
                      onChange={(date) => setEndDate(date)}
                    />
                  </div>
                </div>
                <div className="r-form-adult">
                  <p>成人</p>
                  <div className="calculate-btn-box">
                    <button
                      className="dash calculate-btn"
                      disabled={adultCount <= 0 ? true : false}
                      onClick={() => {
                        if (adultCount > 0) {
                          setAdultCount(adultCount - 1)
                        }
                      }}
                    ></button>
                    <span>{adultCount}</span>
                    <button
                      className="add calculate-btn"
                      onClick={() => {
                        setAdultCount(adultCount + 1)
                      }}
                    ></button>
                  </div>
                </div>
                <div className="r-form-child">
                  <p>兒童</p>
                  <div className="calculate-btn-box">
                    <button
                      className="dash calculate-btn"
                      disabled={childCount <= 0 ? true : false}
                      onClick={() => {
                        if (childCount > 0) {
                          setChildCount(childCount - 1)
                        }
                      }}
                    ></button>
                    <span>{childCount}</span>
                    <button
                      className="add calculate-btn"
                      onClick={() => {
                        setChildCount(childCount + 1)
                      }}
                    ></button>
                  </div>
                </div>
                <div className="r-form-pet">
                  <p>寵物 (請點選寵物數量查看寵物窩)</p>
                  <div className="calculate-btn-box">
                    <button
                      className="dash calculate-btn"
                      disabled={petCount <= 0 ? true : false}
                      onClick={() => {
                        if (petCount > 0) {
                          setPetCount(petCount - 1)
                        }
                      }}
                    ></button>
                    <span>{petCount}</span>
                    <button
                      className="add calculate-btn"
                      onClick={() => {
                        setPetCount(petCount + 1)
                      }}
                    ></button>
                  </div>
                </div>
                {petCount > 0 ? (
                  <div className="choose-pet-section">
                    <div className="form-check">
                      <label className="form-check-label" for="catBed">
                        <img
                          src={require('../../img/hotels/cat-room1.png')}
                          alt=""
                        />
                      </label>
                      <input
                        className="form-check-input"
                        type={'radio'}
                        id="catBed"
                        name="petBed"
                      />
                    </div>
                    <div className="form-check">
                      <label className="form-check-label" for="dogBed">
                        <img
                          src={require('../../img/hotels/cat-room2.jpg')}
                          alt=""
                        />
                      </label>
                      <input
                        className="form-check-input"
                        type={'radio'}
                        id="dogBed"
                        name="petBed"
                      />
                    </div>
                  </div>
                ) : (
                  ''
                )}
              </div>
              <div className="r-price">
                <div className="price-day">
                  <p>$1800 TWD *1晚</p>
                  <p>$1800 TWD </p>
                </div>

                <hr />
                <div className="total-price">
                  <p>總價</p>
                  <p>$2300 TWD</p>
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
                  onClick={() => navigate('/ReserveConfirm')}
                  type="button"
                  className="btn btn-primary btn-lg min-width-auto ml-10px"
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
