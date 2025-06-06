import Button from "../Button";
import { AnimatePresence, motion } from "framer-motion";
import { FaXmark } from "react-icons/fa6";

export function PopupContainer({
  setIsModalOpen,
  isModalOpen,
  component,
  closeButtonTitle,
  hasCloseButton,
  addingStyle,
  zIndex = 27,
  keepData = false,
  addingModalStyle = "",
  onClose = () => {},
  onCloseData,
}) {
  const handleCloseModal = () => {
    setIsModalOpen(false);
    onClose(onCloseData);
  };

  return !keepData ? (
    <AnimatePresence>
      {isModalOpen ? (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, type: "spring" }}
            className={`-translate-x-[50%] top-[50%] -translate-y-[50%] fixed left-[50%]  ${addingStyle}`}
            style={{ zIndex: zIndex + 1 }}
          >
            <div
              className={`${addingModalStyle} p-8 bg-main-color rounded-lg  sm:w-max w-[90vw] relative border-4 border-solid border-hover-color`}
            >
              <motion.div
                initial={{
                  color: "#e40000",
                  opacity: 0.6,
                  rotate: 0,
                }}
                whileHover={{
                  color: "#e40000",
                  opacity: 0.5,
                  rotate: "180deg",
                }}
                transition={{ duration: 0.05, ease: "linear" }}
                className="absolute top-4 left-4 text-opacity-60 cursor-pointer hover:text-opacity-100 transition-all duration-[0.2s] text-size-20"
                onClick={handleCloseModal}
              >
                <FaXmark />
              </motion.div>
              {component}
              {hasCloseButton ? (
                <div>
                  <Button
                    title={closeButtonTitle ? closeButtonTitle : "إغلاق"}
                    onClickFun={() => setIsModalOpen(false)}
                  />
                </div>
              ) : null}
            </div>
          </motion.div>
          <div
            onClick={handleCloseModal}
            className={`fixed inset-0 bg-[#000000a9] w-full h-full ${addingStyle}`}
            style={{ zIndex: zIndex }}
          ></div>
        </>
      ) : null}
    </AnimatePresence>
  ) : (
    <>
      <div
        className={`-translate-x-[50%] top-[50%] -translate-y-[50%] fixed left-[50%] ${
          isModalOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        } transition-all ${addingStyle}`}
        style={{ zIndex: zIndex + 1 }}
      >
        <div
          className={`${
            addingModalStyle ? addingModalStyle : "p-8"
          } bg-main-color rounded-lg component-shadow sm:w-max w-[90vw] relative border-4 border-solid border-hover-color`}
        >
          <motion.div
            initial={{
              color: "#e40000",
              opacity: 0.6,
              rotate: 0,
            }}
            whileHover={{
              color: "#e40000",
              opacity: 0.5,
              rotate: "180deg",
            }}
            transition={{ duration: 0.05, ease: "linear" }}
            className="absolute top-4 left-4 text-opacity-60 cursor-pointer hover:text-opacity-100 transition-all duration-[0.2s] text-size-20"
            onClick={handleCloseModal}
          >
            <FaXmark />
          </motion.div>
          {/* the component in the modal */}
          {component}
          {/* close button */}
          {hasCloseButton ? (
            <div>
              <Button
                title={closeButtonTitle ? closeButtonTitle : "إغلاق"}
                onClickFun={() => setIsModalOpen(false)}
              />
            </div>
          ) : null}
        </div>
      </div>
      <div
        onClick={handleCloseModal}
        className={`fixed inset-0 bg-[#000000a9] w-full h-full ${
          isModalOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        } transition-all ${addingStyle}`}
        style={{ zIndex: zIndex }}
      ></div>
    </>
  );
}
