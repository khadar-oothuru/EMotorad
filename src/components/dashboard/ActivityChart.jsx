import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";

const ActivityChart = () => {
  const activityData = [
    { name: "Week 1", Guest: 300, User: 450 },
    { name: "Week 2", Guest: 400, User: 350 },
    { name: "Week 3", Guest: 200, User: 100 },
    { name: "Week 4", Guest: 350, User: 400 },
  ];

  return (
    <div className="bg-white p-4 rounded-xl shadow-md">
      <h3 className="text-lg font-bold">Activities</h3>
      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={activityData}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="User" fill="#66CC66" />
          <Bar dataKey="Guest" fill="#FF6666" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ActivityChart;
