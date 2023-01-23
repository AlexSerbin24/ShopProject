import React from 'react'
import Button from '../../../../components/UI/button/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faWindowClose, faTruck } from '@fortawesome/free-solid-svg-icons'
import "../style.css"
export default function ChangeStatusButton({status, orderId, confirmCancelling, confirmDelivery, completeOrder}) {

    function changeStatusButton() {
        switch (status) {
            case "pending":
                return <Button className="orders-table-status-change-btn" onClick ={(event)=>confirmDelivery(orderId)}>Order is delivered <FontAwesomeIcon size='sm' icon={faTruck}/></Button>
            case "refunded":
                return <Button className="orders-table-status-change-btn" onClick ={(event)=>confirmCancelling(orderId)}>Cancel <FontAwesomeIcon size='sm' icon={faWindowClose}/></Button>
            case "delivered":
                return <Button className="orders-table-status-change-btn" onClick ={(event)=>completeOrder(orderId)}>Complete <FontAwesomeIcon size='sm' icon={faCheck}/></Button>
        }
    }
  return (
    changeStatusButton()
  )
}
