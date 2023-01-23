import React from 'react'
import ContainerImg from '../../../components/UI/ContainerImg/ContainerImg';
import emptyCart from '../../../components/img/emptyCart.png';
import '../style.css'

export default function EmptyCart() {
    return (
        <div>
            <div className="empty-cart-img">
                <ContainerImg img={emptyCart} />
            </div>
            <h3 className='empty' style={{ textAlign: "center" }}>Cart is empty</h3>
        </div>
    )
}
