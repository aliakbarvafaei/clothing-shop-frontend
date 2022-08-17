import React from 'react';
import { useForm } from 'react-hook-form';
import { useTheme } from '../../contexts/theme';

function RegisterBox(props) {
    const {theme} = useTheme();
    const themeClass = theme.mode==="DARK" ? "bg-darkModeLightBlack text-gray": "bg-white";
    const themeBorder = theme.mode==="DARK" ? "border-lightestBlak": "border-darkModeGray";

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    return (
        <div className={`${themeClass} py-[40px] px-total`}>
            <div className='w-[100%] pt-[10px]'>
                <h3 className="text-[24px] font-black mb-[20px]">CREATE ACCOUNT</h3>
                <div className={`${themeBorder} min-h-[336px] p-[30px] border-[1px] border-solid`}>
                    <form className='text-left flex flex-row flex-wrap justify-between' onSubmit={handleSubmit()}>
                        <div className='mb-[30px] md:w-[100%] mdmin:w-[48%]'>
                            <label htmlFor="fname-input" className="block text-[14px] font-black mb-[8px]">
                                First Name
                            </label>
                            <input
                                type="text"
                                className={`${themeClass} w-[100%] rounded-none border-solid border-[1px] outline-darkGray py-[17px] px-[25px] text-[12px] ${errors.fname ? 'border-red outline-red' : `${themeBorder}`}`}
                                data-testid="fname-input"
                                placeholder="First Name"
                                {...register('fname', {
                                required: 'First Name is Required...',
                                })}
                            />
                            {errors.fname && (
                                <div className="text-red pt-[5px]"><i class="fa fa-exclamation-triangle" aria-hidden="true"></i><span className='pl-[5px]'>{errors.fname.message}</span></div>
                            )}
                        </div>
                        <div className='mb-[30px] md:w-[100%] mdmin:w-[48%]'>
                            <label htmlFor="lname-input" className="block text-[14px] font-black mb-[8px]">
                                Last Name
                            </label>
                            <input
                                type="text"
                                className={`${themeClass} w-[100%] rounded-none border-solid border-[1px] outline-darkGray py-[17px] px-[25px] text-[12px] ${errors.lname ? 'border-red outline-red' : `${themeBorder}`}`}
                                data-testid="lname-input"
                                placeholder="Last Name"
                                {...register('lname', {
                                required: 'Last Name is Required...',
                                })}
                            />
                            {errors.lname && (
                                <div className="text-red pt-[5px]"><i class="fa fa-exclamation-triangle" aria-hidden="true"></i><span className='pl-[5px]'>{errors.lname.message}</span></div>
                            )}
                        </div>
                        <div className='mb-[30px] md:w-[100%] mdmin:w-[48%]'>
                            <label htmlFor="email-input" className="block text-[14px] font-black mb-[8px]">
                                Email
                            </label>
                            <input
                                type="text"
                                className={`${themeClass} w-[100%] rounded-none border-solid border-[1px] outline-darkGray py-[17px] px-[25px] text-[12px] ${errors.email ? 'border-red outline-red' : `${themeBorder}`}`}
                                data-testid="email-input"
                                placeholder="Email"
                                {...register('email', {
                                required: 'Email is Required...',
                                })}
                            />
                            {errors.email && (
                                <div className="text-red pt-[5px]"><i class="fa fa-exclamation-triangle" aria-hidden="true"></i><span className='pl-[5px]'>{errors.email.message}</span></div>
                            )}
                        </div>
                        <div className='mb-[30px] md:w-[100%] mdmin:w-[48%]'>
                            <label htmlFor="password-input" className="block text-[14px] font-black mb-[8px]">
                                Password
                            </label>
                            <input
                                type="text"
                                className={`${themeClass} w-[100%] rounded-none border-solid border-[1px] outline-darkGray py-[17px] px-[25px] text-[12px] ${errors.password ? 'border-red outline-red' : `${themeBorder}`}`}
                                data-testid="password-input"
                                placeholder="Password"
                                {...register('password', {
                                required: 'Password is Required...',
                                minLength: {
                                    value: 8,
                                    message: 'At least 8 characters...',
                                },
                                })}
                            />
                            {errors.password && (
                                <div className="text-red pt-[5px]"><i class="fa fa-exclamation-triangle" aria-hidden="true"></i><span className='pl-[5px]'>{errors.password.message}</span></div>
                            )}
                        </div>
                        <button type='submit' className="h-[50px] min-w-[150px] rounded-none bg-red text-white font-bold text-[14px] hover:bg-white hover:border-red hover:border-[2px] hover:border-solid hover:text-black">CREATE ACCOUNT</button>
                    </form>
                </div>
                
            </div>
        </div>
    );
}

export default RegisterBox;