import { HeroButton } from "@/sections/Hero/components/HeroButton";

export const HeroContent = () => {
  return (
    <div className="static box-border caret-transparent w-full z-[1] py-[80px] md:relative md:py-[120px]">
      <div className="caret-transparent max-w-screen-sm w-full mx-auto md:max-w-[1200px] before:accent-auto before:caret-transparent before:text-black before:table before:text-base before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[normal] before:list-outside before:list-disc before:pointer-events-auto before:text-start before:indent-[0px] before:normal-case before:visible before:w-0 before:border-separate before:font-times_new_roman after:accent-auto after:caret-transparent after:clear-both after:text-black after:table after:text-base after:not-italic after:normal-nums after:font-normal after:tracking-[normal] after:leading-[normal] after:list-outside after:list-disc after:pointer-events-auto after:text-start after:indent-[0px] after:normal-case after:visible after:w-0 after:border-separate after:font-times_new_roman">
        <div className="box-border caret-transparent float-none max-w-full w-full mx-0 px-5 md:box-content md:float-left md:max-w-[560px] md:mx-5 md:px-0">
          <h1 className="text-white text-[32px] font-bold caret-transparent leading-[1.15] font-montserrat md:text-[62px]">
            Проектирование и производство
            <br className="caret-transparent" />
            реакторного и емкостного оборудования
          </h1>
          <div className="text-white text-lg caret-transparent leading-[1.55] pt-[30px] pb-[40px] font-montserrat md:text-2xl md:pt-10 md:pb-[50px]">
            Адаптируем производственные решения под вашу технологию. Полный цикл
            от проектирования до пусконаладочных работ.
          </div>
          <HeroButton />
        </div>
      </div>
    </div>
  );
};
