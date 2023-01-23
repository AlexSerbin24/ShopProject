import React, { useState } from 'react'
import Navbar from '../UI/Navbar/Navbar'
import Nav from '../UI/Navbar/Nav'
import NavItem from "../UI/Navbar/NavItem"
import DropdownNavItem from '../UI/Navbar/DropdownNavItem'
import ProductSearchBar from './ProductSearchBar'
import CartButton from './CartButton'
import { useLocation, useNavigate } from 'react-router-dom'
import Categories from './Categories'
import AccountButton from './AccountButton'
import OrdersButton from './OrdersButton'
import Button from '../UI/button/Button'
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../../slices/userSlice'
export default function ShopNavbar({ setLoginFormModal }) {

  const [text, setText] = useState("");

  const { user } = useSelector(store => store.user);
  const dispatch = useDispatch();

  const currentPath = useLocation().pathname;

  const navigate = useNavigate();

  const changeText = (value) => {
    setText(value);
  }

  const searchProducts = () => {
    if (text) {
      navigate(`/products/text=${text}/page=1`);
    }

  }

  return (
    <Navbar>
      <Nav>
        <NavItem href={"/"} title={"Product list"} isActive={currentPath == "/" || (currentPath.includes("products/") && !currentPath.includes("admin"))} />
        <NavItem href={"/admin/products/page=1"} title={"Admin"} isActive={(currentPath.includes("products/") || currentPath.includes("orders/") ) && currentPath.includes("admin")} />
        <NavItem href={"/contact"} title={"Contact"} isActive={currentPath.includes("/contact")} />
        <DropdownNavItem title={"Category"}>
          <Categories text={text} />
        </DropdownNavItem>
      </Nav>
      <ProductSearchBar text={text} changeText={changeText} searchProducts={searchProducts} />
      <div className='navbar-right-part'>
        {user ? <OrdersButton /> : <AccountButton setLoginFormModal={setLoginFormModal} />}
        <CartButton />
        {user && <Button className="logout-btn" onClick={async (event) => { await dispatch(logout()).unwrap() }}>Logout</Button>}
      </div>
    </Navbar>
  )
}
