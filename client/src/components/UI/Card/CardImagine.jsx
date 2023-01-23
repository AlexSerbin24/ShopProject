import React from 'react'
import ContainerImg from '../ContainerImg/ContainerImg'
import classes from "./CardImagine.module.css"
export default function CardImagine({img}) {
    return (
        <div className={classes["card-img-container"]}>
            <ContainerImg img={img} />
        </div>
    )
}
