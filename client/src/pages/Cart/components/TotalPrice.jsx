import React from 'react'
import Button from '../../../components/UI/button/Button'
import { Link } from 'react-router-dom'
import "../style.css"

export default function TotalPrice({ totalPrice }) {
    return (
        <div className="total-price-container">
            <span className='total-price'>{totalPrice}$</span>
            <Link to={"/checkout"}>
                <Button className="checkout-btn">Checkout</Button>
            </Link>
        </div>
    )
}
