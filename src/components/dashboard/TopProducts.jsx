import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const TopProducts = () => {
  const productsData = [
    { name: "Basic Tees", value: 55, color: "#66CC66" },
    { name: "Custom Short Pants", value: 31, color: "#FFD700" },
    { name: "Super Hoodies", value: 14, color: "#FF6666" },
  ];

  return (
    <div className="p-10 rounded-2xl shadow-lg bg-transparent max-w-md mx-auto flex flex-col">
      <h3 className="text-lg font-semibold text-gray-800 mb-3">Top Products</h3>
      <div className="flex items-center">
        {/* Donut Chart */}
        <ResponsiveContainer width={120} height={120}>
          <PieChart>
            <Pie
              data={productsData}
              dataKey="value"
              nameKey="name"
              outerRadius={50}
              innerRadius={30}
              paddingAngle={5}
              stroke="none"
            >
              {productsData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        
        {/* Legend */}
        <div className="ml-6 space-y-2">
          {productsData.map((product, index) => (
            <div key={index} className="flex items-center space-x-2">
              <div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: product.color }}
              ></div>
              <span className="text-gray-800 font-medium">{product.name}</span>
              <span className="text-gray-600 text-sm">{product.value}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopProducts;
