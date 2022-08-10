import React, { useState } from 'react';
import { useTheme } from '../../contexts/theme';
import HoverMenuButton from "./HoverMenuButton"
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import "bootstrap/dist/css/bootstrap.min.css"
import "./style.scss"

function Header(props) {
    const {theme,toggleThemeMode} = useTheme();
    const [open, setOpen] = useState(false);

    function handleEnter()
    {
      setOpen(true);
    }
    function handleOut()
    {
      setOpen(false);
    }
    return (
    <div className={theme.mode==="LIGHT" ? "light": "dark"}>
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
              <li className="nav-item">
                <div className="nav-link" onMouseEnter={handleEnter} onMouseLeave={handleOut}><i className="fa fa-user" aria-hidden="true"></i>My Account</div>
                <div className={open ? "dropdown-menu show":"dropdown-menu"}>
                    <a className="dropdown-item" href="#">Login</a>
                    <a className="dropdown-item" href="#">Register</a>
                </div>
              </li>
            </ul>
        </nav>
    </div>
    );
}

export default Header;