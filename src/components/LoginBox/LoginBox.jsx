import React from 'react';
import classNames from "classnames";
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useTheme } from '../../contexts/theme';
import styles from "./LoginBox.module.scss";

function LoginBox(props) {
    const history = useHistory();
    const {theme} = useTheme();
    const themeClass = theme.mode==="DARK" ? styles.dark: "";

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    function handleCreate(){
        history.push("/register");
    }

    return (
        <div className={classNames('row', styles.content, themeClass)}>
            <div className={classNames('col-lg-6')}>
                <h3 className={styles.titleBox}>LOGIN</h3>
                <div className={styles.box}>
                    <form onSubmit={handleSubmit()}>
                        <div>
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
                        <div>
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
                        <button type='submit' className={classNames("btn", "btn-solid", styles.LoginButton)}>LOGIN</button>
                    </form>
                </div>
                
            </div>
            <div className={classNames('col-lg-6')}>
                <h3 className={styles.titleBox}>NEW CUSTOMER</h3>
                <div className={styles.box}>
                    <h4 className={styles.title}>CREATE AN ACCOUNT</h4>
                    <p className={styles.content}>Sign up for a free account at our store. Registration is quick and easy.
                     It allows you to be able to order from our shop. To start shopping click register.</p>
                    <button type='button' onClick={handleCreate} className={classNames("btn", "btn-solid", styles.LoginButton)}>CREATE AN ACCOUNT</button>
                </div>
            </div>
        </div>
    );
}

export default LoginBox;