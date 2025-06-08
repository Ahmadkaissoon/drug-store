/* Button component
  gets: (isLink) flag to specify if button causes routing or not,
  (goto) the destination url if the button is routing button,
  (linkState) state that passed in link
  (Icon) optional icon appears in button,
  (title) title of button,
  (styleType) type of button style,
  (color) optional custom color of button,
  (width) width of button,
  (onClickFun) optional onclick function if the button is not routing button or submit button,
  (isSubmit) flag to specify if the button is submit button,
  (formId) form id that this button submit,
  (disabled) flag to specify if the button is disabled or enabled
  (customStyle) customStyle for append any custom style of button,
  (hoverTitle) hoverTitle for title to show on hover on button
  (addingStyle) style adding to the default style type
  (dontShowPopupTitle) flag to disable displaying the popup title over the button in the table style type
*/

import { Link } from "react-router";

const Button = ({
  isLink,
  goto = "",
  linkState,
  Icon,
  title,
  styleType = "table",
  color = "main_color",
  width = "w-max",
  onClickFun,
  isSubmit,
  formId,
  disabled,
  customStyle,
  hoverTitle,
  addingStyle,
  dontShowPopupTitle,
  textSize = "text-size-16",
  startTransition = () => {},
}) => {
  // customizing colors of the button choices
  const bgColors = {
    main_color: "bg-main-color",
    white_color: "bg-withe-color",
    second_white_color: "bg-second-white-color",
    hover_color: "bg-hover-color",
    error_color: "bg-error-color",
    not_color: "bg-not-color",
    accept_color: "bg-accept-color",
    placeholder_color: "bg-placeholder-color",
  };
  const borderColors = {
    main_color: "border-main-color",
    white_color: "border-withe-color",
    second_white_color: "border-second-white-color",
    hover_color: "border-hover-color",
    error_color: "border-error-color",
    not_color: "border-not-color",
    accept_color: "border-accept-color",
    placeholder_color: "border-placeholder-color",
  };
  const textColors = {
    main_color: "hover:text-main-color",
    white_color: "hover:text-withe-color",
    second_white_color: "hover:text-second-white-color",
    hover_color: "hover:text-hover-color",
    error_color: "hover:text-error-color",
    not_color: "hover:text-not-color",
    accept_color: "hover:text-accept-color",
    placeholder_color: "hover:text-placeholder-color",
  };

  const STYLE = `relative ${
    customStyle
      ? customStyle
      : styleType == "form"
      ? `${bgColors[color]} border ${borderColors[color]} ${textColors[color]} p-4 rounded-full ${width} ${textSize} font-normal text-white-color shadow-shadow hover:bg-transparent duration-300`
      : styleType == "table"
      ? `${bgColors[color]} border ${borderColors[color]} ${textColors[color]} px-4 py-2 rounded-md ${width} text-size-16 font-normal text-white-color hover:bg-transparent duration-300`
      : styleType == "reg"
      ? `${bgColors[color]} w-full flex flex-nowrap items-center justify-center gap-2 border ${borderColors[color]} ${textColors[color]} p-2.5 text-size-16  rounded-full ${width} font-semibold text-white-color shadow-shadow hover:bg-transparent duration-300`
      : ""
  } ${
    disabled
      ? "brightness-75 cursor-not-allowed"
      : " brightness-100 cursor-pointer"
  } hover:brightness-150 transition-all duration-[0.3s] ${addingStyle}`;

  return isLink ? (
    <Link
      title={title}
      role={"button"}
      href={goto}
      state={linkState}
      disabled={disabled}
      className={STYLE}
      onClick={() => {
        startTransition(() => {});
      }}
    >
      {/* button text content */}
      <span>{title}</span>

      {/* button icon */}
      {Icon && <span>{Icon}</span>}
      <button
        role={"button"}
        disabled={disabled}
        className={`absolute top-0 right-0  h-full w-full ${
          disabled ? "cursor-not-allowed" : ""
        }`}
      ></button>
    </Link>
  ) : isSubmit ? (
    // submit button section
    <button
      title={title}
      role={"button"}
      disabled={disabled}
      id={formId} // for submitting the form that has id (formId)
      className={STYLE}
    >
      {/* button text content */}
      <span>{title}</span>

      {/* button icon */}
      {Icon && <span>{Icon}</span>}
    </button>
  ) : (
    // normal button section
    <button
      title={title}
      role={"button"}
      onClick={
        disabled
          ? null
          : (e) => {
              e.preventDefault();
            }
      }
      disabled={disabled}
      className={STYLE}
    >
      {/* button text content */}
      <span>{title}</span>

      {/* button icon */}
      {Icon && <span>{Icon}</span>}

      {/* div to handle click on it */}
      <div
        role={"button"}
        onClick={
          disabled
            ? null
            : (e) => {
                e.preventDefault();
                if (typeof onClickFun === "function") {
                  onClickFun(e);
                }
              }
        }
        className={` absolute top-0 right-0 h-full w-full opacity-0 ${
          disabled ? "cursor-not-allowed" : ""
        }`}
      ></div>
    </button>
  );
};

export default Button;
