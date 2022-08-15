import React from 'react';
import { IconContext } from "react-icons";
import { useTheme } from '../../../contexts/theme';
import { Link } from "react-router-dom";
import classNames from "classnames";
import styles from "./Hamburger.module.scss";
import ItemHamburger from './ItemHamburger';

function Hamburger({isOpen, items, handeHamburger}) {
    const {theme} = useTheme();
    const themeClass = theme.mode==="DARK" ? styles.dark: "";
    const activeClass = isOpen ? styles.active: "";

    return (
        <>
          {isOpen && <IconContext.Provider value={{ color: "black", size: "30px" }}>
            <div className={classNames(themeClass, styles.Hamburger)}>
                <nav className={classNames("nav-menu", styles.navMenu, {active: isOpen===true}, activeClass)}>
                    <ul className={classNames("nav-menu-items", styles.navMenuItems)}>
                        <li className={classNames("navbar-toggle", styles.navbarToggle)} onClick={()=>{handeHamburger()}}>
                        <Link to="#" className={classNames("menu-bars", styles.menuBars)}>
                            <p>BACK NAVBAR </p>
                            <i className="fa fa-angle-right" style={{fontSize: "20px"}} aria-hidden="true"></i>
                        </Link>
                        </li>
            
                        {items.map((item, index) => {
                        return (
                            <li key={index} className={classNames("nav-text", styles.navText)}>
                                <ItemHamburger item={item} />
                            </li>
                        );
                        })}
                    </ul>
                </nav>
            </div>
          </IconContext.Provider>}
        </>
    )
}

export default Hamburger;