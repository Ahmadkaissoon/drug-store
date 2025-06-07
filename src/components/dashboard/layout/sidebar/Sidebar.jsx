import { useEffect, useState } from "react";
import drugStoreImg from "../../../../assets/common/images/drugStoreImg.jpg";
import TABS from "../../../../data/dashboard/tabsList/TABS";
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
      <div className="h-full w-full pt-4 px-6 pb-8 flex flex-col items-start justify-start gap-8">
        {TABS?.map((tab, index) => {
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
