import React from 'react'
import Header from '../../layouts/header'
import HeaderSearch from '../../layouts/HeaderSearch'
import { useState, useEffect } from 'react'
import { Card } from '../../template'
import { useParams } from 'react-router-dom'
import { faCny } from '@fortawesome/free-solid-svg-icons'

function Product() {
  const { typeID } = useParams()
  const [data, setData] = useState([])

  // 取得DB資料
  useEffect(() => {
    const fetchData = async () => {
      try {
        // console.log(typeID)
        const res = await fetch(
          `http://localhost:3002/product/list-product/${typeID}`
        )

        // const rData = await res.json()
        // console.log('rData', rData)
        if (!res.ok) {
          throw new Error('Network res was not ok')
        }

        const product = await res.json()
        setData(product)
        // console.log(data)
      } catch (err) {
        console.log(err)
      }
    }
    fetchData()
  }, [typeID])
  return (
    <div className="productPage">
      <Header />
      <HeaderSearch />
      <h2>這裡之後放輪播器</h2>
      <div className="productContent">
        {data.map((product) => (
          <Card className="col-6" key={product.id} data={product} />
        ))}
      </div>
    </div>
  )
}

export default Product
