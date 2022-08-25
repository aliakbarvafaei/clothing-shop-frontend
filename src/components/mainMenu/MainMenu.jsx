import React, { useState } from 'react';
import { useTheme } from '../../contexts/theme';
import logo from "../../assets/images/logo.png";
import classNames from "classnames";
import useSticky from "./useSticky";
import Hamburger from "./Hamburger/Hamburger";
import { Link, useHistory } from "react-router-dom"
// import "bootstrap/dist/css/bootstrap.min.css"

const titleMenus=[{title: "HOME", submenu:[{title:"New Demos", pathTo:"/"},{title:"Clothing", pathTo:"/"},{title:"Basics", pathTo:"/"},{title:"Beauty", pathTo:"/"},{title:"Eelectronic", pathTo:"/"},{title:"Furniture", pathTo:"/"},{title:"Vegetables", pathTo:"/"},{title:"Watch", pathTo:"/"},{title:"Lights", pathTo:"/"},{title:"Goggles", pathTo:"/"},{title:"Shoes", pathTo:"/"},{title:"Bagg", pathTo:"/"},{title:"Flowers", pathTo:"/"}]},
{title: "SHOP", submenu:[{title:"Left Sidebar", pathTo:"/"},{title:"Right Sidebar", pathTo:"/"},{title:"No Sidebar", pathTo:"/"},{title:"Sidebar Popup", pathTo:"/"},{title:"Metro", pathTo:"/"},{title:"Full Width", pathTo:"/"},{title:"3 Grid", pathTo:"/"},{title:"6 Six", pathTo:"/"},{title:"List View", pathTo:"/"}]},
{title: "PRODUCTS", submenu:[{title:"Sidebar", pathTo:"/"},{title:"Thumbnail Image", pathTo:"/"},{title:"3-Column", pathTo:"/"},{title:"4 Image", pathTo:"/"},{title:"Bundle Product", pathTo:"/"},{title:"Sticky", pathTo:"/"},{title:"Accordian", pathTo:"/"},{title:"Image Swatch", pathTo:"/"},{title:"Vertical Tab", pathTo:"/"}]},
{title: "FEATURES", submenu:[{title:"Portfolio", pathTo:"/"},{title:"Add To Cart", pathTo:"/"},{title:"Theme Element", pathTo:"/"},{title:"Product Element", pathTo:"/"},{title:"Email Template", pathTo:"/"}]},
{title: "PAGES", submenu:[{title:"Vendor", pathTo:"/"},{title:"Account", pathTo:"/"},{title:"About-Us", pathTo:"/"},{title:"Search", pathTo:"/"},{title:"Typograohy", pathTo:"/"},{title:"Review", pathTo:"/"},{title:"Order-Success", pathTo:"/"},{title:"Compare", pathTo:"/"},{title:"Collection", pathTo:"/"},{title:"Lookbook", pathTo:"/"},{title:"Site-Map", pathTo:"/"},{title:"404", pathTo:"/"},{title:"Comming-Soon", pathTo:"/"},{title:"FAQ", pathTo:"/"}]},
{title: "BLOGES", submenu:[{title:"Blog Left Sidebar", pathTo:"/"},{title:"Blog Right Sidebar", pathTo:"/"},{title:"No Sidebar", pathTo:"/"},{title:"Blog Detail", pathTo:"/"}]},
]
const submenuSetting=[{title: "Language", pathTo:"/"}, {title:"Currency", pathTo: "/"}];
const submenuCart=["Your cart is currently empty."];

