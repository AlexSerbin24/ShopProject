import React, {forwardRef} from 'react'
import classes from "./Input.module.css";

function Input(props, ref) {

  const inputClasses = [classes["app-input"]];
  if(props.width){
    inputClasses.push(classes[`input-width-${props.width}`]);
  }

  if(props.className){
    inputClasses.push(props.className)
  }
  return (
    <input ref={ref} {...props} className={inputClasses.join(' ')}/>
  )
}

export default forwardRef(Input)
