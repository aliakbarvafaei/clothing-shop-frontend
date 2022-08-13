import React from 'react';
import { useTheme } from '../../contexts/theme';
import "./FixedButtonRight.scss";

function FixedButtonRight(props) {
    const {theme,toggleThemeMode} = useTheme();

    function handleClick(){
        toggleThemeMode();
    }

    return (
        <>
            <div className={theme.mode==="LIGHT"? "lightButton" : "darkButton" } onClick={handleClick}>
                {theme.mode==="LIGHT"? "Dark":"Light"}
            </div>
        </>
    );
}

export default FixedButtonRight;