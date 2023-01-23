import React, { useState, useEffect, useRef } from 'react'
import Thumb from "./Thumb"
import Arrows from '../Arrows/Arrows';
import classes from './ThumbList.module.css'
export default function ThumbList({ thumbs, currentThumbNumber, setThumb, thumbClassName, ...props }) {
(thumbs.length)
    const [arrowsHidden, setArrowsHidden] = useState(false)
    const [windowSize, setWindowSize] = useState({ width: 0, height: 0 })
    const thumbContainer = useRef();
    const thumbFlexContainer = useRef();


    function handleWindowResize(event) {
        setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    }

    function compareWidthes() {
        const { offsetWidth: thumbContainerWidth } = thumbContainer.current;
        const { offsetWidth: thumbFlexContainerWidth } = thumbFlexContainer.current;

        return thumbContainerWidth >= thumbFlexContainerWidth
    }

    useEffect(() => {
        window.addEventListener("resize", handleWindowResize, false);
    }, [])

    useEffect(() => {
        setArrowsHidden(compareWidthes());
    }, [windowSize, thumbs])

    

    function changeThumb(thumbNumber) {
        setThumb(thumbNumber)
    }

    function scrollThumb(x, y, arrow) {
        let stop = false;
        setTimeout(function scroll() {
            thumbContainer.current.scrollBy(x, y);
            if (!stop) {
                setTimeout(scroll, 10)
            }
        }, 10)
        arrow.addEventListener("mouseup", function stopScrolling() {
            stop = true;
            arrow.removeEventListener("mouseup", stopScrolling);
        })
    }

    function scrollThumbsToRight(event) {
        scrollThumb(10, 0, event.target);
    }

    function scrollThumbsToLeft(event) {
        scrollThumb(-10, 0, event.target);
    }

    return (
        <div ref={thumbContainer} className={classes["thumbs-container"]}>
            <Arrows
                isHidden={arrowsHidden}
                leftArrowMouseDown={scrollThumbsToLeft}
                rightArrowMouseDown={scrollThumbsToRight} />
            <div ref={thumbFlexContainer} className={classes["thumbs-flex-container"]}>
                {
                    thumbs.map((thumb, index) =>
                        <Thumb onClick={
                            (event) => changeThumb(index)}
                            key={index}
                            thumb={thumb}
                            isCurrent={currentThumbNumber == index}
                            className={thumbClassName} />
                    )
                }
            </div>
        </div>
    )
}
