import React from "react";

export const HeaderPhone = () => {
  return (
    <div className="absolute text-white box-border caret-transparent flex items-center h-[70px] text-right w-auto z-[3] right-[60px] top-0 md:h-[100px] md:right-0 lg:right-0 xl:right-[40px]">
      <a
        href="tel://88126128187"
        className="text-xs font-medium caret-transparent whitespace-nowrap bg-center font-montserrat md:text-sm lg:text-base xl:text-lg"
      >
        +7 (812) 612-81-87
      </a>
    </div>
  );
};
