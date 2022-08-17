import React from 'react';
import { useTheme } from '../../contexts/theme';
import { useHistory } from 'react-router-dom';

function TitlePages({title}) {
    const history = useHistory();
    const {theme} = useTheme();

    const themeClass = theme.mode==="DARK" ? "bg-black text-gray": "bg-gray text-black";

    function handleCreate(){
        history.push("/home");
    }
    return ( 
        <div className={`${themeClass} mdmin:py-[40px] md:py-[20px] px-total bg-gray`}>
            <div className='flex mdmin:flex-row md:flex-col justify-between'>
                <div className="text-center" ><h2 className='text-[16px] m-0 font-black'>{title}</h2></div>
                <div className="text-[14px] md:pt-[10px] font-black text-center" ><span className='cursor-pointer' onClick={handleCreate}>HOME </span>/ {title} </div>
            </div>
        </div>
    );
}

export default TitlePages;