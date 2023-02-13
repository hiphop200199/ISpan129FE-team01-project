import { useState } from 'react'

function Reserve() {
  const [petCount, setPetCount] = useState(0)
  const [childCount, setChildCount] = useState(0)
  const [adultCount, setAdultCount] = useState(0)
  return (
    <>
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
          <p>床型尺寸：一張標準雙人床 </p>
          <p>
            客房設施：空調, 地毯, 隔音, 清潔用品, 吊衣架, 淋浴, 吹風機,
            免費盥洗用品, 獨立洗手間及浴室, 書桌, 拖鞋, 衛生紙, 電話, 有線頻道,
            平面電視, 冰箱, 電熱水壺, 毛巾, 床單。
          </p>
          <p>
            所有客房以下服務免費提供：WiFi、晨間喚醒、夜間加枕/加被、備品補充。
          </p>
          <div className="notice">
            <p>注意事項</p>
          </div>
        </div>
        <div className="rd-content-right">
          <div className="r-wrap">
            <div className="r-form">
              <div className="r-form-day">
                <div className="chech-in">
                  <img
                    src={require('../../img/hotels/calendar-plus-regular.svg')}
                    alt=""
                  />
                  <p>入住日期</p>
                </div>
                <div className="check-out">
                  {/* <img src={require('../img/寵物床Amazon.com.jpg')} alt="" /> */}
                  <p>退房日期</p>
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
                  <img src={require('../../img/hotels/cat-room1.png')} alt="" />
                  <img src={require('../../img/hotels/cat-room2.jpg')} alt="" />
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
              <button class="r-btn r-btn-blue" type="button">
                預訂
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Reserve
