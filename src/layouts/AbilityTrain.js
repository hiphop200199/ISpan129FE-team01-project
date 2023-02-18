import { Link } from 'react-router-dom'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faComment } from '@fortawesome/free-solid-svg-icons'
import { Outlet } from 'react-router-dom'
import { icon } from '@fortawesome/fontawesome-svg-core'

function AbilityTrain() {
  return (
    <div className='ability-train'>
      <Link to="/member"><FontAwesomeIcon icon={faUser} /></Link>
      <a href="http://"><FontAwesomeIcon icon={faComment} /></a>
    </div>
  )
}

export default AbilityTrain