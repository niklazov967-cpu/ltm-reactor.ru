import React from "react";

export const HeaderPhone = () => {
  return (
    <div className="absolute text-white box-border caret-transparent flex items-center h-[70px] text-right w-[120px] z-[3] right-[60px] top-0 md:h-[100px] md:w-[195px] md:left-1/2 md:translate-x-[419px] md:right-auto">
      <div className="text-base font-medium bg-cover caret-transparent leading-[18px] w-full bg-center font-montserrat md:text-lg md:bg-auto md:leading-[27px]">
        <span className="text-base caret-transparent leading-[18px] md:text-lg md:leading-[27px]">
          +7
        </span>
        <a
          href="tel://88126402250"
          className="text-base caret-transparent leading-[18px] md:text-lg md:leading-[27px]"
        ></a>
        <a
          href="tel://88126402250"
          className="text-base caret-transparent leading-[18px] md:text-lg md:leading-[27px]"
        >
          (812) 612-81-
        </a>
        <span className="text-base caret-transparent leading-[18px] md:text-lg md:leading-[27px]">
          87
        </span>
      </div>
    </div>
  );
};
