import React from 'react'

function EditMember() {
  return (
    <>
      <div className="memberEdit-container">
        <section className="memberEdit-main">
          <h1 className="memberEdit-title">我的個人資料</h1>
          <form className="member-editform">
            <label className="member-label">
              姓名
              <input id="name" type="text" name="name" />
            </label>

            <label className="member-label">
              電話
              <input id="phone" type="tel" name="phone" />
            </label>

            <label className="member-label">
              信箱
              <input id="email" type="email" name="email" />
            </label>

            <label className="member-label">
              地址
              <input id="address" type="text" name="address" />
            </label>

            <label className="member-label">
              生日
              <input id="birthday" type="date" name="birthday" />
            </label>

            <label className="member-label">
              密碼
              <input id="password" type="password" name="password" />
              <i class="fa-solid fa-eye"></i>
            </label>

            <label id="member-label-check-password">
              確認密碼
              <input
                id="check-password"
                type="password"
                name="check-password"
              />
              <i class="fa-solid fa-eye"></i>
            </label>

            <input id="submit" type="submit" value="確認" />
          </form>
        </section>
      </div>
    </>
  )
}

export default EditMember
