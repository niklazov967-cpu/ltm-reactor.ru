import React from "react";
import { FooterCopyright } from "@/sections/Footer/components/FooterCopyright";

export const FooterContent = () => {
  return (
    <div className="relative caret-transparent block h-auto w-full py-10 md:table md:h-auto md:py-8">
      <div className="caret-transparent w-full mx-auto px-5">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 max-w-[1200px] mx-auto">
          <div className="text-white text-center md:text-left flex flex-col md:flex-row md:items-center md:gap-6">
            <div className="text-xs font-semibold caret-transparent leading-[16.2px] uppercase font-montserrat md:text-sm md:leading-[18.9px] mb-3 md:mb-0">
              © ООО «ЛТМ» 2025
            </div>
            <a
              href="tel://88126128187"
              className="text-xs font-semibold caret-transparent whitespace-nowrap uppercase font-montserrat md:text-sm md:leading-[18.9px]"
            >
              +7 (812) 612-81-87
            </a>
          </div>
          
          <div className="text-center">
            <a
              href="/privacy"
              className="text-[#9f001f] text-xs font-semibold caret-transparent leading-[16.2px] uppercase font-montserrat hover:underline md:text-sm md:leading-[18.9px]"
            >
              Политика конфиденциальности
            </a>
          </div>
          
          <div className="text-center md:text-right">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="relative text-white text-xs font-semibold caret-transparent inline-block leading-[16.2px] pr-3 font-montserrat hover:underline md:text-sm md:leading-[18.9px]"
            >
              Наверх
              <span className="absolute caret-transparent block right-0 top-0.5">
                <svg width="5" height="17" viewBox="0 0 5 17" fill="currentColor">
                  <path d="M2.5 0L5 3H0L2.5 0Z"/>
                </svg>
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
