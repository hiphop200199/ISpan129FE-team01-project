import React from 'react'
import Header from '../../layouts/header'
import HeaderSearch from '../../layouts/HeaderSearch'
import { useState, useEffect } from 'react'
import { Card } from '../../template'
import { useLocation, useParams } from 'react-router-dom'
import { faCny } from '@fortawesome/free-solid-svg-icons'
import MoreSquare from '../../template/MoreSquare'
import { Link } from 'react-router-dom'

function Food() {
  const [searchValue, setSearchValue] = useState('')
  const [originalFood, setOriginalFood] = useState([])
  const [food, setFood] = useState([])

  const handleSearch = (value) => {
    setSearchValue(value)
  }
  // 在组件加载时获取食品数据
  useEffect(() => {
    const initialFood = [
      {
        title: '提拉米蘇米蘭',
        subtitle: '120',
        text: '蛋糕般柔軟的皇家米蘭麵包',
        img: 'food.jpg',
      },
      {
        title: '雞肉沙拉',
        subtitle: '180',
        text: '雞肉加上生菜沙拉',
        img: 'food1.jpg',
      },
      {
        title: '雞肉飯',
        subtitle: '170',
        text: '雞肉拌飯',
        img: 'food2.jpg',
      },
      {
        title: '紅燒牛肉',
        subtitle: '150',
        text: '牛肉料理',
        img: 'foodbeef.jpg',
      },
      {
        title: '牛排',
        subtitle: '240',
        text: '上好的牛排',
        img: 'foodbeef1.jpg',
      },
      {
        title: '牛肉漢堡',
        subtitle: '130',
        text: '牛肉的漢堡',
        img: 'foodbeef2.jpg',
      },
    ]

    setOriginalFood(initialFood)
    setFood(initialFood)
  }, [])

  // 根据搜索框的值过滤食品数据
  useEffect(() => {
    if (searchValue) {
      const filteredFood = originalFood.filter((item) =>
        item.title.includes(searchValue)
      )
      setFood(filteredFood)
    } else {
      setFood(originalFood)
    }
  }, [searchValue, originalFood])

  return (
    <>
      <Header />
      <HeaderSearch onSearch={handleSearch} />

      <div className="h-text-title">餐點</div>

      <div className="card-wrap">
        {food.map((item, i) => {
          const img = require(`../../img/meals/food/${item.img}`)
          return (
            <div className="h-card col-6" key={i}>
              <div className="h-card-left col-6">
                <div className="h-card-header">
                  <h3 className="h-card-title">{item.title}</h3>
                  <p className="h-card-subtitle">NT.{item.subtitle}</p>
                  <p className="h-card-text">{item.text}</p>
                </div>
                <div className="h-card-footer">
                  <span>&#9825;</span>
                  <Link to="/MealsDetail">
                    <MoreSquare />
                  </Link>
                </div>
              </div>
              <div className="h-card-right col-7">
                <img src={img} alt="" />
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}
export default Food
