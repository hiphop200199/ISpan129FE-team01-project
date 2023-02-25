import { useState } from 'react'
// import '../meals/_tag.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'


function TagSwitchingExample() {
  const [activeTag, setActiveTag] = useState('tag1')

  function handleTagClick(e) {
    e.preventDefault()
    setActiveTag(e.target.dataset.tag)
  }

  return (
    <div className="tag-container">
      <Link to="#" data-tag="tag1" className={`tag ${activeTag === 'tag1' ? 'active' : ''}`} onClick={handleTagClick}>商品規格</Link>
      <Link to="#" data-tag="tag2" className={`tag ${activeTag === 'tag2' ? 'active' : ''}`} onClick={handleTagClick}>商品規格</Link>
      <Link to="#" data-tag="tag3" className={`tag ${activeTag === 'tag3' ? 'active' : ''}`} onClick={handleTagClick}>商品規格</Link>
      </div>
  )
}


export default TagSwitchingExample