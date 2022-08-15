import React from 'react';
import classNames from "classnames";
import { useTheme } from '../../contexts/theme';
import styles from "./TitlePages.module.scss";

function TitlePages({title}) {
    const {theme} = useTheme();

    const themeClass = theme.mode==="DARK" ? styles.dark: "";

    return (
        <div className={classNames(styles.TitlePages,themeClass)}>
            <div className='row'>
                <div className={classNames('col-md-6',styles.text)} ><h2>{title}</h2></div>
                <div className={classNames('col-md-6',styles.path)} ><a href='/'>HOME </a>/ {title} </div>
            </div>
        </div>
    );
}

export default TitlePages;