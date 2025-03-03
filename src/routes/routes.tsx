import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/home'; // Adjust the path as necessary
import ProductCategoryList from '../pages/productCategoryList';
import ProductDetails from '../pages/productDetails';
import CartProducts from '../pages/productCart';
import CheckoutProduct from '../pages/checkoutProduct';
import TrackOrder from '../pages/trackOrder';
import TrackOrderDeatils from '../pages/trackOrderDeatils';
import CheckoutOrder from '../pages/checkoutOrder';
import UserSignupPage from '../pages/userSignupPage';
import ForgetPasswordPage from '../pages/forgetPasswordPage';
import ResetPasswordPage from '../pages/resetPasswordPage';
import EmailVerificationPage from '../pages/emailVerificationPage';
import UserDashboardPage from '../pages/userDashboardPage';
import AdminDashBoardPage from '../pages/admin/adminDashboardPage';

function AppRoutes() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/category' element={<ProductCategoryList />} />
          <Route path='/product/details' element={<ProductDetails />} />
          <Route path='/product/cart' element={<CartProducts />} />
          <Route path='/product/checkout' element={<CheckoutProduct />} />
          <Route path='/product/track/order' element={<TrackOrder />} />
          <Route path='/product/track/order/details' element={<TrackOrderDeatils />} />
          <Route path='/product/checkout/order' element={<CheckoutOrder />} />
          <Route path='/user/signUp' element={<UserSignupPage />}/>
          <Route path='/user/signUp/forget/password' element={<ForgetPasswordPage />}/>
          <Route path='/user/signUp/reset/password' element={<ResetPasswordPage />}/>
          <Route path='/user/signUp/email/verification' element={<EmailVerificationPage />}/>
          <Route path='/user/dashboard' element={<UserDashboardPage />}/>
          <Route path='/admin/dashboard' element={<AdminDashBoardPage />}/>
        </Routes>
      </BrowserRouter>
    );
  }
export default AppRoutes;
