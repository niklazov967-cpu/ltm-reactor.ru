import React from "react";

export const HeaderLogo = () => {
  return (
    <div className="absolute box-border caret-transparent flex items-center w-[60px] z-[3] left-0 h-[70px] top-0 md:w-[70px] md:left-0 md:h-[100px] lg:w-[90px] lg:left-0 xl:w-[110px] xl:left-[40px]">
      <a
        href="https://ltm-reactor.ru/"
        className="text-[#9f001f] caret-transparent table-cell align-middle w-full bg-center"
      >
        <img
          src="https://c.animaapp.com/mhl4okafNtEOeg/assets/logo_black.svg"
          alt=""
          className="caret-transparent w-full"
        />
      </a>
    </div>
  );
};
