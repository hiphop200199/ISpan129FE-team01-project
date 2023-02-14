import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretRight } from '@fortawesome/free-solid-svg-icons'
function NextStepMd() {
  return (
    <>
      {/* 中的按鈕: 下一步，確認送出，回首頁，返回，確定 */}
      <button type="button" className="btn btn-primary btn-md min-width-auto">
        下一步
      </button>
    </>
  )
}
export default NextStepMd