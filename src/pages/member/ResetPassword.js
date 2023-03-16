import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
function ResetPassword() {
  const [password, setPassword] = useState('')
  const [password2, setPassword2] = useState('')
  const [message, setMessage] = useState('')

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (password !== password2) {
      setMessage('密碼不一致')
      return
    }
    const urlParams = new URLSearchParams(window.location.search)
    console.log(window.location.search)
    const token = urlParams.get('token')

    try {
      const passData = { password, password2 }
      const response = await fetch(
        `http://localhost:3002/reset-password${window.location.search}`,
        {
          method: 'post',
          body: JSON.stringify(passData),
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )
      const data = await response.json()
      setMessage(data.message)
      Swal.fire('重設密碼成功', '', 'success')
      navigate('/')
    } catch (error) {
      console.error(error)
      setMessage('錯誤發生')
    }
  }

  return (
    <>
      <section className="login-container">
        <div className="login-main">
          <form className="login-form" onSubmit={handleSubmit}>
            <h3>重設密碼</h3>
            <input
              className="form-control"
              type="password"
              value={password}
              placeholder="新密碼:"
              onChange={(event) => setPassword(event.target.value)}
              required
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
              required
              minLength={6}
              maxLength={10}
            />
            <br />
            <button className="btn btn-primary-for-login" type="submit">
              送出
            </button>
          </form>
        </div>
      </section>
    </>
  )
}
export default ResetPassword
