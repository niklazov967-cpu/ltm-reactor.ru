import React from "react";

export const ScrollToTop = () => {
  return (
    <div className="caret-transparent block text-center align-middle w-full md:table-cell md:text-start md:w-auto">
      <div className="caret-transparent text-center w-full md:text-right md:w-[250px]">
        <a
          href="javascript://t389_scrollToTop();"
          className="relative text-white text-sm font-semibold caret-transparent inline-block leading-[18.9px] text-center pr-3 font-montserrat md:text-right"
        >
          Наверх
          <span className="absolute caret-transparent block text-center right-0 top-0.5 md:text-right">
            <img
              src="https://c.animaapp.com/mhl4okafNtEOeg/assets/icon-1.svg"
              alt="Icon"
              className="caret-transparent h-[17px] text-center w-[5px] md:text-right"
            />
          </span>
        </a>
      </div>
    </div>
  );
};
