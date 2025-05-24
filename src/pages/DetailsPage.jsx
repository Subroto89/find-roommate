import React, { use, useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { AuthContext } from "../context/AuthContext";
import { SlDislike, SlLike } from "react-icons/sl";
import Swal from "sweetalert2";

const DetailesPage = () => {
  const { user } = use(AuthContext);
  const [isLike, setIsLike] = useState(0);

  useEffect(() => {
    setIsLike(like);
  }, []);

  const handleIsLike = () => {
    if (userEmail !== user.email) {
      const likeAmount = parseInt(isLike);
      const incrementedLikeAmount = likeAmount + 1;
      setIsLike(incrementedLikeAmount);

      // send isLike data to database for updating
      fetch(`https://find-roommate-server-gules.vercel.app/roommates/${_id}`, {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ like: incrementedLikeAmount }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        });
    } else {
      Swal.fire({
        icon: "error",
        text: "You can only like other's post!",
      });
    }
  };

  const data = useLoaderData();
  console.log(data);
  const {
    _id,
    availability,
    contactInfo,
    description,
    lifestylePreferences,
    location,
    rentAmount,
    roomType,
    title,
    userEmail,
    userName,
    like,
    photo,
  } = data;

  return (
    <div className="w-11/12 mx-auto my-8 p-3 rounded-lg bg-amber-100 text-gray-700">
      {/* Top Part(included photo, name, location, title) */}
      <div className="mb-6">
        <div>
          <div className="flex items-center gap-2 lg:gap-8 mb-8">
            <img
              src={photo}
              alt="user photo"
              className="rounded-full w-16 lg:w-30 h-16 lg:h-30 border-2 border-blue-300 p-2"
            />
            <div>
              <h2 className="text-sm lg:text-xl font-bold">{userName}</h2>
              <p className="text-sm lg:text-md font-semibold">{location}</p>
              <p className="text-sm lg:text-md font-semibold"><span className="text-blue-600">{isLike}</span> People interested in.</p>
            </div>
          </div>

          <div className="flex items-center gap-52">
            <h2 className="text-lg font-bold">{title}</h2>
            {/* <p className="font-semibold">{isLike} People interested in.</p> */}
          </div>
        </div>
      </div>

      {/* Description Part */}
      <div className="mb-6 space-y-2">
        <h3 className="text-md font-semibold">Details - What I desire</h3>
        <p className="text-md">{description}</p>
      </div>

      {/* Life Style Preferences */}
      <div className="mb-6">
        <h3 className="font-semibold">Life Style Preferences</h3>
        <div>
          {lifestylePreferences.map((pref, index) => (
            <li key={index}>{pref}</li>
          ))}
        </div>
      </div>

      {/* Room Category & Rent Amount */}
      <div className="mb-6">
        <div>
          <span className="font-semibold">Room Category - </span>
          {roomType}
        </div>
        <div>
          <span className="font-semibold">Rent Amount - </span> {rentAmount} BDT
        </div>
      </div>

      {/* Available or Not */}
      <div className="mb-6 flex items-center gap-2 font-semibold">
        <h3>Post Availablity</h3>
        <p>
          {availability ? (
            <span className="bg-green-400 px-2 text-white font-semibold rounded-lg">
              Available
            </span>
          ) : (
            <span className="bg-red-400 px-3 py-1 text-white font-semibold">
              Not available
            </span>
          )}
        </p>
      </div>

      {/* Contact Info */}
      <div className="mb-6">
        <p>
          <span className="font-semibold">Email Id:</span>{" "}
          <span>{userEmail}</span>
        </p>
        <p>
          <span className="font-semibold">Phone No:</span>
          {isLike > 0 ? <span>{contactInfo}</span> : "Like to get the contact number"}
        </p>
        {isLike > 0 ? (
          <div className="flex items-center gap-2 bg-green-400 px-2 rounded-lg w-20 cursor-pointer">
            <span>Liked</span> <SlLike size={20} />
          </div>
        ) : (
          <div
            onClick={handleIsLike}
            className="flex items-center gap-2 bg-gray-400 px-2 rounded-lg w-20 cursor-pointer"
          >
            <span>Like</span> <SlLike size={20} />
          </div>
        )}
      </div>
    </div>
  );
};

export default DetailesPage;
