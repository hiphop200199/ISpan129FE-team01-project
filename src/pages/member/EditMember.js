import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'
function EditMember() {
  const navigate = useNavigate()

  const [image, setImage] = useState(null)

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
        <form className="member-form">
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
              // value=""
            />
          </label>

          <label className="member-label">
            <input
              id="phone"
              type="tel"
              name="phone"
              placeholder="電話"
              // value=""
            />
          </label>

          <label className="member-label">
            <input
              id="email"
              type="email"
              name="email"
              placeholder="信箱"
              // value=""
            />
          </label>

          <label className="member-label">
            <input
              id="address"
              type="text"
              name="address"
              placeholder="地址"
              // value=""
            />
          </label>

          <label className="member-label">
            <input id="birthday" type="date" name="birthday" />
          </label>

          <label className="member-label">
            <input
              id="password"
              type="password"
              name="password"
              placeholder="密碼"
              // value=""
            />
          </label>
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
