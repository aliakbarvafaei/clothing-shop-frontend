import React from 'react';
import classNames from "classnames";
import TitlePages from '../components/TitlePages/TitlePages';


function Register(props) {
    return (
        <div>
            <TitlePages title="REGISTER" />
            <div className={classNames('row')}>
                <div className={classNames('col-lg-6')}>

                </div>
                <div className={classNames('col-lg-6')}>

                </div>
            </div>
        </div>
    );
}

export default Register;