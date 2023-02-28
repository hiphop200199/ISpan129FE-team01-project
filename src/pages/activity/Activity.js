import React from 'react'
import { useState, useEffect } from 'react'
import EventRegistration from '../../template/EventRegistration'
import { Link } from 'react-router-dom'
function Activity() {
  const [activity, setActivity] = useState([])

  useEffect(() => {
    fetch(`http://localhost:3002/activity/api`, {})
      .then((response) => response.json())
      .then((data) => {
        console.log('data', data)
        setActivity(data.rows)
      })
      .catch((error) => console.error(error))
  }, [])
  return (
    <>
      {/* <Header />
      <HeaderSearch /> */}

      <div className="card-wrap">
        {activity.map((el) => {
          return (
            <div className="h-card col-6">
              <div className="h-card-left col-6">
                <div className="h-card-header">
                  <span hidden>{el.activity_id}</span>
                  <p className="h-card-title">{el.activity_name}</p>
                  <p className="h-card-subtitle">
                    活動日期:
                    {new Date(el.activity_datestart).toString('yyyy-MM-dd')}
                  </p>
                  <p className="h-card-text">
                    截止日期:
                    {new Date(el.activity_enddate).toString('yyyy-mm-dd')}
                  </p>
                  <span hidden>{el.activity_pettype}</span>
                  <span hidden>{el.activity_location}</span>
                  <span hidden>{el.activity_decription}</span>
                  <span hidden>{el.activity_notice}</span>
                </div>
                <div className="h-card-footer">
                  <Link to="/ActivityDetail">
                    <EventRegistration />
                  </Link>
                </div>
              </div>
              <div className="h-card-right col-7">
                <img
                  src={`http://localhost:3002/uploads/${el.activity_image}/`}
                  alt=""
                />
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Activity
