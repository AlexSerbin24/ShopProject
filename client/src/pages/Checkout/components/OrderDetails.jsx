import React from 'react'
import OrderHeader from './OrderHeader'

import OrderFeatures from './OrderFeatures'
export default function OrderDetails({order,adress, errors, changeOrder}) {
  return (
    <div>
        <OrderHeader orderNumber={order.id} price={order.cartLine.product.price}/>
        <OrderFeatures 
            cartLine = {order.cartLine}
            orderId = {order.id}
            adress = {adress}
            isPayed = {order.isPayed}
            changeOrder={changeOrder}
            errors={errors}
        />

    </div>
  )
}
