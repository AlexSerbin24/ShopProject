import React from 'react'
import { useState } from 'react';
import classes from "./Navbar.module.css";
import Container from '../container/Container';
import Button from '../button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'
export default function Navbar({ children }) {
  const [toggle, setToggle] = useState(false)

  const navbarContainerClasses = [classes["navbar-container"]];
  if(!toggle){
    console.log("Test");
    navbarContainerClasses.push(classes["collapse"])
  }
  return (
    <nav className={classes["navbar"]}>
      <Container>
        <Button className={classes["navbar-toogler"]} onClick = {(event)=>{setToggle(!toggle)}}>
          <FontAwesomeIcon icon={faBars}/>
        </Button>
        <div className={navbarContainerClasses.join(' ')}>
          {children}
        </div>
      </Container>
    </nav>
  )
}
