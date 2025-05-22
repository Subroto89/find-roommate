import React, { use, useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { AuthContext } from "../context/AuthContext";
import { SlDislike, SlLike } from "react-icons/sl";

const DetailesPage = () => {
  const { user } = use(AuthContext);
  const [isLike, setIsLike] = useState(0);
  const [likedOrNot, setLikedOrNot] = useState(false)
  
   useEffect(()=>{
    setIsLike(like)
    setLikedOrNot(likedOrNotValue)
  },[])
  
  const handleIsLike = () => {
    const likeAmount = parseInt(isLike);
    const incrementedLikeAmount = likeAmount + 1;
    setIsLike(incrementedLikeAmount);
    setLikedOrNot(true);

    // send isLike & liked data to database for updating


    
  }

  const data = useLoaderData();
  console.log(data);
  const {
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
    likedOrNotValue
  } = data;

 
  return (
    <div>
      {/* Top Part(included photo, name, location, title) */}
      <div className="mb-6">
        <div>
          <div className="flex items-center gap-8">
            <img
              src={user.photoURL}
              alt="user photo"
              className="rounded-full w-30 h-30 border-2 border-blue-300 p-2"
            />
            <div>
              <h2>{userName}</h2>
              <p>{location}</p>
            </div>
          </div>
         <div className="flex items-center gap-52">
             <h2>{title}</h2>
          <p>{isLike} People interested in.</p>
         </div>
        </div>
      </div>

      {/* Description Part */}
      <div className="mb-6">
        <h3>Details - What I desire</h3>
        <p>{description}</p>
      </div>

      {/* Life Style Preferences */}
      <div className="mb-6">
        <h3>Life Style Preferences</h3>
        <div>
          {lifestylePreferences.map((pref, index) => (
            <li key={index}>{pref}</li>
          ))}
        </div>
      </div>

      {/* Room Category & Rent Amount */}
      <div className="mb-6">
        <div>Room Category - {roomType}</div>
        <div>Rent Amount - {rentAmount}</div>
      </div>

      {/* Available or Not */}
      <div className="mb-6 flex items-center gap-2">
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
          Email Id: <span>{userEmail}</span>
        </p>
        <p>
          Phone No: {isLike ? <span>{contactInfo}</span> : 'nai'}
        </p>
        {
            likedOrNot ? 
            <div className="flex items-center gap-2 bg-green-400 px-2 rounded-lg w-20 cursor-pointer"><span>Liked</span> <SlLike size={20}/></div> : 
            <div onClick={handleIsLike} className="flex items-center gap-2 bg-gray-400 px-2 rounded-lg w-20 cursor-pointer"><span>Like</span> <SlLike size={20}/></div>
        }
      </div>
    </div>
  );
};

export default DetailesPage;
