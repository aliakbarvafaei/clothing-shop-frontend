import React, { useEffect, useRef, useState } from 'react';
import Card from '../components/Products/Card';
import TitlePages from '../components/TitlePages/TitlePages';
import { useTheme } from '../contexts/theme';
import { getProducts } from '../services/api';

function SearchPage(props) {
    const [products, setProducts] = useState([]);
    const [filterProducts, setFilterProducts] = useState([]);
    const {theme} = useTheme();
    const themeClass = theme.mode==="DARK" ? "bg-darkModeLightBlack text-white": "bg-white";
    const themeBorder = theme.mode==="DARK" ? "border-lightestBlack": "border-darkModeGray";
    const searchRef = useRef(null);
    const [searchInput, setSearchInput] = useState('');

    useEffect(()=>{
        searchRef.current.focus();
        getProducts()
        .then((response) => {
            setProducts(response.data);
            setFilterProducts(response.data);
        })
        .catch(err => {
            console.error(err);
        });
    },[]);

    function handleChange(e){
        setSearchInput(e.target.value);
    }

    useEffect(()=>
    {
        setFilterProducts(products.filter(item=>{
            return (item.code).includes(searchInput) || ((item.name).toLowerCase()).includes(searchInput.toLowerCase());
        }))
    },[searchInput])

    return (
        <div>
            <TitlePages title="SEARCH"/>
            <div className={`${themeClass} px-total flex flex-row justify-between`}>
                <div className={`sm:hidden w-[20%] my-[50px] py-[20px] px-[2%] rounded-md border-solid border-[1px] ${themeBorder}`}>

                </div>
                <div className={`sm:w-[100%] smmin:w-[78%] my-[50px]`} >
                    <div className='relative text-darkGray'>
                        <i className="fa fa-search text-[25px] cursor-pointer absolute top-[15%] left-[3%]"  aria-hidden="true"></i>
                        <input ref={searchRef} value={searchInput} onChange={handleChange} type="text" placeholder='Search Name or Code a Product' className={`w-[100%] mb-[20px] py-[10px] px-[10%] rounded-md border-solid border-[1px] ${themeBorder} ${themeClass}`}/>
                    </div>
                    <div className={`flex flex-row flex-wrap w-[100%] py-[40px] px-[2%] gap-[1%] rounded-md border-solid border-[1px] ${themeBorder}`}>
                    {
                        filterProducts.length===0 ? <><i className="fa fa-exclamation-triangle text-red mt-[2px]" aria-hidden="true"></i><div className='text-red'>No product found</div></>:
                        filterProducts.map((item,index)=>{
                            return <div className='md:w-[48%] xl:w-[48%] xlmin:w-[32%]'><Card item={item}/></div>
                        })
                    }
                    </div>
                </div>
                
            </div>
        </div>
    );
}

export default SearchPage;