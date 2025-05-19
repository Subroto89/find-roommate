import React, { useState } from 'react';
import logo from '../../assets/logo.png';
import { navLinks } from './navLinks';
import { NavLink } from 'react-router';
import { GiHamburgerMenu } from 'react-icons/gi';
import ResponsiveNavMenu from './ResponsiveNavMenu';

const Navbar = () => {
     const [open, setOpen] = useState(false);
        const handleOpen = () => {
            setOpen(!open);
        };
        
    return (
        <div >
           <div className="bg-blue-200 flex justify-between items-center w-full px-8 md:px-32">
                {/* Logo Section */}
                <div className="flex flex-col justify-center items-center">
                    <img src={logo} alt="logoImage" className="w-24 relative"/>
                    <h1 className="text-2xl text-gray-500 font-bold absolute top-16">FindRoommate</h1>
                </div>

                {/* Links Section */}
                <div className="hidden md:flex gap-4 text-gray-500 font-semibold ">
                    {
                        navLinks.map(link => <NavLink key={link.id} 
                                                      to={link.target}
                                                      className="border-b-2 border-gray-600 px-4 py-1 hover:border-blue-800 hover:text-blue-700">  
                                            {link.title}</NavLink>)
                    }
                </div>
                {/* Button Section */}
                <div className="flex gap-4 text-gray-600 text-lg">
                    <div>
                        <button className="border border-gray-200 px-3 shadow btn btn-outline">SignIn</button>
                        <button className="border border-gray-200 px-3 shadow btn btn-outline">SignOut</button>
                    </div>
                    <div>
                        <button className="border border-gray-200 px-3 shadow btn btn-outline">Register</button>
                    </div>
                </div>
            

                {/* Mobile Hamburger Section */}
                <div className="md:hidden" onClick={handleOpen}>
                    <GiHamburgerMenu size={36} className="text-gray-600"/>
                </div>
                <div>
                    <div>{open && <ResponsiveNavMenu />}</div>
                </div>

           </div>
           
        </div>
    );
};

export default Navbar;