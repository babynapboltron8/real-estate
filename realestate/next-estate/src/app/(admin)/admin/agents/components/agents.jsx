"use client";

import React, { useState } from "react";
import Link from "next/link";

const Agents = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all"); // Default filter: all

  // Replace this with actual data fetching logic
  const agents = [
    {
      id: 1,
      name: "Agent A",
      position: "Sales Agent",
      phone: "123-456-7890",
      status: "Active",
    },
    {
      id: 2,
      name: "Agent B",
      position: "Sales Director",
      phone: "987-654-3210",
      status: "Inactive",
    },
  ];

  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
  };

  const handleStatusFilterChange = (e) => {
    const selectedFilter = e.target.value;
    setStatusFilter(selectedFilter);
  };

  const filteredAgents = agents.filter((agent) => {
    const matchesSearch = agent.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesStatus =
      statusFilter === "all" || agent.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="flex h-screen bg-gray-100">
      <div className="flex-1 flex flex-col overflow-hidden">
        <main className="flex-1 overflow-x-hidden overflow-y-auto py-8 px-12 bg-gray-100">
          <div className="mb-6 flex justify-between items-center">
            <h1 className="text-2xl font-semibold text-gray-800">Agents</h1>
            <Link
              href="/admin/add-agent"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
            >
              Add Agent
            </Link>
          </div>

          <div className="container mx-auto bg-white rounded-md shadow-lg p-8">
            {/* Search Bar and Filter */}
            <div className="mb-4 flex items-center space-x-4">
              <input
                type="text"
                placeholder="Search..."
                onChange={handleSearch}
                className="px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
              />
              <select
                id="statusFilter"
                value={statusFilter}
                onChange={handleStatusFilterChange}
                className="px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
              >
                <option value="all">All</option>
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
            </div>

            {/* Project List Table */}
            <table className="w-full bg-white border border-gray-300">
              <thead>
                <tr>
                  <th className="py-3 px-6 text-left">#</th>
                  <th className="py-3 px-6 text-left">Agent Name</th>
                  <th className="py-3 px-6 text-left">Position</th>
                  <th className="py-3 px-6 hidden md:flex">Phone</th>
                  <th className="py-3 px-6 text-left">Status</th>
                </tr>
              </thead>
              <tbody>
                {filteredAgents.map((agent, index) => (
                  <tr
                    key={agent.id}
                    className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
                  >
                    <td className="py-3 px-6">{index + 1}</td>
                    <td className="py-3 px-6">
                      <Link href={`/admin/agent-profile/`}>{agent.name}</Link>
                    </td>
                    <td className="py-3 px-6">{agent.position}</td>
                    <td className="py-3 px-6 hidden md:flex">{agent.phone}</td>
                    <td className="py-3 px-6">{agent.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Agents;
