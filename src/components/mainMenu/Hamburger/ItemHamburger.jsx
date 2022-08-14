import React, { useState } from 'react';
import classNames from "classnames";
import styles from "./Hamburger.module.scss";

function ItemHamburger({item}) {
    const [isOpen, setIsOpen] = useState(false);
    
    function handeHamburger(e)
    {
      setIsOpen(old => !old);
    }

    return (
        <>
            <div className={styles.title} onClick={handeHamburger} style={isOpen && item.submenu.length>0 ? {borderBottom: "2px #f9f9f9 solid"}: {}}>
                <span >{item.title}</span>
                {item.submenu.length>0 && <i class="fa fa-plus" style={{fontSize: "10px"}} aria-hidden="true"></i>}
            </div>
            {item.submenu.length>0 && isOpen &&
            <ul className={styles.subItem}>
                {(item.submenu).map((x,index)=>{
                    return <li key={index} className={classNames("nav-text",styles.navText)}>
                        <span>{x}</span>
                    </li>
                })}
            </ul>
            }
        </>
    );
}

export default ItemHamburger;