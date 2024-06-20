"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";

const ViewAvailableLots = () => {
  const [blocks] = useState(["Block A", "Block B", "Block C", "Block D"]);
  const [lots] = useState({
    "Block A": [
      { name: "Lot 1", status: "Occupied", price: 50000 },
      { name: "Lot 2", status: "Available", price: 75000 },
      { name: "Lot 3", status: "Reserved", price: 60000 },
      { name: "Lot 4", status: "Occupied", price: 55000 },
      { name: "Lot 5", status: "Reserved", price: 70000 },
    ],
    "Block B": [
      { name: "Lot 6", status: "Available", price: 80000 },
      { name: "Lot 7", status: "Reserved", price: 90000 },
      { name: "Lot 8", status: "Occupied", price: 95000 },
      { name: "Lot 9", status: "Available", price: 70000 },
      { name: "Lot 10", status: "Reserved", price: 85000 },
    ],
    "Block C": [
      { name: "Lot 11", status: "Reserved", price: 60000 },
      { name: "Lot 12", status: "Occupied", price: 75000 },
      { name: "Lot 13", status: "Available", price: 90000 },
      { name: "Lot 14", status: "Reserved", price: 80000 },
      { name: "Lot 15", status: "Occupied", price: 95000 },
    ],
    "Block D": [
      { name: "Lot 16", status: "Available", price: 85000 },
      { name: "Lot 17", status: "Reserved", price: 70000 },
      { name: "Lot 18", status: "Occupied", price: 95000 },
      { name: "Lot 19", status: "Available", price: 80000 },
      { name: "Lot 20", status: "Reserved", price: 90000 },
    ],
  });
  const [searchTerm, setSearchTerm] = useState("");

  const filteredBlocks = useMemo(
    () =>
      blocks.filter((block) =>
        block.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    [blocks, searchTerm]
  );

  const filteredLots = useMemo(() => {
    const filtered = {};
    for (const block of filteredBlocks) {
      filtered[block] = lots[block];
    }
    return filtered;
  }, [filteredBlocks, lots]);

  const handleViewDetails = (lot) => {
    console.log("View Details for Lot:", lot.name);
    // Navigate to the details page or perform other actions
  };

  const handleEditLot = (lot) => {
    console.log("Edit Lot:", lot.name);
    // Navigate to the edit page or perform other actions
    // For example, navigate(`/admin/edit-lot/${lot.name}`);
  };

  const handleReservedLot = () => {
    navigate("/admin/add-client"); // Navigate to the "admin/add-client" route
  };

  const handleCreateMap = () => {
    console.log("Reserve Lot clicked");
    // Implement reserve lot functionality
    navigate("/admin/create-map"); // Navigate to the "admin/add-client" route
  };

  const handleEditMap = () => {
    console.log("Edit Map clicked");
    // Navigate to the edit map page or perform other actions
    // For example, navigate(`/admin/edit-map`);
    navigate("/admin/edit-map");
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <div className="flex-1 flex flex-col overflow-hidden">
        <main className="flex-1 overflow-x-hidden overflow-y-auto py-8 px-12">
          <div className="mb-6 flex justify-between items-center">
            <h1 className="text-2xl font-semibold text-gray-800">
              Lot Availability of Project Sample
            </h1>
            <div className="flex items-center space-x-4">
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-green-300"
                onClick={handleReservedLot}
              >
                Reserve Lot
              </button>
            </div>
          </div>
          <div className="container mx-auto bg-white rounded-md shadow-lg">
            <div className="p-8">
              <div className="w-full flex items-center justify-between space-between">
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="px-2 py-1.5 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                />
                <div className="flex gap-2">
                  <button
                    className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600 focus:outline-none focus:ring focus:border-yellow-300"
                    onClick={handleEditMap}
                  >
                    Edit Map
                  </button>
                  <button
                    className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 focus:outline-none focus:ring focus:border-green-300"
                    onClick={handleCreateMap}
                  >
                    Create Map
                  </button>
                </div>
              </div>
              {filteredBlocks.map((block, blockIndex) => (
                <div
                  key={blockIndex}
                  className="mt-8 container mx-auto bg-white rounded-md shadow-lg"
                >
                  <h2 className="text-xl font-semibold mb-4">{block}</h2>
                  <table className="w-full bg-white border border-gray-300">
                    <thead>
                      <tr>
                        <th className="py-3 px-6 text-left">#</th>
                        <th className="py-3 px-6 text-left">Lot Name</th>
                        <th className="py-3 px-6 text-left">Status</th>
                        <th className="py-3 px-6 text-left">Price</th>
                        <th className="py-3 px-6 text-left">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredLots[block]?.map((lot, lotIndex) => (
                        <tr
                          key={lotIndex}
                          className={
                            lotIndex % 2 === 0 ? "bg-gray-50" : "bg-white"
                          }
                        >
                          <td className="py-3 px-6">{lotIndex + 1}</td>
                          <td className="py-3 px-6">{lot.name}</td>
                          <td
                            className={`py-3 px-6 ${
                              lot.status === "Occupied"
                                ? "text-red-500"
                                : lot.status === "Available"
                                ? "text-green-500"
                                : "text-yellow-500"
                            }`}
                          >
                            {lot.status}
                          </td>
                          <td className="py-3 px-6">{lot.price}</td>
                          <td className="py-3 px-6">
                            <button
                              className="text-blue-500 hover:underline focus:outline-none"
                              onClick={() => handleViewDetails(lot)}
                            >
                              View Details
                            </button>
                            <button
                              className="ml-2 text-yellow-500 hover:underline focus:outline-none"
                              onClick={() => handleEditLot(lot)}
                            >
                              Edit
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ViewAvailableLots;
