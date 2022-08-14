import React from 'react';
import { useTheme } from '../../contexts/theme';
import classNames from "classnames";
import DropOnHover from '../DropOnHover';
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Header.module.scss";

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
                <a className={classNames(styles.navLink,"nav-link")} href="signup">{information.welcome}</a>
              </li>
              <li className={classNames(styles.navItem,"nav-item")}>
                <a className={classNames(styles.navLink,"nav-link")} href="login"><i className={classNames(styles.heart,"fa fa-phone")} aria-hidden="true"></i>{information.call}</a>
              </li>
            </ul>
            <ul className={classNames(styles.navbarNav,"mr-auto",styles.rightHeader,"navbar-nav")}>
              <li className={classNames(styles.navItem,"nav-item")}>
                <a className={classNames(styles.navLink,"nav-link")} href="login"><i className="fa fa-heart" aria-hidden="true"></i>Wishlist</a>
              </li>
              <DropOnHover title={"My Account"} submenu={["Login","Register"]} icon="fa fa-user" dir="left" key={"My Account"}/>
            </ul>
        </nav>
    </div>
    );
}

export default Header;