import React from 'react'
import Header from '../../layouts/header'
import HeaderSearch from '../../layouts/HeaderSearch'
import { useState, useEffect } from 'react'
import { Card } from '../../template'
import { useParams } from 'react-router-dom'

function Product() {
  const [data, setData] = useState([])
  // 取得qureyStying的值
  const { type } = useParams()
  // 取得DB的資料
  //(跨表取得img table的商品圖片)
  useEffect(() => {
    fetch(`http://localhost:3002/product/list-product/1`)
      // fetch(`/api/product?product_type=${type}`)
      .then((res) => res.json())
      .then((product) => setData(product))
  }, [type])
  return (
    <>
      <Header />
      <HeaderSearch />
      <h2>這裡之後放輪播器</h2>
      <Card />
      <div className="content">
        {data.map((product) => (
          //data={product}傳入這筆資料的欄位給子元件
          <Card key={product.id} data={product} />
        ))}
      </div>
    </>
  )
}

export default Product
