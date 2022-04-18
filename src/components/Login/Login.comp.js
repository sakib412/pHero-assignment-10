/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from 'react'
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import './Login.css'
import { toast } from 'react-toastify';

const Login = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState(null) //for reset password
    const { register, handleSubmit, formState: { errors }, watch } = useForm();
    const location = useLocation()
    let from = location.state?.from?.pathname || "/";

    useEffect(() => {
        const subscription = watch((value, { name, type }) => {
            if (name === 'email') {
                setEmail(value?.email)
            }
        });
        return () => subscription.unsubscribe() // for cleanup
    }, [watch])

    const [
        signInWithGoogle,
        userFromGoogle,
        loadingFromGoogle,
        errorFromGoogle
    ] = useSignInWithGoogle(auth);
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending, errorFromReset] = useSendPasswordResetEmail(auth);


    const onSubmit = ({ email, password }) => {
        signInWithEmailAndPassword(email, password)
    }

    const onResetPassword = () => {
        if (!email) {
            toast("Please input your mail first")
        } else {
            sendPasswordResetEmail(email)
        }
    }

    if (user || userFromGoogle) {
        navigate(from, { replace: true })
    }

    if (error || errorFromGoogle || errorFromReset) {
        toast(error?.message || errorFromReset?.message || errorFromGoogle?.message)
    }

    return (
        <div>
            <h2 className='mt-5 text-center'>Login</h2>
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
                        <input
                            type="password"
                            className={`form-control ${!!errors?.password ? 'is-invalid' : 'is-valid'}`}
                            id="password" {...register("password", {
                                required: "Please provide your password.",
                            })} />
                        <div className="invalid-feedback">
                            {errors?.password?.message}
                        </div>
                    </div>
                    <p>Forgot your password? <span onClick={onResetPassword} className='btn btn-link'>
                        {sending ? 'Sending...' : 'Reset here'}
                    </span></p>

                    <button type="submit" className="btn btn-primary">Login</button>
                    <span className='ms-3'>Don't have an account? <Link to="/register">Register here</Link></span>
                </form>
            </div>
        </div>
    )
}

export default Login