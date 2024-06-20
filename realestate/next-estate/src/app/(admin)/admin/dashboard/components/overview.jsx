"use client";

import { useState, useEffect } from "react";
import PropTypes from "prop-types";

// Add PropTypes validation for title and value
const AnalyticsCard = ({ title, value }) => {
  // Example placeholder text if no value is available
  const placeholderText = "Loading...";

  return (
    <div className="bg-white p-6 rounded-md shadow-md">
      <p className="text-sm text-gray-500">{title}</p>
      <p className="text-2xl font-semibold">{value || placeholderText}</p>
    </div>
  );
};

// PropTypes validation for AnalyticsCard
AnalyticsCard.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
};

export default function Overview() {
  const [selectedProject, setSelectedProject] = useState("Project A"); // Default project
  const [analyticsData, setAnalyticsData] = useState({
    totalLotsSold: 50,
    totalAgents: 10,
    totalClients: 100,
    totalRevenue: 50000,
  });

  useEffect(() => {
    // Dummy data fetching (replace with your actual data fetching logic)
    const fetchData = () => {
      // Simulate API response delay
      setTimeout(() => {
        // Update state with dummy data
        setAnalyticsData({
          totalLotsSold: 75,
          totalAgents: 15,
          totalClients: 120,
          totalRevenue: 60000,
        });
      }, 1000);
    };

    fetchData();
  }, [selectedProject]); // Fetch data whenever selected project changes

  // Dummy function to handle project selection change
  const handleProjectChange = (event) => {
    setSelectedProject(event.target.value);
  };

  return (
    <div className="p-12">
      <div className="flex mb-6">
        <h1 className="text-2xl font-semibold text-gray-800 mr-4">Overview</h1>
        {/* Project Selector */}
        <select
          className="bg-white border border-gray-300 p-2 rounded-md"
          value={selectedProject}
          onChange={handleProjectChange}
        >
          <option value="Project A">Project A</option>
          <option value="Project B">Project B</option>
          {/* Add more projects as needed */}
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Display numeric analytics */}
        {Object.entries(analyticsData).map(([title, value]) => (
          <AnalyticsCard key={title} title={title} value={value} />
        ))}
      </div>
    </div>
  );
}
