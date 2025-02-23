import React from "react";
import { FiBell, FiSearch } from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa";

const TopNav = () => {
  return (
    <div className="flex justify-between items-center p-6">
      <h2 className="text-2xl font-bold">Dashboard</h2>
      <div className="flex items-center space-x-4">
        <FiSearch size={20} className="text-gray-600" />
        <FiBell size={20} className="text-gray-600" />
        <FaUserCircle size={24} className="text-gray-600" />
      </div>
    </div>
  );
};

export default TopNav;
