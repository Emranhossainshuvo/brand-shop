import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";


const Navbar = () => {

    const { user, emailPasswordLogout } = useContext(AuthContext)

    const handleSignOut = () => {
        emailPasswordLogout()
        .then(result => {
            
        })
    }

    const navlinks = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/addproduct'>Add product</NavLink></li>
        <li><NavLink to='/mycart'>My cart</NavLink></li>
        <li><NavLink to='/login'>Login</NavLink></li>

    </>

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {
                            navlinks
                        }
                    </ul>
                </div>
                <img className="h-10" src="https://i.ibb.co/DGCTvZG/icons8-playerme-250.png" alt="" />
                <p>Filmic</p>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {
                        navlinks
                    }
                </ul>
            </div>
            <div className="navbar-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                        <img src="https://i.ibb.co/Lgmd7xs/IMG-20210924-190926-2.jpg" />
                    </div>
                </label>
                {
                    user ?
                        <button onClick={handleSignOut} className="btn">Sign out</button>
                        :
                        <Link to="/login">
                            <button className="btn">Login</button>
                        </Link>
                }

            </div>
        </div>
    );
};

export default Navbar;