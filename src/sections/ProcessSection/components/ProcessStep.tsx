import React from "react";

export type ProcessStepProps = {
  iconUrl: string;
  title: string;
  description: string;
  variant?: string;
};

export const ProcessStep = (props: ProcessStepProps) => {
  return (
    <li
      className={`box-border caret-transparent block max-w-full min-h-0 min-w-0 w-full mb-10 mx-0 px-5 md:box-content md:max-w-[360px] md:min-h-[auto] md:min-w-[auto] md:mb-[70px] md:mx-5 md:px-0 transition-all duration-300 hover:-translate-y-1 ${props.variant || ""}`}
    >
      <div className="caret-transparent">
        <div className="caret-transparent flex items-center mb-3">
          <img
            src={props.iconUrl}
            alt=""
            className="caret-transparent w-[35px] h-[35px] mr-3 md:w-[40px] md:h-[40px] md:mr-4"
          />
          <h3 className="text-sm font-semibold caret-transparent leading-[1.35] font-montserrat md:text-lg">
            {props.title}
          </h3>
        </div>
        <div className="text-xs font-light caret-transparent leading-[1.55] font-montserrat md:text-base">
          {props.description}
        </div>
      </div>
    </li>
  );
};
