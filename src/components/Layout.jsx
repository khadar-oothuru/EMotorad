import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/dashboard/Sidebar";

const Layout = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar stays on all pages except login */}
      <Sidebar />
      <div className="flex-1 p-6 overflow-auto bg-gray-100">
        {/* Outlet renders the matched route component */}
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
