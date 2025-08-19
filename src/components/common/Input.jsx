const Input = ({ className, type, ...props }) => {
  return (
    <input
      type={type}
      data-slot="input"
      className={`flex h-[53px] rounded-lg font-light bg-second-white-color text-main-color placeholder:text-placeholder-color outline-none text-base ${
        className || ""
      }`}
      {...props}
    />
  );
};

export default Input;
