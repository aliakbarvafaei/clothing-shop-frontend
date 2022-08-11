import React, { useState } from 'react';
import { useTheme } from '../../contexts/theme';
import Drop from '../Drop'
import "bootstrap/dist/css/bootstrap.min.css"
import "./style.scss"

function Header(props) {
    const {theme,toggleThemeMode} = useTheme();
    
    return (
    <div id="Header" className={theme.mode==="LIGHT" ? "light": "dark"}>
        <nav className="navbar navbar-expand-lg navbar-dark">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <a className="nav-link" href="signup"> Welcome to Our store Multikart</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="login"><i id="heart" className="fa fa-phone" aria-hidden="true"></i> Call Us: 123 - 456 - 7890</a>
              </li>
            </ul>
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <a className="nav-link" href="login"><i className="fa fa-heart" aria-hidden="true"></i>Wishlist</a>
              </li>
              <Drop title={"My Account"} submenu={["Login","Register"]} icon={true} key={"My Account"}/>
            </ul>
        </nav>
    </div>
    );
}

export default Header;