import React, { use } from "react";
import carousel1 from "../assets/carousel1.png";
import carousel2 from "../assets/carousel2.png";
import carousel3 from "../assets/carousel3.png";
import { Link } from "react-router";
import { AuthContext } from "../context/AuthContext";
import { Tooltip } from "react-tooltip";
import { Typewriter, useTypewriter } from "react-simple-typewriter";

const Slider = () => {
  const { user } = use(AuthContext);
   const [text] = useTypewriter({
    words: [' Absolute Matching', ' Perfect Roommates'],
    loop: 0
  })
  
  return (
    <div>
      <div className="carousel w-full">
        {/* Slide 1 */}
        <div id="slide1" className="carousel-item relative w-full">
          <div className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-1 overflow-hidden h-[400px] bg-blue-100 relative">
              <img src={carousel1} className="w-2/5 absolute right-30 order-2 md:order-1" />
              <div className="absolute top-30 mx-16 md:mx-30 order-1 md:order-2">
                <h2 className="text-md md:text-xl text-gray-800 font-bold">
                  Intelligent
                  {text}
                </h2>
                <p className="mt-6 mb-4 text-sm md:text-xl font-semibold text-gray-700 w-full md:w-4/7">
                  Our advanced algorithm connects you with roommates who truly
                  fit your lifestyle, habits, and preferences. No more
                  guesswork, just great living.
                </p>
                <Link to={"/browse-listing"} id="my-anchor-element">
                  <button className="border border-gray-2 px-3 py-1 text-md md:text-lg bg-gray-500 hover:bg-blue-600 rounded-lg">
                    Discover Your Match
                  </button>
                  <Tooltip
                    anchorSelect="#my-anchor-element"
                    content="Show the existing posts!"
                  />
                </Link>
              </div>
            </div>
          </div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>

        {/* Slide No 2 */}
        <div id="slide2" className="carousel-item relative w-full">
          <div className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-1 overflow-hidden h-[400px] bg-blue-100 relative">
              <img src={carousel2} className="w-2/5 absolute right-30 order-1 md:order-2" />
              <div className="absolute top-30 mx-16 md:mx-30 order-2 md:order-1">
                <h2 className="text-md md:text-xl text-gray-800 font-bold">
                  Find Your Roommate - Super Fast
                </h2>
                <p className="mt-6 mb-4 text-sm md:text-xl font-semibold text-gray-700 w-full md:w-4/7">
                  Browse existing roommate listing from the navbar & you will
                  get thousands of listings. Select those you are interested in
                  and hit the like button to get theme next time easily. Chat
                  with your matched roommate and settle instantly.
                </p>
                <Link to={"/browse-listing"}>
                  <button className="border border-gray-2 px-3 py-1 text-md md:text-lg bg-gray-500 hover:bg-blue-600 rounded-lg">
                    Browse Listings
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>

        {/* Slide No 3 */}
        <div id="slide3" className="carousel-item relative w-full">
          <div className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-1 overflow-hidden h-[400px] bg-blue-100 relative">
              <img src={carousel3} className="w-3/8 md:w-2/5 absolute right-30 order-1 md:order-2" />
              <div className="absolute top-30 mx-16 md:mx-30 order-2 md:order-1">
                <h2 className="text-md md:text-xl text-gray-800 font-bold">
                  Now, You Can Post Your Listing !
                </h2>
                <p className="mt-6 mb-4 text-sm md:text-xl font-semibold text-gray-700 w-full md:w-4/7">
                  You can also post your listing to share about yourself so that
                  others can find you too. You can Post Multiple listings and
                  edit or delete one if you want. Its totally free to post.
                </p>

                <Link to={"/add-roommate"}>
                  <button className="border border-gray-2 px-3 py-1 text-md md:text-lg bg-gray-500 hover:bg-blue-600 rounded-lg">
                    Post Your List
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
