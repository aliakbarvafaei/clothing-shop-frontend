import React from 'react';
import classNames from "classnames";
import { useTheme } from '../../contexts/theme';
import { useHistory } from 'react-router-dom';
import styles from "./TitlePages.module.scss";

function TitlePages({title}) {
    const history = useHistory();
    const {theme} = useTheme();

    const themeClass = theme.mode==="DARK" ? styles.dark: "";

    function handleCreate(){
        history.push("/home");
    }
    return (
        <div className={classNames(styles.TitlePages,themeClass)}>
            <div className='row'>
                <div className={classNames('col-md-6',styles.text)} ><h2>{title}</h2></div>
                <div className={classNames('col-md-6',styles.path)} ><span onClick={handleCreate}>HOME </span>/ {title} </div>
            </div>
        </div>
    );
}

export default TitlePages;