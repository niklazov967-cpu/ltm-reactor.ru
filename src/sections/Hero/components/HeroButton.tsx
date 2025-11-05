export const HeroButton = () => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.querySelector('#rec1388869181');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <a
      href="#rec1388869181"
      onClick={handleClick}
      className="relative text-white font-semibold items-center bg-zinc-900 box-border caret-transparent gap-x-[5.38401px] inline-flex isolate justify-center leading-[22.4px] max-w-full gap-y-[5.38401px] text-center align-middle overflow-hidden px-[30px] py-[18.8px] rounded-[30px] font-montserrat md:px-[60px] transition-all duration-300 hover:bg-zinc-800 hover:shadow-lg"
    >
      <span className="caret-transparent block max-w-full text-ellipsis overflow-hidden relative z-10">
        Получить консультацию
      </span>
      <div className="absolute caret-transparent h-full w-full left-0 top-0 animate-shimmer">
        <div className="absolute bg-[linear-gradient(90deg,rgba(255,255,255,0.1),rgba(255,255,255,0.4))] caret-transparent h-full w-[45px] left-[-45px] top-0 animate-slide"></div>
      </div>
    </a>
  );
};
