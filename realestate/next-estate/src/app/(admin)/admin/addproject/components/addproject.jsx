"use client";

import React, { useState } from "react";
import Link from "next/link";

const AddProject = () => {
  const [projectData, setProjectData] = useState({
    projectName: "",
    location: "",
    status: "",
    startDate: "",
    endDate: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProjectData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("New project submitted:", projectData);
    setProjectData({
      projectName: "",
      location: "",
      status: "",
      startDate: "",
      endDate: "",
    });

    navigate("/admin/all-projects");
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <div className="flex-1 flex flex-col overflow-hidden">
        <main className="flex-1 overflow-x-hidden overflow-y-auto py-8 px-12">
          <div className="mb-6">
            <h1 className="text-2xl font-semibold text-gray-800">
              Add Project
            </h1>
          </div>

          <div className="bg-white p-8 rounded-md shadow-lg">
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="mb-4">
                  <label
                    htmlFor="projectName"
                    className="block text-gray-600 font-semibold mb-2"
                  >
                    Project Name
                  </label>
                  <input
                    type="text"
                    id="projectName"
                    name="projectName"
                    value={projectData.projectName}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                    placeholder="Enter project name"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="location"
                    className="block text-gray-600 font-semibold mb-2"
                  >
                    Location
                  </label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    value={projectData.location}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                    placeholder="Enter project location"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="status"
                    className="block text-gray-600 font-semibold mb-2"
                  >
                    Status
                  </label>
                  <input
                    type="text"
                    id="status"
                    name="status"
                    value={projectData.status}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                    placeholder="Enter project status"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="startDate"
                    className="block text-gray-600 font-semibold mb-2"
                  >
                    Start Date
                  </label>
                  <input
                    type="date"
                    id="startDate"
                    name="startDate"
                    value={projectData.startDate}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="endDate"
                    className="block text-gray-600 font-semibold mb-2"
                  >
                    End Date
                  </label>
                  <input
                    type="date"
                    id="endDate"
                    name="endDate"
                    value={projectData.endDate}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                    required
                  />
                </div>
              </div>

              <div className="flex justify-start">
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-5 text-base py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
                >
                  Add Project
                </button>
              </div>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AddProject;
