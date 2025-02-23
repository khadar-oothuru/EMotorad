import React from 'react';
import ReactApexChart from 'react-apexcharts';

const MetricCard = ({ title, value, percentage }) => (
  <div className="bg-white p-6 rounded-xl shadow-sm">
    <h3 className="text-gray-500 text-sm font-medium">{title}</h3>
    <div className="mt-4 flex items-baseline gap-2">
      <p className="text-3xl font-semibold">{value}</p>
      <span className="text-green-500 text-sm font-medium">+{percentage}</span>
    </div>
  </div>
);

const Home = () => {
  const activityChart = {
    series: [
      {
        name: 'Activities',
        data: [500, 400, 300, 200],
      },
    ],
    options: {
      chart: {
        type: 'bar',
        toolbar: { show: false },
      },
      xaxis: {
        categories: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
        labels: { style: { colors: '#6B7280' } },
      },
      yaxis: { show: false },
      grid: { show: false },
      plotOptions: {
        bar: {
          borderRadius: 4,
          columnWidth: '45%',
          distributed: true,
        },
      },
      dataLabels: { enabled: false },
      colors: ['#3B82F6', '#60A5FA', '#93C5FD', '#BFDBFE'],
    },
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="grid grid-cols-[240px_1fr]">
        {/* Sidebar */}
        <div className="bg-white h-screen p-6">
          <h2 className="text-2xl font-bold mb-8">Dashboard</h2>
          <ul className="space-y-4">
            {['Transactions', 'Schedules', 'Users', 'Settings'].map((item) => (
              <li key={item} className="text-gray-600 hover:text-blue-500 cursor-pointer">
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Main Content */}
        <div className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <MetricCard title="Task Overview" value="$2,129,430" percentage="9.6%" />
            <MetricCard title="Task Transactions" value="1,520" percentage="1.7%" />
            <MetricCard title="Task Lives" value="9,721" percentage="8.3%" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Activity Chart */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-gray-700 font-medium mb-4">Activities - May June 2021</h3>
              <ReactApexChart
                options={activityChart.options}
                series={activityChart.series}
                type="bar"
                height={240}
              />
            </div>

            {/* Top Products */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-gray-700 font-medium mb-4">Top products - May June 2021</h3>
              <div className="space-y-4">
                {[
                  { name: 'Basic Tees', percentage: '59%' },
                  { name: 'Custom Short Pants', percentage: '31%' },
                  { name: 'Super Hoodies', percentage: '14%' },
                ].map((product, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-gray-600">{product.name}</span>
                    <span className="text-gray-500">{product.percentage}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm mb-8">
            <h3 className="text-gray-700 font-medium mb-4">Help</h3>
            <button className="text-blue-500 hover:text-blue-600">Contact Us</button>
          </div>

          <button className="w-full bg-blue-500 text-white py-3 rounded-xl hover:bg-blue-600">
            Add Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
