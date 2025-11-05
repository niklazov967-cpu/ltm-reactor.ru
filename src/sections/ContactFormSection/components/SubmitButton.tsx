export const SubmitButton = () => {
  return (
    <button
      type="submit"
      className="relative text-white font-semibold items-center bg-zinc-900 caret-transparent gap-x-[5.38401px] inline-flex isolate justify-center leading-[22.4px] max-w-full gap-y-[5.38401px] text-wrap w-full overflow-hidden px-[30px] py-[16.8px] rounded-[30px] font-montserrat md:text-nowrap md:px-[60px] transition-all duration-300 hover:bg-zinc-800 hover:shadow-lg"
    >
      <span className="caret-transparent block max-w-full text-ellipsis text-wrap overflow-hidden md:text-nowrap relative z-10">
        Отправить заявку
      </span>
      <div className="absolute caret-transparent h-full text-wrap w-full left-0 top-0 md:text-nowrap">
        <div className="absolute bg-[linear-gradient(90deg,rgba(255,255,255,0.1),rgba(255,255,255,0.4))] caret-transparent h-full text-wrap w-[45px] left-[-45px] top-0 md:text-nowrap animate-slide"></div>
      </div>
    </button>
  );
};
