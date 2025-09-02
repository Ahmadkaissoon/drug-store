import { Toaster } from "sonner";
import { FaCircleCheck, FaCircleXmark } from "react-icons/fa6";
import { PiInfo, PiSpinner } from "react-icons/pi";
import { LuX } from "react-icons/lu";

function SonnerToast() {
  return (
    <Toaster
      position={"top-right"}
      dir="rtl"
      className="translate-x-0 translate-none z-[30]"
      icons={{
        success: <FaCircleCheck className="!size-[22px] !text-accept-color" />,
        error: <FaCircleXmark className="!size-[22px] !text-error-color" />,
        loading: (
          <PiSpinner className="!size-[22px] animate-spin text-main-color" />
        ),
        info: <PiInfo className="!size-[22px] !text-yellow" />,
        close: (
          <LuX className="!size-[16px] !text-primary-icon hover:!text-error-color transition-all duration-[0.2s]" />
        ),
      }}
      toastOptions={{
        closeButton: true,
        classNames: {
          toast:
            "flex items-center bg-main-color sm:!w-[400px] !w-[calc(100vw_-_28px)] justify-between !gap-md !py-xl !border-0 !px-2xl rounded-lg !border-b-[5px] !h-auto",
          content:
            "flex-1 order-2 gap-3 text-size18 text-main-color !font-medium",
          icon: "order-1 !size-[22px] !min-w-[22px]",
          success:
            "hover:!opacity-90 !transition-all text-main-color !duration-[0.3s] !border-accept-color",
          error:
            "hover:!opacity-90 !transition-all text-main-color !duration-[0.3s] !border-error-color",
          loading:
            "hover:!opacity-90 !transition-all text-main-color !duration-[0.3s] !border-main-color",
        },
      }}
    />
  );
}

export default SonnerToast;
