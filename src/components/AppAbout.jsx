import React from "react";
import { TiTick } from "react-icons/ti";
import { Link } from "react-router";
import appAbout from "../../src/assets/appAbout.png";

const AppAbout = () => {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-10 mx-2 lg:mx-16 bg-gray-100 text-gray-600 rounded-lg">
        <div className="order-2 lg:order-1">
          <h2 className="font-bold text-2xl mb-8">How It Works</h2>
          <div className="flex items-center gap-2">
            <TiTick />
            <p>Sign up, complete your profile and post your listing for Free</p>
          </div>
          <div className="flex items-center gap-2">
            <TiTick />
            <p>Fill up a form with the basic details about your self</p>
          </div>

          <div className="flex items-center gap-2 mb-4">
            <TiTick />
            <p>
              That is it! Your listing is now in front of thousands of Seekers
            </p>
          </div>
          <Link className="text-lg font-semibold border-1 border-gray-400 hover:border-2 px-3 py-1">
            Get Started
          </Link>
        </div>
        <img src={appAbout} className="order-1 lg:order-2 w-80 lg:w-96"/>
      </div>
    </div>
  );
};

export default AppAbout;
