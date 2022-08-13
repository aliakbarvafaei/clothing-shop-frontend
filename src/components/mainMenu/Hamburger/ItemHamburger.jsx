import React, { useState } from 'react';

function ItemHamburger({item}) {
    const [isOpen, setIsOpen] = useState(false);
    
    function handeHamburger(e)
    {
      setIsOpen(old => !old);
    }

    return (
        <>
            <div className="title" onClick={handeHamburger} style={isOpen && item.submenu.length>0 ? {borderBottom: "2px #f9f9f9 solid"}: {}}>
                <span >{item.title}</span>
                {item.submenu.length>0 && <i class="fa fa-plus" style={{fontSize: "10px"}} aria-hidden="true"></i>}
            </div>
            {item.submenu.length>0 && isOpen &&
            <ul className="subItem">
                {(item.submenu).map((x,index)=>{
                    return <li key={index} className="nav-text">
                        <span>{x}</span>
                    </li>
                })}
            </ul>
            }
        </>
    );
}

export default ItemHamburger;