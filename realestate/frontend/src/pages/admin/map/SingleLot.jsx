// SingleLot.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";
import Sidebar from "../../../components/Sidebar";

const SingleLot = () => {
  const { block, lotName } = useParams();

  // Replace this with actual data fetching logic for the selected lot
  const lotDetails = {
    name: lotName,
    status: "Available",
    size: "500 sq. ft.", // Replace with actual size data
    price: 100000, // Replace with actual price data
    owner: {
      name: "John Doe",
      contactNumber: "123-456-7890",
      email: "john.doe@example.com",
    },
    additionalDetails:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac urna vel orci bibendum hendrerit.",
    image: "/path/to/lot-image.jpg", // Replace with the actual path to the image
    // Add more details as needed
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />

      <div className="flex-1 flex flex-col overflow-hidden">
        <main className="flex-1 overflow-x-hidden overflow-y-auto py-8 px-12">
          <div className="mb-6 flex justify-between items-center">
            <h1 className="text-2xl font-semibold text-gray-800">
              {`${block} - ${lotDetails.name} Details`}
            </h1>
            <Link
              to="/admin/view-available-lots"
              className="text-blue-500 hover:underline focus:outline-none"
            >
              Back to Lot Availability
            </Link>
          </div>
          <div className="container mx-auto bg-white rounded-md shadow-lg">
            <div className="p-8">
              <h2 className="text-xl font-semibold mb-4">Lot Information</h2>
              <div className="mb-4">
                <p>Status: {lotDetails.status}</p>
                <p>Size: {lotDetails.size}</p>
                <p>Price: ${lotDetails.price}</p>
                <p>Owner: {lotDetails.owner.name}</p>
                <p>Contact Number: {lotDetails.owner.contactNumber}</p>
                <p>Email: {lotDetails.owner.email}</p>
                <p>Additional Details: {lotDetails.additionalDetails}</p>
                {/* Add more details as needed */}
              </div>
              {/* Display the image */}
              <div>
                <img
                  src={lotDetails.image}
                  alt={`${lotDetails.name} Image`}
                  className="w-full h-auto"
                />
              </div>
              {/* Add more sections or details as needed */}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default SingleLot;
