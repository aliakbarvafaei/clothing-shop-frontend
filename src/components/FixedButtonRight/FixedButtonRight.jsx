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
            <div id='setting' className={theme.mode==="DARK"? "dark" : "" }>
            <i class="fa fa-cog fa-spin" aria-hidden="true"></i>
            </div>
            <div id='themeMode' className={theme.mode==="DARK"? "dark" : "" } onClick={handleClick}>
                {theme.mode==="LIGHT"? "Dark":"Light"}
            </div>
        </>
    );
}

export default FixedButtonRight;