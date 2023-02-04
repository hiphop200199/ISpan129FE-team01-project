import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { Outlet } from 'react-router-dom'
import Ball from '../img/layout/毬.svg' //圖片
import Sidebar from './SideBar'
import AbilityTrain from './AbilityTrain'
function MainLayouts() {
  return (
    <>
      <div className="wrap">
        <nav className="nav">
          <img src={Ball} alt="" />
          <Sidebar />
          <AbilityTrain />
        </nav>
        <main className="content-border">
          <div className="content">
            <Outlet />
          </div>
          <button className="cart">
            {/* <FontAwesomeIcon icon={fa.faCartShopping} /> */}
            <FontAwesomeIcon icon={faCartShopping} />
          </button>
        </main>
      </div>
    </>
  )
}

export default MainLayouts
