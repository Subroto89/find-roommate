import React from "react";
import { navLinks } from "./navLinks";
import { NavLink } from "react-router";

const ResponsiveNavMenu = () => {
  return (
    <div className="absolute top-30 right-4 w-3/6 h-52 bg-blue-200 z-10 md:hidden rounded text-gray-500 flex flex-col justify-center gap-2  ">
      {navLinks.map((link) => <NavLink key={link.id}
                                       to={link.target}
                                       className=" px-4 py-1 hover:text-blue-700"
                                       >{link.title}
                                            
                               </NavLink>)
      }
      
    </div>
  );
};

export default ResponsiveNavMenu;
