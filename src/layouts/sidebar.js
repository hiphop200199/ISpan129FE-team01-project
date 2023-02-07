import { Link } from 'react-router-dom'
import React from 'react'
import Ball from '../img/layout/毬.svg' //圖片
import Person from '../img/layout/profile.png'
import Chat from '../img/layout/chatBubble.png'

function Sidebar() {
  return (
    <div className="sidebar">
      {/* <img src={require('../img/layout/毬.svg')} alt="" /> */}
      <Link to="/">
        <img src={Ball} alt="毬" />
      </Link>
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
        <Link to="/sign">
          <img id="profile" src={Person} alt="註冊" />
        </Link>
        <Link to="*">
          <img id="chat" src={Chat} alt="聊天" />
        </Link>
      </ul>
    </div>
  )
}

export default Sidebar
