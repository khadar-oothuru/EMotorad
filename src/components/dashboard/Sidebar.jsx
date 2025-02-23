import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Home,
  CreditCard,
  Calendar,
  Users,
  Settings,
  HelpCircle,
  Phone,
  LogOut,
  Menu,
  XCircle,
} from "lucide-react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div
      className={`h-screen bg-gradient-to-b from-gray-900 to-gray-700 text-white p-6 flex flex-col shadow-lg transition-all duration-300 ${
        isOpen ? "w-64" : "w-20"
      }`}
    >
      {/* Sidebar Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Home size={28} className="text-white" />
          {isOpen && <h1 className="text-2xl font-extrabold">Board.</h1>}
        </div>
        <button onClick={() => setIsOpen(!isOpen)} className="text-white">
          {isOpen ? <XCircle size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Navigation Links */}
      <nav className="mt-10 space-y-4 flex-1">
        <SidebarItem to="/dashboard" icon={<Home size={20} />} text="Dashboard" isOpen={isOpen} />
        <SidebarItem to="/transactions" icon={<CreditCard size={20} />} text="Transactions" isOpen={isOpen} />
        <SidebarItem to="/schedules" icon={<Calendar size={20} />} text="Schedules" isOpen={isOpen} />
        <SidebarItem to="/users" icon={<Users size={20} />} text="Users" isOpen={isOpen} />
        <SidebarItem to="/settings" icon={<Settings size={20} />} text="Settings" isOpen={isOpen} />
      </nav>

      {/* Bottom Links */}
      <div className="mt-auto space-y-4">
        <SidebarItem to="/help" icon={<HelpCircle size={20} />} text="Help" isOpen={isOpen} />
        <SidebarItem to="/contact" icon={<Phone size={20} />} text="Contact" isOpen={isOpen} />
        <SidebarItem
          to="/logout"
          icon={<LogOut size={20} />}
          text="Logout"
          isOpen={isOpen}
          className="bg-red-500 hover:bg-red-600 text-white p-3 rounded-lg transition-all duration-300"
        />
      </div>
    </div>
  );
};

const SidebarItem = ({ to, icon, text, isOpen, className }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-all duration-300 ${
          isActive ? "bg-white text-gray-900 font-semibold" : "hover:bg-white hover:text-gray-900"
        } ${className}`
      }
    >
      {icon}
      {isOpen && <span className="font-medium">{text}</span>}
    </NavLink>
  );
};

export default Sidebar;
