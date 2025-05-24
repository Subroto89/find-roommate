import React, { use, useState } from "react";
import logo from "../../assets/logo.png";
import { navLinks } from "./navLinks";
import { NavLink } from "react-router";
import { Link } from "react-router";
import { GiHamburgerMenu } from "react-icons/gi";
import ResponsiveNavMenu from "./ResponsiveNavMenu";
import { AuthContext } from "../../context/AuthContext";
import { PiUserCircleFill } from "react-icons/pi";
import { FaToggleOff, FaToggleOn } from "react-icons/fa";
import Swal from "sweetalert2";

const Navbar = () => {
  const { user, logOut } = use(AuthContext);
  const { theme, toggleTheme } = use(AuthContext);

  const [open, setOpen] = useState(false);

  const handleLogedOut = () => {
    logOut()
      .then(() => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your work has been saved",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div>
      <div className="bg-blue-200 flex justify-between items-center w-full px-6 lg:px-20">
        {/* Logo Section */}
        <div className="flex flex-col mb-6 mx-6 items-center">
          <img src={logo} alt="logoImage" className="w-24 relative" />
          <h1 className="text-xl text-gray-500 font-bold absolute top-16">
            FindRoommate
          </h1>
        </div>

        {/* Links Section */}
        <div className="hidden md:flex items-center text-xs md:text-sm lg:text-lg text-gray-600 font-semibold ">
          {navLinks.map((link) => (
            <NavLink
              key={link.id}
              to={link.target}
              className="hover:text-blue-500 border-r-2 border-gray-600 px-2 lg:px-4"
            >
              {link.title}
            </NavLink>
          ))}
          <NavLink
            to={`/my-listing/${user?.email}`}
            className="px-2 py-1 hover:border-blue-800 hover:text-blue-700"
          >
            My Listing
          </NavLink>
        </div>
        {/* Button Section */}
        <div className="flex items-center gap-4 text-gray-600 text-lg">
          <button onClick={toggleTheme}>
            {theme == "light" ? (
              <FaToggleOff size={40} />
            ) : (
              <FaToggleOn size={40} />
            )}
          </button>
          <div>
            {user ? (
              <Link onClick={handleLogedOut}>
                <button className="border border-gray-200 px-3 shadow btn btn-outline">
                  SignOut
                </button>
              </Link>
            ) : (
              <div className="space-x-1 lg:space-x-4">
                <NavLink to="signIn">
                  <button className="border border-gray-200 px-3 shadow btn btn-outline">
                    SignIn
                  </button>
                </NavLink>
                <NavLink to="register">
                  <button className="hidden lg:inline-block border border-gray-200 px-1 lg:px-3 shadow btn btn-outline">
                    Register
                  </button>
                </NavLink>
              </div>
            )}
          </div>

          <div className="hidden md:inline-block">
            {user ? (
              <img
                src={user.photoURL}
                title={user.displayName}
                className="w-10 h-10 rounded-full shadow-lg"
              />
            ) : (
              <PiUserCircleFill size={44} />
            )}
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
