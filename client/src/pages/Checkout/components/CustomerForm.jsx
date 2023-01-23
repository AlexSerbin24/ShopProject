import React, { useEffect } from 'react'
import Label from "../../../components/UI/label/Label"
import Input from '../../../components/UI/input/Input'
import  "../style.css";
import ErrorSpan from '../../../components/UI/ErrorSpan/ErrorSpan';

export default function CustomerForm({customer, changeCustomer, errors}) {

    
    return (
        <form>
            <div className="customer-form-name">
                <Label title={"Name"}>
                    <Input value={customer.name} onChange={(event)=>{changeCustomer("name", event.target.value)}} width={100} type="text" />
                    { errors &&<ErrorSpan>{errors["name"]}</ErrorSpan>}
                </Label>
                <Label title={"Last name"}>
                    <Input value={customer.lastName} onChange={(event)=>{changeCustomer("lastName", event.target.value)}} width={100} type="text" />
                    { errors &&<ErrorSpan>{errors["lastName"]}</ErrorSpan>}
                </Label>
            </div>
            <Label title={"Phone number"}>
                <Input  value={customer.phoneNumber} onChange={(event)=>{changeCustomer("phoneNumber", event.target.value)}} width={100} type="phone" />
                { errors &&<ErrorSpan>{errors["phoneNumber"]}</ErrorSpan>}
            </Label>
        </form>
    )
}
