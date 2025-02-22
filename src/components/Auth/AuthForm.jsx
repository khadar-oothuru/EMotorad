import { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";

const AuthForm = ({ isRegister, setIsRegister, setUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

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
      toast.error(validationError, { position: "top-right", autoClose: 3000 });
      return;
    }

    try {
      const response = await axios.post(`http://localhost:5000/auth/${type}`, {
        email,
        password,
      });

      if (response.data.token) {
        localStorage.setItem("authToken", response.data.token);
        const decoded = jwtDecode(response.data.token);
        setUser(decoded);
        toast.success("Authentication successful!", { position: "top-right", autoClose: 2000 });
        navigate("/");
      } else {
        throw new Error("No token received.");
      }
    } catch (err) {
      const errorMsg = err.response?.data?.error || "Authentication failed. Please try again.";
      setError(errorMsg);
      toast.error(errorMsg, { position: "top-right", autoClose: 3000 });
    }
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleAuth(isRegister ? "register" : "login");
      }}
      className="mt-4"
    >
        
      <label className="block text-sm font-medium text-gray-700 mt-3">Email address</label>
      <input
        type="email"
        className="w-full px-4 py-2 mt-1 border rounded-md focus:ring-2 focus:ring-indigo-500"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <label className="block text-sm font-medium text-gray-700 mt-3">Password</label>
      <input
        type="password"
        className="w-full px-4 py-2 mt-1 border rounded-md focus:ring-2 focus:ring-indigo-500"
        placeholder="Enter your password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit" className="mt-4 px-6 py-2 bg-indigo-500 text-white rounded-lg w-full">
        {isRegister ? "Register" : "Sign In"}
      </button>

      <p className="text-center text-sm text-gray-600 mt-4 cursor-pointer" onClick={() => setIsRegister(!isRegister)}>
        {isRegister ? (
          <>
            Already have an account? <span className="text-blue-500 font-medium">Sign In</span>
          </>
        ) : (
          <>
            Don't have an account? <span className="text-blue-500 font-medium">Register</span>
          </>
        )}
      </p>
    </form>
  );
};

export default AuthForm;
