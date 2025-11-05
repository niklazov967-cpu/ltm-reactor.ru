import React from "react";

export type CompetencyCardProps = {
  iconVariant: string;
  title: string;
  description: string;
};

export const CompetencyCard = (props: CompetencyCardProps) => {
  return (
    <li className="box-border caret-transparent flex float-none max-w-full w-full mb-[30px] mx-0 px-5 md:box-content md:float-left md:max-w-[560px] md:mx-5 md:px-0">
      <div className="bg-white box-border caret-transparent w-full p-[30px] rounded-[30px] shadow-sm md:p-10 transition-all duration-300 hover:shadow-[0_10px_40px_rgba(0,0,0,0.15)] hover:-translate-y-2">
        <div className="items-center caret-transparent flex text-left w-full">
          <div
            className={`bg-no-repeat bg-contain caret-transparent shrink-0 h-[50px] w-[50px] mr-3 md:h-[60px] md:w-[60px] md:mr-5 ${props.iconVariant}`}
          ></div>
          <div className="caret-transparent grow">
            <div className="text-lg font-semibold caret-transparent leading-[1.35] font-montserrat md:text-xl">
              {props.title}
            </div>
            <div className="text-neutral-500 text-xl caret-transparent leading-[31px] font-montserrat"></div>
          </div>
        </div>
        <div className="caret-transparent text-left mt-[20px] md:mt-[25px]">
          <div className="text-base font-light caret-transparent leading-[1.55] font-montserrat md:text-lg">
            {props.description}
          </div>
        </div>
      </div>
    </li>
  );
};
