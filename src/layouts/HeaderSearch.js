import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

function HeaderSearch() {
  
  return (
    <>
      <div class="main-button">
        <div className="button__list">
          <Link to="/Food">餐點</Link>
          <Link to="/Drinks">飲品</Link>
          <Link to="/Dog">狗狗</Link>
          <Link to="/Cat">貓咪</Link>
        </div>
        <form class="header-search">
          <input type="search" placeholder="搜尋" name="" />
          <button type="sumbit">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </form>
      </div>
    </>
  )
}

export default HeaderSearch
