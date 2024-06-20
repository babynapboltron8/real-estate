"use client";

import React, { useState } from "react";
import Link from "next/link";

const Clients = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [paymentStatusFilter, setPaymentStatusFilter] = useState("all");
  const [projectFilter, setProjectFilter] = useState("all");

  const clients = [
    {
      id: 1,
      name: "Client 1",
      agent: "Agent A",
      dateRegistered: "2023-01-01",
      paymentStatus: "Paid",
      project: "Project A",
    },
    {
      id: 2,
      name: "Client 2",
      agent: "Agent B",
      dateRegistered: "2023-02-15",
      paymentStatus: "Pending",
      project: "Project B",
    },
    {
      id: 3,
      name: "Client 3",
      agent: "Agent C",
      dateRegistered: "2023-03-22",
      paymentStatus: "Unpaid",
      project: "Project A",
    },
    {
      id: 4,
      name: "Client 4",
      agent: "Agent D",
      dateRegistered: "2023-04-10",
      paymentStatus: "Delayed",
      project: "Project C",
    },
    {
      id: 5,
      name: "Client 5",
      agent: "Agent E",
      dateRegistered: "2023-05-05",
      paymentStatus: "Backout",
      project: "Project D",
    },
  ];

  const projects = ["Project A", "Project B", "Project C", "Project D"];

  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
  };

  const handlePaymentStatusFilterChange = (e) => {
    const selectedFilter = e.target.value;
    setPaymentStatusFilter(selectedFilter);
  };

  const handleProjectFilterChange = (e) => {
    const selectedProjectFilter = e.target.value;
    setProjectFilter(selectedProjectFilter);
  };

  const handleApproveReject = (clientId, action) => {
    // Update payment status logic goes here
    console.log(`Client ${clientId} ${action}ed`);
  };

  const paymentStatusOptions = [
    "all",
    "Paid",
    "Pending",
    "Unpaid",
    "Delayed",
    "Backout",
  ];

  const filteredClients = clients.filter((client) => {
    const searchTermMatches = client.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const paymentStatusFilterMatches =
      paymentStatusFilter === "all" ||
      client.paymentStatus === paymentStatusFilter ||
      (client.paymentStatus === "Delayed" &&
        paymentStatusFilter === "delayed") ||
      (client.paymentStatus === "Backout" && paymentStatusFilter === "backout");
    const projectFilterMatches =
      projectFilter === "all" || client.project === projectFilter;

    return (
      searchTermMatches && paymentStatusFilterMatches && projectFilterMatches
    );
  });

  return (
    <div className="flex h-screen bg-gray-100">
      <div className="flex-1 flex flex-col overflow-hidden">
        <main className="flex-1 overflow-x-hidden overflow-y-auto py-8 px-12 bg-gray-100">
          <div className="mb-6 flex justify-between items-center">
            <h1 className="text-2xl font-semibold text-gray-800">Clients</h1>
            <Link
              href="/admin/add-client"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
            >
              Add Client
            </Link>
          </div>

          <div className="container mx-auto bg-white rounded-md shadow-lg p-8">
            <div className="flex flex-col md:flex-row space-x-4 space-y-4 md:space-y-0 items-start md:items-center">
              <div className="flex gap-4 items-center">
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchTerm}
                  onChange={handleSearch}
                  className="px-2 md:px-6 py-1.5 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                />
              </div>
              <div className="flex gap-4 items-center">
                <select
                  value={paymentStatusFilter}
                  onChange={handlePaymentStatusFilterChange}
                  className="px-2 md:px-6 py-1.5 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                >
                  {paymentStatusOptions.map((option) => (
                    <option key={option} value={option}>
                      {option === "all" ? "All" : option}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex gap-4 items-center">
                <select
                  value={projectFilter}
                  onChange={handleProjectFilterChange}
                  className="px-2 md:px-6 py-1.5 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                >
                  <option value="all">All Projects</option>
                  {projects.map((project) => (
                    <option key={project} value={project}>
                      {project}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <table className="w-full bg-white border border-gray-300 mt-4">
              <thead>
                <tr>
                  <th className="py-3 px-6 text-left">#</th>
                  <th className="py-3 px-6 text-left">Account Name</th>
                  <th className="py-3 px-6 text-left">Agent</th>
                  <th className="py-3 px-6 hidden md:flex">Date Registered</th>
                  <th className="py-3 px-6 text-left">Project</th>
                  <th className="py-3 px-6 text-left">Payment Status</th>
                  <th className="py-3 px-6 text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredClients.map((client, index) => (
                  <tr
                    key={client.id}
                    className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
                  >
                    <td className="py-3 px-6">{index + 1}</td>
                    <td className="py-3 px-6">{client.name}</td>
                    <td className="py-3 px-6">{client.agent}</td>
                    <td className="py-3 px-6 hidden md:flex">
                      {client.dateRegistered}
                    </td>
                    <td className="py-3 px-6">{client.project}</td>
                    <td className="py-3 px-6">{client.paymentStatus}</td>
                    <td className="py-3 px-6">
                      {client.paymentStatus === "Pending" && (
                        <>
                          <button
                            onClick={() =>
                              handleApproveReject(client.id, "approve")
                            }
                            className="bg-green-500 text-white px-2 py-1 rounded-md hover:bg-green-600 focus:outline-none focus:ring focus:border-blue-300"
                          >
                            Approve
                          </button>
                          <button
                            onClick={() =>
                              handleApproveReject(client.id, "reject")
                            }
                            className="bg-red-500 text-white px-2 py-1 rounded-md hover:bg-red-600 focus:outline-none focus:ring focus:border-blue-300 ml-2"
                          >
                            Reject
                          </button>
                        </>
                      )}
                    </td>
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

export default Clients;
