import React from 'react'
import Label from "../../../components/UI/label/Label"
import Input from '../../../components/UI/input/Input'
import Radio from '../../../components/UI/radio/Radio'
import deliveryTypePrices from '../../../utilities/deliveryTypeCosts'
import "../style.css"
import ErrorSpan from '../../../components/UI/ErrorSpan/ErrorSpan'


export default function OrderDelivery({ changeOrder, orderId, adress, errors }) {

    return (
        <li>
            <h3>Delivery</h3>
            <div>

                <div className="order-radio">

                    <Radio onChange={(event) => changeOrder(orderId, "delivery", { type: "postOffice", cost: deliveryTypePrices["postOffice"] })}
                        name={"delivery" + orderId}
                        defaultChecked={true} >
                        Pickup from our stores to post office
                    </Radio>

                    <form className="order-features-form">
                        <Label title={"City"}>
                            <Input
                                value={adress.city}
                                onChange={(event) => changeOrder(orderId, "adress", { ...adress, city: event.target.value })}
                                width={100}
                                type="text" />
                            {errors && <ErrorSpan>{errors["city"]}</ErrorSpan>}
                        </Label>
                        <Label title={"Street"}>
                            <Input
                                value={adress.street}
                                onChange={(event) => changeOrder(orderId, "adress", { ...adress, street: event.target.value })}
                                width={100}
                                type="text" />
                            {errors && <ErrorSpan>{errors["street"]}</ErrorSpan>}
                        </Label>
                    </form>
                </div>


                <div className="order-radio">
                    <Radio onChange={(event) => changeOrder(orderId, "delivery", { type: "courier", cost: deliveryTypePrices["courier"] })}
                        name={"delivery" + orderId}>
                        Сourier to your address
                    </Radio>

                    <form className="order-features-form">
                        <Label title={"City"}>
                            <Input
                                value={adress.city}
                                onChange={(event) => changeOrder(orderId, "adress", { ...adress, city: event.target.value })}
                                width={100}
                                type="text" />
                            {errors && <ErrorSpan>{errors["cityCourier"]}</ErrorSpan>}
                        </Label>
                        <Label title={"Street"}>
                            <Input
                                value={adress.street}
                                onChange={(event) => changeOrder(orderId, "adress", { ...adress, street: event.target.value })}
                                width={100}
                                type="text" />
                            {errors && <ErrorSpan>{errors["streetCourier"]}</ErrorSpan>}
                        </Label>
                        <Label title={"House"}>
                            <Input
                                value={adress.house}
                                onChange={(event) => changeOrder(orderId, "adress", { ...adress, house: event.target.value })}
                                width={100}
                                type="number" />
                            {errors && <ErrorSpan>{errors["houseCourier"]}</ErrorSpan>}
                        </Label>
                        <Label title={"Flat number"}>
                            <Input
                                value={adress.flat}
                                onChange={(event) => changeOrder(orderId, "adress", { ...adress, flat: event.target.value })}
                                width={100}
                                type="number" />
                        </Label>
                        {errors && <ErrorSpan>{errors["flatCourier"]}</ErrorSpan>}

                    </form>
                </div>
            </div>

        </li>
    )
}
