// Dashboard.js
import React from "react";
import Sidebar from "/src/components/Sidebar";
import Overview from "./Overview";

const Dashboard = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
          <Overview />
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
