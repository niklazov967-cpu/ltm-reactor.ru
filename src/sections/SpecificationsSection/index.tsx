import React from "react";
import { SpecCard } from "@/sections/SpecificationsSection/components/SpecCard";

export const SpecificationsSection = () => {
  return (
    <div className="caret-transparent w-full">
      <div className="caret-transparent max-w-[1920px] mx-auto">
        <div className="relative bg-white caret-transparent min-h-[1400px] w-full overflow-hidden md:min-h-[900px]">
          <div className="absolute bg-[url('https://optim.tildacdn.com/tild3035-6330-4630-b063-316466356464/-/format/webp/---.png.webp')] bg-no-repeat bg-cover caret-transparent h-full w-full z-0 bg-center left-0 top-0"></div>
          <div className="absolute caret-transparent h-full w-full z-[1] left-0 top-0"></div>
          
          <div className="relative caret-transparent z-[3] py-[60px] md:py-[90px]">
            <div className="caret-transparent max-w-screen-sm w-full mx-auto px-5 md:max-w-[1200px]">
              <div className="text-white box-border caret-transparent text-center mb-10 md:mb-[60px]">
                <h2 className="text-[28px] font-semibold bg-cover caret-transparent leading-[1.2] text-center w-full font-montserrat md:text-[52px]">
                  Технические характеристики
                </h2>
                <h3 className="text-sm bg-cover caret-transparent leading-[1.55] mt-5 text-center w-full font-montserrat md:text-xl md:mt-3">
                  Мы готовы реализовать проекты любой сложности, учитывая ваши
                  уникальные требования
                </h3>
              </div>

              <div className="caret-transparent flex flex-wrap justify-center gap-y-5 md:gap-y-10">
                <SpecCard
                  title="Объем"
                  description="от 50 л до 50 м³+"
                  iconUrl="https://c.animaapp.com/mhl4okafNtEOeg/assets/-5.svg"
                />
                <SpecCard
                  title="Давление"
                  description="от вакуума до 100 атм"
                  iconUrl="https://c.animaapp.com/mhl4okafNtEOeg/assets/-4.svg"
                />
                <SpecCard
                  title="Температура"
                  description="от -50°C до +400°C"
                  iconUrl="https://c.animaapp.com/mhl4okafNtEOeg/assets/-.svg"
                />
                <SpecCard
                  title="Материалы"
                  description="сталь, нержавейка, Hastelloy"
                  iconUrl="https://c.animaapp.com/mhl4okafNtEOeg/assets/-3.svg"
                />
              </div>

              <div className="caret-transparent mt-10 md:mt-[60px]">
                <div className="relative bg-zinc-900 box-border caret-transparent w-full border-stone-300 rounded-[30px] border-2 border-solid p-[30px] md:p-10">
                  <div className="text-white text-2xl font-bold caret-transparent leading-[1.2] text-center mb-5 font-montserrat md:text-[32px] md:mb-6">
                    Материалы исполнения
                  </div>
                  <div className="text-white caret-transparent leading-[1.55] text-center font-montserrat md:text-lg">
                    Углеродистая сталь, нержавеющая сталь 12Х18Н10Т, специальные
                    сплавы типа Hastelloy и другие материалы в зависимости от
                    требований вашего технологического процесса
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
