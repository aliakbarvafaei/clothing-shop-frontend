import React from 'react';
import TitlePages from '../components/TitlePages/TitlePages';
import RegisterBox from '../components/RegisterBox/RegisterBox';


function Register(props) {
    return (
        <div>
            <TitlePages title="REGISTER" />
            <RegisterBox />
        </div>
    );
}

export default Register;