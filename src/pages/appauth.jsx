import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

const AuthPage = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [user, setUser] = useState(null);
  const [rememberMe, setRememberMe] = useState(false);

  useEffect(() => {
    const savedToken = localStorage.getItem("authToken");
    if (savedToken) {
      const decoded = jwtDecode(savedToken);
      setUser(decoded);
    }
  }, []);

  const validateForm = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) return "Invalid email format.";
    if (password.length < 6) return "Password must be at least 6 characters long.";
    return "";
  };

  const handleAuth = async (type) => {
    setError("");
    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return;
    }

    try {
      const response = await axios.post(`http://localhost:5000/auth/${type}`, { email, password });
      if (response.data.token) {
        const decoded = jwtDecode(response.data.token);
        setUser(decoded);
        if (rememberMe) localStorage.setItem("authToken", response.data.token);
      }
      alert(response.data.message);
    } catch (err) {
      setError(err.response?.data?.message || "Authentication failed.");
    }
  };

  const googleLogin = () => {
    window.location.href = "http://localhost:5000/auth/google";
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="relative w-[800px] h-[500px] flex bg-white rounded-2xl shadow-xl overflow-hidden">
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: isSignUp ? "100%" : "0%" }}
          transition={{ duration: 0.5 }}
          className={`absolute w-1/2 h-full flex flex-col items-center justify-center p-10 transition-all duration-500 ${isSignUp ? 'bg-green-600' : 'bg-blue-600'} text-white`}
        >
          <h1 className="text-3xl font-bold">Auth System</h1>
          <p className="mt-4">{isSignUp ? "Welcome Back!" : "Join us today!"}</p>
          <button
            onClick={() => setIsSignUp(!isSignUp)}
            className="mt-6 px-6 py-2 border-2 border-white rounded-lg hover:bg-white hover:text-blue-600 transition"
          >
            {isSignUp ? "Sign In" : "Sign Up"}
          </button>
        </motion.div>

        <div className="w-full flex relative">
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: isSignUp ? "-100%" : "0%" }}
            transition={{ duration: 0.5 }}
            className="w-1/2 h-full flex flex-col items-center justify-center p-10"
          >
            {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 mt-2 border rounded-md focus:ring-2 focus:ring-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="flex items-center mt-2">
              <input type="checkbox" id="rememberMe" onChange={() => setRememberMe(!rememberMe)} />
              <label htmlFor="rememberMe" className="ml-2 text-sm">Remember me</label>
            </div>
            <button onClick={() => handleAuth("login")} className="mt-4 px-6 py-2 bg-gray-500 text-white rounded-lg">Login</button>
            <button onClick={googleLogin} className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg">Login with Google</button>
          </motion.div>

          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: isSignUp ? "0%" : "100%" }}
            transition={{ duration: 0.5 }}
            className="w-1/2 h-full flex flex-col items-center justify-center p-10"
          >
            {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-green-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 mt-2 border rounded-md focus:ring-2 focus:ring-green-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={() => handleAuth("register")} className="mt-4 px-6 py-2 bg-green-500 text-white rounded-lg">Register</button>
          </motion.div>
        </div>
      </div>
      {user && <p className="mt-4 absolute bottom-10 text-gray-700">Welcome, {user.email}</p>}
    </div>
  );
};

export default AuthPage;
