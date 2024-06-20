"use client";

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Link from "next/link";

const AddUser = () => {
  const { userId } = useParams();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    role: "",
    position: "",
  });

  const roles = ["Admin", "Agent"];

  useEffect(() => {
    // If editing an existing user, fetch the user data and populate the form
    if (userId) {
      const existingUser = fetchUserById(userId);
      if (existingUser) {
        setFormData(existingUser);
      } else {
        navigate("/admin/users");
      }
    }
  }, [userId]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Add or update user data based on whether userId is present
    if (userId) {
      updateExistingUser(formData); // Pass formData instead of userId
    } else {
      addNewUser(formData);
    }

    // Redirect to the UsersList page after submitting the form
    navigate("/admin/users");
  };

  // Placeholder functions, replace with actual implementations
  const fetchUserById = () => {
    // return api.getUserById(userId);
    return null;
  };

  const updateExistingUser = () => {
    return null; // Placeholder for demonstration
  };

  const addNewUser = () => {
    return null; // Placeholder for demonstration
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <div className="flex-1 flex flex-col overflow-hidden">
        <main className="flex-1 overflow-x-hidden overflow-y-auto py-8 px-12">
          <div className="mb-6 flex justify-between items-center">
            <h1 className="text-2xl font-semibold text-gray-800">
              {userId ? "Edit User" : "Add User"}
            </h1>
          </div>
          <div className="container mx-auto bg-white rounded-md shadow-lg">
            <div className="p-8">
              <form onSubmit={handleSubmit}>
                {/* Input fields for first name, last name, email, phone */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-600">
                      First Name
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="mt-1 p-2 w-full border rounded-md"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-600">
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="mt-1 p-2 w-full border rounded-md"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-600">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="mt-1 p-2 w-full border rounded-md"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-600">
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="mt-1 p-2 w-full border rounded-md"
                      required
                    />
                  </div>
                </div>
                {/* Input fields for role and position in the same row */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-600">
                      Role
                    </label>
                    <select
                      name="role"
                      value={formData.role}
                      onChange={handleInputChange}
                      className="mt-1 p-2 w-full border rounded-md"
                      required
                    >
                      <option value="" disabled>
                        Select Role
                      </option>
                      {roles.map((role) => (
                        <option key={role} value={role}>
                          {role}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-600">
                      Position
                    </label>
                    <input
                      type="text"
                      name="position"
                      value={formData.position}
                      onChange={handleInputChange}
                      className="mt-1 p-2 w-full border rounded-md"
                      required
                    />
                  </div>
                </div>
                <div className="mt-4">
                  <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-green-300"
                  >
                    {userId ? "Update User" : "Add User"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AddUser;
