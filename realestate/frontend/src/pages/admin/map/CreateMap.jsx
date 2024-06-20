import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../../components/Sidebar";

const CreateMap = () => {
  const navigate = useNavigate();
  const [blocks, setBlocks] = useState([]);
  const [blockName, setBlockName] = useState("");
  const [lots, setLots] = useState([]);
  const [lotName, setLotName] = useState("");
  const [lotStatus, setLotStatus] = useState("Available");

  const handleAddBlock = () => {
    if (blockName) {
      setBlocks([...blocks, blockName]);
      setBlockName("");
    }
  };

  const handleAddLot = () => {
    if (lotName) {
      setLots([...lots, { name: lotName, status: lotStatus }]);
      setLotName("");
      setLotStatus("Available");
    }
  };

  const handleSaveMap = () => {
    // Add your logic to save the created map data
    console.log("Map saved:", { blocks, lots });
    // Optionally, you can navigate back to the lot availability page
    navigate("/admin/view-available-lots");
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />

      <div className="flex-1 flex flex-col overflow-hidden">
        <main className="flex-1 overflow-x-hidden overflow-y-auto py-8 px-12">
          <div className="mb-6 flex justify-between items-center">
            <h1 className="text-2xl font-semibold text-gray-800">Create Map</h1>
            <button
              className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 focus:outline-none focus:ring focus:border-green-300"
              onClick={handleSaveMap}
            >
              Save Map
            </button>
          </div>
          <div className="container mx-auto bg-white rounded-md shadow-lg p-8">
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Add Block
              </label>
              <input
                type="text"
                value={blockName}
                onChange={(e) => setBlockName(e.target.value)}
                className="mt-1 p-2 border border-gray-300 rounded-md w-1/2 focus:outline-none focus:ring focus:border-blue-300"
              />
              <button
                className="ml-2 bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
                onClick={handleAddBlock}
              >
                Add
              </button>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Add Lot
              </label>
              <input
                type="text"
                value={lotName}
                onChange={(e) => setLotName(e.target.value)}
                className="mt-1 p-2 border border-gray-300 rounded-md w-1/2 focus:outline-none focus:ring focus:border-blue-300"
              />
              <select
                value={lotStatus}
                onChange={(e) => setLotStatus(e.target.value)}
                className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
              >
                <option value="Available">Available</option>
                <option value="Occupied">Occupied</option>
                <option value="Reserved">Reserved</option>
              </select>
              <button
                className="ml-2 bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
                onClick={handleAddLot}
              >
                Add
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default CreateMap;
