import { Link } from 'react-router-dom'
import React from 'react'
import Ball from '../img/layout/毬.svg' //圖片

function SideBar() {
  return (
    <sidebar className="sidebar">
      {/* <img src={require('../img/layout/毬.svg')} alt="" /> */}

      <ul>
        <li>
          <Link to="/latestNews">最新消息</Link>
        </li>
        <li>
          <Link to="/hotel">住宿</Link>
        </li>
        <li>
          <Link to="/product">商城</Link>
        </li>
        <li>
          <Link to="/meals">餐點</Link>
        </li>
        <li>
          <Link to="/course">課程</Link>
        </li>
        <li>
          <Link to="/activity">活動</Link>
        </li>
      </ul>
    </sidebar>
  )
}

export default SideBar
