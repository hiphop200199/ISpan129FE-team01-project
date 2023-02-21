import React from 'react'

function ReserveConfirm() {
  return (
    <>
      <div className="rc-container">
        <div className="rc-content-left">
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
        <div className="rc-content-right">
          <div className="r-wrap">
            <div className="r-form">
              <div className="r-form-day">
                <div className="check-in">
                  <p>入住日期</p>
                </div>
                <div className="check-out">
                  <p>退房日期</p>
                </div>
              </div>
              <div className="r-form-adult">
                <p>成人</p>
                <div className="calculate-btn-box">
                  <span>1</span>
                </div>
              </div>
              <div className="r-form-child">
                <p>兒童</p>
                <div className="calculate-btn-box">
                  <span>1</span>
                </div>
              </div>
              <div className="r-form-pet">
                <p>寵物</p>
                <div className="calculate-btn-box">
                  <span>1</span>
                </div>
              </div>
              <p>您選擇的寵物窩造型:</p>
              <div className="choose-pet-section">
                <img src={require('../../img/hotels/cat-room1.png')} alt="" />
              </div>
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
