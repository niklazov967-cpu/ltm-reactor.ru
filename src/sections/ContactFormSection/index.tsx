import { ContactForm } from "@/sections/ContactFormSection/components/ContactForm";

export const ContactFormSection = () => {
  return (
    <div className="caret-transparent w-full" id="rec1388869181">
      <div className="relative bg-black caret-transparent h-[1114px] text-center align-middle w-full overflow-hidden md:h-[1165px] max-w-[1920px] mx-auto">
        <div className="absolute bg-fixed bg-[url('https://c.animaapp.com/mhl4okafNtEOeg/assets/IMG_20251003_104509_.jpg.webp')] bg-no-repeat bg-cover caret-transparent h-full align-middle w-full bg-center inset-0"></div>
        <div className="absolute bg-[linear-gradient(to_bottom,rgba(159,0,31,0.9),rgba(159,0,31,0.9))] caret-transparent h-full w-full left-0 top-0"></div>
        <div className="caret-transparent relative z-10">
          <div className="caret-transparent max-w-screen-sm w-full mx-auto md:max-w-[1200px] before:accent-auto before:caret-transparent before:text-black before:table before:text-base before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[normal] before:list-outside before:list-disc before:pointer-events-auto before:text-center before:indent-[0px] before:normal-case before:visible before:w-0 before:border-separate before:font-times_new_roman after:accent-auto after:caret-transparent after:clear-both after:text-black after:table after:text-base after:not-italic after:normal-nums after:font-normal after:tracking-[normal] after:leading-[normal] after:list-outside after:list-disc after:pointer-events-auto after:text-center after:indent-[0px] after:normal-case after:visible after:w-0 after:border-separate after:font-times_new_roman">
            <div className="caret-transparent max-w-[940px] w-full mx-auto md:max-w-[1160px]">
              <div className="caret-transparent table-cell h-[1114px] align-middle w-[1200px] md:h-[1165px]">
                <div className="box-border caret-transparent w-full overflow-hidden px-5 md:box-content md:w-auto md:overflow-visible">
                  <h3 className="text-white text-[28px] font-semibold caret-transparent leading-[1.2] mb-5 font-montserrat md:text-[52px] md:mb-10">
                    Получите консультацию инженера
                  </h3>
                  <div className="text-white text-base caret-transparent leading-[1.55] mb-[30px] font-montserrat md:text-xl md:mb-[50px]">
                    Оставьте заявку, и наш специалист свяжется с вами, чтобы
                    обсудить ваши задачи и предложить оптимальное техническое
                    решение
                  </div>
                  <div className="caret-transparent">
                    <ContactForm />
                  </div>
                  <div className="text-white text-xs font-light caret-transparent leading-[17.4px] my-[30px] font-montserrat md:text-[15px] md:leading-[23.25px]">
                    Нажимая на кнопку, вы даете согласие на обработку
                    персональных данных в соответствии с политикой
                    конфиденциальности
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
