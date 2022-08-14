import React from 'react';
import classNames from "classnames";
import sponser from "../../../assets/images/sponser.png";
import styles from "./CopyRight.module.scss";

function CopyRight(props) {
    return (
        <div className='row'>
            <div className={classNames('col-md-6',styles.text)} ><i class="fa fa-copyright" aria-hidden="true"></i><span>2020-21 themeforest powered by pixelstrap</span></div>
            <div className={classNames('col-md-6',styles.icons)} > <img src={sponser} alt="sponser" /> </div>
        </div>
    );
}

export default CopyRight;