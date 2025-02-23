import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/dashboard/Sidebar";

const Layout = () => {
  return (
    <div className="flex h-screen backdrop-blur-lg bg-white/10 border border-white/20">
      <Sidebar />
      <div className="flex-1 p-6 overflow-auto backdrop-blur-md bg-white/10 border border-white/20">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;