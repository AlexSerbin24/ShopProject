import React from 'react'
import classes from "./Table.module.css"
export default function Table({ children, ...props }) {
  return (
    <div className={classes["app-table-container"]}>
      <table className={classes["app-table"]} {...props}>
        {children}
      </table>
    </div>
  )
}
