import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import classes from "./RemoveButton.module.css"


export default function RemoveButton({...props}) {
    return (
        <FontAwesomeIcon {...props} className={classes["remove-button"]} icon={faTrash}/>
      )
}
