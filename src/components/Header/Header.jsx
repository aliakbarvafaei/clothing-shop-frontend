import React from 'react';
import { useTheme } from '../../contexts/theme';
import classNames from "classnames";
import DropOnHover from '../DropOnHover';
import { Link } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Header.module.scss";

const myAccountDrop={title: "My Account", submenu:[{title: "Login", pathTo: "/login"},{title: "Register", pathTo: "/register"}]}

function Header(props) {
    const {theme} = useTheme();
    const themeClass = theme.mode==="DARK" ? styles.dark: "";

    const information={
      welcome: "Welcome to Our store Multikart",
      call: "Call Us: 123 - 456 - 7890",
    }

    return (
    <div className={classNames(styles.Header, themeClass)}>
        <nav className={classNames(styles.navbar,"navbar-expand-lg","navbar-dark","navbar")}>
            <ul className={classNames(styles.navbarNav,"mr-auto",styles.leftHeader,"navbar-nav")}>
              <li className={classNames(styles.navItem,"nav-item")}>
                <Link className={classNames(styles.navLink,"nav-link")} to="/">{information.welcome}</Link>
              </li>
              <li className={classNames(styles.navItem,"nav-item")}>
                <Link className={classNames(styles.navLink,"nav-link")} to="/"><i className={classNames(styles.heart,"fa fa-phone")} aria-hidden="true"></i>{information.call}</Link>
              </li>
            </ul>
            <ul className={classNames(styles.navbarNav,"mr-auto",styles.rightHeader,"navbar-nav")}>
              <li className={classNames(styles.navItem,"nav-item")}>
                <Link className={classNames(styles.navLink,"nav-link")} to="/wishlist"><i className="fa fa-heart" aria-hidden="true"></i>Wishlist</Link>
              </li>
              <DropOnHover title={myAccountDrop.title} submenu={myAccountDrop.submenu} icon="fa fa-user" dir="left" key={"My Account"}/>
            </ul>
        </nav>
    </div>
    );
}

export default Header;