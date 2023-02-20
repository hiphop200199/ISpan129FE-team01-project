import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import MainLayouts from './layouts/Mainlayouts'
import Activity from './pages/activity/Activity'
import Course from './pages/course/Course'
import HomePage from './pages/HomePage'
import Hotel from './pages/hotel/Hotel'
import Reserve from './pages/hotel/Reserve'
import LatestNews from './pages/latestNews/LatestNews'
import Meals from './pages/meals/Meals'
import NotFound from './pages/NotFound'
import ProductDetail from './pages/product/ProductDetail'
import Product from './pages/product/Product'
import RegisterMember from './pages/member/RegisterMember'
import EditMember from './pages/member/EditMember'
import Login from './pages/member/Login'
import AddPet from './pages/member/AddPet'
import Cart from './pages/cart/Cart'
import Card from './template/Card'
import Header from './layouts/header'
import index from './template'
// import FormTemplate from './template/form'
import CheckoutFlow from './pages/checkoutflow/CheckoutFlow'
//引入頁面元件

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayouts />}>
          <Route index element={<HomePage />}></Route>
          <Route path="Header" element={<Header />}></Route>
          {/* product帶入type_id的quretString */}
          <Route path="product/1" element={<Product />}></Route>
          <Route path="productDetail" element={<ProductDetail />}></Route>
          <Route path="meals" element={<Meals />}></Route>
          <Route path="hotel" element={<Hotel />}></Route>
          <Route path="reserve" element={<Reserve />}></Route>
          <Route path="latestNews" element={<LatestNews />}></Route>
          <Route path="course" element={<Course />}></Route>
          <Route path="activity" element={<Activity />}></Route>
          <Route path="*" element={<NotFound />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<RegisterMember />} />
          <Route path="edit" element={<EditMember />} />
          <Route path="add" element={<AddPet />} />
          <Route path="cart" element={<Cart />} />
          <Route path="CheckoutFlow" element={<CheckoutFlow />} />
          <Route path="Card" element={<Card />}></Route>
          {/* <Route path="form" element={<FormTemplate />}></Route> */}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
