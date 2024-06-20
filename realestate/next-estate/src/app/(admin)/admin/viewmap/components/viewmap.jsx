"use client";

import React, { useState } from "react";
import Link from "next/link";

const AdminMap = () => {
  const [mainMapImage] = useState("/src/assets/map.png");

  const handleReserveLot = () => {
    console.log("Reserve Lot clicked");
    navigate("/admin/add-client");
  };

  const handleViewAvailableLots = () => {
    console.log("View Available Lots clicked");
    navigate("/admin/lot-availability");
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <div className="flex-1 flex flex-col overflow-hidden">
        <main className="flex-1 overflow-x-hidden overflow-y-auto py-8 px-12">
          <div className="mb-6 flex justify-between items-center">
            <h1 className="text-3xl font-semibold text-gray-800">Map</h1>
          </div>
          <div className="container mx-auto bg-white rounded-md shadow-lg">
            <div className="p-8">
              <img
                src={mainMapImage}
                alt="Main Map"
                className="mb-8 w-1/2 mx-auto h-auto"
              />
              <div className="flex space-x-4 justify-center">
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
                  onClick={handleReserveLot}
                >
                  Reserve Lot
                </button>
                <button
                  className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 focus:outline-none focus:ring focus:border-green-300"
                  onClick={handleViewAvailableLots}
                >
                  View Available Lots
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminMap;
