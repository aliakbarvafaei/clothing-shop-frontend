import React, { useId, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useTheme } from '../../contexts/theme';
import { useToast } from '../../contexts/ToastState';
import { loginAPI } from "../../services/api/index.js";


function LoginBox(props) {
    const { setToastState } = useToast();
    const history = useHistory();

    const {theme} = useTheme();
    const themeClass = theme.mode==="DARK" ? "bg-darkModeLightBlack text-gray": "bg-white";
    const themeBorder = theme.mode==="DARK" ? "border-lightestBlak": "border-darkModeGray";
    
    const emailId = useId();
    const passwordId = useId();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    function handleCreate(){
        history.push("/register");
    }

    function formSubmit(){
        setToastState({
            title: "3",
            description: "",
            })

        const email=document.getElementById(emailId).value;
        const password=document.getElementById(passwordId).value;

        document.getElementById(emailId).value='';
        document.getElementById(passwordId).value='';

        loginAPI(email,password)
        .then((response) => {
            if(response.status===200){
                setToastState({
                title: "1",
                description: "Login was successful",
                });
                history.push("/home");
            }
        })
        .catch(err => {
            if(err.response.status===401){
                setToastState({
                    title: "2",
                    description: "Password not correct",
                    })
            }
            else if(err.response.status===404){
                setToastState({
                    title: "2",
                    description: "User not fount please register first...",
                    })
            }
            else{
                console.error(err);
                setToastState({
                    title: "2",
                    description: "The server is unavailable",
                    })
            }
        });
    }
    
    const [iconPassword ,setIconPassword] = useState("fa-eye-slash");
    const [passType, setPassType] = useState("password");
    function handlePassword(){
        setIconPassword(old =>(old==="fa-eye-slash" ? "fa-eye": "fa-eye-slash"));
        setPassType(old => (old==="password" ? "text": "password"));
    }

    return (
        <div className={`${themeClass} py-[40px] px-total flex flex-row flex-wrap justify-between`}>
            <div className='lg:w-[100%] lgmin:w-[48%] pt-[10px]'>
                <h3 className="text-[24px] font-black mb-[20px]">LOGIN</h3>
                <div className={`${themeBorder} min-h-[336px] p-[30px] border-[1px] border-solid`}>
                    <form className='text-left' onSubmit={handleSubmit(formSubmit)}>
                        <div className='mb-[30px]'>
                            <label htmlFor="email-input" className="block text-[14px] font-black mb-[8px]">
                                Email
                            </label>
                            <input
                                type="email"
                                className={`${themeClass} w-[100%] rounded-none border-solid border-[1px] outline-darkGray py-[17px] px-[25px] text-[12px] ${errors.email ? 'border-red outline-red' : `${themeBorder}`}`}
                                data-testid="email-input"
                                placeholder="Email"
                                id={emailId}
                                {...register('email', {
                                required: 'Email is Required...',
                                })}
                            />
                            {errors.email && (
                                <div className="text-red pt-[5px]"><i className="fa fa-exclamation-triangle" aria-hidden="true"></i><span className='pl-[5px]'>{errors.email.message}</span></div>
                            )}
                        </div>
                        <div className='mb-[30px] relative'>
                            <label htmlFor="password-input" className="block text-[14px] font-black mb-[8px]">
                                Password
                            </label>
                            <input
                                type={passType}
                                className={`${themeClass} w-[100%] relative rounded-none border-solid border-[1px] outline-darkGray py-[17px] px-[25px] text-[12px] ${errors.password ? 'border-red outline-red' : `${themeBorder}`}`}
                                data-testid="password-input"
                                placeholder="Password"
                                id={passwordId}
                                {...register('password', {
                                required: 'Password is Required...',
                                minLength: {
                                    value: 8,
                                    message: 'At least 8 characters...',
                                },
                                })}
                            /><i className={`fa ${iconPassword} absolute right-[2%] bottom-[20px] cursor-pointer`} onClick={handlePassword} aria-hidden="true"></i>
                            {errors.password && (
                                <div className="text-red pt-[5px]"><i className="fa fa-exclamation-triangle" aria-hidden="true"></i><span className='pl-[5px]'>{errors.password.message}</span></div>
                            )}
                        </div>
                        <button type='submit' className="h-[50px] min-w-[150px] rounded-none bg-red text-white font-bold text-[14px] hover:bg-white hover:border-red hover:border-[2px] hover:border-solid hover:text-black">LOGIN</button>
                    </form>
                </div>
                
            </div>
            <div className='lg:w-[100%] lgmin:w-[48%] pt-[10px]'>
                <h3 className="text-[24px] font-black mb-[20px]">NEW CUSTOMER</h3>
                <div className={`${themeBorder} lgmin:min-h-[336px] p-[30px] border-[1px] border-solid`}>
                    <h4 className="text-[14px] font-black mb-[22px]">CREATE AN ACCOUNT</h4>
                    <p className="bg-inherit p-0 text-[14px] text-darkGray leading-[26px] mb-[30px]">Sign up for a free account at our store. Registration is quick and easy.
                     It allows you to be able to order from our shop. To start shopping click register.</p>
                    <button type='button' onClick={handleCreate} className="h-[50px] min-w-fit p-[10px] rounded-none bg-red text-white font-bold text-[14px] hover:bg-white hover:border-red hover:border-[2px] hover:border-solid hover:text-black">CREATE AN ACCOUNT</button>
                </div>
            </div>
        </div>
    );
}
export default LoginBox;