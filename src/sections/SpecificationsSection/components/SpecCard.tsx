import React from "react";

export type SpecCardProps = {
  title: string;
  description: string;
  iconUrl: string;
};

export const SpecCard = (props: SpecCardProps) => {
  return (
    <div className="box-border caret-transparent block max-w-full w-full mx-0 px-5 md:box-content md:max-w-[270px] md:mx-5 md:px-0">
      <div className="relative bg-zinc-900 box-border caret-transparent h-[170px] w-full border-stone-300 rounded-[30px] border-2 border-solid md:h-[215px]">
        <div className="absolute box-border caret-transparent table w-[50px] z-[3] left-1/2 -translate-x-1/2 top-[25px] md:w-[78px] md:top-[25px]">
          <div className="caret-transparent table-cell align-middle w-full bg-center">
            <img
              src={props.iconUrl}
              alt=""
              className="caret-transparent w-full"
            />
          </div>
        </div>
        <div className="absolute text-white box-border caret-transparent table h-7 text-center z-[3] w-full left-0 top-[85px] md:h-9 md:top-[105px]">
          <div className="caret-transparent table-cell leading-[25px] align-middle w-full bg-center font-montserrat">
            {props.title}
          </div>
        </div>
        <div className="absolute text-white text-lg font-semibold box-border caret-transparent table text-center z-[3] w-full px-5 left-0 top-[110px] md:top-[135px]">
          <div className="caret-transparent table-cell leading-7 align-middle w-full bg-center font-montserrat">
            {props.description}
          </div>
        </div>
      </div>
    </div>
  );
};
