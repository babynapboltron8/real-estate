"use client";

import React, { useState } from "react";

const AddPriceList = () => {
  const [priceList, setPriceList] = useState({
    blockNumber: "",
    lotNumber: "",
    houseType: "",
    lotArea: 0,
    floorArea: 0,
    sellingPrice: 0,
    reservation: 0,
    installment18Months: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPriceList((prevPriceList) => ({
      ...prevPriceList,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Subdivision Price List submitted:", priceList);
    setPriceList({
      blockNumber: "",
      lotNumber: "",
      houseType: "",
      lotArea: 0,
      floorArea: 0,
      sellingPrice: 0,
      reservation: 0,
      installment18Months: 0,
    });
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <div className="flex-1 flex flex-col overflow-hidden">
        <main className="flex-1 overflow-x-hidden overflow-y-auto py-8 px-12">
          <div className="mb-6 flex justify-between items-center">
            <h1 className="text-2xl font-semibold text-gray-800">
              Add Subdivision Price List
            </h1>
          </div>

          <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-8">
            {/* First Div */}
            <div>
              <div className="mb-4">
                <label
                  htmlFor="blockNumber"
                  className="block text-sm font-medium text-gray-600"
                >
                  Block Number
                </label>
                <input
                  type="text"
                  id="blockNumber"
                  name="blockNumber"
                  value={priceList.blockNumber}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                  placeholder="E.g., A"
                  required
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="lotNumber"
                  className="block text-sm font-medium text-gray-600"
                >
                  Lot Number
                </label>
                <input
                  type="text"
                  id="lotNumber"
                  name="lotNumber"
                  value={priceList.lotNumber}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                  placeholder="E.g., 001"
                  required
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="houseType"
                  className="block text-sm font-medium text-gray-600"
                >
                  House Type
                </label>
                <input
                  type="text"
                  id="houseType"
                  name="houseType"
                  value={priceList.houseType}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                  placeholder="E.g., Single Detached"
                  required
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="lotArea"
                  className="block text-sm font-medium text-gray-600"
                >
                  Lot Area (sqm)
                </label>
                <input
                  type="number"
                  id="lotArea"
                  name="lotArea"
                  value={priceList.lotArea}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                  placeholder="Enter lot area"
                  required
                />
              </div>
            </div>

            {/* Second Div */}
            <div>
              <div className="mb-4">
                <label
                  htmlFor="floorArea"
                  className="block text-sm font-medium text-gray-600"
                >
                  Floor Area
                </label>
                <input
                  type="number"
                  id="floorArea"
                  name="floorArea"
                  value={priceList.floorArea}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                  placeholder="Enter floor area"
                  required
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="sellingPrice"
                  className="block text-sm font-medium text-gray-600"
                >
                  Selling Price (PHP)
                </label>
                <input
                  type="number"
                  id="sellingPrice"
                  name="sellingPrice"
                  value={priceList.sellingPrice}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                  placeholder="Enter selling price"
                  required
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="reservation"
                  className="block text-sm font-medium text-gray-600"
                >
                  Reservation (PHP)
                </label>
                <input
                  type="number"
                  id="reservation"
                  name="reservation"
                  value={priceList.reservation}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                  placeholder="Enter reservation amount"
                  required
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="installment18Months"
                  className="block text-sm font-medium text-gray-600"
                >
                  Installment 18 Months (PHP)
                </label>
                <input
                  type="number"
                  id="installment18Months"
                  name="installment18Months"
                  value={priceList.installment18Months}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                  placeholder="Enter installment for 18 months"
                  required
                />
              </div>
            </div>
            <div className="flex justify-start">
              <button
                type="submit"
                className="bg-blue-500 text-white px-5 text-base py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
              >
                Add Price List
              </button>
            </div>
          </form>
        </main>
      </div>
    </div>
  );
};

export default AddPriceList;