function MainMenu(props) {
    const {theme} = useTheme();
    const [isOpen, setIsOpen] = useState(false);
    const { sticky, stickyRef } = useSticky();
    const history = useHistory();

    const themeClass = theme.mode==="DARK" ? "bg-darkModeLightBlack text-darkModeGray": "bg-white";

    function handeHamburger()
    {
      setIsOpen(old => !old);
    }
    const stickyClass = sticky ? "fixed top-0 z-[20] w-[100%]":"";
  
    return (
    <>
    <div ref={stickyRef} className={`${stickyClass} ${themeClass} flex flex-row items-center justify-between py-[40px] px-total shadow-[0_2px_4px_0_rgba(200,200,200)] box-border`} >
        <div className="flex flex-row justify-between items-center gap-[30px]">
          <i className="fa fa-bars text-[25px] cursor-pointer" aria-hidden="true"></i>
          <span><Link to="/home"><img className="w-[100%] cursor-pointer sm:w-[40%] sm:absolute sm:left-[30%] sm:mt-[-4%]" src={logo} alt="title" /></Link></span>
        </div>
        <div className="flex flex-row items-center justify-between gap-[30px]">
          <ul className="xl:hidden xlmin:flex flex-row items-center gap-[25px] m-0 list-none p-0">
            {
              titleMenus.map((titleMenu, index)=>{
                return <li className='group relative text-inherit' key={index}>
                <button className="peer pl-0 text-[16px]">{titleMenu.title}</button>
                <i className="fa fa-caret-down text-[16px] pl-[10px] cursor-pointer group-hover:text-red" aria-hidden="true"></i>          
                <div className={`${themeClass} absolute hidden peer-hover:block hover:flex w-[200px] py-[10px] px-[20px] left-0
                flex-col drop-shadow-lg z-[22]`}>
                    {
                      titleMenu.submenu.map((item,index)=>{
                            return <Link className={`text-left text-[14px] py-[12px] hoverItem`} to={item.pathTo} key={index}>{item.title}</Link>
                        })    
                    }
                </div>
              </li>
              })
            }
          </ul>
          <div className="xl:inline xlmin:hidden text-red curser-pointer">
            <i className="fa fa-bars text-[25px] cursor-pointer" aria-hidden="true"  onClick={handeHamburger}></i>
              <Hamburger isOpen={isOpen} handeHamburger={handeHamburger} items={titleMenus} />
          </div>

          <ul className="sm:hidden smmin:flex flex-row m-0 items-center list-none">
            <li className='group text-inherit pl-[12px]'>
              <i onClick={()=>history.push('/search')} className="peer fa fa-search text-[25px] cursor-pointer group-hover:text-red" aria-hidden="true"></i>
            </li>
            <li className='group relative text-inherit pl-[12px]'>
              <i className="peer fa fa-cog text-[25px] px-[1px] py-[1px] cursor-pointer group-hover:text-red" aria-hidden="true"></i>          
              <div className={`${themeClass} absolute hidden peer-hover:block hover:flex w-[200px] py-[10px] px-[20px] right-0
              flex-col drop-shadow-lg z-[22]`}>
                  {
                    submenuSetting.map((item,index)=>{
                          return <Link className={classNames("text-left text-[14px] py-[12px] hoverItem")} to={item.pathTo} key={index}>{item.title}</Link>
                      })    
                  }
              </div>
            </li>
            <li className='group relative text-inherit pl-[12px]'>
              <i onClick={()=>history.push('/cart')} className="peer fa fa-shopping-cart text-[25px] px-[1px] py-[1px] cursor-pointer group-hover:text-red" aria-hidden="true"></i>          
              <div className={`${themeClass} absolute hidden peer-hover:block hover:flex w-[800%] py-[10px] px-[20px] right-0
              flex-col drop-shadow-lg z-[22]`}>
                  {
                    submenuCart.map((item,index)=>{
                          return <Link className={classNames("text-left text-[14px] py-[12px] hoverItem")} to="/" key={index}>{item}</Link>
                      })    
                  }
              </div>
            </li>
          </ul>
        </div>
    </div>
    {sticky && (
      <div
        style={{
          height: `${stickyRef.current?.clientHeight}px`
        }}
      />
    )}
    </>
    );
}

export default MainMenu;
