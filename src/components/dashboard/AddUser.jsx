import React, { useState } from "react";

const AddUser = () => {
  const [userName, setUserName] = useState("");

  const handleAddUser = () => {
    alert(`User ${userName} added!`);
    setUserName("");
  };

  return (
    <div className="bg-white p-4 rounded-xl shadow-md">
      <h3 className="text-lg font-bold">Add User</h3>
      <input
        type="text"
        placeholder="Enter user name"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        className="p-2 border rounded-md w-full mt-2"
      />
      <button onClick={handleAddUser} className="mt-2 bg-blue-500 text-white p-2 rounded-md">
        Add User
      </button>
    </div>
  );
};

export default AddUser;
