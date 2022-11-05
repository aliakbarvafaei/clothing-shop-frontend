import React from 'react';
import { useTheme } from '../../contexts/theme';
import { Link } from 'react-router-dom';
import { useToast } from '../../contexts/ToastState';
import { useDispatch, useSelector } from 'react-redux';

const myAccountDrop={title: "My Account", submenu:[{title: "Login", pathTo: "/login"},
{title: "Register", pathTo: "/register"},{title: "Profile", pathTo: "/profile"},{title: "Logout", pathTo: "/"}]}

function Header(props) {
    const {theme} = useTheme();
    const themeClass = theme.mode==="DARK" ? "bg-black text-lightGray": "bg-lightGray";
    const themeAccount = theme.mode==="DARK" ? "bg-darkModeLightBlack text-darkModeGray": "bg-white text-black";
    const {setToastState} = useToast();

    const dispatch = useDispatch();
    const {user} = useSelector(
      (state) => state.userAuth
      );
    function addItemOnce(arr, value) {
      arr.push(value);
      return arr;
  }
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
              <li className='group relative text-darkGray'>
                <i className="fa fa-user text-[14px] pl-0 cursor-pointer group-hover:text-red" aria-hidden="true"></i>
                <button className="peer text-darkGray pl-[10px] text-[14px]">{myAccountDrop.title}</button>          
                <div className={`${themeAccount} absolute hidden peer-hover:block hover:flex w-[150%] py-[10px] px-[20px] right-0
                flex-col drop-shadow-lg z-[22]`}>
                    {
                      myAccountDrop.submenu.map((item,index)=>{
                        if(user){
                          if(item.title==="Logout")
                            return <Link className="text-left text-[14px] py-[12px] hoverItem" onClick={()=>{dispatch({ type: 'logout' });localStorage.setItem('token_user', JSON.stringify(''));setToastState(old => addItemOnce(old.slice(),{title:"2",description:"Logout Successfully", key:Math.random()}));}} to={item.pathTo} key={index}>{item.title}</Link>
                          else if(item.title==="Profile")
                            return <Link className="text-left text-[14px] py-[12px] hoverItem" to={item.pathTo} key={index}>{item.title}</Link>
                        }else if(item.title!=="Logout" && item.title!=="Profile"){
                          return <Link className="text-left text-[14px] py-[12px] hoverItem" to={item.pathTo} key={index}>{item.title}</Link>
                        }
                        })    
                    }
                </div>
              </li>
            </ul>
        </nav>
    </div>
    </>);
}

export default Header;