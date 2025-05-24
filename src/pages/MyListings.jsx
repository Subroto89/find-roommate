import React, { useState } from "react";
import { MdModeEdit, MdOutlineDeleteOutline } from "react-icons/md";
import { Link, useLoaderData, useNavigate } from "react-router";
import Swal from "sweetalert2";
import { Tooltip } from "react-tooltip";

const MyListings = () => {
  const myListings = useLoaderData();
  const [listings, setListings] = useState(myListings);

  const navigate = useNavigate();

  console.log(listings);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // fetch the API to delete
        fetch(`find-roommate-server-gules.vercel.app/my-listings/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            
            if (data.deletedCount) {
              const remainingListings = listings.filter(
                (listing) => listing._id !== id
              );
              setListings(remainingListings);
              Swal.fire({
                title: "Deleted!",
                text: "Your post has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };
  return (
    <div>
      <div className="overflow-x-auto bg-white rounded-xl shadow-2xl border border-gray-200 mx-8 md:mx-16 my-8">
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
                
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium flex items-center gap-4">
                  <Link
                    id="anchorEdit"
                    to={`/my-listing/particular/${listing._id}`}
                    className="border border-gray-300 p-2 px-3 rounded-lg hover:bg-green-300 cursor-pointer group"
                  >
                    <MdModeEdit
                      size={16}
                      className="text-gray-800 group-hover:text-white"
                    />
                    <Tooltip
                      anchorSelect="#anchorEdit"
                      content="Edit the post!"
                    />
                  </Link>
                  
                  <div
                  id="anchor-element"
                    onClick={() => handleDelete(listing._id)}
                    className="border border-gray-300 p-2 px-3 rounded-lg hover:bg-green-300 cursor-pointer group"
                  >
                    <MdOutlineDeleteOutline
                      size={16}
                      className="text-gray-800 group-hover:text-white"
                      
                    />
                    <Tooltip
                      anchorSelect="#anchor-element"
                      content="Delete Post!"
                    />
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
