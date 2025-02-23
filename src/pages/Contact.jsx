import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    toast.info("Sending your message...");

    const formData = new FormData(event.target);
    const key = import.meta.env.VITE_web_access;
    formData.append("access_key", key);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        toast.success("Form Submitted Successfully!");
        event.target.reset();
      } else {
        toast.error(data.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form", error);
      toast.error("An error occurred while sending the message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-transparent backdrop-blur-lg rounded-lg shadow-lg">
      <h2 className="text-3xl font-extrabold text-center mb-4 text-indigo-600">Contact Us</h2>
      <p className="text-center text-gray-600 mb-6">We'd love to hear from you. Please send us a message.</p>

      <form onSubmit={onSubmit} className="space-y-6">
        <div className="relative">
          <label className="block text-sm font-medium text-gray-700" htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            required
            className="w-full px-4 py-3 bg-transparent border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder:text-gray-500"
            placeholder="Your Name"
          />
        </div>

        <div className="relative">
          <label className="block text-sm font-medium text-gray-700" htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            required
            className="w-full px-4 py-3 bg-transparent border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder:text-gray-500"
            placeholder="Your Email"
          />
        </div>

        <div className="relative">
          <label className="block text-sm font-medium text-gray-700" htmlFor="message">Message</label>
          <textarea
            name="message"
            id="message"
            required
            rows="4"
            className="w-full px-4 py-3 bg-transparent border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder:text-gray-500"
            placeholder="Your Message"
          ></textarea>
        </div>

        <div className="flex justify-between items-center">
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-3 mt-4 text-white font-bold rounded-lg ${isSubmitting ? 'bg-gray-400' : 'bg-indigo-500 hover:bg-indigo-600'}`}
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </div>
      </form>

      {/* Toast Notification Container */}
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={true} />
    </div>
  );
};

export default Contact;
