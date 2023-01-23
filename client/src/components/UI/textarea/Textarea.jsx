import React from 'react'
import classes from "./Textarea.module.css"

export default function Textarea({...props}) {
  return (
    <textarea wrap='hard' {...props} className={classes["app-textarea"]} />
  )
}
