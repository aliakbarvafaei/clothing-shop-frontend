import React from 'react';
import Badge from '@mui/material/Badge';
import { Link, useHistory } from 'react-router-dom';
import { useTheme } from '../../contexts/theme';
import { useAuth } from '../../contexts/Auth';
import { useToast } from '../../contexts/ToastState';

// const submenuCart=["Your cart is currently empty."];

const submenuSetting=[{title: "Language", pathTo:"/"}, {title:"Currency", pathTo: "/"}];
const myAccountDrop=[{title: "Login", pathTo: "/login"},{title: "Register", pathTo: "/register"},
{title: "Profile", pathTo: "/profile"},{title: "Logout", pathTo: "/"}]

function MobileMenu(props) {
    const {user, toggleAuth} = useAuth();
    const {setToastState} = useToast();

    const history = useHistory();
    const {theme} = useTheme();
    const themeClass = theme.mode==="DARK" ? "bg-darkModeLightBlack text-darkModeGray": "bg-darkModeLightBlack";


    return (<>
        <div className="sm:fixed smmin:hidden sm:bottom-0 z-[25] flex flex-row justify-between items-center bg-darkModeLightBlack w-full h-16 text-darkGray text-[26px] px-[60px]">
            <i className="fa fa-search" aria-hidden="true" onClick={()=>history.push('/search')}></i>         

            <Link to="/wishlist"><i className="fa fa-heart" aria-hidden="true"></i></Link>
            {/* <ShopIcon submenu={submenuCart} icon="fa fa-shopping-cart iconsMenu" dir="left"/> */}
            <Link to="/cart">
                <Badge badgeContent={0} showZero color="secondary">
                    <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                </Badge>
            </Link>
            <i className="fa fa-user group relative" aria-hidden="true">
                <div className={`${themeClass} absolute hidden group-hover:block hover:flex w-[150px] py-[10px] px-[20px] bottom-6 right-[-60px]
                flex-col drop-shadow-lg z-[26]`}>
                  {
                    myAccountDrop.map((item,index)=>{
                        if(user.loggedIn){
                            if(item.title==="Logout")
                                return <Link className="text-left text-[14px] py-[12px] hoverItem font-font font-normal" onClick={()=>{toggleAuth();setToastState({title:"2",description:"Logout Successfully"});}} to={item.pathTo} key={index}>{item.title}</Link>
                            else if(item.title==="Profile")
                                return <Link className="text-left text-[14px] py-[12px] hoverItem font-font font-normal"  to={item.pathTo} key={index}>{item.title}</Link>
                        }else if(item.title!=="Logout" && item.title!=="Profile"){
                            return <Link className="text-left text-[14px] py-[12px] hoverItem font-font font-normal" to={item.pathTo} key={index}>{item.title}</Link>
                        }
                    })      
                  }
              </div>
            </i>
            <i className="fa fa-cog group relative" aria-hidden="true">
                <div className={`${themeClass} absolute hidden group-hover:block hover:flex w-[150px] py-[10px] px-[20px] bottom-6 right-[-60px]
                flex-col drop-shadow-lg z-[26]`}>
                  {
                    submenuSetting.map((item,index)=>{
                          return <Link className="text-left text-[14px] py-[12px] hoverItem font-font font-normal" to={item.pathTo} key={index}>{item.title}</Link>
                      })    
                  }
              </div>
            </i>
        </div>
        </>
    );
}

export default MobileMenu;