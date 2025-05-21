import React from "react";
import { TiTick } from "react-icons/ti";
import { Link } from "react-router";
import appAbout from "../../src/assets/appAbout.png";

const AppAbout = () => {
  return (
    <div>
      <div className="flex items-center justify-around w-full p-8 md:p-20 bg-amber-100 text-gray-600">
        <div>
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
            {" "}
            Get Started
          </Link>
        </div>
        <img src={appAbout} />
      </div>
    </div>
  );
};

export default AppAbout;
