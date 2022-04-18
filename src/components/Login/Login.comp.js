import React, { useEffect } from 'react'
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Login = () => {
    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [signInWithGoogle, userFromGoogle, loadingFromGoogle, errorFromGoogle] = useSignInWithGoogle(auth);

    const onSubmit = ({ email, password }) => {
        signInWithEmailAndPassword(email, password)
    }

    if (user) {
        navigate('/')
    }

    return (
        <div>
            <h2 className='mt-5 text-center'>Login</h2>
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
                    <p>Forgot your password? <Link to="/reset-password">Reset here</Link></p>

                    <button type="submit" className="btn btn-primary">Login</button>
                    <span className='ms-3'>Don't have an account? <Link to="/register">Register here</Link></span>
                </form>
            </div>
        </div>
    )
}

export default Login