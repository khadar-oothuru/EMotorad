import React from "react";
import { ToastContainer } from "react-toastify";
import AppRouter from "./AppRouter";

const App = () => {
  return (
    <div className="min-h-screen bg-transparent backdrop-blur-lg">
      <ToastContainer />
      <AppRouter />
    </div>
  );
};

export default App;
