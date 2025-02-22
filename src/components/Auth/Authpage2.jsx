import { useState, useEffect } from "react";
import { FaBicycle } from "react-icons/fa";
import { jwtDecode } from "jwt-decode";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AuthSocial from "./AuthSocial";
import AuthForm from "./AuthForm";
import AuthProviderLogin from "./AuthProviderLogin";

const AuthPage = () => {
  const [isRegister, setIsRegister] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const savedToken = localStorage.getItem("authToken");
    if (savedToken) {
      const decoded = jwtDecode(savedToken);
      setUser(decoded);
    }
  }, []);

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <ToastContainer position="top-right" autoClose={3000} />
      <div className={`flex w-[900px] bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-700 ${isRegister ? "flex-row-reverse" : ""}`}>
        <div className="w-1/2 bg-gradient-to-r from-purple-400 to-indigo-500 flex flex-col items-center justify-center text-white p-10 rounded-l-2xl">
          <FaBicycle className="text-5xl mb-4 animate-bounce" />
          <h1 className="text-4xl font-bold">EMotorad</h1>
          <AuthSocial />
        </div>
        <div className="w-1/2 p-10 flex flex-col justify-center">
        <div className="mb-5">
        <h2 className="text-2xl font-bold">
            {isRegister ? "Register" : "Sign In"}
          </h2>
          <p className="text-gray-500 mt-1">
            {isRegister ? "Create an account" : "Sign in to your account"}
          </p>
          </div>

          <AuthProviderLogin />
          
          <AuthForm isRegister={isRegister} setIsRegister={setIsRegister} setUser={setUser} />
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
