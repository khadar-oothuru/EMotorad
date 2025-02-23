import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import AuthPage from "./components/Auth/AuthPage";
import Dashboard from "./pages/Dashboard";
import Transactions from "./pages/Transactions";
import Schedules from "./pages/Schedules";
import Users from "./pages/Users";
import Settings from "./pages/Settings";
import Help from "./pages/Help";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import { useUser } from "./context/UserContext";
import Layout from "./components/Layout";

const AppRouter = () => {
  const { user } = useUser();

  return (
    <Routes>
      {/* Login Page (No Sidebar) */}
      <Route
        path="/login"
        element={user ? <Navigate to="/" replace /> : <AuthPage />}
      />

      {/* Protected Routes with Sidebar */}
      {user ? (
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/schedules" element={<Schedules />} />
          <Route path="/users" element={<Users />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/help" element={<Help />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      ) : (
        <Route path="/*" element={<Navigate to="/login" replace />} />
      )}
    </Routes>
  );
};

export default AppRouter;
