import React from 'react'
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth'
import auth from '../../firebase.init';
const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, {
        sendEmailVerification: true
    });

    const onSubmit = ({ email, password }) => {
        createUserWithEmailAndPassword(email, password)
    }
    console.log(error)

    return (
        <div>
            <h2 className='mt-5 text-center'>Register</h2>
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