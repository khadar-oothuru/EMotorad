// App.js
import React from "react";
import AppRouter from "./AppRouter";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // <-- CSS imported here

const App = () => {
  return (
    <div className="min-h-screen bg-transparent backdrop-blur-lg">
      <ToastContainer 
        position="top-right" 
        autoClose={3000} 
        hideProgressBar 
      />
      <AppRouter />
    </div>
  );
};

export default App;