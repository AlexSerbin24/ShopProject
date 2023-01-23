import React from 'react'
import classes from "./Button.module.css"

export default function Button({ children, isOutline, width, ...props }) {


  const buttonClasses = [classes["shop-btn"]];

  let buttonDesign = isOutline ? "bg-outline-light-red" : "bg-light-red";

  buttonClasses.push(classes[buttonDesign]);

  if (width) {
    buttonClasses.push(classes[`btn-width-${width}`]);
  }

  if(props.className){
    buttonClasses.push(props.className);
  }


  return (
    <button {...props} className={buttonClasses.join(' ')}>
      {children}
    </button>
  )
}
