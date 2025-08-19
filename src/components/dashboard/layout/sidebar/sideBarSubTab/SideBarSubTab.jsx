import { FaAngleLeft } from "react-icons/fa6";
import { Link } from "react-router";

const SideBarSubTab = ({
  subTab,
  parentName,
  currentTab,
  setCurrentTab,
  isCurrentTab,
}) => {
  return (
    <Link
      to={`/${parentName}/${subTab.name}`}
      className="w-full"
      onClick={() => {
        setCurrentTab({
          ...currentTab,
          first: parentName,
          sub: subTab?.name,
        });
      }}
    >
      <li
        className={` ${
          isCurrentTab
            ? "text-white-color bg-hover-color"
            : "text-white-color text-opacity-70 hover:bg-hover-color hover:text-opacity-50"
        } cursor-pointer transition-all flex items-center gap-3 p-2 text-size-18 relative rounded-lg  `}
      >
        <div className="relative flex gap-3 items-center w-full justify-end">
          <div className=" w-[max-content]">{subTab.show_name}</div>
        </div>
      </li>
    </Link>
  );
};

export default SideBarSubTab;
