import React from "react";
import { HeaderPhone } from "@/sections/Header/components/HeaderPhone";
import { DesktopNav } from "@/sections/Header/components/DesktopNav";
import { HeaderLogo } from "@/sections/Header/components/HeaderLogo";
import { MobileMenu } from "@/sections/Header/components/MobileMenu";

export const HeaderBar = () => {
  return (
    <div className="absolute caret-transparent h-[70px] w-full z-[990] overflow-visible md:h-[100px]">
      <div className="absolute bg-[#9f001f] caret-transparent h-[70px] w-full z-[1] left-0 top-0 md:h-[100px]"></div>
      <HeaderPhone />
      <DesktopNav />
      <HeaderLogo />
      <MobileMenu />
    </div>
  );
};
