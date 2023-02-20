import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'
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
  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //   const formData = new FormData(e.target)

  //   if (user.password !== user.password2) {
  //     setFieldErrors({
  //       ...fieldErrors,
  //       password: '密碼與確認密碼欄位值不相同',
  //       password2: '密碼與確認密碼欄位值不相同',
  //     })
  //     return
  //   }

  //   fetch('http://localhost:3002/login', {
  //     method: 'POST',
  //     body: formData,
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data)
  //       if (data.success) {
  //         const token = data.token
  //         const mid = data.user.mid

  //         fetch('http://localhost:3002/member/${mid}', {
  //           method: 'PUT',
  //           headers: {
  //             // 'Content-Type': 'application/json',
  //             Authorization: 'Bearer ${token}',
  //           },
  //           body: JSON.stringify(user),
  //         })
  //           .then((response) => response.json())
  //           .then((data) => {
  //             console.log(data)
  //             setIsSuccess(data.success)
  //           })
  //       } else {
  //         alert('登入失敗')
  //       }
  //     })
  // }
  // if (isSuccess) {
  //   return <p>編輯成功！</p>
  // }

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
              value={user.birthday}
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
