import React from 'react'
import classes from "./Nav.module.css"
export default function Nav({children}) {
  return (
    <ul className={classes["nav"]}>{children}</ul>
  )
}
