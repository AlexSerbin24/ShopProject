import React from 'react'
import '../style.css'
export default function OrderTrackingPoint({status, isCompleted}) {
    const pointClasses = ['order-tracking'];
    if (isCompleted) {
        pointClasses.push('is-completed');
    }
    return (
        <div className={pointClasses.join(' ')}>
            <p>{status}</p>
        </div>
    )
}
