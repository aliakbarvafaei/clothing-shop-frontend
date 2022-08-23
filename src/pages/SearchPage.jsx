import React, { useEffect, useRef, useState } from 'react';
import Card from '../components/Products/Card';
import TitlePages from '../components/TitlePages/TitlePages';
import { useTheme } from '../contexts/theme';
import { getProducts } from '../services/api';

const filters = [{"title":"color","content":["black","white","yellow","olive","pink","blue","skyblue","green","gray","orange","red"]},
{"title":"size","content":["xs","s","m","l","x","xl"]},
{"title":"gender","content": ["men", "women"]},
{"title":"category","content": ["shoes", "watch", "dress", "toy"]},
] 

function SearchPage(props) {
    const [products, setProducts] = useState([]);
    const [filterProducts, setFilterProducts] = useState([]);
    const [price, setPrice] = useState({"from": 0, "to": 1000})
    const {theme} = useTheme();
    const themeClass = theme.mode==="DARK" ? "bg-darkModeLightBlack text-white": "bg-white";
    const themeBorder = theme.mode==="DARK" ? "border-lightestBlack": "border-darkModeGray";
    const searchRef = useRef(null);
    const [searchInput, setSearchInput] = useState('');

    useEffect(()=>{
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
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
                    <h2 className='text-center mb-[20px]'>Filters</h2>
                    {
                        filters.map((item,index)=>{
                            return <details className='mb-[20px]'>
                                <summary className={`text-[16px] list-none flex flex-row justify-between items-center pb-[8px] cursor-pointer border-b-solid border-b-[1px] ${themeBorder}`}>
                                    {item.title}<i className="fa fa-caret-down text-[16px]" aria-hidden="true"></i>
                                </summary>
                                <ul className='pl-[10px] text-[14px]'>
                                {
                                    item.content.map((subItem,index)=>{
                                        return <li className='flex flex-row items-center gap-[10px] pt-[10px]'>
                                            <input type="checkbox" id={item.title+index}/>
                                            <label className={`w-[100%] py-[8px] cursor-pointer border-b-solid border-b-[1px] ${themeBorder}`} for={item.title+index}>{subItem}</label>
                                        </li>
                                    })
                                }
                                </ul>
                            </details>
                        })
                    }
                    <details className='mb-[20px]'>
                        <summary className={`text-[16px] list-none flex flex-row justify-between items-center pb-[8px] cursor-pointer border-b-solid border-b-[1px] ${themeBorder}`}>
                            Price<i className="fa fa-caret-down text-[16px]" aria-hidden="true"></i>
                        </summary>
                        <ul className='pl-[10px] text-[14px]'>
                            <li className='flex flex-col gap-[5px] pt-[10px]'>
                                From : ${price.from}
                                <input type="range" min={0} max={1000} step={10} value={price.from} onChange={(e)=> setPrice(old=> ({ ...old ,"from": e.target.value }))} className='w-[100%]'/>
                            </li>
                            <li className='flex flex-col gap-[5px] pt-[10px]'>
                                To : ${price.to}
                                <input type="range" min={0} max={1000} step={10} value={price.to} onChange={(e)=> setPrice(old=> ({ ...old ,"to": e.target.value }))} className='w-[100%]'/>
                            </li>
                        </ul>
                    </details>
                    <div className="w-full mb-[20px]"> 
                        <label for="toggleB" className="flex items-center justify-between cursor-pointer">
                            <div className="relative">
                                <input type="checkbox" id="toggleB" className="peer sr-only"/>
                                <div className="block bg-darkGray peer-checked:bg-[#0d6efd] w-8 h-4 rounded-full"></div>
                                <div className="dot absolute left-1 top-0.5 bg-white peer-checked:translate-x-[100%] w-3 h-3 rounded-full transition"></div>
                            </div>
                            <div className="ml-3 font-medium text-[15px]">
                                InStock
                            </div>
                        </label>
                    </div>
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