"use client";

import React from "react";
import { useParams } from "react-router-dom";

const ClientSalesInfo = () => {
  const { clientId } = useParams();

  // Replace this with actual data fetching logic for client sales info
  const clientSalesInfo = {
    clientId,
    clientName: "Client 1",
    agentName: "John Doe",
    sales: [
      {
        id: 1,
        date: "2023-01-15",
        amount: 5000,
        commission: 500,
        lotNumber: "Lot 1",
      },
      {
        id: 2,
        date: "2023-02-15",
        amount: 6000,
        commission: 600,
        lotNumber: "Lot 2",
      },
      // Add more sales data as needed
    ],
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <div className="flex-1 flex flex-col overflow-hidden">
        <main className="flex-1 overflow-x-hidden overflow-y-auto py-8 px-12">
          <div className="mb-6 flex justify-between items-center">
            <h1 className="text-3xl font-semibold text-gray-800">
              {clientSalesInfo.clientName}s Sales Information
            </h1>
          </div>
          <div className="bg-white p-8 rounded-md shadow-lg">
            <div className="mb-4">
              <h2 className="text-xl font-semibold">Client Information</h2>
              <p>Client Name: {clientSalesInfo.clientName}</p>
              <p>Agent Name: {clientSalesInfo.agentName}</p>
            </div>
            <div className="mb-4">
              <h2 className="text-xl font-semibold">Sales Information</h2>
              <table className="w-full bg-white border border-gray-300">
                <thead>
                  <tr>
                    <th className="py-3 px-6 text-left">#</th>
                    <th className="py-3 px-6 text-left">Date</th>
                    <th className="py-3 px-6 text-left">Amount</th>
                    <th className="py-3 px-6 text-left">Commission</th>
                    <th className="py-3 px-6 text-left">Lot Sold</th>
                  </tr>
                </thead>
                <tbody>
                  {clientSalesInfo.sales.map((sale, index) => (
                    <tr
                      key={index}
                      className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
                    >
                      <td className="py-3 px-6">{index + 1}</td>
                      <td className="py-3 px-6">{sale.date}</td>
                      <td className="py-3 px-6">{sale.amount}</td>
                      <td className="py-3 px-6">{sale.commission}</td>
                      <td className="py-3 px-6">{sale.lotNumber}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {/* Add more sections for client sales info as needed */}
          </div>
        </main>
      </div>
    </div>
  );
};

export default ClientSalesInfo;
