import { check } from 'prettier'
import { Link, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faAnglesLeft } from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect } from 'react'
import 'datejs'

function MyList({ id }) {
  const [tagCheck, setTagCheck] = useState(0)
  const [like, setLike] = useState([])

  const navigate = useNavigate()

  useEffect(() => {
    const id = localStorage.getItem('id')
    const fetchData = async () => {
      const res = await fetch(`http://localhost:3002/member/likes/${id}`, {
        method: 'GET',
      })
      const data = await res.json()
      const like = Array.isArray(data) ? data : [data]
      console.log(`http://localhost:3002/member/likes/${id}`, like)

      // const [...orders] = order
      setLike(like)
    }
    fetchData()
  }, [id])
  // console.log(order)

  const handleChange = (typeId) => {
    // console.log(typeId)
    setTagCheck(typeId)
  }

  return (
    <>
      <div className="click">
        <FontAwesomeIcon icon={faAnglesLeft} onClick={() => navigate(-1)} />
      </div>
      <h1 className="orderTitle">我的收藏列表</h1>
      {/* <div className="info">{JSON.stringify(order)}</div> */}
      <main className="checkoutFlow">
        <div className="tabs">
          <input
            type="radio"
            className="tabs__radio"
            name="tabs-example"
            id="tab1"
            onChange={() => {
              handleChange(0)
            }}
            checked={tagCheck === 0}
            // checked={tagCheck === '所有'}
          />
          <label htmlFor="tab1" className="tabs__label">
            所有
          </label>
          <input
            type="radio"
            className="tabs__radio"
            name="tabs-example"
            type_id="1"
            id="tab2"
            onChange={() => {
              handleChange(1)
            }}
            checked={tagCheck === 1}
            // checked={tagCheck}
          />
          <label htmlFor="tab2" className="tabs__label">
            商城
          </label>
          <input
            type="radio"
            className="tabs__radio"
            name="tabs-example"
            id="tab3"
            type_id="4"
            onChange={() => {
              handleChange(4)
            }}
            checked={tagCheck === 4}
          />
          <label htmlFor="tab3" className="tabs__label">
            餐點
          </label>
          <input
            type="radio"
            className="tabs__radio"
            name="tabs-example"
            id="tab5"
            type_id="2"
            onChange={() => {
              handleChange(2)
            }}
            checked={tagCheck === 2}
          />
          <label htmlFor="tab5" className="tabs__label">
            課程
          </label>
          <input
            type="radio"
            className="tabs__radio"
            name="tabs-example"
            id="tab6"
            type_id="3"
            onChange={() => {
              handleChange(3)
            }}
            checked={tagCheck === 3}
          />
          <label htmlFor="tab6" className="tabs__label">
            住宿
          </label>
          <div className="test">
            <table>
              <thead>
                <tr>
                  {/* <th>編號</th> */}
                  <th>收藏日期</th>
                  <th>分類</th>
                  <th>商品名稱</th>
                  <th>刪除</th>
                  <th>加入購物車</th>
                </tr>
              </thead>
              <tbody>
                {tagCheck === 0
                  ? like &&
                    like.map((like, k) => (
                      <tr key={`${like.sid}${k}`}>
                        {/* <td>{like.sid}</td> */}
                        <td>
                          {new Date(like.created_at).toString('yyyy-MM-dd')}
                        </td>
                        <td>
                          {like.type_id === 1
                            ? '商品'
                            : like.type_id === 2
                            ? '課程'
                            : like.type_id === 3
                            ? '住宿'
                            : '餐點'}
                        </td>
                        <td>{like.product_name}</td>
                        <td>刪除</td>
                        <td>
                          <Link to={`/cart`} className="more-button">
                            <FontAwesomeIcon icon={faCartShopping} />
                          </Link>
                        </td>
                      </tr>
                    ))
                  : like &&
                    like
                      .filter((el) => {
                        return el.type_id === tagCheck
                      })
                      .map((like, k) => (
                        <tr key={`${like.sid}${k}`}>
                          {/* <td>{like.sid}</td> */}
                          <td>
                            {new Date(like.created_at).toString('yyyy-MM-dd')}
                          </td>
                          <td>
                            {like.type_id === 1
                              ? '商品'
                              : like.type_id === 2
                              ? '課程'
                              : like.type_id === 3
                              ? '住宿'
                              : '餐點'}
                          </td>
                          <td>{like.product_name}</td>
                          <td>刪除</td>
                          <td>
                            <Link to={`/cart}`} className="more-button">
                              <FontAwesomeIcon icon={faCartShopping} />
                            </Link>
                          </td>
                        </tr>
                      ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </>
  )
}

export default MyList
