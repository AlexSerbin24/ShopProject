import React from 'react'
import classes from "./Select.module.css"
export default function Select({children, ...props}) {
  return (
    <select className={classes["app-select"]} {...props}>
        {children}
    </select>
  )
}
