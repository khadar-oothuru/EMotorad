import React, { useState } from "react";
import axios from "axios";
import { PlusCircle, X } from "lucide-react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddUserModal = ({ onClose }) => {
  const [activeTab, setActiveTab] = useState("Basic");
  const [name, setName] = useState("");
  const [instagram, setInstagram] = useState("");
  const [youtube, setYoutube] = useState("");

  const handleAddUser = async () => {
    if (!name.trim()) {
      toast.error("Name is required!");
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/api/users", {
        name,
        instagram,
        youtube,
      });

      if (response.status === 201) {
        toast.success("User added successfully!");
        onClose();
      }
    } catch (error) {
      console.error("Error adding user:", error);
      toast.error("Error adding user. Please try again.");
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-100/50 backdrop-blur-sm">
      <div className="bg-white p-6 rounded-xl shadow-xl w-96 relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1 hover:bg-gray-100 rounded-full transition-colors"
        >
          <X className="w-6 h-6 text-gray-600" />
        </button>

        <h3 className="text-xl font-bold text-gray-800 mb-6">Create New Profile</h3>

        {/* Tabs */}
        <div className="flex gap-2 mb-6">
          {["Basic", "Social"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-colors ${
                activeTab === tab
                  ? "bg-blue-500 text-white"
                  : "bg-gray-100 text-gray-500 hover:bg-gray-200"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Form Content */}
        <div className="space-y-4">
          {activeTab === "Basic" && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Name
              </label>
              <input
                type="text"
                placeholder="John Doe"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              />
            </div>
          )}

          {activeTab === "Social" && (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Instagram Link
                </label>
                <input
                  type="text"
                  placeholder="instagram.com/username"
                  value={instagram}
                  onChange={(e) => setInstagram(e.target.value)}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  YouTube Link
                </label>
                <input
                  type="text"
                  placeholder="youtube.com/username"
                  value={youtube}
                  onChange={(e) => setYoutube(e.target.value)}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
              </div>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="mt-8 flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-5 py-2.5 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleAddUser}
            className="px-5 py-2.5 bg-blue-500 hover:bg-blue-600 text-white rounded-lg flex items-center gap-2 transition-colors"
          >
            <PlusCircle className="w-5 h-5" />
            Add Profile
          </button>
        </div>
      </div>
    </div>
  );
};

const AddUser = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="max-w-md mx-auto p-5 relative flex justify-center items-center h-63">
      <button
        onClick={() => setIsModalOpen(true)}
        className="group w-full h-full flex flex-col items-center justify-center border-2 border-dashed border-gray-300 hover:border-blue-500 rounded-2xl transition-all hover:bg-gray-50"
      >
        <PlusCircle className="w-12 h-12 text-gray-400 group-hover:text-blue-500 mb-3 transition-colors" />
        <span className="text-gray-500 group-hover:text-blue-500 font-medium transition-colors">
          Add New Profile
        </span>
      </button>

      {isModalOpen && <AddUserModal onClose={() => setIsModalOpen(false)} />}
    </div>
  );
};

export default AddUser;