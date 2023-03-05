import React from 'react'
// TODO: 
// 1. 取消表單預設送出行為
// 2. 將父元件的表單資料送出並建立訂單資料(第一次發出req)
// 3. 若伺服器回應成功建立訂單，則繼續建立商品明細資料(發出第二次req)
// 4. 商品資料都建立完成後，跳轉畫面至Order confirmed
function CheckButton(props) {
  console.log(props.detailData)
  return (
    <button type="submit" className="btn btn-primary btn-lg min-width-auto">
      確認
    </button>
  )
}

export default CheckButton