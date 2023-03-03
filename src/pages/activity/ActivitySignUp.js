import React from 'react'
import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

function CheckoutFlow() {
  const [tagCheck, setTagCheck] = useState('check')
  const handleChange = (event) => {
    if (!tagCheck) {
      setTagCheck('check')
    } else {
      setTagCheck('')
    }
  }
  const { activity_id } = useParams()
  const [activity, setActivity] = useState({})
  const [firstRender, setFirstRender] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        `http://localhost:3002/activity/activitydetail/${activity_id}`,
        {
          method: 'GET',
        }
      )
      const activities = await res.json()
      console.log(
        `http://localhost:3002/activity/activitydetail/${activity_id}`,
        activities
      )

      console.log(activities)

      setFirstRender(false)
      setActivity(activities)
    }
    fetchData()
  }, [activity_id])
  // console.log(activity)

  return (
    <>
      <aside className="order-step-guide">
        <div className="row">
          <div className="col">
            <div className="step1">1</div>
            <div className="steptext">填寫表單</div>
          </div>
          <div className="stepline"></div>
          <div className="col">
            <div className="step2">2</div>
            <div className="steptext">預約成功</div>
          </div>
        </div>
      </aside>
      <main className="checkoutFlow">
        <div className="tabs">
          <input
            type="radio"
            className="tabs__radio"
            name="tabs-example"
            id="tab1"
            onChange={handleChange}
            checked={tagCheck}
          />
          <label htmlFor="tab1" className="tabs__label">
            活動
          </label>
          <div className="tabs__content">
            <table>
              <thead>
                <tr>
                  <th>商品圖</th>
                  <th>名稱</th>
                  <th>活動日期</th>
                  <th>截止日期</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <img
                      src={`http://localhost:3002/uploads/${activity.activity_image}/`}
                      alt=""
                    />
                  </td>
                  <td>{activity.activity_name}</td>
                  <td>
                    {new Date(activity.activity_datestart).toString(
                      'yyyy-MM-dd'
                    )}
                  </td>
                  <td>
                    {new Date(activity.activity_dateend).toString('yyyy-MM-dd')}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="member-container">
          <section className="member-main">
            <h1>活動報名</h1>
            <h4>報名人資料</h4>
            <form
              className="member-form"
              // onSubmit={handleSubmit}
              // onInvalid={handelInvalid}
              // onChange={handleFormChange}
            >
              <label className="member-label">
                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="姓名"
                  // value={user.name}
                  // onChange={handleFieldChange}
                  required
                />
                <br />
                {/* <span className="error">{fieldErrors.name}</span> */}
              </label>

              <label className="member-label">
                <input
                  id="mobile"
                  type="tel"
                  name="mobile"
                  placeholder="電話"
                  required
                  // value={user.mobile}
                  // onChange={handleFieldChange}
                />
                <br />
                {/* <span className="error">{fieldErrors.mobile}</span> */}
              </label>

              <label className="member-label">
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="信箱"
                  required
                  // value={user.email}
                  // onChange={handleFieldChange}
                />
                <br />
                {/* <span className="error">{fieldErrors.email}</span> */}
              </label>
              <h4>毛寶貝資料</h4>
              <label className="member-label">
                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="寵物姓名"
                  // value={user.name}
                  // onChange={handleFieldChange}
                  required
                />
                <br />
                {/* <span className="error">{fieldErrors.name}</span> */}
              </label>
              <div>
                <p>毛孩種類</p>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio1"
                    value="option1"
                  />
                  <label className="form-check-label" htmlFor="inlineRadio1">
                    貓
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio2"
                    value="option2"
                  />
                  <label className="form-check-label" Html="inlineRadio2">
                    狗
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio2"
                    value="option2"
                  />
                  <label className="form-check-label" Html="inlineRadio2">
                    其他
                  </label>
                </div>
              </div>
              <div>
                <p>毛孩性別</p>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio1"
                    value="option1"
                  />
                  <label className="form-check-label" htmlFor="inlineRadio1">
                    小男生
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio2"
                    value="option2"
                  />
                  <label className="form-check-label" Html="inlineRadio2">
                    小女生
                  </label>
                </div>
              </div>
            </form>
          </section>
        </div>

        <div className="checkout-section">
          <div className="checkout-btn">
            <button className="next-step-btn">下一步</button>
          </div>
        </div>
      </main>
    </>
  )
}

export default CheckoutFlow
