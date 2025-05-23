import React, { use, useState } from "react";
import logo from "../../assets/logo.png";
import { navLinks } from "./navLinks";
import { NavLink } from "react-router";
import { Link } from "react-router";
import { GiHamburgerMenu } from "react-icons/gi";
import ResponsiveNavMenu from "./ResponsiveNavMenu";
import { AuthContext } from "../../context/AuthContext";
import { PiUserCircleFill } from "react-icons/pi";

const Navbar = () => {
  const { user, logOut } = use(AuthContext);

  const [open, setOpen] = useState(false);
  
  const handleLogedOut = () => {
    logOut()
    .then(() => {
        alert('You are loged out successfully')
    }).catch((error) => {
        console.log(error);
    })
  }
  
  const handleOpen = () => {
    setOpen(!open);
  };


  const {theme, toggleTheme} = use(AuthContext);

  return (
    <div>
      <div onClick={toggleTheme} className={`${theme} flex justify-between items-center w-full px-8 md:px-32`} >
        {/* Logo Section */}
        <div className="flex flex-col justify-center items-center">
          <img src={logo} alt="logoImage" className="w-24 relative" />
          <h1 className="text-2xl text-gray-500 font-bold absolute top-16">
            FindRoommate
          </h1>
       
        </div>

        {/* Links Section */}
        <div className="hidden md:flex gap-4 text-gray-500 font-semibold ">
          {navLinks.map((link) => (
            <NavLink
              key={link.id}
              to={link.target}
              className="border-b-2 border-gray-600 px-4 py-1 hover:border-blue-800 hover:text-blue-700"
            >
              {link.title}
            </NavLink>
          ))}
          <Link to={`/my-listing/${user?.email}`} className="border-b-2 border-gray-600 px-4 py-1 hover:border-blue-800 hover:text-blue-700">My Listing</Link>
        </div>
        {/* Button Section */}
        <div className="flex gap-4 text-gray-600 text-lg">
          <div>
            {user ? (
              <NavLink onClick={handleLogedOut}>
                <button className="border border-gray-200 px-3 shadow btn btn-outline">
                  SignOut
                </button>
              </NavLink>
            ) : (
              <NavLink to="signIn">
                <button className="border border-gray-200 px-3 shadow btn btn-outline">
                  SignIn
                </button>
              </NavLink>
            )}
          </div>
          <div className="flex items-center gap-4">
            <NavLink to="register">
              <button className="border border-gray-200 px-3 shadow btn btn-outline">
                Register
              </button>
            </NavLink>
            
          </div>
          <div>
              {user ? <img src={user.photoURL} title={user.displayName} className="w-10 rounded-full"/> : <PiUserCircleFill size={44}/>}
            </div>
        </div>

        {/* Mobile Hamburger Section */}
        <div className="md:hidden" onClick={handleOpen}>
          <GiHamburgerMenu size={36} className="text-gray-600" />
        </div>
        <div>
          <div>{open && <ResponsiveNavMenu />}</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
