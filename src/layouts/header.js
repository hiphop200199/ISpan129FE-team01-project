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
            <Link to="/">首頁</Link>
          </li>
          <li>
            <Link to="/">商城</Link>
          </li>
          <li class="current">
            <em aria-current="page">商品詳細</em>
          </li>
        </ol>
      </nav>
      <div class="main-botton">
        <Link to="/">罐頭飼料</Link>
        <Link to="/">外出用品</Link>
        <Link to="/">耐磨玩具</Link>
        <Link to="/">服飾項圈</Link>
        <form class="header-search">
          <input type="search" placeholder="搜尋" name="" />
          <button type="text">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </form>
      </div>
    </>
  )
}

export default Header
