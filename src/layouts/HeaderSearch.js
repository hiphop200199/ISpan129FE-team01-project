import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

function HeaderSearch() {
  return (
    <>
      <div className="main-button">
        <div className="button__list">
          <Link to="/">罐頭飼料</Link>
          <Link to="/">外出用品</Link>
          <Link to="/">耐磨玩具</Link>
          <Link to="/">服飾項圈</Link>
        </div>
        <form className="header-search">
          <input type="search" placeholder="搜尋" name="" />
          <button type="submit">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </form>
      </div>
    </>
  )
}

export default HeaderSearch
