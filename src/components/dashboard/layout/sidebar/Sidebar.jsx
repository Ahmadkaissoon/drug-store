import { useEffect, useState } from "react";
import drugStoreImg from "../../../../assets/common/images/drugStoreImg.jpg";
import TABS from "../../../../data/dashboard/tabsList/TABS";
import secureLocalStorage from "react-secure-storage";
import jsonParse from "../../../../functions/common/jsonParse";
import SideBarTab from "./sideBarTab/SideBarTab";
import { useLocation } from "react-router-dom";

const Sidebar = () => {
  const [currentTab, setCurrentTab] = useState({
    first: "home",
    sub: null,
  });
  const { pathname, state } = useLocation();

  useEffect(() => {
    if (pathname) {
      const pathTabs = pathname.split("/");
      setCurrentTab({
        ...currentTab,
        first: pathTabs[1] ? pathTabs[1] : "home",
        sub: pathTabs[2] ? pathTabs[2] : null,
      });
    }
  }, [pathname]);
  // get role from storage (expected values: 'admin' | 'manager' | 'representative')
  const role = jsonParse(secureLocalStorage.getItem("USER_ROLE"))?.data;

  const isUsersSubtab = (tab) => tab?.subTabs?.some((s) => s.name === "users");

  const filteredTabs = TABS.filter((tab) => {
    if (role === "admin") {
      // admin: everything except orders
      return tab.name !== "orders";
    }
    if (role === "manager") {
      // manager: has all tabs; we will remove "users" subtab below
      return true;
    }
    if (role === "representative") {
      // representative: only orders
      return tab.name === "orders";
    }
    if (role === "accountant") {
      return tab.name === "orders" && tab.name === "reports";
    }
    // default: show all if role missing (safer to show login-only routes via PrivateRoute)
    return true;
  }).map((tab) => {
    if (role === "manager" && tab.subTabs) {
      return {
        ...tab,
        subTabs: tab.subTabs.filter((s) => s.name !== "users"),
      };
    }
    return tab;
  });

  return (
    <div className="fixed ml-6 top-0 bottom-0 right-0 w-[316px] bg-main-color overflow-y-auto">
      <div className="p-4 sticky top-0 bg-main-color z-10">
        <div className="flex justify-center items-center">
          <img
            src={drugStoreImg}
            alt="drug_Store_img"
            className="w-[100px] h-[40px]"
          />
        </div>
      </div>
      <div className="h-full w-full pt-4 px-6 pb-8 flex flex-col items-start justify-start gap-8 ">
        {filteredTabs?.map((tab, index) => {
          return (
            <SideBarTab
              key={index}
              tab={tab}
              currentTab={currentTab}
              setCurrentTab={setCurrentTab}
              isCurrentTab={currentTab.first == tab.name}
              pathname={pathname}
              state={state}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
