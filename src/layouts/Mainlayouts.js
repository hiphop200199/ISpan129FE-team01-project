import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { Outlet } from 'react-router-dom'
import Ball from '../img/layout/毬.svg' //圖片
import Sidebar from './Sidebar'
import { Link } from 'react-router-dom'
import Cart from '../pages/cart/Cart'
// import Cart from '../pages/cart/Cart'
function MainLayouts() {
  return (
    <>
      <Sidebar />
      <main>
        <div className="radiustop">
          <div className="radiusbottom">
            <div className="routepage">
              <Outlet />
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default MainLayouts
