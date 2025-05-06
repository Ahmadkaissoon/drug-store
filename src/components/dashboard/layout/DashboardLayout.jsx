import { Outlet } from "react-router";
import Header from "./header/Header";
import Sidebar from "./sidebar/Sidebar";

const DashboardLayout = () => {
  return (
    <div className="w-full h-full overflow-hidden relative bg-white-color flex flex-col">
      <Header />
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default DashboardLayout;
