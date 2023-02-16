import { useState } from 'react'

function RegisterMember() {
  const [user, setUser] = useState({
    name: '',
    email: '',
    address: '',
    password: '',
    showPassword: false, //用於切換密碼欄位類型使用
    password2: '',
    showPassword2: false, //用於切換密碼欄位類型使用
  })
  //用於記錄錯誤訊息之用
  const [fieldErrors, setFieldErrors] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  })
  //處理每個欄位的變動
  const handleFieldChange = (e) => {
    //可利用下面三哦觸發事件的東西來做進一步處理
    // console.log(e.target.type, e.target.name, e.target.value);

    //只針對checkbox(showPassword)使用
    if (e.target.name === 'showPassword') {
      setUser({ ...user, showPassword: e.target.checked })
      return //!!注意: 這裡跳出函式執行 (沒有跳出，會繼續執行)
    }
    //只針對checkbox(showPassword)使用
    if (e.target.name === 'showPassword2') {
      setUser({ ...user, showPassword2: e.target.checked })
      return //!!注意: 這裡跳出函式執行 (沒有跳出，會繼續執行)
    }

    //以下要依照通用的三步驟原則來更新狀態
    setUser({ ...user, [e.target.name]: e.target.value }) //ex: email:e.target.value...
  }

  const handleSubmit = (e) => {
    //第一航要阻擋預設的form送出行為
    e.preventDefault()

    //獲得目前的表單輸入值
    //1.從state獲得
    console.log(user)
    //2. 用FormData API獲得
    const formData = new FormData(e.target)
    console.log(formData.get('name'), formData.get('email'))

    //做 額外/客製的檢查工作
    if (user.password !== user.password2) {
      setFieldErrors({
        ...fieldErrors,
        password: '密碼與確認密碼欄位值不相同',
        password2: '密碼與確認密碼欄位值不相同',
      })
    }

    //做 資料整理/整合工作

    //做 送至伺服器(fetch, ajax...) ->submit
  }
  //表單有發生驗證錯誤時，會觸發事件
  const handelInvalid = (e) => {
    e.preventDefault()
    // console.log('檢查有錯誤:', e.target.name, e.target.validationMessage);

    //紀錄錯誤訊息
    setFieldErrors({
      ...fieldErrors,
      [e.target.name]: e.target.validationMessage,
    })
  }

  // 當使用者回頭修正表單中任一欄位時，先清除此欄位的錯誤訊息
  const handleFormChange = (e) => {
    // 記錄錯誤訊息
    setFieldErrors({
      ...fieldErrors,
      [e.target.name]: '',
    })
  }

  return (
    <>
      <div className="member-container">
        <section className="member-main">
          <h1 className="member-title">會員註冊</h1>
          <span className="member-subtitle">
            歡迎來到毬，如果您是新用戶，請填寫下面的表單進行註冊。如果您已經是毬的會員，請您直接登入。
          </span>
          <form
            className="member-form"
            onSubmit={handleSubmit}
            onInvalid={handelInvalid}
            onChange={handleFormChange}
          >
            <label className="member-label">
              <input
                id="name"
                type="text"
                name="name"
                placeholder="姓名"
                value={user.fullname}
                onChange={handleFieldChange}
                required
              />
            </label>

            <label className="member-label">
              <input
                id="phone"
                type="tel"
                name="phone"
                placeholder="電話"
                required
              />
            </label>
            <span className="error">{fieldErrors.fullname}</span>
            <label className="member-label">
              <input
                id="email"
                type="email"
                name="email"
                placeholder="信箱"
                required
                value={user.email}
                onChange={handleFieldChange}
              />
            </label>

            <label className="member-label">
              <input
                id="address"
                type="text"
                name="address"
                placeholder="地址"
                value={user.address}
                onChange={handleFieldChange}
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
                required
              />
            </label>

            <label className="member-label">
              <input
                id="check-password"
                type="password"
                name="check-password"
                placeholder="確認密碼"
                required
              />
            </label>

            <label id="member-label-policy">
              <input id="policy" type="checkbox" name="policy" required />
              我已經閱讀並同意隱私權保護政策條款
            </label>

            <button
              className="btn btn-primary btn-lg"
              type="submit"
              value="註冊"
            >
              註冊
            </button>
          </form>
        </section>
      </div>
    </>
  )
}

export default RegisterMember
