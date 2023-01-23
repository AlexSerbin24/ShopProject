import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil } from '@fortawesome/free-solid-svg-icons'
import classes from "./EditButton.module.css"


export default function EditButton({...props}) {
  return (
    <FontAwesomeIcon {...props} className={classes["edit-button"]} icon={faPencil}/>
  )
}
