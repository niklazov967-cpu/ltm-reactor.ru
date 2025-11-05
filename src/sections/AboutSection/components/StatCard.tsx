export type StatCardProps = {
  value: string;
  description: string;
  variant?: string;
};

export const StatCard = (props: StatCardProps) => {
  return (
    <li
      className={`box-border caret-transparent block max-w-full w-full mx-0 px-5 md:box-content md:max-w-[360px] md:mx-5 md:px-0${props.variant ? ` ${props.variant}` : ""}`}
    >
      <div className="text-[#9f001f] text-[32px] font-semibold caret-transparent leading-[1.2] text-center pt-2 pb-1.5 font-montserrat md:text-[52px]">
        {props.value}
      </div>
      <hr className="relative text-zinc-500 bg-black caret-transparent h-px opacity-20 w-full mx-auto my-3.5" />
      <div className="text-lg caret-transparent leading-[1.55] text-center pt-1 pb-1.5 font-montserrat md:text-xl">
        {props.description}
      </div>
    </li>
  );
};
