import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleRight } from '@fortawesome/free-solid-svg-icons'
import RegisterMember from './RegisterMember'
import { Link, useNavigate } from 'react-router-dom'
function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

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
          alert('登入成功')
          navigate('/')
        } else {
          // alert('登入失敗');
          setError('信箱無效或密碼錯誤')
        }
      })
      .catch((error) => console.error(error))
  }

  // const [errorMessages, setErrorMessages] = useState({})
  // const [isSubmitted, setIsSubmitted] = useState(false)

  // const renderErrorMessage = (name) =>
  //   name === errorMessages.name && (
  //     <div className="error">{errorMessages.message}</div>
  //   )

  return (
    <section className="login-container">
      <div className="login-main">
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
        <div className="other">
          <button className="btn btn-primary btn-lg">Google登入</button>
          <Link to="/register" className="register">
            <FontAwesomeIcon icon={faCircleRight} />
            註冊會員
          </Link>
        </div>
      </div>
    </section>
  )
}
export default Login
