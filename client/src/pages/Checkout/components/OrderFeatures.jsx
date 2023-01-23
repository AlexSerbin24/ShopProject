import React from 'react'
import OrderProduct from './OrderProduct';
import OrderDelivery from './OrderDelivery';
import OrderPayment from './OrderPayment';
import  "../style.css";

export default function OrderFeatures({cartLine, orderId, adress, isPayed, changeOrder,errors}) {
  return (
    <ul className="order-features">
        <OrderProduct cartLine = {cartLine}/>
        <OrderDelivery 
          changeOrder = {changeOrder}  
          orderId = {orderId} 
          adress={adress}
          errors={errors}/>
        <OrderPayment isPayed={isPayed} changeOrder={changeOrder} orderId = {orderId}/>
    </ul>
  )
}
