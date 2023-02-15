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
              <input id="name" type="text" name="name" placeholder="姓名" />
            </label>

            <label className="member-label">
              <input id="phone" type="tel" name="phone" placeholder="電話" />
            </label>

            <label className="member-label">
              <input id="email" type="email" name="email" placeholder="信箱" />
            </label>

            <label className="member-label">
              <input
                id="address"
                type="text"
                name="address"
                placeholder="地址"
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
              />
            </label>

            <label className="member-label">
              <input
                id="check-password"
                type="password"
                name="check-password"
                placeholder="確認密碼"
              />
            </label>

            <label id="member-label-policy">
              <input id="policy" type="checkbox" name="policy" />
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
