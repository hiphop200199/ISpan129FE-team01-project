import React from 'react'
import Header from '../../layouts/header'
import HeaderSearch from '../../layouts/HeaderSearch'
import { useState, useEffect } from 'react'
import { Card } from '../../template'
import { useLocation, useParams } from 'react-router-dom'
import { faCny } from '@fortawesome/free-solid-svg-icons'

function Product() {
  const { typeID } = useParams()
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `http://localhost:3002/product/product/list-product/${typeID}`
        )
        if (!res.ok) {
          throw new Error('Network res was not ok')
        }
        const product = await res.json()
        setData(product)
      } catch (err) {
        console.log(err)
      }
    }
    fetchData()
  }, [typeID])

  // 取得DB的資料(跨表取得img table的商品圖片)
  // useEffect(() => {
  //   fetch(`http://localhost:3002/product/list-product/${type}${search}`)
  //     .then((res) => res.json())
  //     .then((product) => setData(product));
  // }, [type, search]);

  // 取得DB的資料
  //(跨表取得img table的商品圖片)
  // useEffect(() => {
  //   fetch(`http://localhost:3002/product/list-product/${type}`)
  //     // fetch(`/api/product?product_type=${type}`)
  //     .then((res) => res.json())
  //     .then((product) => setData(product));
  // }, [type]);
  // if (typeof type === "undefined" || typeof type !== "string" || type.trim() === "") {
  //   // type 為空或未定義
  //   console.log('type error')
  // }
  return (
    <>
      <Header />
      <HeaderSearch />
      <h2>這裡之後放輪播器</h2>
      <CardList data={data} />
    </>
  )
}
function CardList({ data }) {
  return (
    <div className="content">
      {data.map((product) => (
        <Card key={product.id} data={product} />
      ))}
    </div>
  )
}

export default Product
