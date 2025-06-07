import { Outlet } from "react-router";
import Header from "./header/Header";
import Sidebar from "./sidebar/Sidebar";
import Page from "./page/Page";

const DashboardLayout = () => {
  return (
    <div className="flex flex-col h-screen bg-white-color">
      <Header />

      <div className="flex flex-1 pt-16 overflow-hidden">
        <Sidebar />
        <div className="flex-1 pr-[316px] h-full overflow-hidden">
          <Page>
            <Outlet />
          </Page>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
