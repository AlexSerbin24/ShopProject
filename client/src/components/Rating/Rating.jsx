import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import "./style.css";


export default function Rating({ rating, ...props }) {
    const classes =  ["star-rating" ];

    if(props.className){
        classes.push(props.className)
    }
    return (
        <div className={classes.join(' ')} {...props} >
            <div className="back-stars">
                <FontAwesomeIcon icon={faStar} id='rating-20' />
                <FontAwesomeIcon icon={faStar} id='rating-40' />
                <FontAwesomeIcon icon={faStar} id='rating-60' />
                <FontAwesomeIcon icon={faStar} id='rating-80' />
                <FontAwesomeIcon icon={faStar} id='rating-100' />

                <div className="front-stars" style={{ width: `${rating}%` }}>
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                </div>
            </div>
        </div>

    )
}
