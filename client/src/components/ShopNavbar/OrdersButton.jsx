import React from 'react'
import Button from '../UI/button/Button';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList } from '@fortawesome/free-solid-svg-icons';
import "./style.css";

export default function OrdersButton() {
    return (
        <Link className="orders-btn" to="/myorders">
            <Button>
                <span>{<FontAwesomeIcon icon={faList} />}</span>
            </Button>
        </Link>
    )
}
