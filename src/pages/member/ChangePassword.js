import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function ChangePassword() {
  const navigate = useNavigate()

  const [password, setPassword] = useState('')
  const [password2, setPassword2] = useState('')
  const [message, setMessage] = useState('')

  useEffect(() => {
    const id = localStorage.getItem('id')
    const email = localStorage.getItem('email')

    fetch(`http://localhost:3002/member/changePassword/${id}`, {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('data', data)
      })
      .catch((error) => console.error(error))
  }, [])
  const handleSubmit = async (e) => {
    e.preventDefault()
    const id = localStorage.getItem('id')
    const passData = { password, password2 }

    // if (password !== password2) {
    //   console.log('密碼不一致')
    //   setMessage('密碼不一致')
    //   return
    // }
    fetch(`http://localhost:3002/member/changePassword/${id}`, {
      method: 'PUT',
      body: JSON.stringify(passData),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          alert('修改密碼成功')
          navigate('/login')
        } else {
          alert('密碼沒有修改成功')
        }
      })
      .catch((error) => console.error(error))
  }

  return (
    <>
      <section className="login-container">
        <div className="login-main">
          <form className="login-form" onSubmit={handleSubmit}>
            <h3 className="m-3">更新密碼</h3>
            <input
              className="form-control"
              type="password"
              value={password}
              placeholder="新密碼:"
              onChange={(event) => setPassword(event.target.value)}
              minLength={6}
              maxLength={10}
            />
            <br />
            <input
              className="form-control"
              type="password"
              value={password2}
              placeholder="確認密碼:"
              onChange={(event) => setPassword2(event.target.value)}
              minLength={6}
              maxLength={10}
            />
            <br />
            <button className="btn btn-primary-for-login" type="submit">
              送出
            </button>
          </form>
          <button
            className="btn btn-primary btn-lg px-5"
            onClick={() => navigate(-1)}
          >
            返回
          </button>
        </div>
      </section>
    </>
  )
}
export default ChangePassword
