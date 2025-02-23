
import Sidebar from "../components/dashboard/Sidebar";
import TopNav from "../components/dashboard/TopNav"
import StatsCards from "../components/dashboard/StatsCards";
import ActivityChart from "../components/dashboard/ActivityChart";
import TopProducts from "../components/dashboard/TopProducts";
import AddUser from "../components/dashboard/AddUser";

const Dashboard = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      {/* <Sidebar /> */}

      {/* Main Content */}
      <div className="flex-1 p-6">
        {/* Top Navigation */}
        <TopNav />

        {/* Stats Cards */}
        <StatsCards />

        {/* Charts & User Management */}
        <div className="grid grid-cols-3 gap-4">
      
          <div className="col-span-2">
            <ActivityChart />
          </div>

          {/* Top Products */}
          <div>
            <TopProducts />
          </div>

          {/* Add User */}
          <div>
            <AddUser />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
