// import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Navbar from '../shared/navbar/Navbar';
import { FcGoogle } from 'react-icons/fc'
import { ImGithub } from 'react-icons/im'
import Footer from '../shared/footer/Footer';
import { useContext, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2'

const Register = () => {

    const [userError, setUserError] = useState('');
    const [githubUserError, setGithubUserError] = useState('');
    const [googleUserError, setGoogleUserError] = useState('');

    const { emailPasswordAuth, googleSignIn, githubSignIn } = useContext(AuthContext);

    const location = useLocation();

    const navigate = useNavigate();

    const githubAuth = () => {
        githubSignIn()
            .then(result => {
                console.log(result);
                navigate(location?.state ? location.state : '/')
                Swal.fire({
                    title: 'Successful!',
                    text: 'You have successfully logged in',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                })
            })
            .catch(error => {
                console.error(error)
                setGithubUserError(error.message)
                Swal.fire({
                    title: 'Error!',
                    text: `${githubUserError}`,
                    icon: 'error',
                    confirmButtonText: 'X'
                })
            })
    }

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                console.log(result);
                navigate(location?.state ? location.state : '/')
                Swal.fire({
                    title: 'Successful!',
                    text: 'You have successfully logged in',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                })
            })
            .then(error => {
                console.error(error)
                setGoogleUserError(error.message)
                Swal.fire({
                    title: 'Error!',
                    text: `${googleUserError}`,
                    icon: 'error',
                    confirmButtonText: 'X'
                })
            })
    }

    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const user = { email, password }
        console.log(user);

        // if (password.length < 6) {
        //     Swal.fire({
        //         title: 'Error!',
        //         text: 'Password must be at least 6 characters',
        //         icon: 'error',
        //         confirmButtonText: 'X'
        //     })
        // }
        emailPasswordAuth(email, password)
            .then(result => {
                console.log(result.user);
                navigate(location?.state ? location.state : '/')
                Swal.fire({
                    title: 'Successful!',
                    text: 'You have successfully registered',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                })
            })
            .catch(error => {
                console.error(error.message)
                Swal.fire({
                    title: 'Error!',
                    text: `${userError}`,
                    icon: 'error',
                    confirmButtonText: 'X'
                })
                setUserError(error.message)
            })
    }

    return (
        <>
            <Helmet>
                <title>Filmic | Register</title>
            </Helmet>
            <div>
                <Navbar></Navbar>
                <div className="hero min-h-screen bg-base-200">
                    <div className="hero-content flex-col lg:flex-row-reverse">

                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <form onSubmit={handleRegister} className="card-body bg-slate-300 rounded-lg">
                                <h3 className='text-2xl font-semibold text-center'>Register</h3>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn bg-transparent hover:bg-slate-400 transition duration-500">Register</button>
                                </div>
                                <div className="flex items-center justify-start gap-5">
                                    <h3>Continue with</h3>
                                    <div className="form-control">
                                        <Link onClick={handleGoogleSignIn} className=""><FcGoogle /></Link>
                                    </div>
                                    <div className="form-control">
                                        <Link onClick={githubAuth} className=""><ImGithub></ImGithub></Link>
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