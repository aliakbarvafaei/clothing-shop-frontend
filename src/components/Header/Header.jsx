import React from 'react';
import { useTheme } from '../../contexts/theme';
import DropOnHover from '../DropOnHover'
import "bootstrap/dist/css/bootstrap.min.css"
import "./Header.scss"

function Header(props) {
    const {theme} = useTheme();
    
    const information={
      welcome: "Welcome to Our store Multikart",
      call: "Call Us: 123 - 456 - 7890",
    }

    return (
    <div id="Header" className={theme.mode==="DARK" ? "dark": ""}>
        <nav className="navbar navbar-expand-lg navbar-dark">
            <ul className="navbar-nav mr-auto leftHeader">
              <li className="nav-item">
                <a className="nav-link" href="signup">{information.welcome}</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="login"><i id="heart" className="fa fa-phone" aria-hidden="true"></i>{information.call}</a>
              </li>
            </ul>
            <ul className="navbar-nav mr-auto rightHeader">
              <li className="nav-item">
                <a className="nav-link" href="login"><i className="fa fa-heart" aria-hidden="true"></i>Wishlist</a>
              </li>
              <DropOnHover title={"My Account"} submenu={["Login","Register"]} icon="fa fa-user" dir="left" key={"My Account"}/>
            </ul>
        </nav>
    </div>
    );
}

export default Header;