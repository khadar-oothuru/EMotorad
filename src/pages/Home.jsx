import React from 'react';
import { useUser } from "../context/UserContext"

const Home = () => {
  const { user, logout } = useUser();

  return (
    <div>
      <h1>Hey, this is the home page</h1>
      {user && <p>Welcome, {user.name}!</p>}
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Home;
