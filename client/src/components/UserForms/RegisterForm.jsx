import React, { useState, useEffect } from 'react'
import Button from "../UI/button/Button"
import Input from "../UI/input/Input"
import Label from "../UI/label/Label"
import "./style.css";
import Loading from '../Loading/Loading';
import ErrorSpan from '../UI/ErrorSpan/ErrorSpan'
import { useLocation, useNavigate, } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { register } from '../../slices/userSlice'

export default function RegisterForm({ redirectToLogin }) {

    const { isLoading} = useSelector(store=>store.user);
    const dispatch = useDispatch();
    const [errors, setErrors] = useState({})
    const [registerData, setRegisterData] = useState({ email: "", password: "", confirmPassword: "" });
    const location = useLocation();
    const navigate = useNavigate();


    function submitRegistration(event) {
        event.preventDefault();

        if (valideForm()) {
            dispatch(register(registerData))
            .unwrap()
            .then(()=>navigate(location.state?.from))
            .catch((error)=>setErrors({other:error.message}))
        }
    }

    function valideForm() {
        let errors = {};

        const { email, password, confirmPassword } = registerData;

        if (!email) {
            errors["email"] = "Email is not entered";
        }

        if (!password) {
            errors["password"] = "Password is not entered";
        }
        else if (password.length < 4) {
            errors["password"] = "Password must be more than 4 symbols";
        }

        if (!confirmPassword) {
            errors["confirmPassword"] = "Confrim your password";
        }
        else if (confirmPassword != password) {
            errors["confirmPassword"] = "You don't confirm your password";
        }

        setErrors(errors)

        return Object.keys(errors).length == 0
    }


    return (



        <form className='user-form' onSubmit={submitRegistration} >
            {isLoading && <Loading />}
            <ErrorSpan>{errors["other"]}</ErrorSpan>
            <Label title="Email">
                <Input width={100} type="text" value={registerData.email} onChange={(event) => { setRegisterData({ ...registerData, email: event.target.value }) }} />
                <ErrorSpan>{errors["email"]}</ErrorSpan>
            </Label>

            <Label title="Password" >
                <Input width={100} type="password" value={registerData.password} onChange={(event) => { setRegisterData({ ...registerData, password: event.target.value }) }} />
                <ErrorSpan>{errors["password"]}</ErrorSpan>
            </Label>

            <Label title="Confirm password">
                <Input width={100} type="password" value={registerData.confirmPassword} onChange={(event) => { setRegisterData({ ...registerData, confirmPassword: event.target.value }) }} />
                <ErrorSpan>{errors["confirmPassword"]}</ErrorSpan>
            </Label>

            <div className="form-btn-container">
                <Button width={100}>Register</Button>
                <a onClick={redirectToLogin} className="form-anchor">I have an account</a>
            </div>
        </form>

    )
}
