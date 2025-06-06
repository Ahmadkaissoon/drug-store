import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { HiOutlineDotsHorizontal } from "react-icons/hi";

function ButtonsContainer({ children, type = "" }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div
        className={`${
          isOpen
            ? "fixed w-full z-[80] inset-0 bg-slate-500 opacity-40 duration-200 "
            : ""
        }`}
        onClick={() => setIsOpen(false)}
      ></div>
      <div className="fixed md:bottom-10 bottom-4 right-[350px] flex flex-col items-end justify-end gap-2  z-[99]">
        {isOpen && (
          <>
            {children}
            <div className="bg-slate-500 fixed"></div>
          </>
        )}

        <button
          onClick={toggleMenu}
          className="flex items-center justify-center bg-accept-color text-white w-12 aspect-square rounded-full shadow-shadow shadow-black transition duration-300 hover:brightness-90 cursor-pointer hover:rotate-180"
        >
          {type == "" ? <FaPlus /> : <HiOutlineDotsHorizontal />}
        </button>
      </div>
    </>
  );
}

export default ButtonsContainer;
