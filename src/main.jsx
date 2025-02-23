import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router";
import App from "./App.jsx";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { UserProvider } from "./context/UserContext";

// Import your Publishable Key
const Google_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!Google_KEY) {
  throw new Error("Missing Publishable Key");
}
createRoot(document.getElementById("root")).render(
  <GoogleOAuthProvider clientId={Google_KEY}>
    <UserProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </UserProvider>
  </GoogleOAuthProvider>
);
