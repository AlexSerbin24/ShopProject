import React from 'react'
import ContainerImg from '../ContainerImg/ContainerImg';
import classes from  "./Thumb.module.css"

export default function Thumb({thumb, isCurrent, height, width, className, ...props}) {
    const thumbClasses = [];

    if(isCurrent){
        thumbClasses.push(classes["current-thumb-img"]);
    }

    if(className){
        thumbClasses.push(className)
    }
    return (
        <div {...props} style={{width:width, height:height}} className={thumbClasses.join(' ')}>
            <ContainerImg img={thumb}/>
        </div>
    )
}