// import photo from '../img/productDetails/cheese.jpg'
function Card({ photo }) {
  // { photo }帶入參數
  return (
    <>
      <div className="productCard">
        <section className="text-part">
          <h2 className="title">潔牙零食</h2>
          <p className="description">
            問題的關鍵究竟為何？用最佳的策略去分析潔牙玩具。
          </p>
          <span className="price">NT. 300</span>
        </section>
        <section className="buttons">
          <button className="button-collection">&#9825;</button>
          <button className="button-moreInfo">看更多</button>
        </section>
        {/* 圖片動態引入 ，圖片須放在public資料夾*/}
        <img src={'http://localhost:3000/' + photo} alt="" />
        {/* <img src={photo} alt="" /> */}
      </div>
    </>
  )
}
export default Card
