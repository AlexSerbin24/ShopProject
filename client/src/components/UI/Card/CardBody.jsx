import React from 'react'
import classes from "./CardBody.module.css"

export default function CardBody({ children, ...props }) {

  const bodyClasses = [classes["card-body"]];

  if (props.className) {
    bodyClasses.push(props.className)
  }

  return (
    <div className={bodyClasses.join(' ')}>
      {children}
    </div>
  )
}
