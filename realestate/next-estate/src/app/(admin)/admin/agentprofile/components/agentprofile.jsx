"use client";

import React from "react";
import { useParams } from "react-router-dom";
import Link from "next/link";

const AgentProfile = () => {
  const { agentId } = useParams();

  const agentDetails = {
    id: agentId,
    name: "John Doe",
    email: "john.doe@example.com",
    position: "Sales Agent",
    contactNumber: "123-456-7890",
    profileImage: "/src/assets/MyAvatar.png",
    sales: [
      {
        id: 1,
        date: "2023-01-15",
        amount: 50000,
        clientId: 1,
        lotNumber: "Lot 1",
      },
      {
        id: 2,
        date: "2023-02-15",
        amount: 60000,
        clientId: 2,
        lotNumber: "Lot 2",
      },
    ],
    commissionRate: 0.1, // 10% commission rate
  };

  const clients = [
    { id: 1, name: "Client 1" },
    { id: 2, name: "Client 2" },
    // Add more client data as needed
  ];

  const calculateTotalSales = () => {
    return agentDetails.sales.reduce((total, sale) => total + sale.amount, 0);
  };

  const calculateCommission = () => {
    return calculateTotalSales() * agentDetails.commissionRate;
  };

  const calculateClaimedCommission = () => {
    // Replace this with actual logic to calculate claimed commission
    return 10000; // Sample value, replace it with actual data
  };

  const calculateMonthsToClaim = () => {
    return 24; // Total of 24 months
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <div className="flex-1 flex flex-col overflow-hidden">
        <main className="flex-1 overflow-x-hidden overflow-y-auto py-8 px-12">
          <div className="mb-6 flex justify-between items-center">
            <h1 className="text-3xl font-semibold text-gray-800">
              {agentDetails.name}s Profile
            </h1>
          </div>
          <div className="bg-white p-8 rounded-md shadow-lg">
            <div className="mb-4">
              <h2 className="text-xl font-semibold">Contact Information</h2>
              <div className="flex items-center">
                <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                  <img
                    src={agentDetails.profileImage}
                    alt={`${agentDetails.name}'s Profile`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p>Name: {agentDetails.name}</p>
                  <p>Email: {agentDetails.email}</p>
                  <p>Position: {agentDetails.position}</p>
                  <p>Contact Number: {agentDetails.contactNumber}</p>
                </div>
              </div>
            </div>
            <div className="mb-4">
              <h2 className="text-xl font-semibold">Sales Information</h2>
              <table className="w-full bg-white border border-gray-300">
                <thead>
                  <tr>
                    <th className="py-3 px-6 text-left">#</th>
                    <th className="py-3 px-6 text-left">Date</th>
                    <th className="py-3 px-6 text-left">Amount</th>
                    <th className="py-3 px-6 text-left">Client</th>
                    <th className="py-3 px-6 text-left">Lot Number</th>
                  </tr>
                </thead>
                <tbody>
                  {agentDetails.sales.map((sale, index) => (
                    <tr
                      key={index}
                      className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
                    >
                      <td className="py-3 px-6">{index + 1}</td>
                      <td className="py-3 px-6">{sale.date}</td>
                      <td className="py-3 px-6">{sale.amount}</td>
                      <td className="py-3 px-6">
                        <Link href={`/admin/client-sales-info`}>
                          {clients.find((c) => c.id === sale.clientId)?.name}
                        </Link>
                      </td>
                      <td className="py-3 px-6">
                        <Link href={`/admin/lot-sales-info`}>
                          {sale.lotNumber}
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="mt-4">
                <h3 className="text-lg font-semibold">Sales Summary</h3>
                <p>Total Sales: {calculateTotalSales()}</p>
                <p>Commission Rate: {agentDetails.commissionRate * 100}%</p>
                <p>Commission Earned: {calculateCommission()}</p>
                <p>Total Claimed Commission: {calculateClaimedCommission()}</p>
                <p>Months to Claim Commission: {calculateMonthsToClaim()}</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AgentProfile;
