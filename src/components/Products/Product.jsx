import React, { useState } from 'react';
import { useTheme } from '../../contexts/theme';
import { FaGooglePlusG } from "@react-icons/all-files/fa/FaGooglePlusG";
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram";
import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter";
import { FaFacebookF } from "@react-icons/all-files/fa/FaFacebookF";



function Product({product}) {
    const {theme} = useTheme();
    const themeClass = theme.mode==="DARK" ? "bg-darkModeLightBlack text-lightGray": "bg-white";
    const themeBorder = theme.mode==="DARK" ? "border-red": "border-darkGray";
    const themeBorder2 = theme.mode==="DARK" ? "border-lightestBlack": "border-darkModeGray";

    const [showMenu, setShowMenu] = useState("description");
    const styleSelectedMenu = "text-red border-red border-b-solid border-b-[2px]";

    const [counter, setCounter] = useState(1)

    const [backgroundImage, setBackgroundImage] = useState(product.images[0]);

    function handleBackground(e){
        setBackgroundImage(e.target.src);
    }

    return (
        <div className={`${themeClass} px-total py-[50px]`}>
            <div className='flex lg:flex-col lg:items-center lg:gap-[20px] lgmin:flex-row lgmin:justify-between flex-wrap'>
                <div className='sm:w-[90%] lg:w-[70%] lgmin:w-[48%] flex flex-col gap-[20px]'>
                    <div className={` bg-[length:100%_100%] bg-no-repeat w-[100%] mm:h-[350px] sm:h-[450px] md:h-[550px] lg:h-[700px] lgmin:h-[750px]`} style={{backgroundImage: `url("`+backgroundImage+`")`}}>
                    
                    </div>
                    <div className='flex flex-row justify-between w-[100%] gap-[4%]'>
                        {
                            product.images.map((item,index)=>{
                                return <img className={`${item===backgroundImage ? "border-solid border-[2px]":""} ${themeBorder} min-w-[22%] cursor-pointer`} onClick={handleBackground} src={item} alt={index} />
                            })
                        }
                    </div>
                </div>
                <div className='sm:w-[90%] lg:w-[70%] lgmin:w-[48%] flex flex-col gap-[10px] lg:text-center'>
                    <div>
                        <h2 className='text-[25px] font-bold pb-[10px]'>{product.name}</h2>
                        <h3><strike className='text-[14px] text-darkGray'>${product.price}</strike><span className='text-red'> {product.off}% Off</span></h3>
                        <h3 className='text-[26px]'>${Number(product.price)*(100-Number(product.off))/100}</h3>
                        <div id='colors' className='flex flex-row gap-[5px] pt-[15px] pb-[10px] lg:justify-center'>
                            {
                                (product.colors).map((item,index)=>{
                                    return  <div on className={`${themeBorder2} border-solid border-[1px] w-[30px] h-[30px] rounded-[50%]`} style={{backgroundColor: `${item}`}}></div>
                                })
                            } 
                        </div>
                    </div>
                    <div className={`${themeBorder2} w-[100%] border-dashed border-b-[1px]`}></div>
                    <div>
                        <h2 className='text-[14px] font-bold '>Select Size</h2>
                        <div id='colors' className='flex flex-row gap-[5px] pt-[15px] pb-[10px] lg:justify-center'>
                            {
                                (product.size).map((item,index)=>{
                                    return  <div on className={`${themeBorder2} border-solid border-[1px] w-[35px] h-[35px] rounded-[50%] flex items-center justify-center`}>{item}</div>
                                })
                            } 
                        </div>
                        <h3 className='text-[14px] font-bold text-red'>{Number(product.stock)===0 ? "Not available in stock" : Number(product.stock)<10 ? `Only ${product.stock} in stock` : "InStock"}</h3>
                        <h3 className='text-[14px] font-bold '>Quantity</h3>
                        <div className='flex lg:justify-center'>
                            <div className={`mt-[10px] flex flex-row items-center justify-between border-[1px] border-solid w-[100px] ${themeBorder2}`}>
                                <div className='cursor-pointer' onClick={()=>{counter>1 ? setCounter(counter-1): setCounter(counter)}}><i className={`fa fa-caret-left p-[8px] h-[100%] border-r-[1px] ${themeBorder2}`} aria-hidden="true"></i></div>
                                <div className='py-[4px] px-[10px]'>{counter}</div>
                                <div className='cursor-pointer' onClick={()=>{counter<10 ? setCounter(counter+1): setCounter(counter)}}><i className={`fa fa-caret-right p-[8px] border-l-[1px] ${themeBorder2}`} aria-hidden="true"></i></div>
                            </div>
                        </div>
                        <div className='py-[10px]'>
                            <button type='button' className="h-[50px] min-w-fit py-[10px] px-[20px] rounded-none bg-red text-white font-bold text-[14px] hover:bg-white hover:border-red hover:border-[2px] hover:border-solid hover:text-black">ADD TO CART</button>
                            <button type='button' className="h-[50px] ml-[20px] min-w-fit py-[10px] px-[20px] rounded-none bg-red text-white font-bold text-[14px] hover:bg-white hover:border-red hover:border-[2px] hover:border-solid hover:text-black">BUY NOW</button>
                        </div>
                    </div>
                    <div className={`${themeBorder2} w-[100%] border-dashed border-b-[1px]`}></div>
                    <div>
                        <h2 className='text-[14px] font-bold '>Product Details</h2>
                        <p className='text-[14px] text-darkGray'>{product.description}</p>
                    </div>
                    <div className={`${themeBorder2} w-[100%] border-dashed border-b-[1px]`}></div>
                    <div>
                        <h2 className='text-[14px] font-bold '>Share It</h2>
                        <div className="flex flex-row items-center gap-[10px] lg:justify-center mt-[8px]">
                            <span><FaFacebookF fontSize={"20px"} /></span>
                            <span><FaGooglePlusG fontSize={"20px"} /></span>
                            <span><FaTwitter fontSize={"20px"} /></span>
                            <span><FaInstagram fontSize={"20px"} /></span>
                        </div>
                    </div>
                    <div className={`${themeBorder2} w-[100%] border-dashed border-b-[1px]`}></div>
                </div>
                <div className='mt-[30px] lgmin:px-[30px] sm:w-[90%] lg:w-[70%] lgmin:w-[100%]'>
                    <div className={`flex mm:flex-col mmmin:flex-row lg:justify-center gap-[30px] mmmin:border-b-[1px] mmmin:border-b-solid ${themeBorder2}`}>
                        <h4 className={`${showMenu==="description" ? styleSelectedMenu : themeBorder2} pb-[20px] text-[14px] mm:w-[100%] mm:text-center mm:pb-[10px] cursor-pointer mm:border-b-[1px] mm:border-b-solid`} onClick={()=>setShowMenu("description")}>DESCRIPTION</h4>
                        <h4 className={`${showMenu==="details" ? styleSelectedMenu : themeBorder2} pb-[20px] text-[14px] mm:w-[100%] mm:text-center mm:pb-[10px] cursor-pointer mm:border-b-[1px] mm:border-b-solid`} onClick={()=>setShowMenu("details")}>DETAILS</h4>
                        <h4 className={`${showMenu==="video" ? styleSelectedMenu : themeBorder2} pb-[20px] text-[14px] mm:w-[100%] mm:text-center mm:pb-[10px] cursor-pointer mm:border-b-[1px] mm:border-b-solid`} onClick={()=>setShowMenu("video")}>VIDEO</h4>
                        <h4 className={`${showMenu==="review" ? styleSelectedMenu : themeBorder2} pb-[20px] text-[14px] mm:w-[100%] mm:text-center mm:pb-[10px] cursor-pointer mm:border-b-[1px] mm:border-b-solid`} onClick={()=>setShowMenu("review")}>WRITE REVIEW</h4>
                    </div>
                    <p className='text-[14px] text-darkGray leading-[25px] pt-[20px] px-[20px]'>{product[showMenu]}</p>
                </div>
            </div>
        </div>
    );
}

export default Product;