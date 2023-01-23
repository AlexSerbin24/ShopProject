import React from 'react'
import Container from '../../components/UI/container/Container'
import RegisterForm from '../../components/UserForms/RegisterForm'
import { useNavigate, useLocation } from 'react-router-dom'
export default function Register() {
    const navigate = useNavigate();

    (useLocation())
    return (
        <Container className={"form-page"}>
            <div className={"form-container"}>
                <RegisterForm redirectToLogin={()=>navigate("/login")} />
            </div>
        </Container>
    )
}
