import React from 'react'
import { Link } from 'react-router-dom';
import classes from "./NavItem.module.css"

export default function NavItem({title, href, isActive, ...props}) {

  const itemClasses = [classes["nav-item"]];
  if(isActive){
    itemClasses.push(classes["active"]);
  }
  return (
    <>
    <li {...props} className={itemClasses.join(' ')}>
        <Link className={classes["nav-link"]} to={href}>{title}</Link>
    </li>
    </>
  )
}
