import React, { useState, useMemo } from "react";
import Sidebar from "../../../components/Sidebar";

const EditMap = () => {
  const [blocks, setBlocks] = useState([
    "Block A",
    "Block B",
    "Block C",
    "Block D",
  ]);
  const [lots, setLots] = useState({
    "Block A": [
      { name: "Lot 1", status: "Occupied" },
      { name: "Lot 2", status: "Available" },
      { name: "Lot 3", status: "Reserved" },
      { name: "Lot 4", status: "Occupied" },
      { name: "Lot 5", status: "Reserved" },
    ],
    "Block B": [
      { name: "Lot 6", status: "Available" },
      { name: "Lot 7", status: "Reserved" },
      { name: "Lot 8", status: "Occupied" },
      { name: "Lot 9", status: "Available" },
      { name: "Lot 10", status: "Reserved" },
    ],
    "Block C": [
      { name: "Lot 11", status: "Reserved" },
      { name: "Lot 12", status: "Occupied" },
      { name: "Lot 13", status: "Available" },
      { name: "Lot 14", status: "Reserved" },
      { name: "Lot 15", status: "Occupied" },
    ],
    "Block D": [
      { name: "Lot 16", status: "Available" },
      { name: "Lot 17", status: "Reserved" },
      { name: "Lot 18", status: "Occupied" },
      { name: "Lot 19", status: "Available" },
      { name: "Lot 20", status: "Reserved" },
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

  const handleEditMap = () => {
    console.log("Edit Map clicked");
    // Handle edit map functionality, if needed
    // For example, save the edited map data to the server
  };

  const handleAddBlock = () => {
    const newBlock = prompt("Enter the name for the new block:");
    if (newBlock) {
      setBlocks([...blocks, newBlock]);
      setLots({ ...lots, [newBlock]: [] });
    }
  };

  const handleDeleteBlock = (blockToDelete) => {
    const updatedBlocks = blocks.filter((block) => block !== blockToDelete);
    const updatedLots = { ...lots };
    delete updatedLots[blockToDelete];
    setBlocks(updatedBlocks);
    setLots(updatedLots);
  };

  const handleAddLot = (block) => {
    const newLotName = prompt(`Enter the name for the new lot in ${block}:`);
    if (newLotName) {
      const newLot = { name: newLotName, status: "Available" };
      setLots({ ...lots, [block]: [...lots[block], newLot] });
    }
  };

  const handleDeleteLot = (block, lotIndex) => {
    const updatedLots = { ...lots };
    updatedLots[block] = lots[block].filter((lot, index) => index !== lotIndex);
    setLots(updatedLots);
  };

  // Function to handle changes in lot status
  const handleLotStatusChange = (block, lotIndex, newStatus) => {
    const updatedLots = { ...lots };
    updatedLots[block][lotIndex].status = newStatus;
    setLots(updatedLots);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />

      <div className="flex-1 flex flex-col overflow-hidden">
        <main className="flex-1 overflow-x-hidden overflow-y-auto py-8 px-12">
          <div className="mb-6 flex justify-between items-center">
            <h1 className="text-2xl font-semibold text-gray-800">
              Edit Map - Project Sample
            </h1>
            <div className="flex items-center space-x-4">
              <button
                className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 focus:outline-none focus:ring focus:border-green-300"
                onClick={handleEditMap}
              >
                Save Changes
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
                    onClick={handleAddBlock}
                  >
                    Add Block
                  </button>
                  <button
                    className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 focus:outline-none focus:ring focus:border-red-300"
                    onClick={() => handleDeleteBlock(filteredBlocks[0])}
                  >
                    Delete Block
                  </button>
                </div>
              </div>
              {filteredBlocks.map((block, blockIndex) => (
                <div
                  key={blockIndex}
                  className="mt-8 container mx-auto bg-white rounded-md shadow-lg p-6"
                >
                  <h2 className="text-xl font-semibold mb-4">{block}</h2>
                  <div className="flex justify-end mb-4">
                    <button
                      className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 focus:outline-none focus:ring focus:border-green-300"
                      onClick={() => handleAddLot(block)}
                    >
                      Add Lot
                    </button>
                  </div>
                  <table className="w-full bg-white border border-gray-300">
                    <thead>
                      <tr>
                        <th className="py-3 px-6 text-left">#</th>
                        <th className="py-3 px-6 text-left">Lot Name</th>
                        <th className="py-3 px-6 text-left">Status</th>
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
                            <select
                              value={lot.status}
                              onChange={(e) =>
                                handleLotStatusChange(
                                  block,
                                  lotIndex,
                                  e.target.value
                                )
                              }
                            >
                              <option value="Occupied">Occupied</option>
                              <option value="Available">Available</option>
                              <option value="Reserved">Reserved</option>
                            </select>
                          </td>
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
                            <button
                              className="ml-2 text-red-500 hover:underline focus:outline-none"
                              onClick={() => handleDeleteLot(block, lotIndex)}
                            >
                              Delete
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

export default EditMap;
