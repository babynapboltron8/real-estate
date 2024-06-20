"use client";

import React, { useState } from "react";

const LotClassificationForm = () => {
  const initialFormData = {
    classification: "",
    classificationType: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [lotClassifications, setLotClassifications] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLotClassifications([...lotClassifications, formData]);
    setFormData(initialFormData);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <div className="flex-1 flex flex-col overflow-hidden">
        <main className="flex-1 overflow-x-hidden overflow-y-auto py-8 px-12 bg-gray-100">
          <div className="mb-6">
            <h1 className="text-2xl font-semibold text-gray-800">
              Lot Classification Form
            </h1>
          </div>

          <form
            onSubmit={handleSubmit}
            className="container mx-auto bg-white rounded-md shadow-lg p-8"
          >
            <div className="mb-4">
              <label
                htmlFor="classification"
                className="block text-gray-600 font-semibold mb-2"
              >
                Classification:
              </label>
              <select
                id="classification"
                name="classification"
                value={formData.classification}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
              >
                <option value="">Select Classification</option>
                <option value="Lawn Lots">Lawn Lots</option>
                <option value="Mausoleum Lots">Mausoleum Lots</option>
              </select>
            </div>

            <div className="mb-4">
              <label
                htmlFor="classificationType"
                className="block text-gray-600 font-semibold mb-2"
              >
                Classification Type:
              </label>
              {formData.classification === "Lawn Lots" ? (
                <select
                  id="classificationType"
                  name="classificationType"
                  value={formData.classificationType}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                >
                  <option value="">Select Classification Type</option>
                  <option value="Standard">Standard</option>
                  <option value="Deluxe">Deluxe</option>
                  <option value="Prime">Prime</option>
                </select>
              ) : formData.classification === "Mausoleum Lots" ? (
                <select
                  id="classificationType"
                  name="classificationType"
                  value={formData.classificationType}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                >
                  <option value="">Select Classification Type</option>
                  {/* Add Mausoleum Lot classification types here */}
                </select>
              ) : null}
            </div>

            <div className="my-4">
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
              >
                Add Lot Classification
              </button>
            </div>
          </form>

          <div className="mt-8">
            <h2 className="text-xl font-semibold text-gray-800">
              Lot Classifications List
            </h2>
            <ul className="list-disc pl-6 mt-2">
              {lotClassifications.map((lotClassification, index) => (
                <li key={index} className="text-gray-600">
                  {`Classification: ${lotClassification.classification}, Type: ${lotClassification.classificationType}`}
                </li>
              ))}
            </ul>
          </div>
        </main>
      </div>
    </div>
  );
};

export default LotClassificationForm;
