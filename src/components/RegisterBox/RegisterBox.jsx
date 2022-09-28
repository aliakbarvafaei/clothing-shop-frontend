import React ,{ useId, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useTheme } from '../../contexts/theme';
import { registerAPI } from "../../services/api/index.js";
import { useHistory } from 'react-router-dom'
import { useToast } from '../../contexts/ToastState';

function RegisterBox(props) {
    const { setToastState } = useToast();
    const history = useHistory();

    const fnameId = useId();
    const lnameId = useId();
    const emailId = useId();
    const passwordId = useId();

    const {theme} = useTheme();
    const themeClass = theme.mode==="DARK" ? "bg-darkModeLightBlack text-lightGray": "bg-white";
    const themeBorder = theme.mode==="DARK" ? "border-lightestBlack": "border-darkModeGray";

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()
    function addItemOnce(arr, value) {
        arr.push(value);
        return arr;
    }
    function formSubmit(){
        // setToastState(old=>addItemOnce(old.slice(),{
        //     title: "3",
        //     description: "", key:Math.random()
        //     }))

        const fname=document.getElementById(fnameId).value;
        const lname=document.getElementById(lnameId).value;
        const email=document.getElementById(emailId).value;
        const password=document.getElementById(passwordId).value;

        document.getElementById(fnameId).value='';
        document.getElementById(lnameId).value='';
        document.getElementById(emailId).value='';
        document.getElementById(passwordId).value='';

        registerAPI(fname,lname,email,password)
        .then((response) => {
            if(response.status===201){
                setToastState(old=>addItemOnce(old.slice(),{
                title: "1",
                description: "Registration was successful", key:Math.random()
                }));
                history.push("/login");
            }
        })
        .catch(err => {
            if(err.response.status===409){
                setToastState(old=>addItemOnce(old.slice(),{
                    title: "2",
                    description: "The user has already registered", key:Math.random()
                    }))
            }
            else{
                setToastState(old=>addItemOnce(old.slice(),{
                    title: "2",
                    description: "The server is unavailable", key:Math.random()
                    }))
                console.error(err);

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
        <>
        <div className={`${themeClass} py-[40px] px-total`}>
            <div className='w-[100%] pt-[10px]'>
                <h3 className="text-[24px] font-bold mb-[20px]">CREATE ACCOUNT</h3>
                <div className={`${themeBorder} min-h-[336px] p-[30px] border-[1px] border-solid`}>
                    <form className='text-left flex flex-row flex-wrap justify-between' onSubmit={handleSubmit(formSubmit)}>
                        <div className='mb-[30px] md:w-[100%] mdmin:w-[48%]'>
                            <label htmlFor="fname-input" className="block text-[14px] font-bold mb-[8px]">
                                First Name
                            </label>
                            <input
                                type="text"
                                className={`${themeClass} w-[100%] rounded-none border-solid border-[1px] outline-darkGray py-[17px] px-[25px] text-[12px] ${errors.fname ? 'border-red outline-red' : `${themeBorder}`}`}
                                data-testid="fname-input"
                                placeholder="First Name"
                                id={fnameId}
                                {...register('fname', {
                                required: 'First Name is Required...',
                                })}
                            />
                            {errors.fname && (
                                <div className="text-red pt-[5px]"><i className="fa fa-exclamation-triangle" aria-hidden="true"></i><span className='pl-[5px]'>{errors.fname.message}</span></div>
                            )}
                        </div>
                        <div className='mb-[30px] md:w-[100%] mdmin:w-[48%]'>
                            <label htmlFor="lname-input" className="block text-[14px] font-bold mb-[8px]">
                                Last Name
                            </label>
                            <input
                                type="text"
                                className={`${themeClass} w-[100%] rounded-none border-solid border-[1px] outline-darkGray py-[17px] px-[25px] text-[12px] ${errors.lname ? 'border-red outline-red' : `${themeBorder}`}`}
                                data-testid="lname-input"
                                placeholder="Last Name"
                                id={lnameId}
                                {...register('lname', {
                                required: 'Last Name is Required...',
                                })}
                            />
                            {errors.lname && (
                                <div className="text-red pt-[5px]"><i className="fa fa-exclamation-triangle" aria-hidden="true"></i><span className='pl-[5px]'>{errors.lname.message}</span></div>
                            )}
                        </div>
                        <div className='mb-[30px] md:w-[100%] mdmin:w-[48%]'>
                            <label htmlFor="email-input" className="block text-[14px] font-bold mb-[8px]">
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
                        <div className='mb-[30px] md:w-[100%] mdmin:w-[48%] relative'>
                            <label htmlFor="password-input" className="block text-[14px] font-bold mb-[8px]">
                                Password
                            </label>
                            <input
                                type={passType}
                                className={`${themeClass} w-[100%] rounded-none border-solid border-[1px] outline-darkGray py-[17px] px-[25px] text-[12px] ${errors.password ? 'border-red outline-red' : `${themeBorder}`}`}
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
                        <button type='submit' className="h-[50px] min-w-[150px] rounded-none bg-red text-white font-bold text-[14px] hover:bg-white hover:border-red hover:border-[2px] hover:border-solid hover:text-black">CREATE ACCOUNT</button>
                    </form>
                </div>
                
            </div>
        </div>
        </>
    );
}

export default RegisterBox;