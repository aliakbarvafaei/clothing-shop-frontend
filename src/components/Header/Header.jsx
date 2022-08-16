import React from 'react';
import { useTheme } from '../../contexts/theme';
import DropOnHover from '../DropOnHover';
import { Link } from 'react-router-dom'

const myAccountDrop={title: "My Account", submenu:[{title: "Login", pathTo: "/login"},{title: "Register", pathTo: "/register"}]}

function Header(props) {
    const {theme} = useTheme();
    const themeClass = theme.mode==="DARK" ? "bg-black text-gray": "bg-gray";

    const information={
      welcome: "Welcome to Our store Multikart",
      call: "Call Us: 123 - 456 - 7890",
    }

    return (<>
    <div className={`py-[15px] px-[5%] sm:hidden ${themeClass}`}>
        <nav className="flex flex-row lg:justify-end lgmin:justify-between p-0">
            <ul className="flex flex-row gap-[1rem] items-center p-0 m-0 lg:hidden">
              <li>
                <Link className="text-[14px] text-darkGray no-underline hover:text-darkGray" to="/">{information.welcome}</Link>
              </li>
              <li>
                <Link className="text-[14px] text-darkGray no-underline hover:text-darkGray" to="/"><i className="pr-[10px] text-red fa fa-phone" aria-hidden="true"></i>{information.call}</Link>
              </li>
            </ul>
            <ul className="flex flex-row gap-[1rem] items-center p-0 m-0 ">
              <li>
                <Link className="group text-[14px] text-darkGray no-underline hover:text-darkGray" to="/wishlist"><i className="fa fa-heart group-hover:text-red pr-[10px]" aria-hidden="true"></i>Wishlist</Link>
              </li>
              <DropOnHover title={myAccountDrop.title} submenu={myAccountDrop.submenu} icon="fa fa-user" dir="left" key={"My Account"}/>
            </ul>
        </nav>
    </div>
    </>);
}

export default Header;