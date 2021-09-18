import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/images/logo.svg";
import Dropdownd from './dropdown/Dropdown';
const Navbar = () => {
    return (
        <>
            <nav role='navigation' className="fixed z-40 w-full lg:px-12 md:px-3 sm:px-4" >
                <div className='flex justify-between   items-center h-16 bg-white text-black  relative shadow-sm  px-4' >
                    {/* font-mono */}
                    <div className="flex justify-left w-full ">
                        <Link to='/'>
                            <img className="h-5" src={logo} alt="logo"></img>
                        </Link>
                    </div>
                        <Dropdownd/>
                </div>
            </nav>

        </>
    );
};
export default Navbar;