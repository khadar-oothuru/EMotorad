import React from "react";
import { DollarSign, ShoppingCart, Heart, Users } from "lucide-react";

const stats = [
  { title: "Total Revenues", value: "$2,129,430", color: "text-green-400", icon: DollarSign },
  { title: "Total Transactions", value: "1,520", color: "text-blue-400", icon: ShoppingCart },
  { title: "Total Likes", value: "9,721", color: "text-red-400", icon: Heart },
  { title: "Total Users", value: "9,721", color: "text-purple-400", icon: Users },
];

const StatsCards = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-6">
      {stats.map((stat, index) => {
        const IconComponent = stat.icon;
        return (
          <div
            key={index}
            className="flex items-center p-6 rounded-2xl shadow-lg border border-gray-700 backdrop-blur-lg bg-gray-900"
          >
            <div className={`p-4 rounded-full border border-gray-700 backdrop-blur-md mr-4`}>
              <IconComponent size={24} className={stat.color} />
            </div>
            <div>
            <p className={`font-medium text-xs ${stat.color} !important`}>{stat.title}</p>



              <h3 className="text-2xl font-semibold text-gray-200">{stat.value}</h3>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default StatsCards;
