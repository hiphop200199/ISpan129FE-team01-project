import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'
import moment from 'moment-timezone'
function EditMember() {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    mobile: '',
    address: '',
    birthday: '',
  })
  const [fieldErrors, setFieldErrors] = useState({
    name: '',
    email: '',
    password: '',
    mobile: '',
    address: '',
    birthday: '',
  })

  const [image, setImage] = useState(null)
  const navigate = useNavigate()
  // const [isSuccess, setIsSuccess] = useState(false)

  // 設定統一時區
  moment.tz.setDefault('Asia/Taipei')

  // 將日期字串轉換為moment物件
  const date = moment(user.birthday, 'YYYY-MM-DD')

  // 轉換時區
  const dateInTimezone = date.clone().tz('Asia/Taipei')

  // 取得轉換後的日期字串
  const yyyyMMddDate = dateInTimezone.format('YYYY-MM-DD')

  useEffect(() => {
    const id = localStorage.getItem('id')
    const email = localStorage.getItem('email')

    fetch(`http://localhost:3002/member/edit/${id}`, {
      method: 'GET',
      headers: {
        // 'Content-Type': 'application/json',
        // Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('data', data)
        setUser(data)
      })
      .catch((error) => console.error(error))
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    const id = localStorage.getItem('id')
    const fd = new FormData(e.currentTarget)

    fetch(`http://localhost:3002/member/edit/${id}`, {
      method: 'PUT',
      headers: {
        // 'Content-Type': 'application/json',
        // Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
      body: fd,
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          alert('修改成功')
          navigate('/')
        } else {
          alert('資料沒有修改')
        }
      })
      .catch((error) => console.error(error))
  }

  //圖片
  const handleImageChange = (event) => {
    const file = event.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = () => {
        setImage(reader.result)
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <div className="member-container">
      <section className="member-main">
        <h1 className="member-title">我的個人資料</h1>
        <form className="member-form" onSubmit={handleSubmit}>
          <label htmlFor="upload-image" className="upload-icon">
            {!image && <FontAwesomeIcon icon={faCircleUser} />}
            <input
              type="file"
              id="upload-image"
              accept="image/*"
              onChange={handleImageChange}
              hidden
            />
          </label>
          {image && (
            <img src={image} alt="上傳預覽圖片" width={200} height={200} />
          )}
          <label className="member-label">
            <input
              id="name"
              type="text"
              name="name"
              placeholder="姓名"
              value={user.name}
              onChange={(e) =>
                setUser({
                  ...user,
                  name: e.target.value,
                })
              }
            />
            {fieldErrors.name && <span>{fieldErrors.name}</span>}
          </label>

          <label className="member-label">
            <input
              id="mobile"
              type="tel"
              name="mobile"
              placeholder="電話"
              value={user.mobile}
              onChange={(e) =>
                setUser({
                  ...user,
                  mobile: e.target.value,
                })
              }
            />
            {fieldErrors.mobile && <span>{fieldErrors.mobile}</span>}
          </label>

          <label className="member-label">
            <input
              id="email"
              type="email"
              name="email"
              placeholder="信箱"
              value={user.email}
              onChange={(e) =>
                setUser({
                  ...user,
                  email: e.target.value,
                })
              }
            />
            {fieldErrors.email && <span>{fieldErrors.email}</span>}
          </label>

          <label className="member-label">
            <input
              id="address"
              type="text"
              name="address"
              placeholder="地址"
              value={user.address}
              onChange={(e) =>
                setUser({
                  ...user,
                  address: e.target.value,
                })
              }
            />
            {fieldErrors.address && <span>{fieldErrors.address}</span>}
          </label>

          <label className="member-label">
            <input
              id="birthday"
              type="date"
              name="birthday"
              value={yyyyMMddDate}
              onChange={(e) =>
                setUser({
                  ...user,
                  birthday: e.target.value,
                })
              }
            />
            {fieldErrors.birthday && <span>{fieldErrors.birthday}</span>}
          </label>

          {/* <label className="member-label">
            <input
              id="password"
              type="password"
              name="password"
              placeholder="目前密碼"
              value={user.password}
              onChange={(e) =>
                setUser({
                  ...user,
                  password: e.target.value,
                })
              }
            />
            {fieldErrors.password && <span>{fieldErrors.password}</span>}
          </label> */}

          <div className="click">
            <button
              type="button"
              className="btn btn-outline-primary btn-lg"
              onClick={() => navigate(-1)}
            >
              返回
            </button>
            <button type="submit" className="btn btn-primary btn-lg">
              確認
            </button>
          </div>
        </form>
      </section>
    </div>
  )
}
export default EditMember
