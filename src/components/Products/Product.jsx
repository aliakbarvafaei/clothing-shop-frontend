import React, { useEffect, useState } from 'react';
import { useTheme } from '../../contexts/theme';
import { FaGooglePlusG } from "@react-icons/all-files/fa/FaGooglePlusG";
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram";
import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter";
import { FaFacebookF } from "@react-icons/all-files/fa/FaFacebookF";
import { useToast } from '../../contexts/ToastState';
import { useHistory } from 'react-router-dom';
import { deleteCart, isInCart, postCart, postWishlist, updateCart } from '../../services/api';
import Skeleton from '@mui/material/Skeleton';
import { useSelector } from 'react-redux';

function Product({product}) {
    const history = useHistory();
    const {theme} = useTheme();
    const themeClass = theme.mode==="DARK" ? "bg-darkModeLightBlack text-lightGray": "bg-white";
    const themeBorder = theme.mode==="DARK" ? "border-red": "border-darkGray";
    const themeBorder2 = theme.mode==="DARK" ? "border-lightestBlack": "border-darkModeGray";

    const {setToastState} = useToast();

    // const {user} = useAuth();
    const { user } = useSelector(
        (state) => state.userAuth
      )

    const [showMenu, setShowMenu] = useState("description");
    const styleSelectedMenu = "text-red border-red border-b-solid border-b-[2px]";

    const [counter, setCounter] = useState(1);
    const [textButton,settextButton] = useState("");

    const [backgroundImage, setBackgroundImage] = useState(product.images.split(',')[0]);

    const [firstLoad, setFirstLoad] = useState(1);
    const [doneRequest, setdoneRequest] = useState(0);
    function addItemOnce(arr, value) {
        arr.push(value);
        return arr;
    }
    useEffect(()=>{
        if(user){
            isInCart(user,product.code)
            .then((response) => {
                setCounter(Number(response.data));
                settextButton("REMOVE PRODUCT FROM CART");
                setdoneRequest(1);
            })
            .catch(err => {
                settextButton("ADD TO CART");
                console.error(err);
            });            
        }
        else{
            settextButton("ADD TO CART");
        }
    },[])

    function handleBackground(e){
        setBackgroundImage(e.target.src);
    }

    function handleClickHeart(e){
        e.preventDefault();
        if(!user){
            setToastState(old=>addItemOnce(old.slice(),{ title: "2" , description: "First, log in to your account", key:Math.random()}));
            history.push('/login');
        }else{
            // setToastState(old=>addItemOnce(old.slice(),{
            //     title: "3",
            //     description: "", key:Math.random()
            //     }))
            postWishlist(user,product.code)
            .then((response) => {
                console.log(response.data);
                setToastState(old=>addItemOnce(old.slice(),{title: "1",description: "Product Added Successfully", key:Math.random()}));
            })
            .catch(err => {
                if(err.response.status===409){
                    setToastState(old=>addItemOnce(old.slice(),{title: "2",description: "This Product Already Added", key:Math.random()}));
                }else{
                    console.error(err);
                }
            });
        }
    }
    function handleQuantity(operand){
        if(operand==='-')
            counter>1 ? setCounter(old=>old-1) : setCounter(old=>old);
        else if(operand==='+'){
            if(counter<Number(product.stock))
                counter<10 ? setCounter(old=>old+1) : setCounter(old=>old);
            else{
                setToastState(old=>addItemOnce(old.slice(),{ title: "2" , description: "Your request is more than stock", key:Math.random()}));
            }
        }        
    }

    useEffect(()=>{
        if(doneRequest===1)
            setFirstLoad(0);
    },[doneRequest])
    
    useEffect(()=>{
        if(firstLoad===0 && textButton==="REMOVE PRODUCT FROM CART")
        {
            // setToastState(old=>addItemOnce(old.slice(),{
            //     title: "3",
            //     description: "", key:Math.random()
            //     }))
            updateCart(user,product.code,String(counter))
                .then((response) => {
                    console.log(response.data);
                    setToastState(old=>addItemOnce(old.slice(),{title: "1",description: "Product changed Successfully", key:Math.random()}));
                })
                .catch(err => {
                        console.error(err);
                });
        }
    },[counter])

    function handleClickCart(e){
        e.preventDefault();
        if(!user){
            setToastState(old=>addItemOnce(old.slice(),{ title: "2" , description: "First, log in to your account", key:Math.random()}));
            history.push('/login');
        }else{
            // setToastState(old=>addItemOnce(old.slice(),{
            //     title: "3",
            //     description: "", key:Math.random()
            //     }))
            if(textButton==="ADD TO CART"){
                if(counter>Number(product.stock))
                {
                    if(Number(product.stock)===0){
                        setToastState(old=>addItemOnce(old.slice(),{ title: "2" , description: "Out Of Stock", key:Math.random()}));
                    }
                    else
                        setToastState(old=>addItemOnce(old.slice(),{ title: "2" , description: "Your request is more than stock", key:Math.random()}));
                }
                else{
                    postCart(user,product.code,String(counter))
                    .then((response) => {
                        console.log(response.data);
                        setdoneRequest(1);
                        settextButton("REMOVE PRODUCT FROM CART");
                        setToastState(old=>addItemOnce(old.slice(),{title: "1",description: "Product Added Successfully", key:Math.random()}));
                    })
                    .catch(err => {
                        if(err.response.status===409){
                            setToastState(old=>addItemOnce(old.slice(),{title: "2",description: "This Product Already Added", key:Math.random()}));
                        }else{
                            console.error(err);
                        }
                    });
                }
            }else{
                deleteCart(user,product.code)
                .then((response) => {
                    console.log(response.data);
                    settextButton("ADD TO CART");
                    setCounter(1);
                    setToastState(old=>addItemOnce(old.slice(),{title: "2", description: "Product Removed Successfully", key:Math.random()}))
                })
                .catch(err => {
                        console.error(err);
                });
            }
        }
    }
    return (
        <div className={`${themeClass} px-total py-[50px]`}>
            <div className='flex lg:flex-col lg:items-center lg:gap-[20px] lgmin:flex-row lgmin:justify-between flex-wrap'>
                <div className='sm:w-[90%] lg:w-[70%] lgmin:w-[48%] flex flex-col gap-[20px]'>
                    {textButton!=='' ?
                    <><div className={` bg-[length:100%_100%] bg-no-repeat w-[100%] mm:h-[350px] sm:h-[450px] md:h-[550px] lg:h-[700px] lgmin:h-[750px]`} style={{backgroundImage: `url("`+backgroundImage+`")`}}>
                    
                    </div>
                    <div className='flex flex-row justify-between w-[100%] gap-[4%]'>
                        {
                            product.images.split(',').map((item,index)=>{
                                return <img key={index} className={`${item===backgroundImage ? "border-solid border-[2px]":""} ${themeBorder} min-w-[22%] cursor-pointer`} onClick={handleBackground} src={item} alt={index} />
                            })
                        }
                    </div>
                    </>
                    : <div className='w-[100%] mm:h-[350px] sm:h-[450px] md:h-[550px] lg:h-[700px] lgmin:h-[750px] mt-0 pt-0'><Skeleton variant="rectangular" width={'100%'} height={'70%'} /></div>
                    }
                </div>
                <div className='sm:w-[90%] lg:w-[70%] lgmin:w-[48%] flex flex-col gap-[10px] lg:text-center'>
                    <div>
                        {textButton!=='' ? 
                        <><h2 className='text-[25px] font-bold pb-[10px]'>{product.name}<span className='text-[16px] text-darkGray font-normal'>{product.code}</span></h2>
                        <i className="fa fa-heart text-red pb-[5px]" onClick={handleClickHeart} aria-hidden="true"></i>
                        </>: <div className='w-[100%] mt-0 pt-0'><Skeleton variant="rectangular" width={'100%'} height={'50px'} /></div>
                        }
                        {textButton!=='' ? <><h3><strike className='text-[14px] text-darkGray'>${product.price}</strike><span className='text-red'> {product.off}% Off</span></h3>
                        <h3 className='text-[26px]'>${Number(product.price)*(100-Number(product.off))/100}</h3></>
                        : <div className='w-[100%] mt-[10px] ml-[10%]'><Skeleton variant="rectangular" width={'80%'} height={'40px'} /></div>}
                        {textButton!=='' ? <div id='colors' className='flex flex-row gap-[5px] pt-[15px] pb-[10px] lg:justify-center'>
                            {
                                (product.colors).split(',').map((item,index)=>{
                                    return  <div key={index} className={`${themeBorder2} border-solid border-[1px] w-[30px] h-[30px] rounded-[50%]`} style={{backgroundColor: `${item}`}}></div>
                                })
                            } 
                        </div>
                        : <div className='w-[100%] mt-[10px]'><Skeleton variant="rectangular" width={'100%%'} height={'40px'} /></div>}
                    </div>
                    <div className={`${themeBorder2} w-[100%] border-dashed border-b-[1px]`}></div>
                    {textButton!==''? <div>
                        <h2 className='text-[14px] font-bold '>Select Size</h2>
                        <div id='colors' className='flex flex-row gap-[5px] pt-[15px] pb-[10px] lg:justify-center'>
                            {
                                (product.size).split(',').map((item,index)=>{
                                    return  <div key={index} className={`${themeBorder2} border-solid border-[1px] w-[35px] h-[35px] rounded-[50%] flex items-center justify-center`}>{item}</div>
                                })
                            } 
                        </div>
                        <h3 className='text-[14px] font-bold text-red'>{Number(product.stock)===0 ? "Not available in stock" : Number(product.stock)<10 ? `Only ${product.stock} in stock` : "InStock"}</h3>
                        <h3 className='text-[14px] font-bold '>Quantity</h3>
                        <div className='flex lg:justify-center'>
                            <div className={`mt-[10px] flex flex-row items-center justify-between border-[1px] border-solid w-[100px] ${themeBorder2}`}>
                                <div className='cursor-pointer' onClick={()=>handleQuantity('-')}><i className={`fa fa-caret-left p-[8px] h-[100%] border-r-[1px] ${themeBorder2}`} aria-hidden="true"></i></div>
                                <div className='py-[4px] px-[10px]'>{counter}</div>
                                <div className='cursor-pointer' onClick={()=>handleQuantity('+')}><i className={`fa fa-caret-right p-[8px] border-l-[1px] ${themeBorder2}`} aria-hidden="true"></i></div>
                            </div>
                        </div>
                        <div className='py-[10px]'>
                            <button type='button' onClick={handleClickCart} className="h-[50px] min-w-fit py-[10px] px-[20px] rounded-none bg-red text-white font-bold text-[14px] hover:bg-white hover:border-red hover:border-[2px] hover:border-solid hover:text-black">{textButton}</button>
                        </div> 
                    </div>
                    : <div className='w-[100%] my-[30px]'><Skeleton variant="rectangular" width={'100%%'} height={'60px'} /></div>}
                    <div className={`${themeBorder2} w-[100%] border-dashed border-b-[1px]`}></div>
                    {textButton!=='' ? <><div>
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
                    </div></>
                    : <div className='w-[100%] my-[30px]'><Skeleton variant="rectangular" width={'100%%'} height={'150px'} /></div>}
                    <div className={`${themeBorder2} w-[100%] border-dashed border-b-[1px]`}></div>
                </div>
                <div className='mt-[30px] lgmin:px-[30px] sm:w-[90%] lg:w-[70%] lgmin:w-[100%]'>
                    {textButton!=='' ? <><div className={`flex mm:flex-col mmmin:flex-row lg:justify-center gap-[30px] mmmin:border-b-[1px] mmmin:border-b-solid ${themeBorder2}`}>
                        <h4 className={`${showMenu==="description" ? styleSelectedMenu : themeBorder2} pb-[20px] text-[14px] mm:w-[100%] mm:text-center mm:pb-[10px] cursor-pointer mm:border-b-[1px] mm:border-b-solid`} onClick={()=>setShowMenu("description")}>DESCRIPTION</h4>
                        <h4 className={`${showMenu==="details" ? styleSelectedMenu : themeBorder2} pb-[20px] text-[14px] mm:w-[100%] mm:text-center mm:pb-[10px] cursor-pointer mm:border-b-[1px] mm:border-b-solid`} onClick={()=>setShowMenu("details")}>DETAILS</h4>
                        <h4 className={`${showMenu==="video" ? styleSelectedMenu : themeBorder2} pb-[20px] text-[14px] mm:w-[100%] mm:text-center mm:pb-[10px] cursor-pointer mm:border-b-[1px] mm:border-b-solid`} onClick={()=>setShowMenu("video")}>VIDEO</h4>
                        <h4 className={`${showMenu==="review" ? styleSelectedMenu : themeBorder2} pb-[20px] text-[14px] mm:w-[100%] mm:text-center mm:pb-[10px] cursor-pointer mm:border-b-[1px] mm:border-b-solid`} onClick={()=>setShowMenu("review")}>WRITE REVIEW</h4>
                    </div>
                    <p className='text-[14px] text-darkGray leading-[25px] pt-[20px] px-[20px]'>{product[showMenu]}</p></>
                    : <div className='w-[100%] mt-[-200px]'><Skeleton variant="rectangular" width={'100%%'} height={'150px'} /></div>}
                </div>
            </div>
        </div>
    );
}

export default Product;