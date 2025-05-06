import Button from "../../../common/Button";
import { HiOutlineBellAlert } from "react-icons/hi2";
import { IoIosLogOut } from "react-icons/io";
const Header = () => {
  return (
    <div className="w-full h-[60px] flex items-center justify-start shadow  bg-second-white-color top-0 py-2.5 px-6">
      <div className="flex gap-8">
        <div className="w-full flex">
          <Button
            title="تسجيل الخروج"
            styleType="reg"
            color="not_color"
            Icon={<IoIosLogOut />}
            addingStyle="flex flex-nowrap gap-2 justify-center items-center "
          />
        </div>
        <div className="w-full flex justify-center items-center ">
          <HiOutlineBellAlert className="text-size-24 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Header;
