import React from 'react'
import classes from "./Label.module.css";

export default function Label({children, title, ...props}) {

  const labelClasses = [classes["app-label"]];

  if(props.className){
    labelClasses.push(props.className);
  }
  return (
        <label {...props} className={labelClasses.join(' ')}>
            <span className={classes["app-label-title"]}>{title}</span>
            <div>
                {children}
            </div>
        </label>
  )
}
