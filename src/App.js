import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import MainLayouts from './layouts/Mainlayouts'
import Activity from './pages/activity/Activity'
import Course from './pages/course/Course'
import HomePage from './pages/HomePage'
import Hotel from './pages/hotel/Hotel'
import Reserve from './pages/hotel/Reserve'
import LatestNews from './pages/latestNews/LatestNews'
import Meals from './pages/meals/Meals'
import Food from './pages/meals/Food'
import Food1 from './pages/meals/Food1'
import Drinks from './pages/meals/Drinks'
import Dog from './pages/meals/Dog'
import Cat from './pages/meals/Cat'
import MealsDetail from './pages/meals/MealsDetail'
import NotFound from './pages/NotFound'
import ProductDetail from './pages/product/ProductDetail'
import RegisterMember from './pages/member/RegisterMember'
import EditMember from './pages/member/EditMember'
import ChangePassword from './pages/member/ChangePassword'
import Login from './pages/member/Login'
import ForgetPassword from './pages/member/ForgetPassword'
import ResetPassword from './pages/member/ResetPassword'
import AddPet from './pages/member/AddPet'
import Cart from './pages/cart/Cart'
import Card from './template/Card'

import Header from './layouts/header'
import index from './template'
// import FormTemplate from './template/form'
import CheckoutFlow from './pages/checkoutflow/CheckoutFlow'
// import OrderList from './pages/member/OrderList'
import ReserveConfirm from './pages/hotel/ReserveConfirm'
//引入頁面元件

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayouts />}>
          <Route index element={<HomePage />}></Route>
          <Route path="Header" element={<Header />}></Route>
          <Route path="product" element={<ProductDetail />}></Route>
          <Route path="meals/:typeID" element={<Meals />}></Route>
          <Route path="Food" element={<Food />}></Route>
          <Route path="Food1/:typeID" element={<Food1 />}></Route>
          <Route path="Drinks" element={<Drinks />}></Route>
          <Route path="Dog" element={<Dog />}></Route>
          <Route path="Cat" element={<Cat />}></Route>
          <Route path="MealsDetail" element={<MealsDetail />}></Route>
          <Route path="hotel" element={<Hotel />}></Route>
          <Route path="reserve" element={<Reserve />}></Route>
          <Route path="latestNews" element={<LatestNews />}></Route>
          <Route path="course" element={<Course />}></Route>
          <Route path="activity" element={<Activity />}></Route>
          <Route path="*" element={<NotFound />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<RegisterMember />} />
          <Route path="edit" element={<EditMember />} />
          <Route path="ForgetPassword" element={<ForgetPassword />} />
          <Route path="ResetPassword" element={<ResetPassword />} />
          <Route path="changePassword" element={<ChangePassword />} />
          <Route path="add" element={<AddPet />} />
          {/* <Route path="orderList" element={<OrderList />} /> */}
          <Route path="cart" element={<Cart />} />
          <Route path="CheckoutFlow" element={<CheckoutFlow />} />
          <Route path="Card" element={<Card />}></Route>
          <Route path="ReserveConfirm" element={<ReserveConfirm />}></Route>

          {/* <Route path="form" element={<FormTemplate />}></Route> */}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
