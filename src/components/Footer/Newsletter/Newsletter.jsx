import React from 'react';
import classNames from "classnames";
import { useTheme } from '../../../contexts/theme';
import styles from "./Newsletter.module.scss";

function Newsletter(props) {
    const {theme} = useTheme();

    const themeClass = theme.mode==="DARK" ? styles.dark: "";

    return (
        <div className={classNames("row",themeClass)}>
            <div className={classNames("col-lg-6", styles.text)}>
                <h1>
                    KNOW IT ALL FIRST!
                </h1>
                <h4>
                    Never Miss Anything From Multikart By Signing Up To Our Newsletter.
                </h4>
            </div>
            <div className='col-lg-6'>
                <form>
                    <input type="text" placeholder="Enter your email" />
                    <button className={classNames("btn", "btn-solid", styles.subscribeButton)}>SUBSCRIBE</button>
                </form>
            </div>
        </div>
    );
}

export default Newsletter;