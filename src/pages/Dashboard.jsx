import Sidebar from "../components/dashboard/Sidebar";
import TopNav from "../components/dashboard/TopNav";
import StatsCards from "../components/dashboard/StatsCards";
import ActivityChart from "../components/dashboard/ActivityChart";
import TopProducts from "../components/dashboard/TopProducts";
import AddUser from "../components/dashboard/AddUser";

const Dashboard = () => {
  return (
    <div className="flex">
      <div className="flex-1 p-3">
        <TopNav />

        {/* Stats Cards */}
        <StatsCards />

        {/* Activity Chart */}
        <div className="w-full mb-5">
          <ActivityChart />
        </div>

        {/* Top Products & Add User Side by Side */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <TopProducts />
          </div>
          <div>
            <AddUser />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;