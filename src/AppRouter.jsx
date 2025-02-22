import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import AuthPage from "./components/Auth/AuthPage";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import { useUser } from "./context/UserContext";

const AppRouter = () => {
  const { user } = useUser();

  return (
    <Routes>
      <Route
        path="/login"
        element={user ? <Navigate to="/" replace /> : <AuthPage />}
      />
      <Route path="/" element={<ProtectedRoute user={user}><Home /></ProtectedRoute>} />
      <Route path="/dashboard" element={<ProtectedRoute user={user}><Dashboard /></ProtectedRoute>} />
      <Route path="/*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

const ProtectedRoute = ({ user, children }) => {
  return user ? children : <Navigate to="/login" replace />;
};

export default AppRouter;