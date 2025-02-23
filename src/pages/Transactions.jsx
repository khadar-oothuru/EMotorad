import React from "react";
import { motion } from "framer-motion";
import { CreditCard, TrendingUp, TrendingDown } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const transactions = [
  { id: 1, description: "Payment Received", amount: "+$500", date: "Feb 20, 2025" },
  { id: 2, description: "Purchase - Amazon", amount: "-$120", date: "Feb 18, 2025" },
  { id: 3, description: "Subscription - Netflix", amount: "-$15", date: "Feb 15, 2025" },
  { id: 4, description: "Salary Credited", amount: "+$2,000", date: "Feb 10, 2025" },
];

const transactionData = [
  { date: "Feb 10", value: 2000 },
  { date: "Feb 15", value: 1985 },
  { date: "Feb 18", value: 1865 },
  { date: "Feb 20", value: 2365 },
];

const Transactions = () => {
  return (
    <motion.div
      className="p-6 bg-transparent"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-2xl font-bold mb-4 flex items-center">
        <CreditCard className="text-blue-500 mr-2" size={28} /> Transactions
      </h2>
      <p className="text-gray-500 mb-6">Manage all your transactions here.</p>

      {/* Transactions List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {transactions.map((transaction) => (
          <motion.div
            key={transaction.id}
            className="flex justify-between items-center p-4 rounded-xl shadow border border-gray-200 bg-white/20 backdrop-blur-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 100 }}
          >
            <div className="flex items-center space-x-3">
              {transaction.amount.startsWith("+") ? (
                <TrendingUp className="text-green-500" size={24} />
              ) : (
                <TrendingDown className="text-red-500" size={24} />
              )}
              <div>
                <p className="text-gray-800 font-semibold">{transaction.description}</p>
                <p className="text-gray-500 text-sm">{transaction.date}</p>
              </div>
            </div>
            <p className={`text-lg font-bold ${transaction.amount.startsWith("+") ? "text-green-500" : "text-red-500"}`}>
              {transaction.amount}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Graph Section */}
      <div className="mt-8 bg-white/20 backdrop-blur-lg p-4 rounded-xl shadow-md">
        <h3 className="text-lg font-semibold mb-4">Transaction Overview</h3>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={transactionData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" stroke="#8884d8" />
            <YAxis stroke="#8884d8" />
            <Tooltip />
            <Line type="monotone" dataKey="value" stroke="#4F46E5" strokeWidth={3} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};

export default Transactions;
