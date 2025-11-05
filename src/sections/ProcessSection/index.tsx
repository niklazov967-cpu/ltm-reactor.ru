import React from "react";
import { ProcessGrid } from "@/sections/ProcessSection/components/ProcessGrid";

export const ProcessSection = () => {
  return (
    <div className="bg-white caret-transparent w-full py-[60px] md:py-[120px]">
      <div className="max-w-[1920px] mx-auto">
        <div className="caret-transparent">
          <div className="caret-transparent block max-w-screen-sm w-full mx-auto md:flex md:max-w-[1200px]">
            <div className="box-border caret-transparent float-none max-w-full min-h-0 min-w-0 w-full mx-0 px-5 md:box-content md:float-left md:max-w-[1160px] md:min-h-[auto] md:min-w-[auto] md:mx-5 md:px-0">
              <h2 className="text-zinc-900 text-[28px] font-bold caret-transparent leading-[1.2] text-center mx-auto font-montserrat md:text-[52px]">
                Как мы работаем
              </h2>
              <div className="text-zinc-900 text-base caret-transparent leading-[1.55] text-center mx-auto pt-5 pb-10 font-montserrat md:text-xl md:pt-[15px]">
                Прозрачный и структурированный процесс от первой консультации до
                запуска оборудования
              </div>
            </div>
          </div>
          <ProcessGrid />
        </div>
      </div>
    </div>
  );
};
