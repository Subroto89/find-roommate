import React from 'react';
import { MdModeEdit, MdOutlineDeleteOutline } from 'react-icons/md';
import { useLoaderData } from 'react-router';

const MyListings = () => {
    const listings = useLoaderData()
    
   
        console.log(listings);
 

    return (
        <div>
            <div className="overflow-x-auto bg-white rounded-xl shadow-2xl border border-gray-200">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Title
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Location
                </th>
                {/* <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Rent Amount
                </th> */}
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Room Type
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Availability
                </th>
                {/* <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Posted By
                </th> */}
                <th scope="col" className="relative px-6 py-3">
                  <span className="sr-only">See More</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {listings.map((listing) => (
                <tr
                  key={listing._id}
                  className="hover:bg-blue-50 transition-colors duration-150"
                >
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">
                      {listing.title}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      {listing.location}
                    </div>
                  </td>
                  {/* <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      BDT {listing.rentAmount.toLocaleString()}
                    </div>
                  </td> */}
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      {listing.roomType}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        listing.availability
                          ? "bg-green-100 text-green-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {listing.availability ? "Available" : "Not Available"}
                    </span>
                  </td>
                  {/* <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {listing.userName} ({listing.userEmail})
                  </td> */}
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium flex items-center gap-4">
                  
                    <div className="border border-gray-300 p-2 px-3 rounded-lg hover:bg-green-300 cursor-pointer group">
                        <MdModeEdit size={16} className="text-gray-800 group-hover:text-white"/>
                    </div>
                    <div className="border border-gray-300 p-2 px-3 rounded-lg hover:bg-green-300 cursor-pointer group">
                         <MdOutlineDeleteOutline size={16} className="text-gray-800 group-hover:text-white"/>
                    </div>
                   
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
                      
        </div>
    );
};

export default MyListings;