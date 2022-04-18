/* eslint-disable no-unused-vars */
import React from 'react'
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth'
import auth from '../../firebase.init';
import { toast } from 'react-toastify';

const Register = () => {
    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors } } = useForm();
    const location = useLocation()
    let from = location.state?.from?.pathname || "/";
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, {
        sendEmailVerification: true
    });
    const [signInWithGoogle, userFromGoogle, loadingFromGoogle, errorFromGoogle] = useSignInWithGoogle(auth);

    const onSubmit = ({ email, password }) => {
        createUserWithEmailAndPassword(email, password)
    }

    if (user || userFromGoogle) {
        navigate(from, { replace: true })
    }

    if (error || errorFromGoogle) {
        toast(error?.message)
    }

    return (
        <div>
            <h2 className='mt-5 text-center'>Register</h2>
            <div className='social-login'>
                <img
                    onClick={() => signInWithGoogle()}
                    alt='google-singin-button'
                    src='/img/google.png'
                    className='img-fluid' />
            </div>
            <p className="separator">
                Or
            </p>
            <div className='row'>
                <form className='col-12 col-md-8 col-lg-6 mx-auto' onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input
                            type="email"
                            className={`form-control ${!!errors?.email ? 'is-invalid' : 'is-valid'}`}
                            id="email"
                            {...register("email", {
                                required: "Please provide your email address.",
                                pattern: {
                                    value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                                    message: "Invalid email address"
                                }
                            })}
                        />
                        <div className="invalid-feedback">
                            {errors.email?.message}
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password"
                            className={`form-control ${!!errors?.password ? 'is-invalid' : 'is-valid'}`}
                            id="password" {...register("password", {
                                required: "Please provide your password.",
                                minLength: {
                                    value: 6,
                                    message: "Password must be equal or greater than 6 charecters."
                                }
                            })} />
                        <div className="invalid-feedback">
                            {errors?.password?.message}
                        </div>
                    </div>
                    <p>Already a member? <Link to="/login">Login here</Link></p>
                    <button type="submit" className="btn btn-primary">Register</button>
                </form>
            </div>
        </div>
    )
}

export default Register