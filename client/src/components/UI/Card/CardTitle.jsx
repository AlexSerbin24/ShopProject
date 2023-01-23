import React from 'react'
import classes from "./CardTitle.module.css"
export default function CardTitle({title, ...props}) {

    const titleClasses = [classes["card-title"]];

    if(props.className){
        titleClasses.push(props.className)
    }
    return (
        <div className={titleClasses.join(' ')}>
            <span>{title}</span>
        </div>
    )
}
