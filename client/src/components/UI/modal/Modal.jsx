import React, { useState } from 'react'
import classes from "./Modal.module.css";

export default function Modal({ children, title, isVisible, setModal, className }) {
    
    const modalRootClasses = [classes["modal"]];
    const modalClasses = [classes["modal-body"]];

    if(isVisible){
        modalRootClasses.push(classes["active"]);
    }

    if(className){
        modalClasses.push(className);
    }
    function closeModal(event){
        setModal(false);
    }
    

    return (
        <div className={modalRootClasses.join(' ')} onClick={closeModal}>
            <div className={modalClasses.join(' ')} onClick={(event)=>event.stopPropagation()}>
                <div className={classes["modal-header"]}>{title}</div>
                <div className={classes['modal-content']}>
                    {children}
                </div>
            </div>
        </div>
    )
}
