import React from 'react'
import Container from '../../components/UI/container/Container'
import LoginForm from '../../components/UserForms/LoginForm'
import { useLocation, useNavigate } from 'react-router-dom'
import "./style.css"
export default function Login() {
    const navigate = useNavigate();
    const {state} = useLocation();
    return (
        <Container className = {"form-page"}>
            <div className = {"form-container"}>

                <LoginForm redirectToRegister={()=>navigate("/register", {state:state})} />

            </div>
        </Container>
    )
}
