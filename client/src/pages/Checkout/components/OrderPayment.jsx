import React, {useState} from 'react'
import Button from '../../../components/UI/button/Button';
import Label from '../../../components/UI/label/Label';
import Input from '../../../components/UI/input/Input';
import Radio from "../../../components/UI/radio/Radio";
import "../style.css";
export default function OrderPayment({ isPayed, changeOrder, orderId }) {
    const [card, setCard] = useState('');
    return (
        <li>
            <h3>Payment</h3>
            {isPayed ? <h4>Payed</h4> :
                <div>
                    <div className="order-radio">
                        <Radio name={"payment" + orderId} defaultChecked={true}>Payment upon receipt of goods</Radio>
                    </div>
                    <div className="order-radio">
                        <Radio name={"payment" + orderId}>Payment now</Radio>
                        <form onSubmit={
                            (event) => {
                                event.preventDefault();
                                changeOrder(orderId, "isPayed", true);
                            }
                        }
                            className="order-features-form">
                            <Label title={"Card"}>
                                <Input value={card} onChange={(event)=>setCard(event.target.value)} width={100} type="number" />
                                <Button style={{ marginTop: 10 }}>Pay</Button>
                            </Label>
                        </form>
                    </div>
                </div>
            }
        </li>
    )
}
