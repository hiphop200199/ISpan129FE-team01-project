import { useState } from 'react'

function Reserve() {
  const [petCount, setPetCount] = useState(0)
  const [childCount, setChildCount] = useState(0)
  const [adultCount, setAdultCount] = useState(0)
  return (
    <>
      <div className="r-container">
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
              <button
                className="dash r-btn"
                disabled={adultCount <= 0 ? true : false}
                onClick={() => {
                  if (adultCount > 0) {
                    setAdultCount(adultCount - 1)
                  }
                }}
              ></button>
              <span>{adultCount}</span>
              <button
                className="add r-btn"
                onClick={() => {
                  setAdultCount(adultCount + 1)
                }}
              ></button>
            </div>
            <div className="r-form-child">
              <p>兒童</p>
              <button
                className="dash r-btn"
                disabled={childCount <= 0 ? true : false}
                onClick={() => {
                  if (childCount > 0) {
                    setChildCount(childCount - 1)
                  }
                }}
              ></button>
              <span>{childCount}</span>
              <button
                className="add r-btn"
                onClick={() => {
                  setChildCount(childCount + 1)
                }}
              ></button>
            </div>
            <div className="r-form-pet">
              <p>寵物 (請點選寵物數量查看寵物窩)</p>
              <button
                className="dash r-btn"
                disabled={petCount <= 0 ? true : false}
                onClick={() => {
                  if (petCount > 0) {
                    setPetCount(petCount - 1)
                  }
                }}
              ></button>
              <span>{petCount}</span>
              <button
                className="add r-btn"
                onClick={() => {
                  setPetCount(petCount + 1)
                }}
              ></button>
            </div>
            {petCount > 0 ? (
              <div className="choose-pet-section">
                <img src={require('../../img/hotels/cat.png')} alt="" />
                <img
                  src={require('../../img/hotels/寵物床Amazon.com.jpg')}
                  alt=""
                />
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
    </>
  )
}

export default Reserve
