import React from 'react';
import Slider from '../components/Slider';
import AppAbout from '../components/AppAbout';
import RoommateLimit from '../components/RoommateLimit';

const Home = () => {
    return (
        <div>
          <Slider></Slider> 
          <AppAbout></AppAbout>
          <RoommateLimit></RoommateLimit>
        </div>
    );
};

export default Home;