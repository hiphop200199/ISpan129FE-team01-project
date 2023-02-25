import React from 'react'
import Header from '../../layouts/header'
import HeaderSearch from '../../layouts/HeaderSearch'
import { useState, useEffect } from 'react'
import { Card } from '../../template'
import { useLocation, useParams } from 'react-router-dom'
import { faCny } from '@fortawesome/free-solid-svg-icons'
import MoreSquare from '../../template/MoreSquare'
import { Link } from 'react-router-dom'

function Meals() {
  return (
    <div className="MealsPage">
      <Header />
      <HeaderSearch />
     <Link to="/reserve">
                    <MoreSquare />
                  </Link>
      <h2>餐點</h2>
      {/* <div className="productContent">
        {data.map((product) => (
          <Card className="col-6" key={product.id} data={product} />
        ))}
      </div> */}
    </div>
  )
}
export default Meals
