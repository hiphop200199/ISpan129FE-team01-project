import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAtom } from '@fortawesome/free-solid-svg-icons'
import { Outlet } from 'react-router-dom'
import Sidebar from './sidebar'
function Mainlayouts() {
  return (
    <>
      <div className="wrap">
        <div className="nav">
          <Sidebar />
        </div>
        <main className="content-border">
          <div className="content">
            <Outlet />
          </div>
          <button className="cart">
            {/* <FontAwesomeIcon icon={fa.faCartShopping} /> */}
            <FontAwesomeIcon icon={faAtom} />
          </button>
        </main>
      </div>
    </>
  )
}

export default Mainlayouts
