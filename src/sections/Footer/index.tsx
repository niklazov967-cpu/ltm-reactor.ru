import React from "react";
import { FooterContent } from "@/sections/Footer/components/FooterContent";

export const Footer = () => {
  return (
    <footer className="caret-transparent w-full">
      <div className="bg-neutral-900 caret-transparent py-[60px] w-full">
        <div className="caret-transparent overflow-hidden">
          <FooterContent />
        </div>
      </div>
    </footer>
  );
};
