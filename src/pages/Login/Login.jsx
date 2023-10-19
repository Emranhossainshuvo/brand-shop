import { Link } from "react-router-dom";
import Navbar from "../shared/navbar/Navbar";
import { FcGoogle } from 'react-icons/fc'
import {ImGithub} from 'react-icons/im'
import Footer from "../shared/footer/Footer";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Login = () => {

    const {emailPasswordSignIn} = useContext(AuthContext); 

    const handleSignIn = e => {
        e.preventDefault(); 
        const form = e.target; 
        const email = form.email.value; 
        const password = form.password.value; 
        const user = {email, password}
        console.log(user);
        emailPasswordSignIn(email, password)
        .then(result => {
            console.log(result.user);
        })
        .catch(error => {
            console.error(error)
        })
    }

    return (
        <>
        <div>
            <Navbar></Navbar>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSignIn} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
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
                            <p>Dont have an account? <Link className="hover:underline hover:text-green-700" to='/register'>Register</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <Footer></Footer>
        </>
    );
};

export default Login;