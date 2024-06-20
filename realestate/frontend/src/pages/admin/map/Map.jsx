import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../../components/Sidebar";

const AdminMap = () => {
  const [projects] = useState([
    { name: "Project 1", location: "Location A" },
    { name: "Project 2", location: "Location B" },
    { name: "Project 3", location: "Location C" },
    { name: "Project 4", location: "Location D" },
  ]);
  const navigate = useNavigate();

  const handleViewMap = (projectName) => {
    console.log("View Map for Project:", projectName);
    navigate(`/admin/view-map/`);
  };

  const handleCreateMap = () => {
    navigate(`/admin/add-map`);
  };

  const [searchTerm, setSearchTerm] = useState("");

  const filteredProjects = projects.filter((project) =>
    project.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />

      <div className="flex-1 flex flex-col overflow-hidden">
        <main className="flex-1 overflow-x-hidden overflow-y-auto py-8 px-12">
          <div className="mb-6 flex justify-between items-center">
            <h1 className="text-2xl font-semibold text-gray-800">Map</h1>
            <button
              className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 focus:outline-none focus:ring focus:border-green-300"
              onClick={handleCreateMap}
            >
              Add Map
            </button>
          </div>
          <div className="container mx-auto bg-white rounded-md shadow-lg">
            <div className="p-8">
              {/* Search Bar */}
              <div className="mb-4 flex items-center space-x-4">
                <input
                  type="text"
                  placeholder="Search by project name..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                />
              </div>

              {/* Project List Table */}
              <table className="w-full bg-white border border-gray-300">
                <thead>
                  <tr>
                    <th className="py-3 px-6 text-left">ID</th>
                    <th className="py-3 px-6 text-left">Project Name</th>
                    <th className="py-3 px-6 text-left">Location</th>
                    <th className="py-3 px-6 text-left">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredProjects.map((project, index) => (
                    <tr
                      key={index}
                      className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
                    >
                      <td className="py-3 px-6">{index + 1}</td>
                      <td className="py-3 px-6">{project.name}</td>
                      <td className="py-3 px-6">{project.location}</td>
                      <td className="py-3 px-6">
                        <button
                          className="text-blue-500 hover:underline focus:outline-none"
                          onClick={() => handleViewMap(project.name)}
                        >
                          View Map
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

export default AdminMap;
