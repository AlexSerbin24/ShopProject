import React, { useState,useEffect } from 'react'
import Button from "../UI/button/Button"
import { faCartShopping } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import  "./style.css"
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { getTotalCartCount } from '../../utilities/getTotalCartCount'

export default function CartButton() {
    const cart = useSelector(store=>store.cart.cartLines)
    const [count, setCount] = useState(0)

    useEffect(() => {
      setCount(getTotalCartCount(cart));
    }, [cart])
    

    return (
        <div className="cart-btn">
            <Link to="/cart">
                <Button >
                    <span>{<FontAwesomeIcon icon={faCartShopping} />}</span>
                    <span className="cart-img">Cart</span>
                    <span className="items-count">{count}</span>
                </Button>
            </Link>
        </div>
    )
}
