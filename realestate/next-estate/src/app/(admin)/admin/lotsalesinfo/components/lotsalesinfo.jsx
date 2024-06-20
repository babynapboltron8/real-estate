"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const LotSalesInfo = () => {
  const { lotId } = useParams();
  // Replace this with actual data fetching logic for a single lot based on the lotId
  const lotDetails = {
    id: lotId,
    lotNumber: "Lot 1",
    agentId: 1, // Replace with the actual agentId
    sales: [
      { id: 1, date: "2023-01-15", amount: 5000 },
      { id: 2, date: "2023-02-15", amount: 6000 },
      // Add more sales data as needed
    ],
    commissionRate: 0.05, // 5% commission rate
    // Add more lot details as needed
  };

  // State to store the agent information
  const [agentDetails, setAgentDetails] = useState({
    name: "Agent Name", // Default or loading agent name
  });

  // Replace this useEffect with actual data fetching logic for agent details
  useEffect(() => {
    // Fetch agent details based on lotDetails.agentId
    // For now, using a placeholder agent with ID 1
    const fetchAgentDetails = async () => {
      // Replace with your actual API call to fetch agent details
      const agentData = {
        id: 1,
        name: "John Doe", // Replace with actual agent name
      };

      setAgentDetails(agentData);
    };

    fetchAgentDetails();
  }, [lotDetails.agentId]);

  const calculateTotalSales = () => {
    return lotDetails.sales.reduce((total, sale) => total + sale.amount, 0);
  };

  const calculateCommission = () => {
    return calculateTotalSales() * lotDetails.commissionRate;
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <div className="flex-1 flex flex-col overflow-hidden">
        <main className="flex-1 overflow-x-hidden overflow-y-auto py-8 px-12">
          <div className="mb-6 flex justify-between items-center">
            <h1 className="text-3xl font-semibold text-gray-800">
              {lotDetails.lotNumber} Sales Info
            </h1>
          </div>
          <div className="bg-white p-8 rounded-md shadow-lg">
            <div className="mb-4">
              <h2 className="text-xl font-semibold">Lot Information</h2>
              <p>Lot Number: {lotDetails.lotNumber}</p>
            </div>
            <div className="mb-4">
              <h2 className="text-xl font-semibold">Agent Information</h2>
              <p>Agent Name: {agentDetails.name}</p>
            </div>
            <div className="mb-4">
              <h2 className="text-xl font-semibold">Sales Information</h2>
              <table className="w-full bg-white border border-gray-300">
                <thead>
                  <tr>
                    <th className="py-3 px-6 text-left">#</th>
                    <th className="py-3 px-6 text-left">Date</th>
                    <th className="py-3 px-6 text-left">Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {lotDetails.sales.map((sale, index) => (
                    <tr
                      key={index}
                      className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
                    >
                      <td className="py-3 px-6">{index + 1}</td>
                      <td className="py-3 px-6">{sale.date}</td>
                      <td className="py-3 px-6">{sale.amount}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="mt-4">
                <h3 className="text-lg font-semibold">Sales Summary</h3>
                <p>Total Sales: {calculateTotalSales()}</p>
                <p>Commission Rate: {lotDetails.commissionRate * 100}%</p>
                <p>Commission Earned: {calculateCommission()}</p>
              </div>
            </div>
            {/* Add more sections for lot details as needed */}
          </div>
        </main>
      </div>
    </div>
  );
};

export default LotSalesInfo;
