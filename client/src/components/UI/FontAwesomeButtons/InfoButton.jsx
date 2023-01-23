import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import classes from "./InfoButton.module.css"


export default function InfoButton({...props}) {
  return (
    <FontAwesomeIcon {...props} className={classes["info-button"]} icon={faEye}/>
  )
}
