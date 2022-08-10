import React from 'react';
import { useState } from "react"

function Drop({title, submenu, icon}) {
    const [open, setOpen] = useState(false);

    function handleEnter()
    {
      setOpen(true);
    }
    function handleOut()
    {
      setOpen(false);
    }
    return (
        <li className="nav-item">
            <div className="nav-link" onMouseEnter={handleEnter} onMouseLeave={handleOut}>{icon && <i className="fa fa-user" aria-hidden="true"></i>}{title} {!icon && <i className="fa fa-caret-down" aria-hidden="true"></i>}</div>
            <div className={open ? "dropdown-menu show":"dropdown-menu"} onMouseEnter={handleEnter} onMouseLeave={handleOut}>
                {
                    submenu.map((item,index)=>{
                        return <a className="dropdown-item" href="#" key={index}>{item}</a>
                    })    
                }
            </div>
        </li>
    );
}

export default Drop;