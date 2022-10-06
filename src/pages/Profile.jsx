import React, { useEffect, useState } from 'react';
import TitlePages from '../components/TitlePages/TitlePages';
import { useAuth } from '../contexts/Auth';
import { useTheme } from '../contexts/theme';
import { getUser } from '../services/api';

function Profile(props) {
    const {theme} = useTheme();
    const themeClass = theme.mode==="DARK" ? "bg-darkModeLightBlack text-white": "bg-white";
    const themeBorder = theme.mode==="DARK" ? "border-lightestBlack": "border-darkModeGray";
    const themeBorder2 = theme.mode==="DARK" ? "border-lightestBlack": "border-darkModeGray";

    const [showMenu, setShowMenu] = useState("information");
    const styleSelectedMenu = "text-red border-red border-b-solid border-b-[2px]";
    const {user} = useAuth();
    const [userInformation, setUserInformation] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        getUser(user.loggedIn)
            .then((response) => {
                setLoading(false);
                setUserInformation(response.data);
            })
            .catch(err => {
                console.error(err);
            });
    },[])

    return (
        <div>
            <TitlePages title="PROFILE"/>
            <div className={`${themeClass} px-total flex smmin:flex-row sm:flex-col justify-between`}>
                <div className={`smmin:w-[25%] sm:w-[100%] smmin:my-[50px] sm:my-[20px] py-[20px] sm:px-[8%] smmin:px-[2%] rounded-md border-solid border-[1px] ${themeBorder}`}>
                    <h4 className={`${showMenu==="information" ? styleSelectedMenu : themeBorder2} mb-[15px] pb-[10px] md:text-[12px] mdmin:text-[14px] font-semibold mm:w-[100%] mm:text-center mm:pb-[10px] cursor-pointer mm:border-b-[1px] mm:border-b-solid`} onClick={()=>setShowMenu("information")}>INFORMATION</h4>
                    <h4 className={`${showMenu==="change password" ? styleSelectedMenu : themeBorder2} mb-[15px] pb-[10px] md:text-[12px] mdmin:text-[14px] font-semibold mm:w-[100%] mm:text-center mm:pb-[10px] cursor-pointer mm:border-b-[1px] mm:border-b-solid`} onClick={()=>setShowMenu("change password")}>CHANGE PASSWORD</h4>
                </div>
                <div className={`sm:w-[100%] smmin:w-[73%] smmin:my-[50px] sm:my-[20px]`} >
                    {showMenu==="information" &&
                    <div className={`flex flex-col w-[100%] py-[40px] px-[10%] gap-[20px] rounded-md border-solid border-[1px] ${themeBorder}`}>
                            { loading && <div className='text-center pt-[15px]'><i className='fa fa-spinner fa-spin text-[50px]' aria-hidden="true"></i></div>}
                            { !loading && <>
                            <div className='mb-[30px]'>
                                <label htmlFor="email-input" className="block text-[14px] font-bold mb-[8px]">
                                    First Name
                                </label>
                                <input
                                    disabled="disabled"
                                    className={`${themeClass} ${themeBorder} w-[100%] rounded-none border-solid border-[1px] outline-darkGray py-[17px] px-[25px] text-[14px] }`}
                                    placeholder={userInformation.fname}
                                />
                            </div>
                            <div className='mb-[30px]'>
                                <label htmlFor="password-input" className="block text-[14px] font-bold mb-[8px]">
                                    Last Name
                                </label>
                                <input
                                    disabled="disabled"
                                    className={`${themeClass} ${themeBorder} w-[100%] rounded-none border-solid border-[1px] outline-darkGray py-[17px] px-[25px] text-[14px] `}
                                    placeholder={userInformation.lname}
                                />
                            </div>
                            <div className='mb-[30px]'>
                                <label htmlFor="email-input" className="block text-[14px] font-bold mb-[8px]">
                                    Email
                                </label>
                                <input
                                    disabled="disabled"
                                    className={`${themeClass} ${themeBorder} w-[100%] rounded-none border-solid border-[1px] outline-darkGray py-[17px] px-[25px] text-[14px] }`}
                                    placeholder={userInformation.email}
                                />
                            </div>
                            </>}
                    </div>}
                    {showMenu==="change password" &&
                    <div className={`flex flex-row flex-wrap w-[100%] py-[40px] px-[2%] gap-[1%] rounded-md border-solid border-[1px] ${themeBorder}`}>
                    </div>}
                </div>
            </div>
        </div>
    );
}

export default Profile;