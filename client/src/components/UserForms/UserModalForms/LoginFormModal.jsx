import React, { useEffect } from 'react'
import Modal from '../../UI/modal/Modal';
import { useSelector } from 'react-redux';
import LoginForm from '../LoginForm'
import'../style.css'

export default function LoginFormModal({ isVisible, setLoginFormModal, redirectToRegister }) {

    const {user} = useSelector(store=>store.user);

    useEffect(() => {
        if (user && isVisible) {
            setLoginFormModal(false);
        }
    }, [user])



    return (
        <Modal className="modal-user-form" title="Login" isVisible={isVisible} setModal={setLoginFormModal}>
            <LoginForm redirectToRegister={redirectToRegister} />
        </Modal>
    )
}
