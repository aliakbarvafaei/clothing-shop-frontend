import React from 'react';
import Badge from '@mui/material/Badge';
import classNames from "classnames";
import { useTheme } from '../contexts/theme';
import { useState } from "react"

function DropOnHover({title, submenu, icon, dir}) {
    const [open, setOpen] = useState(false);
    const {theme} = useTheme();

    function handleEnter()
    {
      setOpen(true);
    }
    function handleOut()
    {
      setOpen(false);
    }
    return (
        <li className="nav-item">
            <div className="nav-link" onMouseEnter={handleEnter} onMouseLeave={handleOut}>
                {icon==="fa fa-shopping-cart iconsMenu" && dir==="left" && <Badge badgeContent={0} showZero color="secondary">
                <i className={icon} aria-hidden="true"></i>
                </Badge>}
                {icon && icon!=="fa fa-shopping-cart iconsMenu" && dir==="left" &&
                <i className={icon} aria-hidden="true"></i>}
                {title!=="" ? title: ""}
                {icon && dir==="right" && <i className={icon} aria-hidden="true"></i>}
            </div>
            {submenu && <div className={classNames({ show : open }, { shiftleft : dir==="left"}, { dark : theme.mode === "DARK" }, "dropdown-menu")} onMouseEnter={handleEnter} onMouseLeave={handleOut}>
                {
                    submenu.map((item,index)=>{
                        return <a className="dropdown-item" href="/" key={index}>{item}</a>
                    })    
                }
            </div>}
        </li>
    );
}

export default DropOnHover;