import React, { useEffect, useRef, useState } from 'react';
import Card from '../components/Products/Card';
import TitlePages from '../components/TitlePages/TitlePages';
import { useTheme } from '../contexts/theme';
import { getProductsWithPage } from '../services/api';

const filtersOption = [{"title":"category","content": ["shoes", "watch", "dress", "toy","bag"]},
{"title":"gender","content": ["men", "women","kids"]},
{"title":"color","content":["black","white","yellow","olive","pink","blue","skyblue","green","gray","orange","red"]},
{"title":"size","content":["xs","s","m","l","x","xl","35","36","37","38","39","40"]},
] 

function SearchPage(props) {
    const [counterPage,setcounterPage] = useState(1);
    const [products, setProducts] = useState([]);
    const [filterProducts, setFilterProducts] = useState([]);
    const [priceRange, setPriceRange] = useState({"from": 0, "to": 1000});
    const searchRef = useRef(null);
    const [searchInput, setSearchInput] = useState('');
    const [loading, setLoading] = useState(true);

    const [color, setColor] = useState([]);
    const [size, setSize] = useState([]);
    const [gender, setGender] = useState([]);
    const [category, setCategory] = useState([]);
    const [inStock, setInStock] = useState(false);

    const {theme} = useTheme();
    const themeClass = theme.mode==="DARK" ? "bg-darkModeLightBlack text-white": "bg-white";
    const themeBorder = theme.mode==="DARK" ? "border-lightestBlack": "border-darkModeGray";

    useEffect(()=>{

        const filters = {
            searchInput: searchInput==='' ? '' : searchInput,
            color: color.length===0 ? filtersOption[2].content : color,
            size: size.length===0 ? filtersOption[3].content : size,
            gender: gender.length===0 ? filtersOption[1].content : gender,
            category: category.length===0 ? filtersOption[0].content : category,
            priceRange: priceRange,
            inStock: inStock
        }
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        setLoading(true);
        getProductsWithPage(counterPage,6,filters)
        .then((response) => {
            setProducts(response.data);
            setFilterProducts(response.data);
            setLoading(false);
        })
        .catch(err => {
            console.error(err);
        });
    },[counterPage,searchInput,color,size,gender,category,priceRange,inStock]);

    function handleChange(e){
        setSearchInput(e.target.value);
        setcounterPage(1);
    }

    function removeItemOnce(arr, value) {
        var index = arr.indexOf(value);
        if (index > -1) {
          arr.splice(index, 1);
        }
        return arr;
      }
    function handleClick(e,filterName){
        switch (filterName) {
            case "color":
                (e.target.checked && setColor(old => [...old, e.target.value])) ||
                (!e.target.checked && setColor(old => removeItemOnce(old.slice(), e.target.value)));
                setcounterPage(1);
                break;
            case "size":
                (e.target.checked && setSize(old => [...old, e.target.value])) ||
                (!e.target.checked && setSize(old => removeItemOnce(old.slice(), e.target.value)));
                setcounterPage(1);
                break;
            case "gender":
                (e.target.checked && setGender(old => [...old, e.target.value])) ||
                (!e.target.checked && setGender(old => removeItemOnce(old.slice(), e.target.value)));
                setcounterPage(1);
                break;
            case "category":
                (e.target.checked && setCategory(old => [...old, e.target.value])) ||
                (!e.target.checked && setCategory(old => removeItemOnce(old.slice(), e.target.value)));
                setcounterPage(1);
                break;
            default:
                break;
        }
    }
    function findItemArrayInArray(arr1,arr2){
        for(let i=0;i<arr2.length;i++)
        {
            if(arr1.indexOf(arr2[i])>-1)
                return true;
        }
        return false;
    }
    // useEffect(()=>
    // {
    //     setcounterPage(1);
    //     setFilterProducts(products.filter(item=>{
    //         return ((item.code).includes(searchInput) || ((item.name).toLowerCase()).includes(searchInput.toLowerCase())) &&
    //         (color.length===0 || findItemArrayInArray(color,item.colors)) &&
    //         (size.length===0 || findItemArrayInArray(size,item.size)) &&
    //         (gender.length===0 || gender.indexOf(item.gender)>-1) &&
    //         (category.length===0 || category.indexOf(item.category)>-1) &&
    //         ((Number(item.price)*(100-Number(item.off))/100) >= priceRange.from && (Number(item.price)*(100-Number(item.off))/100) <= priceRange.to) &&
    //         (!inStock || Number(item.stock)>0)
    //     }))
    // },[searchInput,color,size,gender,category,priceRange,inStock])

    return (
        <div>
            <TitlePages title="SEARCH"/>
            <div className={`${themeClass} px-total flex smmin:flex-row sm:flex-col justify-between`}>
                <div className={`smmin:w-[20%] sm:w-[100%] smmin:my-[50px] sm:my-[20px] py-[20px] sm:px-[8%] smmin:px-[2%] rounded-md border-solid border-[1px] ${themeBorder}`}>
                    <h2 className='text-center mb-[20px]'>Filters</h2>
                    {
                        filtersOption.map((item,index)=>{
                            return <details key={index} className='mb-[20px]'>
                                <summary className={`text-[16px] list-none flex flex-row justify-between items-center pb-[8px] cursor-pointer border-b-solid border-b-[1px] ${themeBorder}`}>
                                    {item.title}<i className="fa fa-caret-down text-[16px]" aria-hidden="true"></i>
                                </summary>
                                <ul className='pl-[10px] text-[14px]'>
                                {
                                    item.content.map((subItem,index)=>{
                                        return <li key={index} className='flex flex-row items-center gap-[10px] pt-[10px]'>
                                            <input type="checkbox" value={subItem} id={item.title+index} onClick={(e)=>handleClick(e,item.title)}/>
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
                            price<i className="fa fa-caret-down text-[16px]" aria-hidden="true"></i>
                        </summary>
                        <ul className='pl-[10px] text-[14px]'>
                            <li className='flex flex-col gap-[5px] pt-[10px]'>
                                From : ${priceRange.from}
                                <input type="range" min={0} max={1000} step={10} value={priceRange.from} onChange={(e)=> {setPriceRange(old=> ({ ...old ,"from": parseInt(e.target.value) }));setcounterPage(1);}} className='w-[100%]'/>
                            </li>
                            <li className='flex flex-col gap-[5px] pt-[10px]'>
                                To : ${priceRange.to}
                                <input type="range" min={0} max={1000} step={10} value={priceRange.to} onChange={(e)=> {setPriceRange(old=> ({ ...old ,"to": parseInt(e.target.value) }));setcounterPage(1);}} className='w-[100%]'/>
                            </li>
                        </ul>
                    </details>
                    <div className="w-full mb-[20px]"> 
                        <label for="toggleB" className="flex items-center justify-between cursor-pointer">
                            <div className="relative">
                                <input type="checkbox" id="toggleB" className="peer sr-only" onClick={(e)=>setInStock(e.target.checked)} />
                                <div className="block bg-darkGray peer-checked:bg-[#0d6efd] w-8 h-4 rounded-full"></div>
                                <div className="dot absolute left-1 top-0.5 bg-white peer-checked:translate-x-[100%] w-3 h-3 rounded-full transition"></div>
                            </div>
                            <div className="ml-3 font-medium text-[15px]">
                                InStock
                            </div>
                        </label>
                    </div>
                </div>
                <div className={`sm:w-[100%] smmin:w-[78%] smmin:my-[50px] sm:my-[20px]`} >
                    <div className='relative text-darkGray'>
                        <i className="fa fa-search text-[25px] cursor-pointer absolute top-[15%] left-[3%]"  aria-hidden="true"></i>
                        <input ref={searchRef} value={searchInput} onChange={handleChange} type="text" placeholder='Search Name or Code a Product' className={`w-[100%] mb-[20px] py-[10px] px-[10%] rounded-md border-solid border-[1px] ${themeBorder} ${themeClass}`}/>
                    </div>
                    { loading && <div className='text-center pt-[20px]'><i className='fa fa-spinner fa-spin text-[50px]' aria-hidden="true"></i></div>}
                    {!loading &&
                    <div className={`flex flex-row flex-wrap w-[100%] py-[40px] px-[2%] gap-[1%] rounded-md border-solid border-[1px] ${themeBorder}`}>
                    {
                        filterProducts.length===0 ? <><i className="fa fa-exclamation-triangle text-red mt-[2px]" aria-hidden="true"></i><div className='text-red'>No product found</div></>:
                        filterProducts.map((item,index)=>{
                            return <div key={index} className='md:w-[48%] xl:w-[48%] xlmin:w-[32%]'><Card item={item}/></div>
                        })
                    }
                        <div className="max-w-[100%] pt-[40px] container flex justify-center mx-auto">
                            <div className="flex flex-row mx-auto">
                                <button disabled={counterPage!==1 ? null:'disabled'} onClick={()=>setcounterPage(old=>old-1)} type="button" className="bg-darkGray text-lightGray rounded-l-md border-r border-lightGray py-2 hover:bg-red disabled:opacity-60 px-3">
                                    <div className="flex flex-row align-middle">
                                        <svg className="w-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clip-rule="evenodd"></path>
                                        </svg>
                                        <p className="ml-2">Prev</p>
                                    </div>
                                </button>
                                <div className='bg-darkGray text-white border-r border-lightGray py-2 hover:bg-red px-3'>
                                    {counterPage}
                                </div>
                                <button disabled={6<=filterProducts.length ? null:'disabled'} onClick={()=>setcounterPage(old=>old+1)}type="button" className="bg-darkGray text-lightGray rounded-r-md py-2  hover:bg-red disabled:opacity-60 px-3">
                                    <div className="flex flex-row align-middle">
                                        <span className="mr-2">Next</span>
                                        <svg className="w-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                                        </svg>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                    }
                </div>
                
            </div>
        </div>
    );
}

export default SearchPage;