import React from "react";

const StatsCards = () => {
  const stats = [
    { title: "Total Revenues", value: "$2,129,430" },
    { title: "Total Transactions", value: "1,520" },
    { title: "Total Likes", value: "9,721" },
    { title: "Total Users", value: "9,721" },
  ];

  return (
    <div className="grid grid-cols-4 gap-4 my-6">
      {stats.map((stat, index) => (
        <div key={index} className="bg-white p-4 rounded-xl shadow-md">
          <p>{stat.title}</p>
          <h3 className="text-xl font-bold">{stat.value}</h3>
        </div>
      ))}
    </div>
  );
};

export default StatsCards;
