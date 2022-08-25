import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import TitlePages from '../components/TitlePages/TitlePages';
import { useAuth } from '../contexts/Auth';
import { useTheme } from '../contexts/theme';
import { useToast } from '../contexts/ToastState';
import { deleteWishlist, getWishlist } from '../services/api';

function Wishlist(props) {
    const {theme} = useTheme();
    const themeClass = theme.mode==="DARK" ? "bg-darkModeLightBlack text-white": "bg-white";
    const themeBorder = theme.mode==="DARK" ? "border-lightestBlack": "border-darkModeGray";
    const [productWishlist, setProductWishlist] = useState([]);
    const { setToastState } = useToast();
    
    const {user} = useAuth()

    useEffect(()=>{
        getWishlist(user.loggedIn)
        .then((response) => {
            setProductWishlist(response.data);
        })
        .catch(err => {
                console.error(err);
        });
    },[]);

    function handleremove(product){ 
        setToastState({
            title: "3",
            description: "",
            })
        deleteWishlist(user.loggedIn,product.code)
        .then((response) => {
            console.log(response.data);
            setToastState({title: "2", description: "Product Removed Successfully"})
        })
        .catch(err => {
                console.error(err);
        });
        setProductWishlist(old => removeItemOnce(old.slice(), product));
    }
    function removeItemOnce(arr, value) {
        var index = arr.indexOf(value);
        if (index > -1) {
          arr.splice(index, 1);
        }
        return arr;
      }
    return (
        <div>
            <TitlePages title="WISHLIST" />
            <div className={`${themeClass} px-total py-[50px]`}>
                <table className='w-[100%] table-fixed'>
                    <thead className={`border-b-solid border-b-[.5px] ${themeBorder}`}>
                        <tr>
                            <th className='p-[12px]'>IMAGE</th>
                            <th className='p-[12px]'>PRODUCT NAME</th>
                            <th className='md:hidden p-[12px]'>PRICE</th>
                            <th className='md:hidden p-[12px]'>AVAILABILITY</th>
                            <th className='md:hidden p-[12px]'>ACTION</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            productWishlist.map((product,index)=>{
                                return <tr className={`text-center border-b-solid border-b-[.5px] ${themeBorder}`}>
                                    <td className='p-[12px]'><Link to={'/product-details/'+String(product.code)+`-`+String((product.name).replace(/\s/g, '').toLowerCase())}><img className='mm:w-[60%] sm:w-[40%] smmin:w-[30%] ml-[35%]' src={product.images[0]} alt="" /></Link></td>
                                    <td className='md:hidden p-[12px] text-darkGray'><Link to={'/product-details/'+String(product.code)+`-`+String((product.name).replace(/\s/g, '').toLowerCase())}>{product.name}</Link></td>
                                    <td className='md:hidden p-[12px] text-[24px]'>{Number(product.price)*(100-Number(product.off))/100}</td>
                                    <td className='md:hidden p-[12px] text-darkGray'>{(product.stock)>0 ? "In Stock": "Out Of Stock"}</td>
                                    <td className='md:hidden p-[12px] text-darkGray'><i class="fa fa-times cursor-pointer" onClick={()=>{handleremove(product)}} aria-hidden="true"></i></td>
                                    <td className='mdmin:hidden md:flex flex-col items-center justify-center gap-[20px] pt-[10%] text-[14px] w-[100%] h-[100%] p-[12px]'>
                                        <span className='w-[100%] text-darkGray'>{product.name}</span>
                                        <span className='flex smmin:flex-row sm:flex-col justify-between items-center flex-wrap w-[80%]'>
                                            <span className='text-darkGray'>{(product.stock)>0 ? "In Stock": "Out Of Stock"}</span>
                                            <span className='text-red text-[20px]'>{Number(product.price)*(100-Number(product.off))/100}</span>
                                            <span className='text-darkGray'><i class="fa fa-times cursor-pointer" onClick={()=>{handleremove(product)}} aria-hidden="true"></i></span>
                                        </span>
                                    </td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
                {(productWishlist.length===0 || !productWishlist) && <div className='w-[100%] text-center py-[30px] text-red'><i className="fa fa-exclamation-triangle mt-[2px] mr-[5px]" aria-hidden="true"></i>No product found</div>}
                <div className='text-right w-[100%] mt-[10px]'>
                    <button type='button'className="h-[50px] min-w-fit sm:p-[5px] smmin:p-[10px] rounded-none bg-red text-white font-bold sm:text-[11px] smmin:text-[14px] hover:bg-white hover:border-red hover:border-[2px] hover:border-solid hover:text-black">CONTINUE SHOPPING</button>
                    <button type='button'className="h-[50px] min-w-fit sm:p-[5px] smmin:p-[10px] sm:ml-[10px] smmin:ml-[20px] rounded-none bg-red text-white font-bold sm:text-[11px] smmin:text-[14px] hover:bg-white hover:border-red hover:border-[2px] hover:border-solid hover:text-black">CHECK OUT</button>
                </div>
            </div>
        </div>
    );
}

export default Wishlist;