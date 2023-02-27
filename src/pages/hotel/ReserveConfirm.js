import React, { useState, useEffect } from 'react'
import { format } from 'date-fns'

function ReserveConfirm() {
  const [reserveConfirm, setReserveConfirm] = useState({
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

  useEffect(() => {
    setReserveConfirm(JSON.parse(sessionStorage.getItem('reserveData')))
  }, [])
  function formatDate(date) {
    return date ? format(date, 'yyyy/MM/dd') : ''
  }
  const img = require(`../../img/hotels/${
    reserveConfirm.selectPet === 'forest' ? 'cat-room1.png' : 'cat-room2.jpg'
  }`)
  return (
    <>
      <div className="rc-container rwd-container">
        <div className="rc-content-left rwd-col-12">
          <div className="rc-text-header">確認並付款</div>
          <div className="rc-title">付款方式</div>
          <form>
            <div className="mb-3">
              <select
                className="form-select mb-3"
                aria-label="Default select example"
              >
                <option selected>信用卡</option>
                <option value="1">現場付款</option>
              </select>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="卡號"
              />
            </div>
            <div className="d-flex">
              <div className="mb-3 col-6 pr-1">
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="到期日"
                />
              </div>
              <div className="mb-3 col-6 pl-1">
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="安全碼"
                />
              </div>
            </div>
            <div className="mb-3 ">
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                placeholder="備註..."
              ></textarea>
            </div>
            <hr />
            <div className="rc-title">聯絡資訊</div>
            <div className="mb-3 ">
              <input
                id="name"
                type="text"
                className="form-control"
                name="name"
                placeholder="姓名"
                required
              />
            </div>
            <div className="mb-3 ">
              <input
                id="email"
                type="email"
                className="form-control"
                name="email"
                placeholder="信箱"
                required
              />
            </div>
            <div className="mb-3 ">
              <input
                id="phone"
                type="tel"
                className="form-control"
                name="phone"
                placeholder="電話"
                required
              />
            </div>
          </form>
        </div>
        <div className="rc-content-right rwd-col-12">
          <div className="r-wrap">
            <div className="r-form">
              <div className="r-form-day">
                <div className="check-in">
                  <p>入住日期</p>
                  <p>{formatDate(new Date(reserveConfirm.startDate))}</p>
                </div>
                <div className="check-out">
                  <p>退房日期</p>
                  <p>{formatDate(new Date(reserveConfirm.endDate))}</p>
                </div>
              </div>
              <div className="r-form-adult">
                <p>房間數量</p>
                <div className="calculate-btn-box">
                  <span>{reserveConfirm.roomCount}</span>
                </div>
              </div>
              <div className="r-form-adult">
                <p>成人</p>
                <div className="calculate-btn-box">
                  <span>{reserveConfirm.adultCount}</span>
                </div>
              </div>
              <div className="r-form-child">
                <p>兒童</p>
                <div className="calculate-btn-box">
                  <span>{reserveConfirm.childCount}</span>
                </div>
              </div>
              <div className="r-form-pet">
                <p>寵物</p>
                <div className="calculate-btn-box">
                  <span>{reserveConfirm.petCount}</span>
                </div>
              </div>
              {reserveConfirm.selectPet ? (
                <>
                  <p>您選擇的寵物窩造型:</p>
                  <div className="choose-pet-section">
                    <img src={img} alt="" />
                  </div>
                </>
              ) : (
                ''
              )}
            </div>
            <div className="r-price">
              <div className="price-day">
                <p>
                  ${reserveConfirm.money} TWD *{reserveConfirm.differenceInDay}
                  晚
                </p>
                <p>${reserveConfirm.money} TWD </p>
              </div>
              <div className="room-count">
                <p>*{reserveConfirm.roomCount}間</p>
              </div>
              <hr />
              <div className="total-price">
                <p>總價</p>
                <p>${reserveConfirm.total} TWD</p>
              </div>
            </div>
            <div className="r-btn-box">
              <button
                type="button"
                className="btn btn-primary btn-lg min-width-auto ml-10px"
              >
                結帳
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ReserveConfirm
