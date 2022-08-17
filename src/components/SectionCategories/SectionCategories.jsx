import React from 'react';
import men from "../../assets/images/men.jpg";
import women from "../../assets/images/women.jpg";
import { useTheme } from '../../contexts/theme';

function SectionCat(props) {
    const {theme} = useTheme();
    const themeClass = theme.mode==="DARK" ? "bg-darkModeLightBlack": "bg-white";

    var items = [
        {
            h4: "SAVE 30%",
            h1: "MEN",
            img: men,
        },
        {
            h4: "SAVE 60%",
            h1: "WOMEN",
            img: women,
        },
    ]
    return (
        <div className={`py-[50px] px-total ${themeClass}`}>
            <div className="flex flex-row flex-wrap justify-between">
            {

                items.map((item,index)=>{
                    return ( <div key={index} className="mdmin:w-[49%] md:w-[100%] " style={{paddingBottom:"24px"} }>
                        <div className="relative overflow-hidden">
                            <img className="w-[100%] bg-no-repeat bg-cover transition duration-[500ms] hover:scale-110" src={item.img} alt="Men" />
                            <div className="absolute z-[1] top-[30%] left-[55%] flex flex-col items-center">
                                <h4 className='text-red font-bold text-[18px] lg:text-[16px] m-0'>{item.h4}</h4>
                                <h1 className='font-bold text-black text-[55px] xl:text-[40px] lg:text-[35px] mm:text-[24px]'>{item.h1}</h1>
                            </div>
                        </div>
                    </div>
                    );
                })
            }
            </div>
        </div>
    );
}

export default SectionCat;