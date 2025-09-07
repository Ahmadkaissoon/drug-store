import Button from "../../../common/Button";
import { HiOutlineBellAlert } from "react-icons/hi2";
import { IoIosLogIn, IoIosLogOut } from "react-icons/io";
import HeaderNotification from "./HeaderNotification";
import useLogoutMutation from "../../../../hooks/auth/useLogoutMutation";
import { useUser } from "../../../../context/useUser";
import { useNavigate } from "react-router";
const Header = () => {
  const { handleLogout, logout } = useLogoutMutation();
  const { user } = useUser();
  const navigate = useNavigate();
  return (
    <div className="w-full h-[60px] flex items-center justify-start shadow  bg-second-white-color top-0 py-2.5 px-6">
      <div className="flex gap-8">
        <div className="w-full flex">
          {user ? (
            <Button
              title="تسجيل الخروج"
              styleType="reg"
              onClickFun={() => {
                handleLogout();
              }}
              color="not_color"
              disabled={logout?.isPending}
              Icon={<IoIosLogOut />}
              addingStyle="flex flex-nowrap gap-2 justify-center items-center "
            />
          ) : (
            <Button
              title="تسجيل الدخول"
              styleType="reg"
              onClickFun={() => {
                navigate("/login");
              }}
              color="accept_color"
              Icon={<IoIosLogIn />}
              addingStyle="flex flex-nowrap gap-2 justify-center items-center "
            />
          )}
        </div>
        <div className="w-full flex justify-center items-center ">
          <HeaderNotification />
        </div>
      </div>
    </div>
  );
};

export default Header;
