import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCircleRight,
  faPencil,
  faHeart,
  faRectangleList,
  faPaw,
} from '@fortawesome/free-solid-svg-icons'
import RegisterMember from './RegisterMember'
import { Link, useNavigate } from 'react-router-dom'
function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  //有無驗證成功->預設沒有驗證成功
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  function handleEmail(event) {
    setEmail(event.target.value)
  }
  function handlePassword(event) {
    setPassword(event.target.value)
  }
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)

    fetch('http://localhost:3002/login', {
      method: 'POST',
      // headers: { 'Content-Type': 'application/json' },
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          localStorage.setItem('email', data.email)
          setEmail(data.email)
          setIsAuthenticated(true)
          alert('登入成功')
          navigate('/')
        } else {
          // alert('登入失敗');
          setError('信箱錯誤或密碼錯誤')
        }
      })
      .catch((error) => console.error(error))
  }
  React.useEffect(() => {
    const storedEmail = localStorage.getItem('email')
    if (storedEmail) {
      setEmail(storedEmail)
      setIsAuthenticated(true)
    }
  }, [])
  //登入成功
  // function handelLogin(data) {
  //   localStorage.setItem('email', data.email)
  //   setEmail(data.email)
  //   setIsAuthenticated(true)
  // }
  //登出
  function handleLogout() {
    localStorage.removeItem('email')
    setEmail('')
    setIsAuthenticated(false)
    navigate('/')
  }

  return (
    <section className="login-container">
      <div className="login-main">
        {isAuthenticated ? (
          <div className="afterLogin">
            <h5>{email}</h5>
            <div className="memberlist">
              <Link to="/edit" className="editMember">
                <FontAwesomeIcon icon={faPencil} />
                我的個人資料
              </Link>
              <br />
              <Link to="/myList" className="myList">
                <FontAwesomeIcon icon={faHeart} />
                我的收藏
              </Link>
              <br />
              <Link to="/orderList" className="orderList">
                <FontAwesomeIcon icon={faRectangleList} />
                查看訂單紀錄
              </Link>
              <br />
              <Link to="/petList" className="petList">
                <FontAwesomeIcon icon={faPaw} />
                查看寵物資訊
              </Link>
            </div>
            <br />
            <button
              className="btn btn-outline-primary btn-lg"
              onClick={handleLogout}
            >
              登出
            </button>
          </div>
        ) : (
          <form className="login-form" onSubmit={handleSubmit}>
            <h1>會員登入</h1>
            <div className="typeArea">
              <label className="login-label">
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="請輸入email"
                  required
                  onChange={handleEmail}
                />
              </label>

              <label className="login-label">
                <input
                  id="password"
                  type="password"
                  name="password"
                  placeholder="請輸入密碼"
                  required
                  onChange={handlePassword}
                />
              </label>
            </div>
            <div className="function">
              <p>忘記密碼?</p>
              <p>登入時遇到問題?</p>
            </div>

            <button type="submit" className=" btn btn-lg btn-primary-for-login">
              登入
            </button>
            {error && <p>{error}</p>}
          </form>
        )}
        {!isAuthenticated ? (
          <div className="other">
            <button className="btn btn-primary btn-lg">Google登入</button>
            <Link to="/register" className="register">
              <FontAwesomeIcon icon={faCircleRight} />
              註冊會員
            </Link>
          </div>
        ) : (
          <></>
        )}
      </div>
    </section>
  )
}
export default Login
