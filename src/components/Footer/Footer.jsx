import React from 'react';
import Newsletter from './Newsletter/Newsletter';
import MainFooter from './MainFooter/MainFooter';
import classNames from "classnames";
import styles from "./Footer.module.scss";
import { useTheme } from '../../contexts/theme';
import CopyRight from './CopyRight/CopyRight';

function Footer(props) {
    const {theme} = useTheme();

    const themeClass = theme.mode==="DARK" ? styles.dark: "";

    return <section className={classNames(styles.Footer)}>
        <div className={classNames(styles.Newsletter,themeClass)}>
            <Newsletter />
        </div>
        <div className={classNames(styles.MainFooter,themeClass)}>
            <MainFooter />
        </div>
        <div className={classNames(styles.CopyRight,themeClass)}>
            <CopyRight />
        </div>
    </section>;
}

export default Footer;