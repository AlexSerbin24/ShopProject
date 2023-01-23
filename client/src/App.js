import React, { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductList from './pages/Products/Products';
import ProductPage from './pages/Product/Product';
import ShopNavbar from './components/ShopNavbar/ShopNavbar';
import ShopHeader from './components/ShopHeader/ShopHeader';
import Cart from './pages/Cart/Cart';
import Checkout from './pages/Checkout/Checkout';
import Footer from './components/UI/Footer/Footer';
import "./App.css";
import Admin from './pages/Admin/Products/Admin';
import RequireAuth from './components/Routes/RequireAuth';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Contact from './pages/Contact/Contact';
import LoginFormModal from './components/UserForms/UserModalForms/LoginFormModal';
import RegisterFormModal from './components/UserForms/UserModalForms/RegisterFormModal';
import Login from './pages/LoginRegister/Login';
import Register from './pages/LoginRegister/Register';
import UserOrders from './pages/UserOrders/UserOrders';
import RequireAdminRole from './components/Routes/RequireAdminRole';
import AccessDenied from './pages/AccessDenied/AccessDenied';
import { useDispatch } from 'react-redux';
import { checkAuth } from './slices/userSlice';
import Orders from './pages/Admin/Orders/Orders';


export function App() {


  const dispatch = useDispatch();


  const [loginFormModal, setLoginFormModal] = useState(false)
  const [registerFormModal, setRegisterFormModal] = useState(false);




  useEffect(() => {
    dispatch(checkAuth());
  }, [])


  function changeUserModal() {
    setLoginFormModal(!loginFormModal);
    setRegisterFormModal(!registerFormModal);
  }

  return (
    <BrowserRouter>

      <LoginFormModal isVisible={loginFormModal} setLoginFormModal={setLoginFormModal} redirectToRegister={changeUserModal} />
      <RegisterFormModal isVisible={registerFormModal} setRegisterFormModal={setRegisterFormModal} redirectToLogin={changeUserModal} />

      <ShopHeader />
      <ShopNavbar setLoginFormModal={setLoginFormModal} />

      <Routes>
        <Route path='/' element={<ProductList />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/products' element={<ProductList />} />
        <Route path='/products/page=:page' element={<ProductList />} />
        <Route path='/products/category=:category/page=:page' element={<ProductList />} />
        <Route path='/products/text=:text/page=:page' element={<ProductList />} />

        <Route path='/products/text=:text/category=:category/page=:page' element={<ProductList />} />

        <Route path='/product/:id' element={<ProductPage />} />
        <Route path='/cart' element={<Cart />} />


        <Route element={<RequireAuth />}>
          <Route path="/myorders" element={<UserOrders />} />
          <Route path='/checkout' element={<Checkout />} />

          <Route element={<RequireAdminRole />}>
            <Route path='/admin/orders/page=:page' element={<Orders />} />
            <Route path='/admin/products/page=:page' element={<Admin />} />
            <Route path='/admin/products/text=:text/page=:page' element={<Admin />} />
            <Route path='/admin/products/category=:category/page=:page' element={<Admin />} />
            <Route path='/admin/products/text=:text/category=:category/page=:page' element={<Admin />} />
          </Route>
        </Route>

        <Route path='/accessDenied' element={<AccessDenied />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
