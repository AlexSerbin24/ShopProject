import React from 'react'
import classes from "./Radio.module.css"

export default function Radio( {children, ...props}) {

  return (
    <label  className={classes["radio-label"]}>
        <input {...props} type="radio"/>
        <span className={classes["app-radio"]}></span>
        <span className={classes["radio-label-content"]}>{children}</span>
    </label>
  )
}

// const radio = forwardRef((props, ref) => {
//   <label {...props} className={classes["radio-label"]}>
//     <input onChange={props.onChange} ref={ref} type="radio" />
//     <span className={classes["app-radio"]}></span>
//     <span className={classes["radio-label-content"]}>{props.children}</span>
//   </label>
// });

// export default radio;