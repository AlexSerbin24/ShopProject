import React from 'react'
import  "../style.css";

export default function OrderHeader({orderNumber, price}) {
    return (
        <div className="order-header">
            <h3>Order {orderNumber}</h3>
            <p>Price: {price} $</p>
        </div >
    )
}
