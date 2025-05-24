import React from "react";

const TopCities = () => {
  const cities = [
    "Dhaka",
    "Mymensing",
    "Tongi",
    "Gazipur",
    "Narayanj",
    "Chittagong",
    "Rangpur",
    "Gaibandha",
    "Panchogor",
    "Barishal",
    "Noakhali",
    "Jeshore",
    "Magura",
    "Netrokona",
    "Bogura",
    "Pabna",
    "Sylhet",
  ];
  return (
    <div className="my-6 mx-2 md:mx-16 bg-gray-200 rounded-lg p-8">
      <h2 className="text-2xl font-bold mb-6">Search In Top Cities</h2>
      <div className="p-8 grid grid-cols-2 md:grid-cols-4 px-4 py-1">
       {
        cities.map((city,index) => <li key={index} className="cursor-pointer hover:text-blue-600 hover:font-semibold" onClick={()=>{alert('site is updating')}}>{city}</li>)
       }
      </div>
    </div>
  );
};

export default TopCities;
