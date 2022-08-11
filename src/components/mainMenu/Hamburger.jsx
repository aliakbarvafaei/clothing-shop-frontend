import React, { useState } from 'react';
import { IconContext } from "react-icons";
import { useTheme } from '../../contexts/theme';
import { Link } from "react-router-dom";
import "./Hamburger.scss";
import ItemHamburger from './ItemHamburger';

function Hamburger({isOpen, items, handeHamburger}) {
    const {theme,toggleThemeMode} = useTheme();

    return (
        <>
          {isOpen && <IconContext.Provider value={{ color: "black", size: "30px" }}>
            <div id="Hamburger" className={theme.mode==="LIGHT" ? "lightNavbar": "darkNavbar"}>
                <nav className={isOpen ? "nav-menu active" : "nav-menu"}>
                    <ul className="nav-menu-items" >
                        <li className="navbar-toggle" onClick={()=>{handeHamburger()}}>
                        <Link to="#" className="menu-bars">
                            <p>BACK NAVBAR </p>
                            <i class="fa fa-angle-right" style={{fontSize: "20px"}} aria-hidden="true"></i>
                        </Link>
                        </li>
            
                        {items.map((item, index) => {
                        return (
                            <li key={index} className="nav-text">
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