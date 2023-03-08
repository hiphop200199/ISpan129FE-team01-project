import React, { useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import 'datejs'

function SignUpSheetDetail() {
  const { activityform_id } = useParams()
  const [list, setList] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        `http://localhost:3002/activity/activitysignupformlist/${activityform_id}`,
        {
          method: 'GET',
        }
      )
      const list = await res.json()

      setList(list)
    }
    fetchData()
  }, [activityform_id])
  // console.log(activity)
  return (
    <>
      <section className="col-10 m-auto pt-3">
        <h4 className="border-bottom pb-2">活動報名資訊</h4>
        <div className="order d-flex flex-column border-bottom mb-3">
          <h5 className="mb-3 ">活動報名詳細資訊</h5>
          <p className="mb-3">報名編號：{list.activityform_id}</p>
          <p className="mb-3">
            報名日期:
            {new Date(list.activityform_time).toString('yyyy-MM-dd')}
          </p>
        </div>
        <div className="person d-flex flex-column border-bottom mb-3">
          <h5 className="mb-3">報名人資訊</h5>
          <p>姓名:{list.name}</p>
          <p>連絡電話:{list.mobile}</p>
          <p>信箱:{list.email}</p>
        </div>
        <div className="person d-flex flex-column border-bottom mb-3">
          <h5 className="mb-3">寵物資訊</h5>
          <p>姓名:{list.pet_name}</p>
          <p>寵物類型:{list.pet_type}</p>
          <p>性別:{list.pet_gender}</p>
        </div>

        <div className="test border-bottom mb-3">
          <table>
            <thead>
              <tr>
                <th>活動圖</th>
                <th>活動名稱</th>
                <th>時間</th>
                <th>活動日期</th>
                <th>結束日期</th>
                <th>適合寵物類型</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <img
                    src={`http://localhost:3002/uploads/${list.activity_image}`}
                    alt="activity_img"
                  />
                </td>
                <td>{list.activity_name}</td>
                <td>{list.activity_time}</td>
                <td>
                  {new Date(list.activity_datestart).toString('yyyy-MM-dd')}
                </td>
                <td>
                  {new Date(list.activity_dateend).toString('yyyy-MM-dd')}
                </td>
                {list.activity_pettype === 1 ? (
                  <td>所有</td>
                ) : list.activity_pettype === 2 ? (
                  <td>狗狗</td>
                ) : (
                  <td>貓貓</td>
                )}
                {/* <td>{list.activity_pettype}</td> */}
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      <div className="return d-flex justify-content-center">
        <button
          type="button"
          className="btn btn-primary btn-lg"
          onClick={() => navigate(-1)}
        >
          返回
        </button>
      </div>
    </>
  )
}
export default SignUpSheetDetail
