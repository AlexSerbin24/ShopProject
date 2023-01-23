import React from 'react'
import { useState } from 'react'
import navItemClasses from "./NavItem.module.css"
import dropdownClasses from "./DropdownNavItem.module.css"
import {faAngleDown, faAngleUp} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function DropdownNavItem({ title, children }) {
    const [menu, setMenu] = useState(false)

    const menuClasses = [dropdownClasses["dropdown-menu"]];

    if(!menu){
        menuClasses.push(dropdownClasses["invisible"])
    }

    const showDropdownMenu = function(event){
        if(!menu){
            setMenu(true);
        }
        else{
            setMenu(false)
        }
    }
    return (
        <li style={{cursor:"pointer"}} onClick={showDropdownMenu} className={navItemClasses["nav-item"]}>
            <a className={navItemClasses["nav-link"]}>
                <span style={{marginRight:4}}>{title}</span>
                {menu?<FontAwesomeIcon   icon={faAngleUp}/>:<FontAwesomeIcon  icon={faAngleDown}/>}
            </a>
            <ul className={menuClasses.join(' ')}>
                {children}
            </ul>
        </li>
    )
}
