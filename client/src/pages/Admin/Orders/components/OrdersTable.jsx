import React from 'react'
import Table from '../../../../components/UI/Table/Table'
import ChangeStatusButton from './ChangeStatusButton'

export default function OrdersTable({ orders, changeStatus }) {

    return (
        <Table>
            <thead>
                <tr>
                    <th>Product</th>
                    <th>Customer</th>
                    <th>Phone</th>
                    <th>Adress</th>
                    <th>Date</th>
                    <th style={{ textAlign: "center" }}>Order price</th>
                    <th style={{ textAlign: "center" }}>Status</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {orders.length == 0 ? <tr><td style={{ textAlign: "center" }} colSpan={7}>There are no orders</td></tr>
                    :
                    orders.map(order =>
                        <tr key={order.id}>
                            <td>{order.productTitle}</td>
                            <td>{order.customer}</td>
                            <td>{order.phoneNumber}</td>
                            <td>{order.adress}</td>
                            <td>{order.date}</td>
                            <td style={{ textAlign: "center" }}>{order.orderPrice}$</td>
                            <td>
                                <div className={`orders-table-status orders-table-${order.status}-status`}>{order.status}</div>
                            </td>
                            <td>
                                <ChangeStatusButton
                                    status={order.status}
                                    completeOrder={() => changeStatus(order.id, "completed")}
                                    confirmCancelling={() => changeStatus(order.id, "cancelled")}
                                    confirmDelivery={() => changeStatus(order.id, "delivered")}
                                />
                            </td>
                        </tr>
                    )

                }
            </tbody>
        </Table>
    )
}
