import React ,{useState} from 'react';
import { useTheme } from '../../contexts/theme';
import Badge from '@mui/material/Badge';
import classNames from "classnames";
import styles from "./ShopIcon.module.scss";

function ShopIcon({submenu, icon, dir}) {
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

    const shiftleftClass = dir==="left" ? styles.shiftleft: "";

    return (
        <li className="nav-item">
            <div className={classNames("nav-link", styles.navLink)} onMouseEnter={handleEnter} onMouseLeave={handleOut}>
                <Badge badgeContent={0} showZero color="secondary">
                    <i className={classNames(icon, styles.iconsMenu)} aria-hidden="true"></i>
                </Badge>
            </div>
            {submenu && <div className={classNames({ show : open }, shiftleftClass, themeClass, "dropdown-menu", styles.dropdownMenu)} onMouseEnter={handleEnter} onMouseLeave={handleOut}>
                {
                    submenu.map((item,index)=>{
                        return <div className={classNames("dropdown-item", styles.dropdownItem)} key={index}>{item}</div>
                    })    
                }
            </div>}
        </li>
    );
}

export default ShopIcon;