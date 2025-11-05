import { AdvantagesGrid } from "@/sections/AdvantagesSection/components/AdvantagesGrid";

export const AdvantagesSection = () => {
  return (
    <div className="caret-transparent w-full">
      <div className="relative bg-black caret-transparent min-h-[1400px] text-center align-middle w-full overflow-hidden md:min-h-[900px] max-w-[1920px] mx-auto">
        <div className="absolute bg-[url('https://optim.tildacdn.com/tild3262-6663-4137-b764-373837323766/-/format/webp/-1_1.jpg.webp')] bg-no-repeat bg-cover caret-transparent h-full align-middle w-full bg-center inset-0" style={{ backgroundAttachment: 'fixed' }}></div>
        <div className="absolute bg-[linear-gradient(to_bottom,rgba(159,0,31,1),rgba(159,0,31,1))] caret-transparent h-full w-full overflow-hidden left-0 top-0"></div>
        <div className="caret-transparent relative z-10">
          <div className="caret-transparent flex flex-col justify-center max-w-screen-sm w-full mx-auto md:max-w-[1200px]">
            <div className="items-center box-border caret-transparent flex flex-col shrink-0 w-full py-[60px] md:py-[45px]">
              <div className="caret-transparent mb-10 md:mb-[60px]">
                <div className="caret-transparent">
                  <h3 className="text-white text-3xl font-semibold caret-transparent leading-[36.9px] font-montserrat md:text-5xl md:leading-[59.04px]">
                    Почему выбирают нас
                  </h3>
                  <div className="text-white text-sm font-light caret-transparent leading-[20.3px] mt-10 font-montserrat md:text-lg md:leading-[27.9px]">
                    Преимущества, которые делают нас лидерами в производстве
                    технологического оборудования
                  </div>
                </div>
              </div>
              <AdvantagesGrid />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
