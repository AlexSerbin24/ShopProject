import React from 'react'
import '../style.css'

export default function OrderTrackingPath({ isCompleted, isShort }) {

    const pathClasses = [];
    if (isCompleted) {
        pathClasses.push('is-completed');
    }

    if(isShort){
        pathClasses.push('order-tracking-path-short');
    }else{
        pathClasses.push('order-tracking-path');
    }
    return (
        <div className={pathClasses.join(' ')}></div>
    )
}
