import React from "react";
import AdminDashboard from "./AdminDashboard";
import Sidebar from "./Sidebar";

export default function Home() {
  return (
    <div>
      <Sidebar />
      <AdminDashboard />
    </div>
  );
}
