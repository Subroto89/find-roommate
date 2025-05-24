import React, { use, useState } from "react";
import { useLoaderData, useNavigate } from "react-router";
import { AuthContext } from "../context/AuthContext";
import { BiEdit } from "react-icons/bi";
import Swal from "sweetalert2";

const MyListingUpdate = () => {
    const [selectedPreferences, setSelectedPreferences] = useState([]);
    const {user} = use(AuthContext);
    const navigate = useNavigate();

    const handleChange = (event) => {
    const { value, checked } = event.target;

    setSelectedPreferences((prev) =>
      checked ? [...prev, value] : prev.filter((pref) => pref !== value)
    );
  };

  const data = useLoaderData();
  console.log(data);
  const {
        _id,
         contactInfo,
         description,
        //  lifestylePreferences,
         location,
         rentAmount,
         roomType,
         title,
         availability 
  } = data;
  

  const lifestyleOptions = [
    "Pets Allowed",
    "Smoking Allowed",
    "Night Owl",
    "Early Bird",
    "Quiet",
    "Social",
    "Vegetarian",
    "Non-Vegetarian",
    "Parties Welcome",
    "No Parties",
    "Students Preferred",
    "Professionals Preferred",
  ];

    const handleSubmit = (e) => {
      e.preventDefault();
      const form = e.target;
      const formData = new FormData(form);
      const newRoommate = Object.fromEntries(formData.entries());
  
      // Attach selected preferences as an array
      newRoommate.lifestylePreferences = selectedPreferences;
  
      console.log(newRoommate);
  
      // send formData to database
      fetch(`https://find-roommate-server-gules.vercel.app/roommates/${_id}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(newRoommate),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.matchedCount) {
            Swal.fire({
              position: "center-center",
              icon: "success",
              title: "Your data has been updated successfully",
              showConfirmButton: false,
              timer: 1500,
            });
            navigate(`/my-listing/${user?.email}`);
            window.scrollTo(0,0);
          }
          console.log("after added data to database", data);
        });
    };
  return (
    <div>
      <div className="bg-amber-100 px-4 md:px-8 py-6 mx-8 md:mx-20 my-8 rounded-lg border-2 border-blue-300">
        <h1 className="text-2xl font-semibold text-gray-700 text-center mb-10">
          Update My Post
        </h1>
        <form onSubmit={handleSubmit}>
          <p className="text-gray-700 font-semibold mb-8">
            Edit the fields below accurately, so that your post remains up to
            date.
          </p>
          {/* title */}
          <div className="mb-8">
            <label
              htmlFor="title"
              className="block text-gray-700 text-sm font-semibold mb-2"
            >
              Title
            </label>
            <input
              type="text"
              placeholder="e.g., Looking for a roommate in NYC"
              id="title"
              name="title"
              defaultValue={title}
              maxLength="100"
              required
              className="border border-gray-300 rounded-lg shadow-sm w-full px-3 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
          </div>

          {/* User Email (Read Only) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="mb-6">
              <label
                htmlFor="userEmail"
                className="block text-gray-700 text-sm font-semibold mb-2"
              >
                Your Email
              </label>
              <input
                type="email"
                id="userEmail"
                name="userEmail"
                defaultValue={user.email}
                className="shadow-sm appearance-none border border-gray-300 rounded-lg w-full py-3 px-4 text-gray-700 bg-gray-100 leading-tight cursor-not-allowed"
                readOnly
              />
            </div>

            {/* User Name (Read Only) */}
            <div className="mb-8">
              <label
                htmlFor="userName"
                className="block text-gray-700 text-sm font-semibold mb-2"
              >
                Your Name
              </label>
              <input
                type="text"
                id="userName"
                name="userName"
                defaultValue={user.displayName}
                className="shadow-sm appearance-none border border-gray-300 rounded-lg w-full py-3 px-4 text-gray-700 bg-gray-100 leading-tight cursor-not-allowed"
                readOnly
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Location */}
            <div className="mb-8">
              <label
                htmlFor="location"
                className="block text-gray-700 text-sm font-semibold mb-2"
              >
                Location
              </label>
              <input
                type="text"
                placeholder="e.g., Uttara, Dhaka"
                id="location"
                name="location"
                defaultValue={location}
                required
                className="border border-gray-300 rounded-lg shadow-sm w-full px-3 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
            </div>

            {/* Contact Info */}
            <div className="mb-6">
              <label
                htmlFor="contactInfo"
                className="block text-gray-700 text-sm font-semibold mb-2"
              >
                Preferred Contact Info
              </label>
              <input
                type="text"
                id="contactInfo"
                name="contactInfo"
                defaultValue={contactInfo}
                className="shadow-sm appearance-none border border-gray-300 rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent"
                placeholder="e.g., +8801XXXXXXXXX (WhatsApp)"
                required
              />
              <p className="text-xs text-gray-500 mt-1">
                Provide a way for potential roommates to reach you.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Rent Amount */}
            <div className="mb-8">
              <label
                htmlFor="rentAmount"
                className="block text-gray-700 text-sm font-semibold mb-2"
              >
                Rent Amount
              </label>
              <input
                type="number"
                placeholder="e.g., 3000"
                id="rentAmount"
                name="rentAmount"
                defaultValue={rentAmount}
                min="0"
                step="100"
                required
                className="border border-gray-300 rounded-lg shadow-sm w-full px-3 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
            </div>

            {/* Room Type */}
            <div className="mb-8">
              <label
                htmlFor="roomType"
                className="block text-gray-700 text-sm font-semibold mb-2"
              >
                Title
              </label>
              <select
                id="roomType"
                name="roomType"
                defaultValue={roomType}
                required
                className="border border-gray-300 rounded-lg shadow-sm w-full px-3 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
              >
                <option value="single">Single Room</option>
                <option value="shared">Shared Room</option>
                <option value="studio">Studio Apartment</option>
                <option value="apartment">Full Apartment</option>
              </select>
            </div>
          </div>

          {/* Life Style Preferences */}
          <div className="mb-8">
            <label className="block text-gray-700 text-sm font-semibold mb-3">
              Lifestyle Preferences
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {lifestyleOptions.map((pref) => (
                <div key={pref} className="flex items-center">
                  <input
                    type="checkbox"
                    id={pref
                      .toLowerCase()
                      .replace(/\s/g, "-")
                      .replace(/[^a-z0-9-]/g, "")} // Sanitize ID for HTML
                    name="lifestylePreferences"
                    
                    value={pref}
                    onChange={handleChange}
                    className="form-checkbox h-5 w-5 text-blue-600 rounded focus:ring-blue-300"
                  />
                  <label
                    htmlFor={pref
                      .toLowerCase()
                      .replace(/\s/g, "-")
                      .replace(/[^a-z0-9-]/g, "")}
                    className="ml-2 text-gray-700 text-sm cursor-pointer"
                  >
                    {pref}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Description */}
          <div className="mb-6">
            <label
              htmlFor="description"
              className="block text-gray-700 text-sm font-semibold mb-2"
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              defaultValue={description}
              className="shadow-sm appearance-none border border-gray-300 rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-300 h-40 resize-y"
              placeholder="Describe the room, the apartment, amenities, neighborhood, and what you're looking for in a roommate."
              required
              minLength="50"
              maxLength="1000"
            ></textarea>
          </div>

          {/* Availability */}
          <div className="mb-6 flex items-center">
            <input
              type="checkbox"
              id="availability"
              name="availability"
              defaultValue={availability}
              className="form-checkbox h-5 w-5 text-blue-600 rounded focus:ring-blue-300"
            />
            <label
              htmlFor="availability"
              className="ml-2 text-gray-700 text-sm font-semibold cursor-pointer"
            >
              Room is Currently Available
            </label>
          </div>
          {/* Add Button */}
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className={`flex items-center justify-center gap-4 w-48 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full focus:outline-none focus:shadow-outline transition duration-300}`}
            >
              Update <BiEdit size={20}/>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MyListingUpdate;
