import React from "react";

const Page = ({ children }) => {
  return (
    <div
      className="
      flex
          flex-1 
          overflow-y-auto 
          px-4 md:px-8
          bg-backgroundColor
            min-w-0
        "
    >
      <div className="w-full overflow-x-auto">{children}</div>
    </div>
  );
};

export default Page;
