"use client";

import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
import Link from "next/link";

const AddClient = () => {
  //   const navigate = useNavigate();

  const [formData, setFormData] = useState({
    surname: "",
    firstName: "",
    middleName: "",
    birthdate: "",
    completeAddress: "",
    civilStatus: "",
    mobileNumber: "",
    email: "",
    referralAgent: "",
    selectedProject: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Add your logic to handle form submission and client addition
    console.log("Form submitted with data:", formData);

    // Navigate to the map page after successful form submission
    navigate("/admin/lot-selection");
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <div className="flex-1 flex flex-col overflow-hidden">
        <main className="flex-1 overflow-x-hidden overflow-y-auto py-8 px-12 bg-gray-100">
          <div className="mb-6">
            <h1 className="text-2xl font-semibold text-gray-800">Add Client</h1>
          </div>

          <form
            onSubmit={handleSubmit}
            className="container mx-auto bg-white rounded-md shadow-lg p-8"
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="mb-4">
                <label
                  htmlFor="surname"
                  className="block text-gray-600 font-semibold mb-2"
                >
                  Surname
                </label>
                <input
                  type="text"
                  id="surname"
                  name="surname"
                  value={formData.surname}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                  required
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="firstName"
                  className="block text-gray-600 font-semibold mb-2"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                  required
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="middleName"
                  className="block text-gray-600 font-semibold mb-2"
                >
                  Middle Name
                </label>
                <input
                  type="text"
                  id="middleName"
                  name="middleName"
                  value={formData.middleName}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="birthdate"
                  className="block text-gray-600 font-semibold mb-2"
                >
                  Birthdate
                </label>
                <input
                  type="date"
                  id="birthdate"
                  name="birthdate"
                  value={formData.birthdate}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                  required
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="completeAddress"
                  className="block text-gray-600 font-semibold mb-2"
                >
                  Complete Address
                </label>
                <input
                  type="text"
                  id="completeAddress"
                  name="completeAddress"
                  value={formData.completeAddress}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                  required
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="civilStatus"
                  className="block text-gray-600 font-semibold mb-2"
                >
                  Civil Status
                </label>
                <input
                  type="text"
                  id="civilStatus"
                  name="civilStatus"
                  value={formData.civilStatus}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="mobileNumber"
                  className="block text-gray-600 font-semibold mb-2"
                >
                  Mobile Number
                </label>
                <input
                  type="tel"
                  id="mobileNumber"
                  name="mobileNumber"
                  value={formData.mobileNumber}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                  required
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-600 font-semibold mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                  required
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="referralAgent"
                  className="block text-gray-600 font-semibold mb-2"
                >
                  Referral Agent
                </label>
                <select
                  id="referralAgent"
                  name="referralAgent"
                  value={formData.referralAgent}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                >
                  <option value="" disabled>
                    Select an agent
                  </option>
                  {/* For demo purposes, I'm using a static list here */}
                  <option value="Agent 1">Agent 1</option>
                  <option value="Agent 2">Agent 2</option>
                  <option value="Agent 3">Agent 3</option>
                </select>
              </div>

              <div className="mb-4">
                <label
                  htmlFor="selectedProject"
                  className="block text-gray-600 font-semibold mb-2"
                >
                  Select Project
                </label>
                <select
                  id="selectedProject"
                  name="selectedProject"
                  value={formData.selectedProject}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                >
                  <option value="" disabled>
                    Select a project
                  </option>

                  <option value="Project 1">Project 1</option>
                  <option value="Project 2">Project 2</option>
                  <option value="Project 3">Project 3</option>
                </select>
              </div>
            </div>

            <div className="my-4">
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
              >
                Add Client
              </button>
            </div>
          </form>
        </main>
      </div>
    </div>
  );
};

export default AddClient;
