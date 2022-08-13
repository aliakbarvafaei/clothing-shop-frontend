import React, { useState } from 'react';
import { useTheme } from '../../contexts/theme';
import logo from "../../assets/images/logo.png";
import Drop from "../DropOnHover"
import Hamburger from "./Hamburger"
import "bootstrap/dist/css/bootstrap.min.css"
import "./style.scss"

const titleMenus=[{title: "HOME", submenu:["New Demos","Clothing","Basic"]},
{title: "SHOP", submenu:["New Demos","Clothing","Basic"]},
{title: "PRODUCTS", submenu:["New Demos","Clothing","Basic"]},
{title: "FEATURES", submenu:["New Demos","Clothing","Basic"]},
{title: "PAGES", submenu:["New Demos","Clothing","Basic"]},
{title: "BLOGES", submenu:["New Demos","Clothing","Basic"]},
]

function MainMenu(props) {
    const {theme} = useTheme();
    const [isOpen, setIsOpen] = useState(false);

    function handeHamburger()
    {
      setIsOpen(old => !old);
    }
    
    
    return (
    <div id="mainMenu" className={theme.mode==="LIGHT" ? "lightMenu": "darkMenu"}>
        <div id="leftMenu">
          <i className="fa fa-bars iconsMenu" aria-hidden="true"></i>
          <span><img id="titleImage" src={logo} alt="title" /></span>
        </div>
        
        <div id="rightMenu">
          <ul id="menus" className="">
            {
              titleMenus.map((titleMenu, index)=>{
                return <Drop title={titleMenu.title} submenu={titleMenu.submenu} key={index}/>
              })
            }
          </ul>
          <div className="hamburger">
            <i className="fa fa-bars iconsMenu" aria-hidden="true"  onClick={handeHamburger}></i>
              <Hamburger isOpen={isOpen} handeHamburger={handeHamburger} items={titleMenus} />
          </div>
          <ul id="iconsMenu" className="">
            <i className="fa fa-search iconsMenu" aria-hidden="true"></i>
            <i className="fa fa-cog iconsMenu" aria-hidden="true"></i>
            <i className="fa fa-shopping-cart iconsMenu" aria-hidden="true"></i>
          </ul>
        </div>
    </div>
    );
}

export default MainMenu;