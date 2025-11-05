import { ContactForm } from "@/sections/ContactFormSection/components/ContactForm";

import { FormField } from "@/sections/ContactFormSection/components/FormField";
import { SubmitButton } from "@/sections/ContactFormSection/components/SubmitButton";

export const ContactFormSection = () => {
  return (
    <div className="caret-transparent w-full" id="rec1388869181">
      <div className="relative bg-black caret-transparent min-h-[1114px] text-center align-middle w-full overflow-hidden md:min-h-[1165px] max-w-[1920px] mx-auto">
        <div 
          className="absolute bg-[url('https://c.animaapp.com/mhl4okafNtEOeg/assets/IMG_20251003_104509_.jpg.webp')] bg-no-repeat bg-cover caret-transparent h-full align-middle w-full bg-center inset-0"
          style={{ backgroundAttachment: 'fixed' }}
        ></div>
        <div className="absolute bg-[linear-gradient(to_bottom,rgba(159,0,31,0.9),rgba(159,0,31,0.9))] caret-transparent h-full w-full left-0 top-0 z-[1]"></div>
        <div className="caret-transparent relative z-10">
          <div className="caret-transparent max-w-screen-sm w-full mx-auto md:max-w-[1200px]">
            <div className="caret-transparent py-[60px] md:py-[90px]">
              <div className="box-border caret-transparent w-full px-5 md:w-auto">
                <h3 className="text-white text-[28px] font-semibold caret-transparent leading-[1.2] mb-5 font-montserrat md:text-[52px] md:mb-10">
                  Получите консультацию инженера
                </h3>
                <div className="text-white text-base caret-transparent leading-[1.55] mb-[30px] font-montserrat md:text-xl md:mb-[50px]">
                  Оставьте заявку, и наш специалист свяжется с вами, чтобы
                  обсудить ваши задачи и предложить оптимальное техническое
                  решение
                </div>
                <form className="caret-transparent">
                  <div className="caret-transparent max-h-[15000px] max-w-[560px] text-left mx-auto">
                    <FormField
                      fieldType="text"
                      label="Ваше имя"
                      name="Name"
                      value=""
                      placeholder="Иван Смирнов"
                    />
                    <FormField
                      fieldType="phone"
                      label="Ваш телефон"
                      name="Phone"
                      value=""
                      placeholder="(000) 000-00-00"
                    />
                    <FormField
                      fieldType="email"
                      label="Ваш Email"
                      name="Email"
                      value=""
                      placeholder="example@company.com"
                    />
                    <FormField
                      fieldType="textarea"
                      label="Ваше сообщение"
                      name="Message"
                      placeholder="Расскажите о вашем проекте или задайте вопрос"
                    />
                    <FormField
                      fieldType="checkbox"
                      name="agreement"
                      checkboxText="Вы даете согласие на обработку персональных данных"
                    />
                    <div className="caret-transparent h-full text-center align-middle mt-5 mb-2.5">
                      <SubmitButton />
                    </div>
                  </div>
                </form>
                <div className="text-white text-xs font-light caret-transparent leading-[17.4px] mt-[30px] font-montserrat md:text-[15px] md:leading-[23.25px]">
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
  );
};
