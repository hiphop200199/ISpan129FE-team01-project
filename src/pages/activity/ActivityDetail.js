import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import DetailSignUp from '../../template/DetailSignUp'
import Header from '../../layouts/header'

function ActivityDetail() {
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

      // console.log(activities)

      setFirstRender(false)
      setActivity(activities)
    }
    fetchData()
  }, [activity_id])
  // console.log(activity)

  return (
    <>
      <Header />
      {firstRender ? (
        false
      ) : (
        <div className="activity-container">
          <div className="first-session">
            <div className="activity-photo-wrapper">
              <img
                className="activity-photo"
                src={`http://localhost:3002/uploads/${activity.activity_image}/`}
                alt=""
              />
            </div>
            <div className="activity-content">
              <h5>活動說明</h5>

              <p>{activity.activity_decription}</p>
              <h5>注意事項</h5>
              <p>{activity.activity_notice}</p>
              <p>{activity.activity_notice2}</p>
            </div>
            <div className="activity-text">
              <h4 className="activity-name">{activity.activity_name}</h4>
              <p className="activity-datestart">
                活動日期 :
                {new Date(activity.activity_datestart).toString('yyyy-MM-dd')}
              </p>
              <p className="activity-dateend">
                截止日期 :
                {new Date(activity.activity_dateend).toString('yyyy-MM-dd')}
              </p>
              <p>{activity.activity_time}</p>
              {activity.activity_pettype === 1 ? (
                <p className="activity-pettype">適合寵物類型 : 所有</p>
              ) : activity.activity_pettype === 2 ? (
                <p className="activity-pettype">適合寵物類型 : 狗狗</p>
              ) : (
                <p className="activity-pettype">適合寵物類型 : 貓貓</p>
              )}
              <p className="activity-dateend">
                地址 : {activity.activity_location}
              </p>
              <Link to={`/ActivitySignUp/${activity_id}`}>
                <DetailSignUp className="btn-signup" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default ActivityDetail
