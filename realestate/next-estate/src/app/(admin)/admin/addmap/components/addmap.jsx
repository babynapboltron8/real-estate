"use client";

import React, { useState } from "react";
import { read as readExcel } from "xlsx";
import Link from "next/link";

const CreateMap = () => {
  const [mapName, setMapName] = useState("");
  const [selectedImageFile, setSelectedImageFile] = useState(null);
  const [selectedExcelFile, setSelectedExcelFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleMapNameChange = (event) => {
    setMapName(event.target.value);
  };

  const handleImageFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedImageFile(file);
  };

  const handleExcelFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedExcelFile(file);
  };

  const handleExcelUpload = async () => {
    try {
      const reader = new FileReader();
      reader.onload = (e) => {
        const data = new Uint8Array(e.target.result);
        const workbook = readExcel(data, { type: "array" });
        // Process the Excel workbook data as needed
        console.log(workbook);
      };
      reader.readAsArrayBuffer(selectedExcelFile);
    } catch (error) {
      console.error("Error reading Excel file:", error);
    }
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    setError(null);

    try {
      await handleExcelUpload();
      await new Promise((resolve) => setTimeout(resolve, 1000));

      console.log("Map created:", { mapName, selectedImageFile });
      navigate("/admin/map");
    } catch (error) {
      setError("An error occurred. Please try again."); // Handle the error gracefully
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <div className="flex-1 flex flex-col overflow-hidden">
        <main className="flex-1 overflow-x-hidden overflow-y-auto py-8 px-12">
          <div className="mb-6 flex justify-between items-center">
            <h1 className="text-2xl font-semibold text-gray-800">Add Map</h1>
          </div>
          <div className="container max-w-3xl mx-auto p-8 bg-white rounded-md shadow-lg">
            <div className="flex flex-col gap-6">
              <div className="mb-4">
                <label
                  htmlFor="mapName"
                  className="block text-gray-600 font-semibold mb-2"
                >
                  Project Name
                </label>
                <input
                  type="text"
                  id="mapName"
                  value={mapName}
                  onChange={handleMapNameChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="mapImage"
                  className="block text-gray-600 font-semibold mb-2"
                >
                  Upload Map Image
                </label>
                <input
                  type="file"
                  id="mapImage"
                  onChange={handleImageFileChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                  accept="image/*" // Restrict to image files
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="excelFile"
                  className="block text-gray-600 font-semibold mb-2"
                >
                  Upload Excel File
                </label>
                <input
                  type="file"
                  id="excelFile"
                  onChange={handleExcelFileChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                  accept=".xlsx, .xls" // Restrict to Excel files
                  required
                />
              </div>
              <div className="flex justify-center">
                <button
                  className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
                  type="button"
                  onClick={handleSubmit}
                  disabled={isLoading}
                >
                  {isLoading ? "Creating Map..." : "Create Map"}
                </button>
              </div>
              {error && (
                <div className="text-red-500 mt-2 text-sm">{error}</div>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default CreateMap;
