import React, {useEffect } from 'react'
import Modal from '../../UI/modal/Modal';
import { useSelector } from 'react-redux';
import RegisterForm from '../RegisterForm'
import '../style.css'
export default function RegisterFormModal({ isVisible, setRegisterFormModal, redirectToLogin }) {


    const {user} = useSelector(store=>store.user);

    useEffect(() => {
        if (user && isVisible) {
            setRegisterFormModal(false);
        }
    }, [user])


    return (

        <Modal className="modal-user-form" title="Register" isVisible={isVisible} setModal={setRegisterFormModal}>
            <RegisterForm redirectToLogin={redirectToLogin}/>
        </Modal>

    )
}
