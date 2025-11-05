import { FormField } from "@/sections/ContactFormSection/components/FormField";
import { SubmitButton } from "@/sections/ContactFormSection/components/SubmitButton";

export const ContactForm = () => {
  return (
    <form name="form1388869181" role="form" className="caret-transparent">
      <input
        type="hidden"
        name="formservices[]"
        value="45ecf2909d8f195e2427ea682c59f6e4"
        className="text-[13.3333px] bg-transparent caret-transparent hidden text-start p-0 font-arial"
      />
      <div className="text-white text-base font-light bg-green-400 caret-transparent hidden leading-[23.2px] mb-5 p-5 rounded-[30px] font-montserrat md:text-xl md:leading-[31px]"></div>
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
          name="Ваше сообщение"
          placeholder="Расскажите о вашем проекте или задайте вопрос"
        />
        <FormField
          fieldType="checkbox"
          name=""
          checkboxText="Вы даете согласие на обработку персональных данных"
        />
        <div className="caret-transparent w-full">
          <div
            aria-label="Ошибки при заполнении формы"
            className="bg-red-500 caret-transparent hidden text-center mb-5 p-2.5 rounded-[30px] font-montserrat"
          >
            <ul
              role="list"
              className="text-white text-base font-light box-border caret-transparent leading-[23.2px] list-none pb-2.5 px-2.5 md:text-xl md:leading-[31px]"
            >
              <li className="text-base caret-transparent hidden leading-[23.2px] mt-2.5 md:text-xl md:leading-[31px]"></li>
              <li className="text-base caret-transparent hidden leading-[23.2px] mt-2.5 md:text-xl md:leading-[31px]"></li>
              <li className="text-base caret-transparent hidden leading-[23.2px] mt-2.5 md:text-xl md:leading-[31px]"></li>
              <li className="text-base caret-transparent hidden leading-[23.2px] mt-2.5 md:text-xl md:leading-[31px]"></li>
              <li className="text-base caret-transparent hidden leading-[23.2px] mt-2.5 md:text-xl md:leading-[31px]"></li>
              <li className="text-base caret-transparent hidden leading-[23.2px] mt-2.5 md:text-xl md:leading-[31px]"></li>
              <li className="text-base caret-transparent hidden leading-[23.2px] mt-2.5 md:text-xl md:leading-[31px]"></li>
            </ul>
          </div>
        </div>
        <div className="caret-transparent h-full text-center align-middle mt-5 mb-2.5">
          <SubmitButton />
        </div>
      </div>
      <div className="caret-transparent hidden">
        <div
          aria-label="Ошибки при заполнении формы"
          className="bg-red-500 caret-transparent hidden mb-5 p-2.5 rounded-[30px] font-montserrat"
        >
          <ul
            role="list"
            className="text-white text-base font-light box-border caret-transparent leading-[23.2px] list-none pb-2.5 px-2.5 md:text-xl md:leading-[31px]"
          >
            <li className="text-base caret-transparent hidden leading-[23.2px] mt-2.5 md:text-xl md:leading-[31px]"></li>
            <li className="text-base caret-transparent hidden leading-[23.2px] mt-2.5 md:text-xl md:leading-[31px]"></li>
            <li className="text-base caret-transparent hidden leading-[23.2px] mt-2.5 md:text-xl md:leading-[31px]"></li>
            <li className="text-base caret-transparent hidden leading-[23.2px] mt-2.5 md:text-xl md:leading-[31px]"></li>
            <li className="text-base caret-transparent hidden leading-[23.2px] mt-2.5 md:text-xl md:leading-[31px]"></li>
            <li className="text-base caret-transparent hidden leading-[23.2px] mt-2.5 md:text-xl md:leading-[31px]"></li>
            <li className="text-base caret-transparent hidden leading-[23.2px] mt-2.5 md:text-xl md:leading-[31px]"></li>
          </ul>
        </div>
      </div>
      <div className="absolute caret-transparent hidden left-[-5000px] bottom-0">
        <input
          type="text"
          name="form-spec-comments"
          value="Its good"
          className="text-[13.3333px] caret-transparent text-start font-arial"
        />
      </div>
    </form>
  );
};
