import React from 'react';
import { useTheme } from '../../contexts/theme';

function FixedButtonRight(props) {
    const {theme,toggleThemeMode} = useTheme();

    function handleClick(){
        toggleThemeMode();
    }
    const themeClass = theme.mode==="DARK" ? "bg-darkModeLightBlack text-lightGray": "bg-lightGray";

    return (
        <>
            <div className={`${themeClass} fixed w-[37px] px-[2px] py-[5px] text-[110%] shadow-[0_0_5px_0_rgba(200,200,200)] text-center right-0 top-[43%] z-[100] rounded-tl-[15%] rounded-bl-[15%] cursor-pointer`}>
                <i className="fa fa-cog fa-spin" aria-hidden="true"></i>
            </div>
            <div className={`${themeClass} fixed w-[37px] px-[2px] py-[5px] text-[90%] shadow-[0_0_5px_0_rgba(200,200,200)] text-center right-0 top-[50%] z-[100] rounded-tl-[15%] rounded-bl-[15%] cursor-pointer`} onClick={handleClick}>
                {theme.mode==="LIGHT"? "Dark":"Light"}
            </div>
        </>
    );
}

export default FixedButtonRight;