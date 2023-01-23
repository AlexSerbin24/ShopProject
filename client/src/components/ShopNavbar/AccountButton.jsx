import React from 'react'
import Button from '../UI/button/Button';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import "./style.css";

export default function AccountButton({setLoginFormModal}) {
    return (
        <Button onClick={(event)=>{setLoginFormModal(true)}} className="account-btn">
            <span>{<FontAwesomeIcon icon={faUser} />}</span>
        </Button>
    )
}
