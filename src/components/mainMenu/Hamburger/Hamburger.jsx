import React from 'react';
import { IconContext } from "react-icons";
import { useTheme } from '../../../contexts/theme';
import { Link } from "react-router-dom";
import ItemHamburger from './ItemHamburger';

function Hamburger({isOpen, items, handeHamburger}) {
    const {theme} = useTheme();
    const themeClass = theme.mode==="DARK" ? "bg-black text-white": "bg-white text-black";

    return (
        <>
          {isOpen && <IconContext.Provider value={{ color: "black", size: "30px" }}>
            <div>
                <nav className={`${themeClass} w-[250px] h-[200vh] flex justify-center fixed z-[30] top-0 shadow-[0_0_5px_0_rgba(200,200,200)] right-0 cursor-text duration-[850ms]`}>
                    <ul className="w-[100%] p-0">
                        <li className="w-[100%] pr-[8%] h-[80px] flex justify-end items-center border-b-solid border-b-[1px] border-b-darkModeGray" onClick={()=>{handeHamburger()}}>
                        <Link to="#" className=" ml-[2rem] text-[2rem] no-underline">
                            <p className='text-[18px] font-bold text-right inline'>BACK NAVBAR </p>
                            <i style={{fontSize: "20px"}} className="fa fa-angle-right" aria-hidden="true"></i>
                        </Link>
                        </li>

                        {items.map((item, index) => {
                        return (
                            <li key={index} className="hover:text-red text-[16px] font-bold flex flex-col items-start px-[15px] py-[10px] w-[100%] list-none cursor-text">
                                <ItemHamburger item={item} />
                            </li>
                        );
                        })}
                    </ul>
                </nav>
            </div>
          </IconContext.Provider>}
        </>
    )
}

export default Hamburger;