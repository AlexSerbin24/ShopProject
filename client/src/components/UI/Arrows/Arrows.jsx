import React, { useRef } from 'react'
import { faAngleDoubleLeft, faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classes from "./Arrows.module.css";
export default function Arrows({ rightArrowMouseDown, leftArrowMouseDown, isHidden }) {

  const arrowsContainerClasses = [classes["product-thumbs-arrows"]]

  if(isHidden){
    arrowsContainerClasses.push(classes["isHidden"]);
  }

  return (
    <div className={arrowsContainerClasses.join(' ')}>
      <div className={classes["arrow-container"]}>
        <FontAwesomeIcon onMouseDown={leftArrowMouseDown} className={classes["arrow"]} icon={faAngleDoubleLeft} />
      </div>

      <div className={classes["arrow-container"]}>
        <FontAwesomeIcon onMouseDown={rightArrowMouseDown} className={classes["arrow"]} icon={faAngleDoubleRight} />
      </div>
    </div>
  )
}
