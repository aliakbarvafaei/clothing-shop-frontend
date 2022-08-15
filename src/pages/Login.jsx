import React from 'react';
import TitlePages from '../components/TitlePages/TitlePages';
import LoginBox from '../components/LoginBox/LoginBox';


function Login(props) {
    return (
        <div>
            <TitlePages title="LOGIN" />
            <LoginBox />
        </div>
    );
}

export default Login;