import React, { useEffect, useState } from 'react';
import { useTheme } from '../../contexts/theme';
import Card from '../Products/Card';
import { getProducts } from "../../services/api/index.js";
import Skeleton from '@mui/material/Skeleton';


function SectionProductMain(props) {
    const {theme} = useTheme();
    const themeClass = theme.mode==="DARK" ? "bg-darkModeLightBlack text-white": "bg-white";
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        getProducts()
        .then((response) => {
            setProducts(response.data);
        })
        .catch(err => {
                console.error(err);
        });        
    },[])
    return (
        <div className={`${themeClass} flex flex-col items-center py-[50px] px-total`}>
            <h2 className='sm:text-[24px] smmin:text-[32px] font-bold'>SPECIAL PRODUCTS</h2>
            <h6 className='w-[70px] border-b-red border-b-solid border-b-[3px] mb-[15px]'></h6>
            <p className='w-[50%] text-darkGray text-center text-[14px] mb-[20px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
            <div className='flex flex-row flex-wrap w-[100%] gap-[1%]'>
                {
                    (products.length===0 ? Array.from(new Array(8)) : products.slice(0,8)).map((item,index)=>{
                        return <div className={`md:w-[48%] xl:w-[32%] xlmin:w-[23%]`}>
                        {item ? <Card item={item}/>: <>
                        <Skeleton variant="rectangular" width={'100%'} height={'200px'} />
                        <div className='mt-[10px]'><Skeleton variant="rectangular" width={`50%`} height="15px"/></div>
                        <div className='mt-[5px]'><Skeleton variant="rectangular" width={`80%`} height="15px"/></div>
                        <div className='mt-[5px] mb-[30px]'><Skeleton variant="rectangular" width={`30%`} height="15px"/></div>
                        </>}
                        </div>
                    })
                }
            </div>
            
        </div>
    );
}

export default SectionProductMain;