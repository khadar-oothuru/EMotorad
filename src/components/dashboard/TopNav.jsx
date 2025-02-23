import React from "react";
import { FiSearch } from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa";
import { IoMdNotificationsOutline } from "react-icons/io";
import { SiGoogleanalytics } from "react-icons/si";

const TopNav = () => {
  return (
    <div className="flex justify-between items-center p-4 rounded-xl shadow-lg backdrop-blur-lg bg-white/10 border border-white/20">
      {/* Logo & Title */}
      <div className="flex items-center space-x-2">
        <SiGoogleanalytics size={28} className="text-blue-400" />
        <h2 className="text-2xl font-extrabold text-blue">Dashboard</h2>
      </div>

      {/* Icons Section */}
      <div className="flex items-center space-x-6">
        <button className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-all">
          <FiSearch size={20} className="text-yellow-400" />
        </button>
        <button className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-all relative">
          <IoMdNotificationsOutline size={22} className="text-red-400" />
          <span className="absolute top-0 right-0 w-3 h-3 bg-red-500 border-2 border-white rounded-full"></span>
        </button>
        <button className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-all">
          <FaUserCircle size={24} className="text-green-400" />
        </button>
      </div>
    </div>
  );
};

export default TopNav;
