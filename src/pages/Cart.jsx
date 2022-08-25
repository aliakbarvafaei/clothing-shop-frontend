import React, { useEffect, useState } from 'react';
import TitlePages from '../components/TitlePages/TitlePages';
import { useAuth } from '../contexts/Auth';
import { useTheme } from '../contexts/theme';
import { useToast } from '../contexts/ToastState';
import { deleteCart, getCart, updateCart } from '../services/api';
import emptyCart from "../assets/images/emptyCart.png";
import { Link } from 'react-router-dom';


function Cart(props) {
    const {theme} = useTheme();
    const themeClass = theme.mode==="DARK" ? "bg-darkModeLightBlack text-white": "bg-white";
    const themeBorder = theme.mode==="DARK" ? "border-lightestBlack": "border-darkModeGray";

    const {setToastState} = useToast();

    var totalPrice=0;
    const {user} = useAuth();
    const [productCart, setProductCart] = useState([]);

    useEffect(()=>{
        getCart(user.loggedIn)
        .then((response) => {
            setProductCart(response.data);
        })
        .catch(err => {
                console.error(err);
        });
    },[]);

    function handleremove(item){ 
        setToastState({
            title: "3",
            description: "",
            })
        deleteCart(user.loggedIn,item.product.code)
        .then((response) => {
            console.log(response.data);
            setToastState({title: "2", description: "Product Removed Successfully"})
        })
        .catch(err => {
                console.error(err);
        });
        setProductCart(old => removeItemOnce(old.slice(), item));
    }
    function removeItemOnce(arr, value) {
        var index = arr.indexOf(value);
        if (index > -1) {
          arr.splice(index, 1);
        }
        return arr;
      }
    function handleQuantity(str,item){
        const xxx= str==='-'? Number(item.quantity)-1:Number(item.quantity)+1;
        if(xxx!==0){
            setToastState({
                title: "3",
                description: "",
                })
            updateCart(user.loggedIn,item.product.code,String(xxx))
            .then((response) => {
                console.log(response.data);
                setToastState({title: "1", description: "Product changed Successfully"})
            })
            .catch(err => {
                    console.error(err);
            });
            setProductCart(old => (updateItemOne(old.slice(), item,String(xxx))));
        }
    }

    function updateItemOne(arr,value,newQuantity){
        var index = arr.indexOf(value);
        arr[index].quantity=newQuantity;
        return arr;
    }
    return (
        <div>
            <TitlePages title="CART"/>
            <div className={`${themeClass} px-total py-[50px]`}>
                <table className='w-[100%] table-fixed'>
                    <thead className={`border-b-solid border-b-[.5px] ${themeBorder}`}>
                        <tr>
                            <th className='p-[12px]'>IMAGE</th>
                            <th className='p-[12px]'>PRODUCT NAME</th>
                            <th className='md:hidden p-[12px]'>PRICE</th>
                            <th className='md:hidden p-[12px]'>AVAILABILITY</th>
                            <th className='md:hidden p-[12px]'>ACTION</th>
                            <th className='md:hidden p-[12px]'>TOTAL</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            productCart.map((item,index)=>{
                                totalPrice+=Number(item.quantity)*(Number(item.product.price)*(100-Number(item.product.off))/100);
                                return <tr className={`text-center border-b-solid border-b-[.5px] ${themeBorder}`}>
                                    <td className='p-[12px]'><Link to={'/product-details/'+String(item.product.code)+`-`+String((item.product.name).replace(/\s/g, '').toLowerCase())}><img className='mm:w-[60%] sm:w-[40%] smmin:w-[30%] ml-[35%]' src={item.product.images[0]} alt="" /></Link></td>
                                    <td className='md:hidden p-[12px] text-darkGray'><Link to={'/product-details/'+String(item.product.code)+`-`+String((item.product.name).replace(/\s/g, '').toLowerCase())}>{item.product.name}</Link></td>
                                    <td className='md:hidden p-[12px] text-[24px]'>${Number(item.product.price)*(100-Number(item.product.off))/100}</td>
                                    <td className='md:hidden p-[25px] text-darkGray flex flex-col gap-[5px] items-center justify-center'>
                                        <div className='flex lg:justify-center'>
                                            <div className={`mt-[10px] flex flex-row items-center justify-between border-[1px] border-solid w-[100px] ${themeBorder}`}>
                                                <div className='cursor-pointer' onClick={()=>handleQuantity("-",item)}><i className={`fa fa-caret-left p-[8px] h-[100%] border-r-[1px] ${themeBorder}`} aria-hidden="true"></i></div>
                                                <div className='py-[4px] px-[10px]'>{Number(item.quantity)}</div>
                                                <div className='cursor-pointer' onClick={()=>handleQuantity("+",item)}><i className={`fa fa-caret-right p-[8px] border-l-[1px] ${themeBorder}`} aria-hidden="true"></i></div>
                                            </div>
                                        </div>
                                        {Number(item.product.stock)>=Number(item.quantity) ? "In Stock": "Out Of Stock"}
                                    </td>
                                    <td className='md:hidden p-[12px] text-darkGray'><i class="fa fa-times cursor-pointer" onClick={()=>{handleremove(item)}} aria-hidden="true"></i></td>
                                    <td className='md:hidden p-[12px] text-darkGray'>${Number(item.quantity)*(Number(item.product.price)*(100-Number(item.product.off))/100)}</td>
                                    <td className='mdmin:hidden md:flex flex-col items-center justify-center gap-[20px] pt-[10%] text-[14px] w-[100%] h-[100%] p-[12px]'>
                                        <span className='w-[100%] text-darkGray'>{item.product.name}</span>
                                        <span className='flex smmin:flex-row sm:flex-col justify-between items-center flex-wrap w-[80%]'>
                                            <span className='text-darkGray flex flex-col items-center w-[100%] gap-[5px]'>
                                                <div className='flex lg:justify-center'>
                                                    <div className={`mt-[10px] flex flex-row items-center justify-between border-[1px] border-solid w-[100px] ${themeBorder}`}>
                                                        <div className='cursor-pointer' onClick={()=>handleQuantity("-",item)}><i className={`fa fa-caret-left p-[8px] h-[100%] border-r-[1px] ${themeBorder}`} aria-hidden="true"></i></div>
                                                        <div className='py-[4px] px-[10px]'>{Number(item.quantity)}</div>
                                                        <div className='cursor-pointer' onClick={()=>handleQuantity("+",item)}><i className={`fa fa-caret-right p-[8px] border-l-[1px] ${themeBorder}`} aria-hidden="true"></i></div>
                                                    </div>
                                                </div>
                                                {Number(item.product.stock)>=Number(item.quantity) ? "In Stock": "Out Of Stock"}
                                            </span>
                                            <span className='text-red text-[20px]'>${Number(item.product.price)*(100-Number(item.product.off))/100}</span>
                                            <span className='text-darkGray'><i class="fa fa-times cursor-pointer" onClick={()=>{handleremove(item)}} aria-hidden="true"></i></span>
                                            <span className='text-darkGray'>${Number(item.quantity)*(Number(item.product.price)*(100-Number(item.product.off))/100)}</span>
                                        </span>
                                    </td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
                {(productCart.length===0 || !productCart) && <div className='w-[100%] text-center py-[30px] text-darkGray font-bold flex flex-col items-center gap-[20px]'><img src={emptyCart} alt="empty" />Your Cart is Empty</div>}
                {!(productCart.length===0 || !productCart) &&
                <div className='flex md:flex-col mdmin:flex-row justify-between items-center my-[20px] mr-[0px] w-[100%]'>
                    <div className='mdmin:w-[30%] md:w-[60%] flex flex-row justify-between items-center font-bold'>
                        <span className='text-[15px]'>Total Price:</span>   
                        <span className='text-[24px]'>${Number(Math.round(totalPrice+'e'+3)+'e-'+3)}</span>
                    </div>
                    <div className='md:text-center mdmin:text-right w-[100%] mt-[10px]'>
                        <button type='button'className="h-[50px] min-w-fit sm:p-[5px] smmin:p-[10px] rounded-none bg-red text-white font-bold sm:text-[11px] smmin:text-[14px] hover:bg-white hover:border-red hover:border-[2px] hover:border-solid hover:text-black">CONTINUE SHOPPING</button>
                        <button type='button'className="h-[50px] min-w-fit sm:p-[5px] smmin:p-[10px] sm:ml-[10px] smmin:ml-[20px] rounded-none bg-red text-white font-bold sm:text-[11px] smmin:text-[14px] hover:bg-white hover:border-red hover:border-[2px] hover:border-solid hover:text-black">CHECK OUT</button>
                    </div>
                </div>
                }

            </div>
        </div>
    );
}

export default Cart;