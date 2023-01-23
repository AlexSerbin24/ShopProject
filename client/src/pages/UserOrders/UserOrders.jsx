import React, { useState, useEffect } from 'react'
import { useFetching } from '../../utilities/hooks/useFetching';
import OrderService from '../../api/OrderService';
import Container from '../../components/UI/container/Container'
import Loading from '../../components/Loading/Loading';
import ContainerImg from '../../components/UI/ContainerImg/ContainerImg';
import Button from '../../components/UI/button/Button';
import unknownProduct from "../../components/img/unknownProduct.png";
import OrderTracking from './components/OrderTracking';
import { useSelector } from 'react-redux';
import './style.css'

export default function UserOrders() {
  const [orders, setOrders] = useState([]);
  const {user} = useSelector(store => store.user)

  const [fetchOrders, loadOrders] = useFetching(async (userId) => {
    let orders = await OrderService.getUserOrders(userId);
    setOrders(orders);
  })

  const [fetchCancelOrder, loadCancelling] = useFetching(async (orderId) => {
    let order = await OrderService.changeOrderStatus(orderId, "refunded");

    const cloneOrders = [...orders];

    let updatedOrder = cloneOrders.find(order => order.id == orderId);
    updatedOrder.status = order.status;

    setOrders(cloneOrders);

  })

  useEffect(() => {
    fetchOrders(user.id);
  }, [])

  return (
    <Container>
      {loadOrders || loadCancelling ?
        <Loading />
        :
        <>
          <h2 style={{ textAlign: "center", fontSize:30 }}>My orders</h2>
          {
            orders.length == 0 ?
              <h2>There are no orders</h2>
              :

              orders.map(order =>
                <div key={order.id}>
                  <div className='user-order-line'>
                    <div className='user-order-product-img'>
                      <ContainerImg img={order.productImg ? order.productImg : unknownProduct} />
                    </div> {/*Фото*/}

                    <div className='user-order-product'>
                      <div>
                        <h3>{order.productTitle}</h3>
                      </div> {/*Название*/}
                      <div>
                        <p>Price: {order.orderPrice}</p>
                        <p>Quantity: {order.quantity}</p>
                      </div> {/*Цена и колво*/}
                    </div>


                    <div>
                      <h3>Status:</h3>
                      <p className='user-order-status'>{order.status}</p>
                      {order.status == "pending" && <Button className="cancel-order-btn" onClick={async(event) => await fetchCancelOrder(order.id)}>Cancel order</Button>}
                    </div> {/*Статус*/}

                    <div>
                      <h3>Order date:</h3>
                      <p>{order.date}</p>
                    </div>

                  </div>

                  <div>
                    <OrderTracking status={order.status} />
                  </div>
                </div>

              )
          }
        </>
      }
    </Container >
  )
}
