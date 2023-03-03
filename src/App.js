import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import MainLayouts from './layouts/Mainlayouts'
import Activity from './pages/activity/Activity'
import ActivityDetail from './pages/activity/ActivityDetail'
import ActivitySignUp from './pages/activity/ActivitySignUp'
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
import OrderList from './pages/member/OrderList'
import OrderDetail from './pages/member/OrderDetail'
import ReserveConfirm from './pages/hotel/ReserveConfirm'
//引入頁面元件

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayouts />}>
          <Route index element={<HomePage />}></Route>
          <Route path="Header" element={<Header />}></Route>
          {/* product帶入type_id的quretString */}
          <Route path="/product/:typeID" element={<Product />}></Route>
          <Route
            path="/product/Detail/:product_id"
            element={<ProductDetail />}
          ></Route>
          <Route path="meals" element={<Meals />}></Route>
          <Route path="hotel/:typeID" element={<Hotel />}></Route>
          <Route path="reserve/:product_id" element={<Reserve />}></Route>
          <Route path="latestNews" element={<LatestNews />}></Route>
          <Route path="course" element={<Course />}></Route>
          <Route path="activity" element={<Activity />}></Route>
          <Route
            path="activitydetail/:activity_id"
            element={<ActivityDetail />}
          ></Route>
          <Route
            path="ActivitySignUp/:activity_id"
            element={<ActivitySignUp />}
          ></Route>
          <Route path="*" element={<NotFound />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<RegisterMember />} />
          <Route path="edit" element={<EditMember />} />
          <Route path="ForgetPassword" element={<ForgetPassword />} />
          <Route path="ResetPassword" element={<ResetPassword />} />
          <Route path="changePassword" element={<ChangePassword />} />
          <Route path="add" element={<AddPet />} />
          <Route path="orderList" element={<OrderList />} />
          <Route path="orderDetail/:order_id" element={<OrderDetail />} />
          <Route path="cart" element={<Cart />} />
          <Route path="CheckoutFlow" element={<CheckoutFlow />} />
          <Route path="Card" element={<Card />}></Route>

          <Route path="ReserveConfirm" element={<ReserveConfirm />}></Route>
          <Route path="index" element={<index />}></Route>

          {/* <Route path="form" element={<FormTemplate />}></Route> */}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
