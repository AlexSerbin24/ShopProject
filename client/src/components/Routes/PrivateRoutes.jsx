import React from 'react'
import {  Route, useLocation } from 'react-router-dom'
import RequireAuth from './RequireAuth'
import Admin from '../../pages/Admin/Admin'
import Checkout from '../../pages/Checkout/Checkout'
export default function PrivateRoutes(props) {
    console.log(useLocation());
    return (

        <Route element={<RequireAuth />}>
            <Route path='/checkout' element={<Checkout cart={props.cart} setCart={props.setCart} />} />
            <Route path='/admin/products/page=:page' element={<Admin />} />
            <Route path='/admin/products/title=:title/page=:page' element={<Admin />} />
            <Route path='/admin/products/category=:category/page=:page' element={<Admin />} />
            <Route path='/admin/products/category=:category/title=:title/page=:page' element={<Admin />} />
        </Route>
    )
}
