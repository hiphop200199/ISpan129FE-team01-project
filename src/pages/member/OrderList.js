import { check } from 'prettier'
import { Link, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect, navigate } from 'react'
import 'datejs'

function OrderList({ id }) {
  const [tagCheck, setTagCheck] = useState(0)
  const [order, setOrders] = useState([])

  const navigate = useNavigate()

  useEffect(() => {
    const id = localStorage.getItem('id')
    const fetchData = async () => {
      const res = await fetch(`http://localhost:3002/orderList/order/${id}`, {
        method: 'GET',
      })
      const order = await res.json()
      console.log(`http://localhost:3002/orderList/order/${id}`, order)

      const [...orders] = order
      setOrders(order)
    }
    fetchData()
  }, [id])
  // console.log(order)

  const handleChange = (typeId) => {
    setTagCheck(typeId)
  }

  return (
    <>
      <h1 className="orderTitle">查看訂單紀錄</h1>
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
            id="tab5"
            type_id="3"
            onChange={() => {
              handleChange(3)
            }}
            checked={tagCheck === 3}
          />
          <label htmlFor="tab5" className="tabs__label">
            住宿
          </label>
          <div className="test">
            <table>
              <thead>
                <tr>
                  <th>訂單編號</th>
                  <th>訂單日期</th>
                  <th>分類</th>
                  <th>訂單狀態</th>
                  <th>訂單金額</th>
                  <th>查看明細</th>
                </tr>
              </thead>
              <tbody>
                {tagCheck === 0
                  ? order.map((order) => (
                      <tr key={order.order_id}>
                        <td>{order.order_id}</td>
                        <td>
                          {new Date(order.order_date).toString('yyyy-MM-dd')}
                        </td>
                        <td>
                          {order.type_id === 1
                            ? '商品'
                            : order.type_id === 2
                            ? '課程'
                            : order.type_id === 3
                            ? '住宿'
                            : '餐點'}
                        </td>
                        <td>{order.status === 0 ? '未付款' : '已付款'}</td>
                        <td>{order.products_price}</td>
                        <td>
                          <Link to={`/orderDetail/${order.order_detail_id}`}>
                            <FontAwesomeIcon icon={faEye} />
                          </Link>
                        </td>
                      </tr>
                    ))
                  : order
                      .filter((el) => {
                        return +el.type_id === tagCheck
                      })
                      .map((order) => (
                        <tr key={order.order_id}>
                          <td>{order.order_id}</td>
                          <td>
                            {new Date(order.order_date).toString('yyyy-MM-dd')}
                          </td>
                          <td>
                            {order.type_id === 1
                              ? '商品'
                              : order.type_id === 2
                              ? '課程'
                              : order.type_id === 3
                              ? '住宿'
                              : '餐點'}
                          </td>
                          <td>{order.status === 0 ? '未付款' : '已付款'}</td>
                          <td>{order.products_price}</td>
                          <td>
                            <Link to={`/orderDetail/${order.order_detail_id}`}>
                              <FontAwesomeIcon icon={faEye} />
                            </Link>
                          </td>
                        </tr>
                      ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="click">
          <button
            type="button"
            className="btn btn-primary btn-md"
            onClick={() => navigate(-1)}
          >
            返回
          </button>
        </div>
      </main>
    </>
  )
}

export default OrderList
