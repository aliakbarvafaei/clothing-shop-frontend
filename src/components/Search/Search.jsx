import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useTheme } from '../../contexts/theme';

function Search({setSearchOpen}) {
    const {theme} = useTheme();
    const themeClass = theme.mode==="DARK" ? "bg-darkModeLightBlack text-lightGray": "bg-white";
    const themeBorder = theme.mode==="DARK" ? "border-lightestBlack": "border-darkModeGray";

    const [searchValue,setsearchValue] = useState("");
    const history = useHistory();

    function handleSearch(){
        setsearchValue('');
        setSearchOpen(false);
        history.push('/search/'+String((searchValue).replace(/\s/g, '').toLowerCase()));
    }

    return (<>
        <span className='fixed z-[111] right-[3%] top-[3%] text-[40px] cursor-pointer' onClick={()=>setSearchOpen(false)}>X</span>
        <div className={`${themeClass} fixed h-[100vh] top-0 left-0 w-[100%] z-[110]`}>
            <div className='relative w-[80%] top-[45%] left-[10%]'>
                <input type="text" placeholder='Search a Product' value={searchValue} onChange={(e)=>setsearchValue(e.target.value)} className={`${themeClass} w-[100%] focus:outline-none text-darkGray text-[20px] border-b-solid border-b-[2px] ${themeBorder} `}/>
                <i className="fa fa-search text-[25px] cursor-pointer absolute right-[1%]" onClick={handleSearch} aria-hidden="true"></i>
            </div>
        </div>
        </>
    );
}

export default Search;