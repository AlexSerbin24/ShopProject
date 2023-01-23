import React, { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import Button from "../UI/button/Button"
import Input from "../UI/input/Input"
import Label from "../UI/label/Label"
import "./style.css";
import ErrorSpan from '../UI/ErrorSpan/ErrorSpan'
import Loading from '../Loading/Loading'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../../slices/userSlice'

export default function LoginForm({ redirectToRegister }) {

    const { isLoading } = useSelector(store => store.user);
    const dispatch = useDispatch();
    const [loginData, setLoginData] = useState({ email: '', password: '' });
    const [errors, setErrors] = useState({})


    const navigate = useNavigate();
    const location = useLocation();

    function valideForm() {
        let errors = {};

        const { email, password } = loginData;

        if (!email) {
            errors["email"] = "Email is not entered";
        }

        if (!password) {
            console.log("Password is not entered:")
            console.log(password)
            errors["password"] = "Password is not entered";
        }

        setErrors(errors)

        return Object.keys(errors).length == 0
    }

    function submitLogin(event) {
        event.preventDefault();

        if (valideForm()) {
            dispatch(login(loginData))
            .unwrap()
            .then(()=>navigate(location.state?.from))
            .catch((error)=>setErrors({other:error.message}))
        }

    }

    return (


        <form className='user-form' onSubmit={submitLogin}>
            {isLoading && <Loading />}
            <ErrorSpan>{errors["other"]}</ErrorSpan>
            <Label title="Email">
                <Input width={100} type="text" value={loginData.email} onChange={(event) => { setLoginData({ ...loginData, email: event.target.value }) }} />
                <ErrorSpan>{errors["email"]}</ErrorSpan>
            </Label>

            <Label title="Password">
                <Input width={100} type="password" value={loginData.password} onChange={(event) => { setLoginData({ ...loginData, password: event.target.value }) }} />
                <ErrorSpan>{errors["password"]}</ErrorSpan>
            </Label>
            <div className="form-btn-container">
                <Button width={100}>Login</Button>
                <a onClick={redirectToRegister} className="form-anchor">Register</a>
            </div>
        </form>

    )
}
