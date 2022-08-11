import React, { useState } from 'react';
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";
import "./Hamburger.scss";
import ItemHamburger from './ItemHamburger';

function Hamburger({isOpen, items, handeHamburger}) {
    return (
        <>
          {isOpen && <IconContext.Provider value={{ color: "black", size: "30px" }}>
            <div id="Hamburger">
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