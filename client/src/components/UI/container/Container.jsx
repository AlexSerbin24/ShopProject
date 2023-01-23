import React from "react";
import { Helmet } from "react-helmet-async";
import classes from './Container.module.css'
const Container = React.forwardRef(({ title, children, ...props }, ref) => {
  const containerClasses = [classes["container"]];
  if (props.className) {
    containerClasses.push(props.className)
  }
  return (
      <div {...props} ref={ref} className={containerClasses.join(' ')}>
        <Helmet title={title}/>
        {children}
      </div>
  
  )
})

export default Container
