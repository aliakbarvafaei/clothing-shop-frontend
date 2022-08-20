import React, { useState } from 'react';
import { useTheme } from '../../contexts/theme';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1200 },
      items: 4
    },
    desktop: {
      breakpoint: { max: 1200, min: 991 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 991, min: 0 },
      items: 2
    }
  };
function SectionProduct(props) {
    const {theme} = useTheme();
    const themeClass = theme.mode==="DARK" ? "bg-darkModeLightBlack text-white": "bg-white";

    const [autoPlay, setAutoPlay] = useState(true);
    const arr=[1,2,3,4,5,6,7,8,9]
    return (
        <div className={`${themeClass} flex flex-col items-center pb-[50px] px-total`}>
            <h4 className='text-[18px] text-red'>Special Offer</h4>
            <h2 className='text-[32px] font-bold'>TOP COLLECTION</h2>
            <h6 className='w-[70px] border-b-red border-b-solid border-b-[3px] mb-[15px]'></h6>
            <p className='w-[50%] text-darkGray text-center text-[14px] mb-[20px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
            <div className='overflow-hidden w-[100%] h-[300px]'>
                <Carousel responsive={responsive} autoPlay={autoPlay} infinite="true">
                {
                    arr.map((item,index)=>{
                        return <div className='h-[300px] bg-red ml-[10px]' onMouseEnter={()=>setAutoPlay(false)} onMouseLeave={()=>setAutoPlay(true)}>{index}</div>
                    })
                }
                </Carousel>
            </div>
            
        </div>
    );
}

export default SectionProduct;