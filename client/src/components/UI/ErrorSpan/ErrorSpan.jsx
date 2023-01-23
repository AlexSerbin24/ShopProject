import React from 'react'
import classes from "./ErrorSpan.module.css"

export default function ErrorSpan({children}) {

    const spanClasses = [classes["error-text"]];
    if(children){
        spanClasses.push(classes["active"])
    }
  return (
    <span className={spanClasses.join(' ')}>{children}</span>
  )
}
