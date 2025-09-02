import { useState } from "react";
import { Link } from "react-router";
import { AnimatePresence, motion } from "framer-motion";
import { FaAngleLeft } from "react-icons/fa6";
import SideBarSubTab from "../sideBarSubTab/SideBarSubTab";
import { div } from "framer-motion/client";

const SideBarTab = ({
  tab,
  currentTab,
  setCurrentTab,
  isCurrentTab,
  pathname,
  state,
}) => {
  const [openSubTabs, setOpenSubTabs] = useState(isCurrentTab && !!tab.subTabs);
  return (
    <li
      className={` block shrink-0  ${
        isCurrentTab && !tab.subTabs
          ? "text-white-color bg-hover-color"
          : openSubTabs
          ? "text-white-color  text-opacity-50 "
          : "text-white-color text-opacity-70 hover:bg-hover-color"
      }  min-h-9 h-[max-content] w-full cursor-pointer transition-all flex flex-col items-start justify-center relative rounded-lg py-2 px-1`}
    >
      <Link
        to={tab.subTabs ? pathname : `/${tab.name}`}
        state={tab.subTabs ? state : { ...state }}
        className="w-full"
        onClick={
          tab.subTabs
            ? () => {}
            : () => {
                setCurrentTab({
                  ...currentTab,
                  first: tab.name,
                  sub: null,
                });
              }
        }
      >
        <div className={` flex gap-6 items-end justify-end  `}>
          <div className="flex items-center ">
            {tab.subTabs ? (
              <motion.div
                initial={{ rotate: 0 }}
                animate={{ rotate: openSubTabs ? 90 : 0 }}
                className="flex "
              >
                <FaAngleLeft className="text-size-30 mr-auto" />
              </motion.div>
            ) : null}
            <div className="flex items-center justify-center gap-6 ">
              <div className=" w-full text-size-24">{tab.show_name}</div>
              <span className="text-size-24">{tab.icon}</span>
            </div>

            <div
              id={`close-subtabs-of-${tab.name}`}
              onClick={() => setOpenSubTabs(!openSubTabs && tab.subTabs)}
              className="absolute w-full h-full top-0 right-0"
            ></div>
          </div>
        </div>
      </Link>

      <AnimatePresence>
        {tab.subTabs && openSubTabs && (
          <motion.ul
            initial={{ height: 0 }}
            animate={{ height: "max-content" }}
            exit={{ height: 0 }}
            className={
              "flex flex-col gap-1 py-2 px-4  bg-opacity-[0.01] w-[max-content] min-w-full mx-[2px] "
            }
          >
            {tab.subTabs.map((subTab, index) => {
              return (
                <SideBarSubTab
                  key={index}
                  subTab={subTab}
                  parentName={tab.name}
                  currentTab={currentTab}
                  setCurrentTab={setCurrentTab}
                  isCurrentTab={currentTab.sub == subTab.name}
                />
              );
            })}
          </motion.ul>
        )}
      </AnimatePresence>
    </li>
  );
};

export default SideBarTab;
