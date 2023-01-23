import React from 'react'
import "../style.css"
import OrderTrackingPath from './OrderTrackingPath'
import OrderTrackingPoint from './OrderTrackingPoint'
export default function OrderTracking({ status }) {

    const isRefunded = status == "refunded";
    const isCancelled = status == "cancelled"
    const isDelivered = status == "delivered";
    const isCompleted = status == "completed";




    return (
        <div className='order-tracking-container'>
            {isRefunded || isCancelled ?
                <>
                    <OrderTrackingPoint isCompleted={isRefunded || isCancelled} status="Refunded"/>


                    <OrderTrackingPath isCompleted={ isCancelled} />
                    <OrderTrackingPoint isCompleted={isCancelled} status="Cancelled" />

                </>
                :
                <>

                    <OrderTrackingPoint isCompleted={true} status="Pending" />


                    <OrderTrackingPath isShort={true} isCompleted={isDelivered || isCompleted} />
                    <OrderTrackingPoint isCompleted={isDelivered || isCompleted} status="Delivered" />

                    <OrderTrackingPath isShort={true} isCompleted={isCompleted} />
                    <OrderTrackingPoint isCompleted={isCompleted} status="Completed" />
                </>
            }
        </div>
    )
}
