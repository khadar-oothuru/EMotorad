import { createContext, useContext, useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      try {
        return jwtDecode(token);
      } catch {
        localStorage.removeItem("authToken");
      }
    }
    return null;
  });

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      try {
        setUser(jwtDecode(token));
      } catch {
        localStorage.removeItem("authToken");
        setUser(null);
      }
    }
  }, []);

  // In UserContext.js
  const login = (token, remember = true) => {
    if (remember) {
      localStorage.setItem("authToken", token);
    } else {
      sessionStorage.setItem("authToken", token);
    }
    setUser(jwtDecode(token));
  };
  const logout = () => {
    localStorage.removeItem("authToken");
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
