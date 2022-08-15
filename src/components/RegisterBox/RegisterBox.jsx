import React from 'react';
import classNames from "classnames";
import { useForm } from 'react-hook-form';
import { useTheme } from '../../contexts/theme';
import styles from "./RegisterBox.module.scss";

function RegisterBox(props) {
    const {theme} = useTheme();
    const themeClass = theme.mode==="DARK" ? styles.dark: "";

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    return (
        <div className={classNames(styles.content, themeClass)}>
            <h3 className={styles.titleBox}>CREATE ACCOUNT</h3>
            <div className={styles.box}>
                <form onSubmit={handleSubmit()}>
                    <div className='row'>
                        <div className='col-md-6'>
                            <label htmlFor="fname-input" className="form-label">
                                First Name
                            </label>
                            <input
                                type="text"
                                className={`form-control${errors.fname ? ' is-invalid' : ''}`}
                                data-testid="fname-input"
                                placeholder="First Name"
                                {...register('fname', {
                                required: 'First Name is Required...',
                                })}
                            />
                            {errors.fname && (
                                <div className="invalid-feedback">{errors.fname.message}</div>
                            )}
                        </div>
                        <div className='col-md-6'>
                            <label htmlFor="lname-input" className="form-label">
                                Last Name
                            </label>
                            <input
                                type="text"
                                className={`form-control${errors.lname ? ' is-invalid' : ''}`}
                                data-testid="lname-input"
                                placeholder="Last Name"
                                {...register('lname', {
                                required: 'Last Name is Required...',
                                })}
                            />
                            {errors.lname && (
                                <div className="invalid-feedback">{errors.lname.message}</div>
                            )}
                        </div>
                        <div className='col-md-6'>
                            <label htmlFor="email-input" className="form-label">
                                Email
                            </label>
                            <input
                                type="text"
                                className={`form-control${errors.email ? ' is-invalid' : ''}`}
                                data-testid="email-input"
                                placeholder="Email"
                                {...register('email', {
                                required: 'Email is Required...',
                                })}
                            />
                            {errors.email && (
                                <div className="invalid-feedback">{errors.email.message}</div>
                            )}
                        </div>
                        <div className='col-md-6'>
                            <label htmlFor="password-input" className="form-label">
                                Password
                            </label>
                            <input
                                type="text"
                                className={`form-control${errors.password ? ' is-invalid' : ''}`}
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
                                <div className="invalid-feedback">{errors.password.message}</div>
                            )}
                        </div>
                    </div>
                    <button type='submit' className={classNames("btn", "btn-solid", styles.LoginButton)}>CREATE ACCOUNT</button>
                </form>
            </div>                
        </div>
    );
}

export default RegisterBox;