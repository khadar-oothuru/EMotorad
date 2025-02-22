import React, { useState, useEffect } from "react";
import { FaBicycle, FaGithub, FaTwitter, FaLinkedin, FaDiscord } from "react-icons/fa";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useUser } from "../../context/UserContext" // Adjust path as needed

const AuthPage = () => {
  const [isRegister, setIsRegister] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();
  const { user, login } = useUser();

  // Redirect if already authenticated
  useEffect(() => {
    if (user) navigate("/");
  }, [user, navigate]);

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
      toast.error(validationError, { position: "top-right", autoClose: 3000 });
      return;
    }

    try {
      const response = await axios.post(`http://localhost:5000/auth/${type}`, {
        email,
        password,
      });

      if (response.data.token) {
        login(response.data.token, rememberMe);
        toast.success("Authentication successful!", {
          position: "top-right",
          autoClose: 2000,
          onClose: () => navigate("/"),
        });
      }
    } catch (err) {
      const errorMsg = err.response?.data?.error || "Authentication failed. Please try again.";
      toast.error(errorMsg, { position: "top-right", autoClose: 3000 });
    }
  };
  const googleLogin = async () => {
    try {
      const response = await axios.get("http://localhost:5000/auth/google", {
        withCredentials: true, // Ensures cookies are sent
      });
  
      if (response.data.token) {
        login(response.data.token, rememberMe);
        toast.success("Google authentication successful!", {
          position: "top-right",
          autoClose: 2000,
          onClose: () => navigate("/"),
        });
      } else {
        toast.error("Google authentication failed.", {
          position: "top-right",
          autoClose: 3000,
        });
      }
    } catch (err) {
      toast.error("Google authentication error. Try again!", {
        position: "top-right",
        autoClose: 3000,
      });
    }
  };
  
  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <ToastContainer position="top-right" autoClose={3000} />
      <div
        className={`flex w-[900px] bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-700 ${
          isRegister ? "flex-row-reverse" : ""
        }`}
      >
        <div className="w-1/2 bg-gradient-to-r from-purple-400 to-indigo-500 flex flex-col items-center justify-center text-white p-10 rounded-l-2xl">
          <FaBicycle className="text-5xl mb-4 animate-bounce" />
          <h1 className="text-4xl font-bold">EMotorad</h1>
          <div className="flex mt-6 space-x-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="text-2xl text-black hover:scale-110 transition-transform" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="text-2xl text-black hover:scale-110 transition-transform" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-2xl text-black hover:scale-110 transition-transform" />
            </a>
            <a
              href="https://discord.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaDiscord className="text-2xl text-black hover:scale-110 transition-transform" />
            </a>
          </div>
        </div>
        <div className="w-1/2 p-10 flex flex-col justify-center">
          <h2 className="text-2xl font-bold">
            {isRegister ? "Register" : "Sign In"}
          </h2>
          <p className="text-gray-500 mt-1">
            {isRegister ? "Create an account" : "Sign in to your account"}
          </p>
          <div className="mt-5">
            <button
              onClick={googleLogin}
              className="w-full bg-gray-100 text-gray-700 py-2 rounded-md flex justify-center items-center mb-2"
            >
              <img
                src="https://www.svgrepo.com/show/355037/google.svg"
                alt="Google"
                className="w-5 mr-2"
              />
              {isRegister ? "Register with Google" : "Sign in with Google"}
            </button>
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleAuth(isRegister ? "register" : "login");
            }}
            className="mt-4"
          >
            <label className="block text-sm font-medium text-gray-700 mt-3">
              Email address
            </label>
            <input
              type="email"
              className="w-full px-4 py-2 mt-1 border rounded-md focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label className="block text-sm font-medium text-gray-700 mt-3">
              Password
            </label>
            <input
              type="password"
              className="w-full px-4 py-2 mt-1 border rounded-md focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
             <div className="flex items-center mt-3">
        <input
          type="checkbox"
          checked={rememberMe}
          onChange={(e) => setRememberMe(e.target.checked)}
          className="mr-2"
        />
        <label className="text-sm text-gray-600">Remember Me</label>
      </div>
            <button
              type="submit"
              className="mt-4 px-6 py-2 bg-indigo-500 text-white rounded-lg w-full"
            >
              {isRegister ? "Register" : "Sign In"}
            </button>

            <p
              className="text-center text-sm text-gray-600 mt-4 cursor-pointer"
              onClick={() => setIsRegister(!isRegister)}
            >
              {isRegister ? (
                <>
                  Already have an account?{" "}
                  <span className="text-blue-500 font-medium">Sign In</span>
                </>
              ) : (
                <>
                  Don't have an account?{" "}
                  <span className="text-blue-500 font-medium">Register</span>
                </>
              )}
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
