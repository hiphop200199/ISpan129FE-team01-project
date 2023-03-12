import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { Outlet } from 'react-router-dom'
import Ball from '../img/layout/毬.svg' //圖片
import Menu from './Menu'
import AbilityTrain from './AbilityTrain'
import { Link } from 'react-router-dom'
import Cart from '../pages/cart/Cart'
// import Cart from '../pages/cart/Cart'
function MainLayouts() {
  const [isShowMenu, setIsShowMenu] = useState(false)
  return (
    <div className="wrap">
      <nav className={`nav-mobile navbar ${isShowMenu ? 'active-menu' : ''}`}>
        <div className="logo-member">
          <Link to="/">
            <img src={Ball} alt="logo" />
          </Link>

          <button
            class="navbar-toggler"
            type="button"
            onClick={() => {
              setIsShowMenu(!isShowMenu)
            }}
          >
            <span class="navbar-toggler-icon"></span>
          </button>
        </div>
        <Menu />
      </nav>
      <nav className="nav">
        <Link to="/">
          <img src={Ball} alt="logo" />
        </Link>
        <Menu />
      </nav>
      <main className="content-border">
        <div className="content">
          <Outlet />
        </div>
        <button className="cart">
          <Link to="/cart">
            <FontAwesomeIcon icon={faCartShopping} />
            {/* <FontAwesomeIcon icon={fa.faCartShopping} /> */}
          </Link>
        </button>
      </main>
    </div>
  )
}

export default MainLayouts
