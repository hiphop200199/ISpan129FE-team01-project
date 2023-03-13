import React from 'react'
import Header from '../../layouts/header'
import HeaderSearch from '../../layouts/HeaderSearch'
import { useState, useEffect } from 'react'
import { Card } from '../../template'
import { useLocation, useParams } from 'react-router-dom'
// import { faCny } from '@fortawesome/free-solid-svg-icons'

function Product() {
  const { typeID } = useParams()
  const [product, setProduct] = useState([])
  // 取得DB資料
  useEffect(() => {
    const fetchData = async () => {
      try {
        // console.log(typeID)
        const res = await fetch(
          `http://localhost:3002/product/list-product/${typeID}`
        )
        if (!res.ok) {
          throw new Error('Network res was not ok')
        }

        const data = await res.json()
        setProduct(data)
      } catch (err) {
        console.log(err)
      }
    }
    fetchData()
    // console.log(typeID)
  }, [typeID])
  return (
    <div className="productPage">
      <Header />
      <HeaderSearch />
      <h2>這裡之後放輪播器</h2>
      <div className="productContent col-12">
        {product.map((product) => (
          <Card
            className="col-6"
            key={product.id}
            product={product}
            typeID={typeID}
          />
        ))}
      </div>
    </div>
  )
}

export default Product
