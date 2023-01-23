import React from 'react'
import Button from '../Button'
import { useDispatch, useSelector } from 'react-redux'
import { updateCartLine, addToCart } from '../../../../slices/cartSlice';
export default function AddToCartButton({ product }) {

    const cart = useSelector(store => store.cart.cartLines);
    const dispatch = useDispatch();


    function buttonHandleClick(product) {
        const cartLine = cart.find(cartLine => cartLine.product.id == product.id)
        if(cartLine){ 
            dispatch(updateCartLine({ productId: product.id, count: cartLine.count + 1 }))
        }
        else{
            dispatch(addToCart(product))
        }
    }
    return (
        <Button onClick={(event) => { buttonHandleClick(product) }}>
            Add to cart
        </Button>
    )
}
