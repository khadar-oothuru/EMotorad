import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const TopProducts = () => {
  const productsData = [
    { name: "Basic Tees", value: 55, color: "#66CC66" },
    { name: "Custom Short Pants", value: 31, color: "#FFD700" },
    { name: "Super Hoodies", value: 14, color: "#FF6666" },
  ];

  return (
    <div className="bg-white p-4 rounded-xl shadow-md">
      <h3 className="text-lg font-bold">Top Products</h3>
      <ResponsiveContainer width="100%" height={250}>
        <PieChart>
          <Pie data={productsData} dataKey="value" nameKey="name" outerRadius={80}>
            {productsData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TopProducts;
