import React, { useEffect, useState } from 'react';
import RoommateLimitCard from './RoommateLimitCard';

const RoommateLimit = () => {

    const [roommates, setRoommates] = useState([]);
    useEffect(()=>{
        fetch('https://find-roommate-server-gules.vercel.app/limited-roommates')
        .then(res => res.json())
        .then(data => {
            setRoommates(data)
            console.log('there are datas', roommates)
        })
    },[roommates])

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-6">
            {
                roommates.map(roommate => <RoommateLimitCard key={roommate._id} 
                                          roommate={roommate}>

                </RoommateLimitCard>)
            }
        </div>
    );
};

export default RoommateLimit;