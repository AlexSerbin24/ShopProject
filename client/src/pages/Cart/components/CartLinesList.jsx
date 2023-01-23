import React from 'react'
import CartLine from './CartLine'
import TotalPrice from './TotalPrice'
import "../style.css"

export default function CartLinesList({cart, totalPrice}) {

  return (
    <div className="cart-lines-container">
    {
        cart.map((cartLine) =>
            <CartLine key={cartLine.product.id} cartLine = {cartLine}/>
        )}
        <TotalPrice totalPrice={totalPrice}/>
</div>
  )
}
