import React from 'react'
import { Link } from 'react-router-dom'

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
            <Link to="/Product" className="Breadcrumb__link">
              商城
            </Link>
          </li>
          <li class="current">
            <em aria-current="page">商品詳細</em>
          </li>
        </ol>
      </nav>
    </>
  )
}

export default Header
