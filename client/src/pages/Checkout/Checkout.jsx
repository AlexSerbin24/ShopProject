import React, { useState, useEffect } from 'react';
import Container from '../../components/UI/container/Container'
import CustomerForm from './components/CustomerForm';
import OrderDetails from "./components/OrderDetails"
import ConfirmCheckoutForm from './components/ConfirmCheckoutForm';
import { getTotalCartCount } from '../../utilities/getTotalCartCount';
import getTotalPrice from '../../utilities/getTotalPrice';
import OrderService from '../../api/OrderService';
import getTotalDeliveryCost from '../../utilities/getTotalDeliveryCost';
import { useFetching } from '../../utilities/hooks/useFetching';
import "./style.css";
import Loading from '../../components/Loading/Loading';
import Gratitude from './components/Gratitude';
import { useSelector, useDispatch } from "react-redux"
import { clearCart } from '../../slices/cartSlice';
import EmptyCartInCheckout from './components/EmptyCartInCheckout';

export default function Checkout() {
    const cart = useSelector(store => store.cart.cartLines)
    const dispatch = useDispatch()
    const { user } = useSelector(store => store.user);
    const [customer, setCustomer] = useState({ name: '', lastName: '', phoneNumber: '', user: user.id });
    const [orders, setOrders] = useState([]);
    const [ordersInfo, setOrdersInfo] = useState({
        productCount: 0,
        productsPrice: 0,
        deliveryCost: 0,
        orderPrice: 0.
    })

    const [customerErrors, setCustomerErrors] = useState({})
    const [orderErrors, setOrderErrors] = useState([]);
    const [isCheckoutEnded, setIsCheckoutEnded] = useState(false)

    const [fetchAddOrders, load] = useFetching(async (customer, orders) => {
        await OrderService.addOrders(customer, orders)
    })

    useEffect(() => {
        let ordersArr = [];
        let orderId = 1;
        cart.forEach(cartLine => {
            ordersArr.push(
                {
                    cartLine,
                    id: orderId,
                    delivery: {
                        type: "postOffice",
                        cost: 0
                    },

                    adress: { city: "", street: "", house: 0, flat: 0 },
                    isPayed: false,
                })
            orderId++;
        });



        setOrders(ordersArr);
    }, [])


    useEffect(() => {
        const deliveryCost = getTotalDeliveryCost(orders);
        const orderPrice = Number(deliveryCost) + Number(ordersInfo.productsPrice);
        const productCount = getTotalCartCount(cart);
        const productsPrice = getTotalPrice(cart);

        setOrdersInfo({
            productCount, productsPrice,
            deliveryCost, orderPrice
        })

    }, [orders]);





    function changeOrder(orderId, property, propertyValue) {
        let cloneOrders = [...orders];
        let order = cloneOrders.find(order => order.id == orderId);
        order[property] = propertyValue;
        setOrders(cloneOrders);
    }

    function changeCustomer(cutomerProp, propValue) {
        let cloneCustomer = { ...customer }
        cloneCustomer[cutomerProp] = propValue;

        setCustomer(cloneCustomer);
    }

    function validateCustomerForm() {
        let errors = {};
        if (!customer.name) {
            errors["name"] = "Name is not entered";
        }

        if (!customer.lastName) {
            errors["lastName"] = "Last name is not entered";
        }

        if (!customer.phoneNumber) {
            errors["phoneNumber"] = "Phone number is not entered";
        }

        setCustomerErrors(errors);

        return Object.keys(errors).length == 0
    }


    function validateOrders() {
        let orderErrors = [];
        orders.forEach(order => {
            let errors = { orderId: order.id };

            const { city, street, house, flat } = order.adress;

            switch (order.delivery.type) {
                case "postOffice":

                    if (!city) {
                        errors["city"] = "City is not entered";
                    }

                    if (!street) {
                        errors["street"] = "Street is not entered";
                    }
                    break;

                case "courier":

                    if (!city) {
                        errors["cityCourier"] = "City is not entered";
                    }

                    if (!street) {
                        errors["streetCourier"] = "Street is not entered";
                    }

                    if (!house) {
                        errors["houseCourier"] = "House is not entered";
                    }

                    if (!flat) {
                        errors["flatCourier"] = "Flat is not entered";
                    }

                    break;

                default:
                    break;
            }

            if (Object.keys(errors).length > 1) {
                orderErrors.push(errors);
            }
        })

        setOrderErrors(orderErrors);

        return orderErrors.length == 0;
    }


    async function confirmCheckout() {

        let isCustomerValid = validateCustomerForm();
        let isOrdersValid = validateOrders();

        if (isCustomerValid && isOrdersValid) {
            let result = await fetchAddOrders(customer, orders);
            if (result.isSucceed) {
                setIsCheckoutEnded(true);
                dispatch(clearCart());
            }
        }
    }

    return (
        <Container>
            {isCheckoutEnded ? <Gratitude /> :
                cart.length == 0 ?
                    <EmptyCartInCheckout />
                    :
                    <>
                        {load && <Loading />}
                        <div className="checkout-container">
                            <div className="order-information">
                                <CustomerForm customer={customer} changeCustomer={changeCustomer} errors={customerErrors} />
                                {orders.map((order) =>
                                    <OrderDetails
                                        key={order.id}
                                        order={order}
                                        adress={order.adress}
                                        changeOrder={changeOrder}
                                        errors={orderErrors.find(errors => errors.orderId == order.id)}
                                    />
                                )}
                            </div>

                            <ConfirmCheckoutForm confirmCheckout={confirmCheckout} ordersInfo={ordersInfo} />
                        </div>
                    </>
            }
        </Container>
    )
}
