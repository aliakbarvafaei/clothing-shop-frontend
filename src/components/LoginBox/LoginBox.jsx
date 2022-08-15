import React from 'react';
import classNames from "classnames";
import { useForm } from 'react-hook-form'
import styles from "./LoginBox.module.scss";

function LoginBox(props) {
    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm()

    return (
        <div className={classNames('row', styles.content)}>
            <div className={classNames('col-lg-6')}>
                <h3>LOGIN</h3>
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
                        <button type='submit' className={classNames("btn", "btn-solid", styles.subscribeButton)}>LOGIN</button>
                    </form>
                </div>
                
            </div>
            <div className={classNames('col-lg-6')}>
                <h3>NEW CUSTOMER</h3>
                <div className={styles.box}>
                a
                </div>
            </div>
        </div>
    );
}

export default LoginBox;