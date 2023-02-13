import React, { useState } from 'react'
function Login() {
  const [errorMessages, setErrorMessages] = useState({})
  const [isSubmitted, setIsSubmitted] = useState(false)

  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    )

  return (
    <>
      <div class="login-container">
        <div class="row justify-content-center">
          <div class="col-4">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">登入</h5>
                <form name="form1" onsubmit="sendForm(event)">
                  <div class="mb-3">
                    <label
                      for="email"
                      class="form-label"
                      placeholder="請輸入信箱"
                      required
                    >
                      帳號
                    </label>
                    <input
                      type="email"
                      class="form-control"
                      id="email"
                      name="email"
                      required
                    />
                    <div class="form-text"></div>
                  </div>
                  <div class="mb-3">
                    <label for="password" class="form-label">
                      密碼
                    </label>
                    <input
                      type="password"
                      class="form-control"
                      id="password"
                      name="password"
                      required
                    />
                    <div class="form-text"></div>
                  </div>
                  <div>
                    <span>忘記密碼?</span>
                    <br />
                    <span>登入時遇到問題?</span>
                  </div>

                  <button type="submit" class="btn btn-primary">
                    登入
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Login
