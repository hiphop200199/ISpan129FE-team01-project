import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

function MealsHeaderSearch() {
  return (
    <>
      <div className="main-button">
        <div className="button__list">
          <Link to="/Food1/4">餐點</Link>
          <Link to="/">飲品</Link>
          <Link to="/">狗狗</Link>
          <Link to="/">貓咪</Link>
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

export default MealsHeaderSearch
