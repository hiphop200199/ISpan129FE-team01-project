import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

function Header() {
  return (
    <>
      <nav class="breadcrumb" aria-label="Breadcrumb">
        <ol class="breadcrumbList">
          <li>
            <Link to="/" className="Breadcrumb__link">
              首頁
            </Link>
          </li>
          <li>
            <Link to="/Meals" className="Breadcrumb__link">
              餐點
            </Link>
          </li>
          <li class="current">
            <em aria-current="page">餐點詳細</em>
          </li>
          
        </ol>
      </nav>
    </>
  )
}

export default Header
