import React, { useEffect, useState } from 'react';
import RoommateLimitCard from './RoommateLimitCard';
import { MdOutlineFeaturedPlayList } from 'react-icons/md';

const RoommateLimit = () => {

    const [roommates, setRoommates] = useState([]);
    useEffect(()=>{
        fetch('find-roommate-server-gules.vercel.app/limited-roommates')
        .then(res => res.json())
        .then(data => {
            setRoommates(data)
            console.log('there are datas', roommates)
        })
    },[roommates])

    return (
        <div className="my-6 mx-8 md:mx-16 bg-gray-200 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-6"><MdOutlineFeaturedPlayList className="inline-block mr-6" size={46} />Featured Postings</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {
                roommates.map(roommate => <RoommateLimitCard key={roommate._id} 
                                          roommate={roommate}>

                </RoommateLimitCard>)
            }
          </div>
        </div>
    );
};

export default RoommateLimit;