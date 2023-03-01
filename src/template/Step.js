import React from 'react'

function Step() {
  return (
    <aside className="order-step-guide">
      <div className="row">
        <div className="col">
          <div className="step1">1</div>
          <div className="steptext">確認商品</div>
        </div>
        <div className="stepline"></div>
        <div className="col">
          <div className="step2">2</div>
          <div className="steptext">填寫資料</div>
        </div>
        <div className="stepline"></div>
        <div className="col">
          <div className="step3">3</div>
          <div className="steptext">訂購成功</div>
        </div>
      </div>
    </aside>
  )
}

export default Step
