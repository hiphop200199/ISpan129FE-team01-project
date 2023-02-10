import React from 'react'

function RegisterMember() {
  return (
    <>
      <div className="member-container">
        <section className="member-main">
          <h1 className="member-title">會員註冊</h1>
          <span className="member-subtitle">
            歡迎來到毬，如果您是新用戶，請填寫下面的表單進行註冊。如果您已經是毬的會員，請您直接登入。
          </span>
          <form className="member-form">
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
              <input
                id="email"
                type="email"
                name="email"
                placeholder="信箱將作為登入帳號，敬請填寫正確資訊，以免喪失會員權益"
              />
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
            </label>

            <label id="member-label-check-password">
              確認密碼
              <input
                id="check-password"
                type="password"
                name="check-password"
              />
            </label>

            <label id="member-label-policy">
              <input id="policy" type="checkbox" name="policy"></input>
              我已經閱讀並同意隱私權保護政策條款
            </label>

            <input id="submit" type="submit" value="註冊" />
          </form>
        </section>
      </div>
    </>
  )
}

export default RegisterMember
