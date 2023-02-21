import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
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
      alert('修改密碼成功')
      navigate('/')
    } catch (error) {
      console.error(error)
      setMessage('錯誤發生')
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          新密碼:
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
        <br />
        <label>
          確認密碼:
          <input
            type="password"
            value={password2}
            onChange={(event) => setPassword2(event.target.value)}
          />
        </label>
        <br />
        <button type="submit">送出</button>
      </form>
    </>
  )
}
export default ResetPassword
