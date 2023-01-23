import React from 'react'
import Container from '../container/Container';
import classes from "./PageHeader.module.css";
export default function PageHeader({ children }) {
  return (
    <header className={classes["header"]}>
      <Container>
        {children}
      </Container>
    </header>
  )
}
