import React from "react";
import { HeaderBar } from "@/sections/Header/components/HeaderBar";

export const HeaderContainer = () => {
  return (
    <div className="fixed caret-transparent w-full z-[99999] top-0">
      <div className="caret-transparent">
        <HeaderBar />
      </div>
    </div>
  );
};
