import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import MainLayouts from './layouts/Mainlayouts'
import Activity from './pages/activity/Activity'
import ActivityDetail from './pages/activity/ActivityDetail'
import ActivitySignUp from './pages/activity/ActivitySignUp'
import SignUpSheet from './pages/activity/SignUpSheet'
import SignUpSheetDetail from './pages/activity/SignUpSheetDetail'
import Course from './pages/course/Course'
import CourseSearch from './pages/course/CourseSearch'
import CourseDetail from './pages/course/CourseDetail'
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
import Cart from './pages/cart/Cart'
import Card from './template/Card'
import Header from './layouts/header'
import index from './template'
// import FormTemplate from './template/form'
import CheckoutFlow from './pages/checkoutflow/CheckoutFlow'
import OrderList from './pages/member/OrderList'
import OrderDetail from './pages/member/OrderDetail'
import ReserveConfirm from './pages/hotel/ReserveConfirm'
import ActivityRecord from './pages/member/ActivityRecord'
import MyList from './pages/member/MyList'
//引入頁面元件

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayouts />}>
          <Route index element={<HomePage />}></Route>
          <Route path="Header" element={<Header />}></Route>
<<<<<<< HEAD
          <Route path="meals/:typeID" element={<Meals />}></Route>
          // <Route path="Food" element={<Food />}></Route>
          // <Route path="Food1/:typeID" element={<Food1 />}></Route>
          // <Route path="Drinks" element={<Drinks />}></Route>
          // <Route path="Dog" element={<Dog />}></Route>
          // <Route path="Cat" element={<Cat />}></Route>
          <Route
            path="MealsDetail/:product_id"
            element={<MealsDetail />}
          ></Route>
=======
>>>>>>> 2ac196aac3155a1a1fae81c9e51b77739a95fc09
          {/* product帶入type_id的quretString */}
          <Route path="/product/:typeID" element={<Product />}></Route>
          <Route
            path="/product/Detail/:product_id"
            element={<ProductDetail />}
          ></Route>
          <Route path="meals" element={<Meals />}></Route>
          <Route path="hotel/:typeID" element={<Hotel />}></Route>
<<<<<<< HEAD
          <Route path="/reserve/:product_id" element={<Reserve />}></Route>
=======
          <Route path="reserve/:product_id" element={<Reserve />}></Route>
>>>>>>> 2ac196aac3155a1a1fae81c9e51b77739a95fc09
          <Route path="latestNews" element={<LatestNews />}></Route>
          <Route path="course" element={<Course />}></Route>
          <Route path="courseSearch/:typeID" element={<CourseSearch />}></Route>
          <Route
            path="courseDetail/:product_id"
            element={<CourseDetail />}
          ></Route>
          <Route path="activity" element={<Activity />}></Route>
          <Route
            path="activitydetail/:activity_id"
            element={<ActivityDetail />}
          ></Route>
          ActivityForm
          <Route
            path="ActivitySignUp/:activity_id"
            element={<ActivitySignUp />}
          ></Route>
          <Route path="SignUpSheet" element={<SignUpSheet />}></Route>
          <Route
            path="SignUpSheetDetail/:activityform_id"
            element={<SignUpSheetDetail />}
          ></Route>
          <Route path="*" element={<NotFound />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<RegisterMember />} />
          <Route path="edit" element={<EditMember />} />
          <Route path="ForgetPassword" element={<ForgetPassword />} />
          <Route path="ResetPassword" element={<ResetPassword />} />
          <Route path="changePassword" element={<ChangePassword />} />
          <Route path="activityRecord" element={<ActivityRecord />} />
          <Route path="orderList" element={<OrderList />} />
          <Route path="orderDetail/:order_id" element={<OrderDetail />} />
          <Route path="myList" element={<MyList />} />
          <Route path="cart" element={<Cart />} />
          <Route path="CheckoutFlow" element={<CheckoutFlow />} />
          <Route path="Card" element={<Card />}></Route>
<<<<<<< HEAD
          <Route path="ReserveConfirm" element={<ReserveConfirm />}></Route>
          <Route path="index" element={<index />}></Route>
=======

          <Route path="ReserveConfirm" element={<ReserveConfirm />}></Route>
          <Route path="index" element={<index />}></Route>

>>>>>>> 2ac196aac3155a1a1fae81c9e51b77739a95fc09
          {/* <Route path="form" element={<FormTemplate />}></Route> */}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
