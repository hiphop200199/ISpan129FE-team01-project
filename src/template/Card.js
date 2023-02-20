// import photo from '../img/productDetails/cheese.jpg'
// { photo }帶入參數
// function Card({photo}) {

import MoreSquare from './MoreSquare'

function Card(props) {
  const {
    product_id,
    product_name,
    product_class,
    product_price,
    product_description,
    product_unit,
  } = props
  return (
    <>
      <div className="productCard">
        <section className="text-part">
          <h2 className="title">{product_name}</h2>
          <p className="description">{product_description}</p>
          <span className="price">NT. {product_price}</span>
        </section>
        <section className="buttons">
          <button className="button-collection">&#9825;</button>
          <button className="button-moreInfo">看更多</button>
          <MoreSquare />
        </section>
        {/* 圖片動態引入 ，圖片須放在public資料夾*/}
        <img src={'http://localhost:3000/'} alt="" />
        {/* <img src={'http://localhost:3000/' + photo} alt="" /> */}
        {/* <img src={photo} alt="" /> */}
      </div>
    </>
  )
}
export default Card
