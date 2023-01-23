import React from 'react'
import { Link } from 'react-router-dom';
import classes from "./DropdownMenuItem.module.css"
export default function DropdownMenuItem({title, href}) {
  return (
    <>
        <li className={classes["dropdown-item"]}>
            <Link className={classes["dropdown-item-link"]} to={href}>{title}</Link>
        </li>
    </>
  )
}
