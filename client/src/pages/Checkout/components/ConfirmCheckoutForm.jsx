import React from 'react'
import Button from '../../../components/UI/button/Button'
import OrderService from '../../../api/OrderService';
import  "../style.css";

export default function ConfirmCheckoutForm({ordersInfo, confirmCheckout}) {

    return (
        <div className="confirm-checkout">
            <h4>Together</h4>
            <dl>
                <dt>Price of {ordersInfo.productCount} products is</dt>
                <dd>{ordersInfo.productsPrice} $</dd>
            </dl>

            <dl>
                <dt>Cost of delivery</dt>
                <dd>{ordersInfo.deliveryCost} $</dd>
            </dl>

            <dl className="total-order-price">
                <dt>Total order price</dt>
                <dd>{ordersInfo.orderPrice} $</dd>
            </dl>
            <Button onClick={confirmCheckout} width={100}>Checkout</Button>
        </div>
    )
}
