import React from "react";
import { motion } from "framer-motion";
import { CalendarCheck } from "lucide-react";

const schedules = [
  { id: 1, title: "Team Meeting", time: "10:00 AM - 11:00 AM", date: "Feb 22, 2025" },
  { id: 2, title: "Project Deadline", time: "All Day", date: "Feb 25, 2025" },
  { id: 3, title: "Doctor Appointment", time: "4:00 PM - 5:00 PM", date: "Feb 27, 2025" },
  { id: 4, title: "Workshop on React", time: "2:00 PM - 4:00 PM", date: "Feb 29, 2025" },
];

const Schedules = () => {
  return (
    <motion.div
      className="p-6 bg-transparent"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex items-center space-x-2 mb-6">
        <CalendarCheck className="text-blue-600" size={32} />
        <h2 className="text-3xl font-bold text-gray-800">Schedules</h2>
      </div>
      <p className="text-gray-500 mb-8 text-lg">Manage and track your upcoming events effortlessly.</p>

      {/* Schedules List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {schedules.map((schedule) => (
          <motion.div
            key={schedule.id}
            className="p-5 rounded-2xl shadow-lg border border-gray-200 bg-white/30 backdrop-blur-xl hover:shadow-xl transition duration-300"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 120 }}
          >
            <h3 className="text-xl font-semibold text-gray-900">{schedule.title}</h3>
            <p className="text-gray-700 mt-1 text-sm">{schedule.time}</p>
            <p className="text-blue-600 text-sm font-medium mt-3">{schedule.date}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Schedules;
