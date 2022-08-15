import React from 'react';
import { useTheme } from '../../contexts/theme';
import classNames from "classnames";
import styles from "./FixedButtonRight.module.scss";

function FixedButtonRight(props) {
    const {theme,toggleThemeMode} = useTheme();

    function handleClick(){
        toggleThemeMode();
    }
    const themeClass = theme.mode==="DARK" ? styles.dark: "";
    return (
        <>
            <div className={classNames(styles.setting, themeClass)} >
            <i className="fa fa-cog fa-spin" aria-hidden="true"></i>
            </div>
            <div className={classNames(styles.themeMode, themeClass)} onClick={handleClick}>
                {theme.mode==="LIGHT"? "Dark":"Light"}
            </div>
        </>
    );
}

export default FixedButtonRight;