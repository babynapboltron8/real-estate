"use client";

import React, { useState } from "react";
import Link from "next/link";

const UsersList = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "Admin User 1", role: "Admin", position: "CEO" },
    { id: 2, name: "Agent User 1", role: "Agent", position: "Agent" },
    { id: 3, name: "Admin User 2", role: "Admin", position: "Manager" },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("all");

  const handleDeleteUser = (userId) => {
    const updatedUsers = users.filter((user) => user.id !== userId);
    setUsers(updatedUsers);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (filter === "all" || user.role === filter)
  );

  return (
    <div className="flex h-screen bg-gray-100">
      <div className="flex-1 flex flex-col overflow-hidden">
        <main className="flex-1 overflow-x-hidden overflow-y-auto py-8 px-12">
          <div className="mb-6 flex justify-between items-center">
            <h1 className="text-2xl font-semibold text-gray-800">Users</h1>
            <Link
              href="/admin/add-user"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
            >
              Add User
            </Link>
          </div>
          <div className="container mx-auto bg-white rounded-md shadow-lg">
            <div className="p-8">
              <div className="mb-4 flex items-center space-x-4">
                <input
                  type="text"
                  placeholder="Search by name..."
                  onChange={handleSearch}
                  className="px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                />
                <select
                  value={filter}
                  onChange={handleFilterChange}
                  className="px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                >
                  <option value="all">All Roles</option>
                  <option value="Admin">Admin</option>
                  <option value="Agent">Agent</option>
                </select>
              </div>

              <table className="w-full bg-white border border-gray-300">
                <thead>
                  <tr>
                    <th className="py-3 px-6 text-left">#</th>
                    <th className="py-3 px-6 text-left">Name</th>
                    <th className="py-3 px-6 text-left">Role</th>
                    <th className="py-3 px-6 text-left">Position</th>
                    <th className="py-3 px-6 text-left">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredUsers.map((user, index) => (
                    <tr
                      key={index}
                      className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
                    >
                      <td className="py-3 px-6">{user.id}</td>
                      <td className="py-3 px-6">{user.name}</td>
                      <td className="py-3 px-6">{user.role}</td>
                      <td className="py-3 px-6">{user.position}</td>
                      <td className="py-3 px-6">
                        <Link
                          href={`/admin/edit-user/${user.id}`}
                          className="text-yellow-500 hover:underline focus:outline-none"
                        >
                          Edit
                        </Link>
                        <button
                          className="ml-2 text-red-500 hover:underline focus:outline-none"
                          onClick={() => handleDeleteUser(user.id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default UsersList;
