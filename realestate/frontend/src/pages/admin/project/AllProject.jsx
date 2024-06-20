import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../../../components/Sidebar";

const AllProject = () => {
  const [projectList, setProjectList] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("All");

  useEffect(() => {
    // Simulate data fetching (replace with your actual data fetching logic)
    const fetchData = () => {
      // Simulate API response delay
      setTimeout(() => {
        // Update state with dummy data
        setProjectList([
          {
            id: 1,
            projectName: "Project A",
            location: "City A",
            status: "In Progress",
            startDate: "2023-01-01",
            endDate: "2023-12-31",
          },
          {
            id: 2,
            projectName: "Project B",
            location: "City B",
            status: "Completed",
            startDate: "2022-05-15",
            endDate: "2023-06-30",
          },
          // Add more entries as needed
        ]);
      }, 1000);
    };

    fetchData();
  }, []);

  const handleRowClick = (project) => {
    setSelectedProject(project);
    // Add your logic for handling row click, such as navigating to project details
  };

  const filteredProjects = projectList.filter((project) => {
    const normalizedSearchTerm = searchTerm.toLowerCase();
    const normalizedProjectName = project.projectName.toLowerCase();

    return (
      (normalizedSearchTerm === "" ||
        normalizedProjectName.includes(normalizedSearchTerm)) &&
      (filterStatus === "All" || project.status === filterStatus)
    );
  });

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />

      <div className="flex-1 flex flex-col overflow-hidden">
        <main className="flex-1 overflow-x-hidden overflow-y-auto py-8 px-12">
          <div className="mb-6 flex justify-between items-center">
            <h1 className="text-2xl font-semibold text-gray-800">
              All Projects
            </h1>
            <Link
              to="/admin/add-project"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
            >
              Add Project
            </Link>
          </div>
          <div className="container mx-auto bg-white rounded-md shadow-lg">
            <div className="p-8">
              {/* Search Bar and Filter */}
              <div className="mb-4 flex items-center space-x-4">
                <input
                  type="text"
                  placeholder="Search by project name..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                />
                <select
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value)}
                  className="px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                >
                  <option value="All">All Status</option>
                  {/* Add more status options as needed */}
                  <option value="In Progress">In Progress</option>
                  <option value="Completed">Completed</option>
                </select>
              </div>

              {/* Project List Table */}
              <table className="w-full bg-white border border-gray-300">
                <thead>
                  <tr>
                    <th className="py-3 px-6 text-left">ID</th>
                    <th className="py-3 px-6 text-left">Project Name</th>
                    <th className="py-3 px-6 text-left">Location</th>
                    <th className="py-3 px-6 text-left">Status</th>
                    <th className="py-3 px-6 text-left">Start Date</th>
                    <th className="py-3 px-6 text-left">End Date</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredProjects.map((project) => (
                    <tr
                      key={project.id}
                      onClick={() => handleRowClick(project)}
                      className={`${
                        selectedProject && selectedProject.id === project.id
                          ? "bg-blue-50"
                          : "hover:bg-gray-50 cursor-pointer"
                      }`}
                    >
                      <td className="py-3 px-6">{project.id}</td>
                      <td className="py-3 px-6">{project.projectName}</td>
                      <td className="py-3 px-6">{project.location}</td>
                      <td className="py-3 px-6">{project.status}</td>
                      <td className="py-3 px-6">{project.startDate}</td>
                      <td className="py-3 px-6">{project.endDate}</td>
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

export default AllProject;
