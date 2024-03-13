import { Link } from "react-router-dom";
import img from "../../../assets/assets/logo.svg"
import { CiSearch } from "react-icons/ci";
import { HiOutlineShoppingBag } from "react-icons/hi2";


const Navbar = () => {

    const navItems = <>


        <li><Link>Home</Link></li>
        <li><Link to="about">About</Link></li>
        <li><Link to="Services">Services</Link></li>
        <li><Link>Blog</Link></li>
        <li><Link>Contact</Link></li>

    </>

    return (
        <div className="navbar  shadow-xl text-black bg-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <img className="h-16 w-h-16" src={img} alt="logo" />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end">
                <HiOutlineShoppingBag className="w-6 h-6 mr-4" />

                <CiSearch className="w-6 h-6 mr-4" />
                <a className="btn btn-outline btn-error">Appointment</a>
            </div>
        </div>
    );
};

export default Navbar;