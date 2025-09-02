import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

function Filter({
  title,
  innerComponent,
  isAbsolute,
  keepValues = true,
  filter = {}, // Default empty object
}) {
  const [isOpened, setIsOpened] = useState(false);
  const [isDirty, setIsDirty] = useState(false);

  useEffect(() => {
    // Check if filter is valid object
    if (!filter || typeof filter !== "object" || Array.isArray(filter)) {
      setIsDirty(false);
      return;
    }

    // Check if any filter value is not empty
    const hasDirtyValues = Object.values(filter).some(
      (value) => value !== undefined && value !== null && value !== ""
    );

    setIsDirty(hasDirtyValues);
  }, [filter]);

  return (
    <div className="xl:col-span-3 col-span-5 bg-main-color relative shadow-shadow mb-4 rounded-full">
      <div
        className={`flex justify-between border-b border-solid cursor-pointer px-5 py-3 ${
          isOpened
            ? "rounded-t-lg border-main-color"
            : "rounded-lg border-transparent"
        } bg-main-color`}
        onClick={() => setIsOpened(!isOpened)}
      >
        <h4 className="text-size-20 leading-[1.2] font-[600] text-white-color flex justify-between items-center w-full">
          <motion.div
            initial={{ rotate: 0 }}
            animate={isOpened ? { rotate: "180deg" } : { rotate: 0 }}
            transition={{ duration: 0.3 }}
            className="flex justify-center items-center"
          >
            <MdOutlineKeyboardArrowDown className="text-white-color cursor-pointer text-size-30" />
          </motion.div>
          <div className="flex gap-2">
            {title}
            {isDirty && (
              <div className="w-[6px] h-[6px] rounded-full bg-accept-color"></div>
            )}
          </div>
        </h4>
      </div>

      {keepValues ? (
        <div
          className={`overflow-visible rounded-b-lg bg-hover-color z-[24] w-full shadow-shadow ${
            isAbsolute ? "absolute z-[24]" : "relative"
          } ${isOpened ? "h-max" : "h-0"}`}
        >
          <div
            className={`${
              isOpened ? "h-max py-5" : "h-0 overflow-hidden"
            } mx-5 `}
          >
            {innerComponent}
          </div>
        </div>
      ) : (
        <AnimatePresence>
          {isOpened && (
            <motion.div
              initial={{ height: 0, originY: 0 }}
              animate={{ height: "max-content", originY: 0 }}
              exit={{ height: 0, originY: 0 }}
              className={`overflow-auto rounded-b-lg bg-hover-color w-full shadow-shadow ${
                isAbsolute ? "absolute z-[24]" : "relative "
              }`}
            >
              <div className="m-5 h-max transition-all  duration-300">
                {innerComponent}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </div>
  );
}

export default Filter;
