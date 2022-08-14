import React, { useState } from 'react';
import { useTheme } from '../../contexts/theme';
import logo from "../../assets/images/logo.png";
import DropOnHover from "../DropOnHover";
import classNames from "classnames";
import useSticky from "./useSticky";
import Hamburger from "./Hamburger/Hamburger";
import "bootstrap/dist/css/bootstrap.min.css"
import styles from "./MainMenu.module.scss"
import ShopIcon from './ShopIcon';

const titleMenus=[{title: "HOME", submenu:["New Demos","Clothing","Basics","Beauty","Eelectronic","Furniture","Vegetables","Watch","Lights","Goggles","Shoes","Bagg","Flowers"]},
{title: "SHOP", submenu:["Left Sidebar","Right Sisebar","No Sidebar","Sidebar Popup","Metro","Full Width","3 Grid","6 Six","List View"]},
{title: "PRODUCTS", submenu:["Sidebar","Thumbnail Image","3-Column","4 Image","Bundle Product","Sticky","Accordian","Image Swatch","Vertical Tab"]},
{title: "FEATURES", submenu:["Portfolio","Add To Cart","Theme Element","Product Element","Email Template"]},
{title: "PAGES", submenu:["Vendor","Account","About-Us","Search","Typograohy","Review","Order-Success","Compare","Collection","Lookbook","Site-Map","404","Comming-Soon","FAQ"]},
{title: "BLOGES", submenu:["Blog Left Sidebar","Blog Right Sidebar","No Sidebar","Blog Detail"]},
]
const submenuSetting=["Language", "Currency"];
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
          <span><img className={styles.titleImage} src={logo} alt="title" /></span>
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