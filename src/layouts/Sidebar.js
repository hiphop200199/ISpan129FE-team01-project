import React from 'react'
import { Link } from 'react-router-dom'
import Ball from '../img/layout/毬.svg' //圖片
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faComment } from '@fortawesome/free-solid-svg-icons'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

function Sidebar() {
  return (
    <>
      <div className="bordertop"></div>
      <div className="sidebarmenu">
        <div className="nav">
          <Link to="/">
            <img src={Ball} alt="" />
          </Link>
          <ul className="menu">
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
          <div className="ability-train">
            <Link to="/login">
              <FontAwesomeIcon icon={faUser} />
            </Link>
            <a href="http://">
              <FontAwesomeIcon icon={faComment} />
            </a>
          </div>
        </div>
      </div>
      <div className="borderbottom"></div>
      <div className="borderright"></div>
      <button className="cart">
        <Link to="/cart">
          <FontAwesomeIcon icon={faCartShopping} />
        </Link>
      </button>
    </>
  )
}
export default Sidebar
