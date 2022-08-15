import React, { useState } from 'react';
import { useTheme } from '../../contexts/theme';
import logo from "../../assets/images/logo.png";
import DropOnHover from "../DropOnHover";
import classNames from "classnames";
import useSticky from "./useSticky";
import Hamburger from "./Hamburger/Hamburger";
import { Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import styles from "./MainMenu.module.scss"
import ShopIcon from './ShopIcon';

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

    const themeClass = theme.mode==="DARK" ? styles.dark: "";

    function handeHamburger()
    {
      setIsOpen(old => !old);
    }
    const stickyClass = sticky ? styles.sticky:"";

    return (
    <>
    <div ref={stickyRef} className={classNames(themeClass, stickyClass, styles.mainMenu)} >
        <div className={styles.leftMenu}>
          <i className={classNames("fa fa-bars", styles.iconsMenu)} aria-hidden="true"></i>
          <span><Link to="/home"><img className={styles.titleImage} src={logo} alt="title" /></Link></span>
        </div>
        
        <div className={styles.rightMenu}>
          <ul className={styles.menus}>
            {
              titleMenus.map((titleMenu, index)=>{
                return <DropOnHover title={titleMenu.title} submenu={titleMenu.submenu} icon="fa fa-caret-down" dir="right" key={index}/>
              })
            }
          </ul>
          <div className={styles.hamburger}>
            <i className={classNames("fa fa-bars", styles.iconsMenu)} aria-hidden="true"  onClick={handeHamburger}></i>
              <Hamburger isOpen={isOpen} handeHamburger={handeHamburger} items={titleMenus} />
          </div>
          <ul className={styles.iconsMenuRight}>
            <DropOnHover title="" icon="fa fa-search iconsMenu" dir="left"/>
            <DropOnHover title="" submenu={submenuSetting} icon="fa fa-cog iconsMenu" dir="left"/>
            <ShopIcon submenu={submenuCart} icon="fa fa-shopping-cart iconsMenu" dir="left"/>
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