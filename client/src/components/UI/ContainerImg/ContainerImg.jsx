import React from 'react'
import classes from "./ContainerImg.module.css";

export default function ContainerImg({ img, ...props }) {
    return (
        <img {...props} className={classes["container-img"]} src={img} />
    )
}
