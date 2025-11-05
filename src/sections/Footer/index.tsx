import React from "react";
import { FooterContent } from "@/sections/Footer/components/FooterContent";

export const Footer = () => {
  return (
    <footer className="caret-transparent w-full">
      <div className="bg-neutral-900 caret-transparent py-[60px] max-w-[1920px] mx-auto">
        <div className="caret-transparent overflow-hidden">
          <FooterContent />
        </div>
      </div>
    </footer>
  );
};
