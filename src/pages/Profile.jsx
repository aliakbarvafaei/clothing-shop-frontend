import React, { useEffect, useId, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import TitlePages from '../components/TitlePages/TitlePages';
import { useTheme } from '../contexts/theme';
import { useToast } from '../contexts/ToastState';
import { getUser, updatePassword } from '../services/api';

function Profile(props) {
    const {theme} = useTheme();
    const themeClass = theme.mode==="DARK" ? "bg-darkModeLightBlack text-white": "bg-white";
    const themeBorder = theme.mode==="DARK" ? "border-lightestBlack": "border-darkModeGray";
    const themeBorder2 = theme.mode==="DARK" ? "border-lightestBlack": "border-darkModeGray";

    const { setToastState } = useToast();

    const [showMenu, setShowMenu] = useState("information");
    const styleSelectedMenu = "text-red border-red border-b-solid border-b-[2px]";
    // const {user} = useAuth();
    const { user } = useSelector(
        (state) => state.userAuth
      )
    const [userInformation, setUserInformation] = useState(false);
    const [loading, setLoading] = useState(true);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const passwordId = useId();
    const passwordConfirm = useId();
    const passwordIdCurrent = useId();

    const [iconPassword ,setIconPassword] = useState("fa-eye-slash");
    const [passType, setPassType] = useState("password");

    function addItemOnce(arr, value) {
        arr.push(value);
        return arr;
    }

    function handlePassword(){
        setIconPassword(old =>(old==="fa-eye-slash" ? "fa-eye": "fa-eye-slash"));
        setPassType(old => (old==="password" ? "text": "password"));
    }

    function formSubmit(){
        const LastPassword=document.getElementById(passwordIdCurrent).value;
        const NewPassword=document.getElementById(passwordId).value;

        document.getElementById(passwordIdCurrent).value='';
        document.getElementById(passwordId).value='';
        document.getElementById(passwordConfirm).value='';

        updatePassword(user,LastPassword,NewPassword)
        .then((response) => {
            if(response.status===200){
                setToastState(old=>addItemOnce(old.slice(),{
                title: "1",
                description: `Change Password successfull`, key:Math.random()
                }));
            }
        })
        .catch(err => {
            if(err.response.status===401){
                setToastState(old=>addItemOnce(old.slice(),{
                    title: "2",
                    description: "Password not correct", key:Math.random()
                    }))
            }
            else if(err.response.status===404){
                setToastState(old=>addItemOnce(old.slice(),{
                    title: "2",
                    description: "User not fount please register first...", key:Math.random()
                    }))
            }
            else{
                console.error(err);
                setToastState(old=>addItemOnce(old.slice(),{
                    title: "2",
                    description: "The server is unavailable", key:Math.random()
                    }))
            }
        });
    }
    useEffect(()=>{
        getUser(user)
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
                <div className={`smmin:w-[25%] sm:w-[100%] smmin:my-[50px] sm:my-[20px] py-[35px] sm:px-[8%] smmin:px-[2%] rounded-md border-solid border-[1px] ${themeBorder}`}>
                    <h4 className={`${showMenu==="information" ? styleSelectedMenu : themeBorder2} mb-[20px] pb-[10px] md:text-[12px] mdmin:text-[14px] font-semibold mm:w-[100%] mm:text-center mm:pb-[10px] cursor-pointer mm:border-b-[1px] mm:border-b-solid`} onClick={()=>setShowMenu("information")}>INFORMATION</h4>
                    <h4 className={`${showMenu==="change password" ? styleSelectedMenu : themeBorder2} mb-[20px] pb-[10px] md:text-[12px] mdmin:text-[14px] font-semibold mm:w-[100%] mm:text-center mm:pb-[10px] cursor-pointer mm:border-b-[1px] mm:border-b-solid`} onClick={()=>setShowMenu("change password")}>CHANGE PASSWORD</h4>
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
                    <div className={`flex flex-col w-[100%] py-[40px] px-[10%] gap-[20px] rounded-md border-solid border-[1px] ${themeBorder}`}>
                        { loading && <div className='text-center pt-[15px]'><i className='fa fa-spinner fa-spin text-[50px]' aria-hidden="true"></i></div>}
                        { !loading &&   <form className='text-left' onSubmit={handleSubmit(formSubmit)}>
                        <div className='mb-[30px]'>
                            <label htmlFor="current-password-input" className="block text-[14px] font-bold mb-[8px]">
                                Current Password
                            </label>
                            <input
                                type={'text'}
                                className={`${themeClass} w-[100%] relative rounded-none border-solid border-[1px] outline-darkGray py-[17px] px-[25px] text-[12px] ${errors.passwordCurrent ? 'border-red outline-red' : `${themeBorder}`}`}
                                data-testid="current-password-input"
                                placeholder="Current Password"
                                id={passwordIdCurrent}
                                {...register('passwordCurrent', {
                                required: 'Current Password is Required...',
                                minLength: {
                                    value: 8,
                                    message: 'At least 8 characters...',
                                },
                                })}
                            />
                            {errors.passwordCurrent && (
                                <div className="text-red pt-[5px]"><i className="fa fa-exclamation-triangle" aria-hidden="true"></i><span className='pl-[5px]'>{errors.passwordCurrent.message}</span></div>
                            )}
                        </div>
                        <div className='mb-[30px] relative'>
                            <label htmlFor="new-password-input" className="block text-[14px] font-bold mb-[8px]">
                                New Password
                            </label>
                            <input
                                type={passType}
                                className={`${themeClass} w-[100%] relative rounded-none border-solid border-[1px] outline-darkGray py-[17px] px-[25px] text-[12px] ${errors.passwordNew ? 'border-red outline-red' : `${themeBorder}`}`}
                                data-testid="new-password-input"
                                placeholder="New Password"
                                id={passwordId}
                                {...register('passwordNew', {
                                required: 'New Password is Required...',
                                minLength: {
                                    value: 8,
                                    message: 'At least 8 characters...',
                                },
                                })}
                            />{!errors.passwordNew && <i className={`fa ${iconPassword} absolute right-[2%] bottom-[20px] cursor-pointer`} onClick={handlePassword} aria-hidden="true"></i>}
                            {errors.passwordNew && <>
                                <i className={`fa ${iconPassword} absolute right-[2%] bottom-[48px] cursor-pointer`} onClick={handlePassword} aria-hidden="true"></i>
                                <div className="text-red pt-[5px]"><i className="fa fa-exclamation-triangle" aria-hidden="true"></i><span className='pl-[5px]'>{errors.passwordNew.message}</span></div>
                                </>}
                        </div>
                        <div className='mb-[30px] relative'>
                            <label htmlFor="confirm-password-input" className="block text-[14px] font-bold mb-[8px]">
                                Confirm Password
                            </label>
                            <input
                                type={'password'}
                                className={`${themeClass} w-[100%] relative rounded-none border-solid border-[1px] outline-darkGray py-[17px] px-[25px] text-[12px] ${errors.passwordConfirm ? 'border-red outline-red' : `${themeBorder}`}`}
                                data-testid="confirm-password-input"
                                placeholder="Confirm Password"
                                id={passwordConfirm}
                                {...register('passwordConfirm', {
                                required: 'Confirm Password is Required...',
                                minLength: {
                                    value: 8,
                                    message: 'At least 8 characters...',
                                },
                                validate: (val) => {
                                    if (document.getElementById(passwordId).value !== val) {
                                    return "Your passwords do not the same";
                                    }
                                },
                                })}
                            />
                            {errors.passwordConfirm && (
                                <div className="text-red pt-[5px]"><i className="fa fa-exclamation-triangle" aria-hidden="true"></i><span className='pl-[5px]'>{errors.passwordConfirm.message}</span></div>
                            )}
                        </div>
                        <button type='submit' className="h-[50px] min-w-[150px] rounded-none bg-red text-white font-bold text-[14px] hover:bg-white hover:border-red hover:border-[2px] hover:border-solid hover:text-black">CHANGE</button>
                        </form>}
                    </div>}
                </div>
            </div>
        </div>
    );
}

export default Profile;