// import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../shared/navbar/Navbar';
import { FcGoogle } from 'react-icons/fc'
import {ImGithub} from 'react-icons/im'
import Footer from '../shared/footer/Footer';

const Register = () => {
    return (
        <>
        <div>
            <Navbar></Navbar>
            <h3 className="text-3xl">This is login</h3>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>
                            <div className="flex items-center justify-start gap-5">
                                <h3>Continue with</h3>
                                <div className="form-control">
                                    <Link className=""><FcGoogle /></Link>
                                </div>
                                <div className="form-control">
                                    <Link className=""><ImGithub></ImGithub></Link>
                                </div>
                            </div>
                            <p>Already have an account <Link className="hover:underline hover:text-green-700" to='/login'>Login</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <Footer></Footer>
        </>
    );
};

export default Register;