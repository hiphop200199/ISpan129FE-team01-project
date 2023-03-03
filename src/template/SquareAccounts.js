import React from 'react'
import { Link } from 'react-router-dom'
function SquareAccounts() {
  return (
    <button type="button" className="btn btn-primary btn-lg col-6 p-0 ">
      <Link to={'/CheckoutFlow'}>結帳</Link>
    </button>
  )
}

export default SquareAccounts
