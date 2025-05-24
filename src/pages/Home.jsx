import React from 'react';
import Slider from '../components/Slider';
import AppAbout from '../components/AppAbout';
import RoommateLimit from '../components/RoommateLimit';
import TopCities from '../components/TopCities';

const Home = () => {
    return (
        <div>
          <Slider></Slider> 
          <RoommateLimit></RoommateLimit>
          <AppAbout></AppAbout>
          <TopCities></TopCities>
        </div>
    );
};

export default Home;