import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const ActivityChart = () => {
  const activityData = [
    { name: "Week 1", Guest: 300, User: 450 },
    { name: "Week 2", Guest: 400, User: 350 },
    { name: "Week 3", Guest: 200, User: 100 },
    { name: "Week 4", Guest: 350, User: 400 },
    { name: "Week 5", Guest: 250, User: 700 },
    { name: "Week 6", Guest: 300, User: 500 },
    { name: "Week 7", Guest: 350, User: 400 },
  ];

  return (
    <div className="p-4 rounded-2xl shadow-lg backdrop-blur-lg bg-white/10 border border-white/20">
      <h3 className="text-lg font-semibold text-dark-100 mb-4">Activities</h3>
      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={activityData} barSize={24}>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255, 255, 255, 0.2)" />
          <XAxis dataKey="name" tick={{ fill: "#143D60" }} />
          <YAxis tick={{ fill: "#143D60" }} />
          <Tooltip
            contentStyle={{
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              backdropFilter: "blur(10px)",
              borderRadius: "10px",
            }}
            labelStyle={{ color: "#143D60" }}
            itemStyle={{ color: "#143D60" }}
          />
          <Legend wrapperStyle={{ color: "#143D60" }} />
          <Bar
            dataKey="User"
            fill="#5A189A"
            radius={[6, 6, 0, 0]}
            style={{ transition: "transform 0.3s" }}
            onMouseOver={(e) => (e.target.style.transform = "scale(1.1)")}
            onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
          />
          <Bar
            dataKey="Guest"
            fill="#FFB703"
            radius={[6, 6, 0, 0]}
            style={{ transition: "transform 0.3s" }}
            onMouseOver={(e) => (e.target.style.transform = "scale(1.1)")}
            onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ActivityChart;