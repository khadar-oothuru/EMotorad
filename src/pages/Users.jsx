import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaEdit, FaTrash } from "react-icons/fa";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editUser, setEditUser] = useState({ name: "", instagram: "", youtube: "" });

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/users");
        setUsers(res.data);
      } catch (error) {
        console.error("Error fetching users", error);
        toast.error("Error fetching users!");
      }
    };
    fetchUsers();
  }, []);

  const handleDeleteUser = async (userId) => {
    try {
      await axios.delete(`http://localhost:5000/api/users/${userId}`);
      setUsers(users.filter((user) => user._id !== userId));
      toast.success("User deleted successfully!");
    } catch (error) {
      console.error("Error deleting user:", error);
      toast.error("Error deleting user!");
    }
  };

  const handleEditUser = async () => {
    try {
      const updatedUser = { ...editUser };
      await axios.put(`http://localhost:5000/api/users/${editUser._id}`, updatedUser);
      setUsers(users.map((user) => (user._id === editUser._id ? updatedUser : user)));
      setIsModalOpen(false);
      toast.success("User updated successfully!");
    } catch (error) {
      console.error("Error updating user:", error);
      toast.error("Error updating user!");
    }
  };

  const openEditModal = (user) => {
    setEditUser(user);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditUser({ name: "", instagram: "", youtube: "" });
  };

  return (
    <div className="p-6 bg-transparent min-h-screen">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Users</h2>
      <p className="text-gray-600 mb-6">Manage user accounts and permissions.</p>

      <div className="mt-6 mb-6 space-y-4">
        <ul>
          {users.map((user) => (
            <li
              key={user._id}
              className="flex justify-between items-center mb-6 p-4 bg-white rounded-lg shadow-lg hover:shadow-2xl transition-all duration-200 ease-in-out"
            >
              <div>
                <h3 className="text-lg font-semibold text-gray-800">{user.name}</h3>
                <p className="text-sm text-gray-500">Instagram: {user.instagram}</p>
                <p className="text-sm text-gray-500">YouTube: {user.youtube}</p>
              </div>
              <div className="flex space-x-5">
                <button
                  onClick={() => openEditModal(user)}
                  className="text-blue-500 hover:text-blue-700 transition-colors text-2xl"
                >
                  <FaEdit />
                </button>
                <button
                  onClick={() => handleDeleteUser(user._id)}
                  className="text-red-500 hover:text-red-700 transition-colors text-2xl"
                >
                  <FaTrash />
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Edit Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96 space-y-6">
            <h3 className="text-xl font-semibold text-gray-800">Edit User</h3>
            <div className="space-y-4">
              <input
                type="text"
                value={editUser.name}
                onChange={(e) => setEditUser({ ...editUser, name: e.target.value })}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Name"
              />
              <input
                type="text"
                value={editUser.instagram}
                onChange={(e) => setEditUser({ ...editUser, instagram: e.target.value })}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Instagram"
              />
              <input
                type="text"
                value={editUser.youtube}
                onChange={(e) => setEditUser({ ...editUser, youtube: e.target.value })}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="YouTube"
              />
            </div>
            <div className="flex justify-end space-x-4">
              <button
                onClick={closeModal}
                className="bg-gray-300 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={handleEditUser}
                className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Users;
