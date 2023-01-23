import React, { useEffect, useState } from 'react'
import EmptyCart from "./components/EmptyCart";
import CartLinesList from "./components/CartLinesList";
import Container from '../../components/UI/container/Container';
import getTotalPrice from '../../utilities/getTotalPrice'
import { useSelector } from 'react-redux';
import "./style.css"

export default function Cart() {
    
    const cart = useSelector(store=>store.cart.cartLines)
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        if (cart.length != 0)
            setTotalPrice(getTotalPrice(cart));
    }, [cart])


    return (
        <Container>
            <div className="cart-container">
                <h2>Cart</h2>
                {cart.length == 0 ?

                    <EmptyCart /> : <CartLinesList cart={cart} totalPrice={totalPrice} />
                }
            </div>
        </Container>
    )
}
