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
import Product from './pages/product/Product'
import RegisterMember from './pages/member/RegisterMember'
import Login from './pages/member/Login'
import Cart from './pages/cart/Cart'
import Card from './template/Card'
import Header from './layouts/Header'
// import index from './template'
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
          <Route path="product" element={<Product />}></Route>
          <Route path="meals" element={<Meals />}></Route>
          <Route path="hotel" element={<Hotel />}></Route>
          <Route path="reserve" element={<Reserve />}></Route>
          <Route path="latestNews" element={<LatestNews />}></Route>
          <Route path="course" element={<Course />}></Route>
          <Route path="activity" element={<Activity />}></Route>
          <Route path="*" element={<NotFound />} />
          <Route path="member" element={<Login />} />
          <Route path="register" element={<RegisterMember />} />
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
