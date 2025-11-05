import React from "react";

export const HeaderLogo = () => {
  return (
    <div className="absolute box-border caret-transparent flex items-center w-[75px] z-[3] left-[15px] h-[70px] top-0 md:w-[110px] md:left-1/2 md:-translate-x-[564px] md:h-[100px]">
      <a
        href="https://ltm-pump.ru/"
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
