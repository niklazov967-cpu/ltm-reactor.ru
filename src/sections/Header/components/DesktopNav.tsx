import React from "react";

export const DesktopNav = () => {
  return (
    <div className="absolute caret-transparent hidden h-[100px] top-0 w-min z-[3] left-[1249.5px] md:flex md:left-1/2 md:-translate-x-1/2">
      <div className="relative content-start items-center box-border caret-transparent gap-x-[15px] flex h-full justify-start min-h-[auto] min-w-[auto] w-full md:gap-x-[20px] md:min-h-0 md:min-w-0 lg:gap-x-[35px] xl:gap-x-[50px]">
        <div className="relative text-white box-border caret-transparent table shrink-0 h-[70px] text-right w-[158px] z-[3] md:h-auto md:text-center md:w-auto">
          <div className="text-lg font-medium bg-cover caret-transparent table-cell leading-[21px] text-right text-wrap align-middle w-full bg-center font-montserrat md:bg-auto md:text-center md:text-nowrap">
            <a
              href="/#rec1388514251"
              className="caret-transparent text-right text-wrap md:text-center md:text-nowrap"
            >
              Продукция
            </a>
          </div>
        </div>
        <div className="relative text-white box-border caret-transparent flex items-center shrink-0 h-full z-[3]">
          <a
            href="/#rec1388514251"
            className="text-sm font-medium caret-transparent whitespace-nowrap font-montserrat md:text-base lg:text-lg"
          >
            Продукция
          </a>
        </div>
        <div className="relative text-white box-border caret-transparent flex items-center shrink-0 h-full z-[3]">
          <a
            href="/#rec1388722421"
            className="text-sm font-medium caret-transparent whitespace-nowrap font-montserrat md:text-base lg:text-lg"
          >
            О компании
          </a>
        </div>
        <div className="relative text-white box-border caret-transparent flex items-center shrink-0 h-full z-[3]">
          <a
            href="/blog"
            className="text-sm font-medium caret-transparent whitespace-nowrap font-montserrat md:text-base lg:text-lg"
          >
            Статьи
          </a>
        </div>
        <div className="relative text-white box-border caret-transparent flex items-center shrink-0 h-full z-[3]">
          <a
            href="/#rec1388869181"
            className="text-sm font-medium caret-transparent whitespace-nowrap font-montserrat md:text-base lg:text-lg"
          >
            Контакты
          </a>
        </div>
      </div>
    </div>
  );
};
