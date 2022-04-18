import React from 'react'
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        console.log(data)
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
                    <p>Don't have an account? <Link to="/register">Register here</Link></p>
                    <button type="submit" className="btn btn-primary">Login</button>
                </form>
            </div>
        </div>
    )
}

export default Login