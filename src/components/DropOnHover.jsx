import React from 'react';
import classNames from "classnames";
import { useTheme } from '../contexts/theme';
import { useState } from "react";
import styles from "./DropOnHover.module.scss"

function DropOnHover({title, submenu, icon, dir}) {
    const [open, setOpen] = useState(false);
    const {theme} = useTheme();
    const themeClass = theme.mode==="DARK" ? styles.dark: "";

    function handleEnter()
    {
      setOpen(true);
    }
    function handleOut()
    {
      setOpen(false);
    }

    const iconsClass = icon.includes("iconsMenu") ? styles.iconsMenu: "";
    const shiftleftClass = dir==="left" ? styles.shiftleft: "";
    const personId = dir==="left" && title!=="" ? styles.person: "";

    return (
        <li id={personId} className={classNames("nav-item",styles.person)}>
            <div className={classNames("nav-link", styles.navLink)} onMouseEnter={handleEnter} onMouseLeave={handleOut} >
                {icon && dir==="left" &&
                <i className={classNames(icon, iconsClass)} aria-hidden="true"></i>}
                {title!=="" ? title: ""}
                {icon && dir==="right" && <i className={classNames(icon, iconsClass)} aria-hidden="true"></i>}
            </div>
            {submenu && <div className={classNames({ show : open }, shiftleftClass, themeClass, "dropdown-menu", styles.dropdownMenu)} onMouseEnter={handleEnter} onMouseLeave={handleOut}>
                {
                    submenu.map((item,index)=>{
                        return <a className={classNames("dropdown-item", styles.dropdownItem)} href="/" key={index}>{item}</a>
                    })    
                }
            </div>}
        </li>
    );
}

export default DropOnHover;