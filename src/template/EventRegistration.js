import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretRight } from '@fortawesome/free-solid-svg-icons'
function EventRegistration() {
  return (
    <>
      {/* 藍色小按鈕 */}
      <button
        type="button"
        className="btn btn-primary btn-sm min-width-auto radius-5px"
      >
        報名中
      </button>
    </>
  )
}
export default EventRegistration