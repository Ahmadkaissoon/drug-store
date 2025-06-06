import { Outlet } from "react-router";
import Header from "./header/Header";
import Sidebar from "./sidebar/Sidebar";
import Page from "./page/Page";

const DashboardLayout = () => {
  return (
    <div className="flex flex-col h-screen bg-white-color">
      <Header />

      <div className="max-w-max flex flex-1 overflow-hidden pt-16">
        <Sidebar />
        <Page>
          <Outlet />
        </Page>
      </div>
    </div>
  );
};

export default DashboardLayout;
