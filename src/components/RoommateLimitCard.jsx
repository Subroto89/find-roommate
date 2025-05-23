import React from 'react';
import { Link, useNavigate } from 'react-router';

const RoommateLimitCard = ({roommate}) => {
    const {userName, location, title, description, _id} = roommate;
    const navigate = useNavigate()
    const handleSeeMore = (id) => {
        navigate(`/details/${id}`)
    }
    return (
        <div className="bg-amber-100 text-lg text-gray-700 p-4 rounded-lg h-80 overflow-hidden shadow-lg">
            <h2 className="font-bold ">{userName}</h2>
            <p className="text-md">{location}</p>
           <div className="flex flex-col items-between">
         <div className="mt-4 space-y-2">
                <p className="font-semibold">{title} 
                   <span className="text-xs bg-green-400 text-white px-1 rounded ml-2">Available</span></p>
                <p className="text-md text-justify h-20 overflow-hidden">{description}</p>
            </div>
            <button onClick={() => handleSeeMore(_id)} className="btn btn-sm bg-gray-300 text-gray-800 mt-6">View Details</button>
           </div>
        </div>
    );
};

export default RoommateLimitCard;