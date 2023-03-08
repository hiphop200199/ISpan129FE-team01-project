import React from 'react'
import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faAnglesLeft } from '@fortawesome/free-solid-svg-icons'

function SignUpSheet() {
  const id = localStorage.getItem('id')
  const navigate = useNavigate()
  const [tagCheck, setTagCheck] = useState('tab1')
  const [formList, setFormList] = useState([])
  //   const [list, setList] = useState({})

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        `http://localhost:3002/activity/activitysignupform/${id}`,
        {
          method: 'GET',
        }
      )
      const formList = await res.json()

      setFormList(formList)
    }
    fetchData()
  }, [id])
  // console.log(activity)

  return (
    <>
      <div className="click">
        <FontAwesomeIcon icon={faAnglesLeft} onClick={() => navigate(-1)} />
      </div>
      <h1 className="orderTitle">查看活動報名紀錄</h1>
      <main className="checkoutFlow">
        <div className="tabs">
          <input
            type="radio"
            className="tabs__radio"
            name="tabs-example"
            id="tab1"
            // onChange={handleChange}
            checked={tagCheck === 'tab1'}
          />
          <label htmlFor="tab1" className="tabs__label">
            活動
          </label>
          <div className="tabs__content">
            <table>
              <thead>
                <tr>
                  <th>報名編號</th>
                  <th>報名日期</th>
                  <th>活動名稱</th>
                  <th>參加寵物</th>
                  <th>查看明細</th>
                </tr>
              </thead>
              <tbody>
                {formList.map((el, idx) => {
                  return (
                    <tr key={`${el.activityform_id}${idx}`}>
                      <td>{el.activityform_id}</td>
                      <td>
                        {new Date(el.activityform_time).toString('yyyy-MM-dd')}
                      </td>
                      <td>{el.activity_name}</td>
                      <td>{el.pet_name}</td>
                      <td>
                        <Link
                          to={`/SignUpSheetDetail/${el.activityform_id}`}
                          className="more-button"
                        >
                          <FontAwesomeIcon icon={faEye} />
                        </Link>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </>
  )
}

export default SignUpSheet
