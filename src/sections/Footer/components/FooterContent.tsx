import React from "react";
import { FooterCopyright } from "@/sections/Footer/components/FooterCopyright";

export const FooterContent = () => {
  return (
    <div className="relative caret-transparent block h-auto w-full py-10 md:table md:h-[70px] md:py-0">
      <FooterCopyright />
    </div>
  );
};
