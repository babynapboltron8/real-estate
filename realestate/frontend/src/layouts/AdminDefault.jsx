import React from "react";
import { Outlet } from "react-router-dom";
import AdminHeader from "../components/AdminHeader";
import AdminFooter from "../components/AdminFooter";

export default function defaultLayout() {
  return (
    <>
      <AdminHeader />
      <main>
        <Outlet />
      </main>
      <AdminFooter />
    </>
  );
}
