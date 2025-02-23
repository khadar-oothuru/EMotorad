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
} from "lucide-react";
import { FaBicycle } from "react-icons/fa";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div
      className={`h-screen p-6 flex flex-col shadow-xl transition-all duration-300 backdrop-blur-lg bg-white/10 border-r border-black/50 rounded-tr-xl rounded-br-xl ${
        isOpen ? "w-64" : "w-20"
      } fixed top-0 left-0 z-50 md:relative`}
    >
      {/* Sidebar Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          {/* <Home size={28} className="text-blue-900" /> */}
          <FaBicycle size={30} className="text-blue-900 animate-bounce" />
          {isOpen && <h1 className="text-2xl font-extrabold text-blue-900">EMotorad .</h1>}
        </div>
        <button onClick={() => setIsOpen(!isOpen)} className="text-yellow-400 md:hidden">
          <Menu size={24} />
        </button>
      </div>

      {/* Navigation Links */}
      <nav className="mt-10 space-y-4 flex-1">
        <SidebarItem to="/dashboard" icon={<Home size={20} className="text-yellow-400" />} text="Dashboard" isOpen={isOpen} shadowColor="shadow-yellow-400" />
        <SidebarItem to="/transactions" icon={<CreditCard size={20} className="text-green-400" />} text="Transactions" isOpen={isOpen} shadowColor="shadow-green-400" />
        <SidebarItem to="/schedules" icon={<Calendar size={20} className="text-blue-400" />} text="Schedules" isOpen={isOpen} shadowColor="shadow-blue-400" />
        <SidebarItem to="/users" icon={<Users size={20} className="text-purple-400" />} text="Users" isOpen={isOpen} shadowColor="shadow-purple-400" />
        <SidebarItem to="/settings" icon={<Settings size={20} className="text-red-400" />} text="Settings" isOpen={isOpen} shadowColor="shadow-red-400" />
      </nav>

      {/* Bottom Links */}
      <div className="mt-auto space-y-4">
        <SidebarItem to="/help" icon={<HelpCircle size={20} className="text-cyan-400" />} text="Help" isOpen={isOpen} shadowColor="shadow-cyan-400" />
        <SidebarItem to="/contact" icon={<Phone size={20} className="text-pink-400" />} text="Contact" isOpen={isOpen} shadowColor="shadow-pink-400" />
        <button
          onClick={() => console.log("Logout clicked")}
          className="flex items-center space-x-3 w-full p-3 rounded-lg cursor-pointer transition-all duration-300 bg-red-400 hover:bg-red-500 text-white shadow-md"
        >
          <LogOut size={20} className="text-white" />
          {isOpen && <span className="font-medium">Logout</span>}
        </button>
      </div>
    </div>
  );
};

const SidebarItem = ({ to, icon, text, isOpen, shadowColor, className }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-all duration-300 backdrop-blur-md bg-white/10 border border-black/50 shadow-xl hover:bg-white/20 hover:text-white ${
          isActive ? `bg-white/20 text-white font-semibold ${shadowColor}` : "text-white"
        } ${className}`
      }
    >
      {icon}
      {isOpen && <span className="font-medium">{text}</span>}
    </NavLink>
  );
};

export default Sidebar;