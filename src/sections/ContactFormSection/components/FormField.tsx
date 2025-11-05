export type FormFieldProps = {
  fieldType: "text" | "phone" | "email" | "textarea" | "checkbox";
  label?: string;
  name: string;
  value?: string;
  placeholder?: string;
  checkboxText?: string;
};

export const FormField = (props: FormFieldProps) => {
  if (props.fieldType === "phone") {
    return (
      <div className="caret-transparent mb-[15px] md:mb-5">
        {props.label && (
          <label className="text-white text-base font-light caret-transparent block h-full leading-[23.2px] align-middle pr-2.5 pb-[5px] font-montserrat md:text-xl md:leading-[31px]">
            {props.label}
          </label>
        )}
        <div className="caret-transparent rounded-[30px]">
          <div className="relative font-light bg-white box-border caret-transparent flex h-14 leading-[21.28px] w-full px-5 rounded-[30px] font-montserrat">
            <div className="items-center caret-transparent flex shrink-0 mr-[5px]">
              <span className="bg-stone-300 bg-[url('https://static.tildacdn.com/lib/flags/flags7.png')] bg-no-repeat shadow-[rgba(0,0,0,0.3)_0px_0px_5px_0px] caret-transparent block h-[13px] min-w-[18px] w-[18px] bg-[position:-285px_-281px]"></span>
              <span className="relative border-t-neutral-400 caret-transparent block ml-1.5 border-t-[5px] border-b-transparent border-x-transparent border-x-4 border-solid"></span>
              <span className="caret-transparent block text-nowrap ml-2.5">
                +7
              </span>
            </div>
            <input
              type="hidden"
              name="tildaspec-phone-part[]-iso"
              value=""
              className="text-[13.3333px] font-normal bg-transparent caret-transparent hidden leading-[normal] text-start p-0 font-arial"
            />
            <input
              type="tel"
              name="tildaspec-phone-part[]"
              value={props.value}
              placeholder={props.placeholder}
              className="bg-transparent box-border caret-transparent block text-start w-full p-0"
            />
            <input
              type="hidden"
              name={props.name}
              value=""
              className="text-[13.3333px] font-normal bg-transparent caret-transparent hidden leading-[normal] text-start p-0 font-arial"
            />
          </div>
        </div>
        <div className="text-red-600 text-[13px] caret-transparent hidden mt-[5px] font-montserrat"></div>
      </div>
    );
  }

  if (props.fieldType === "textarea") {
    return (
      <div className="caret-transparent mb-[15px] md:mb-5">
        {props.label && (
          <label className="text-white text-base font-light caret-transparent block h-full leading-[23.2px] align-middle pr-2.5 pb-[5px] font-montserrat md:text-xl md:leading-[31px]">
            {props.label}
          </label>
        )}
        <div className="caret-transparent rounded-[30px]">
          <textarea
            name={props.name}
            placeholder={props.placeholder}
            className="font-light box-border caret-transparent h-[136px] leading-[21.28px] resize-y text-start w-full pt-3 pb-0 px-5 rounded-[30px] font-montserrat md:pt-[17px]"
          ></textarea>
        </div>
        <div className="text-red-600 text-[13px] caret-transparent hidden mt-[5px] font-montserrat"></div>
      </div>
    );
  }

  if (props.fieldType === "checkbox") {
    return (
      <div className="caret-transparent mb-[15px] md:mb-5">
        <div className="caret-transparent text-white text-base font-light h-full leading-[23.2px] align-middle pr-2.5 pb-[5px] font-montserrat md:text-xl md:leading-[31px]">
          {props.checkboxText}
        </div>
        <div className="caret-transparent rounded-[30px]">
          <label className="relative text-white text-xs font-light items-center caret-transparent gap-x-2.5 flex leading-3 gap-y-2.5 font-montserrat md:text-[15px] md:leading-[15px]">
            <div className="relative text-xs box-border caret-transparent shrink-0 h-5 leading-3 opacity-60 align-middle w-5 border-2 border-solid border-white md:text-[15px] md:leading-[15px] after:accent-auto after:caret-transparent after:text-white after:hidden after:text-xs after:not-italic after:normal-nums after:font-light after:h-2 after:tracking-[normal] after:leading-3 after:list-outside after:list-disc after:pointer-events-auto after:absolute after:text-left after:indent-[0px] after:normal-case after:visible after:w-[3px] after:border-r-2 after:border-b-2 after:border-separate after:border-solid after:border-white after:left-1.5 after:top-0.5 after:font-montserrat after:md:text-[15px] after:md:leading-[15px]"></div>
          </label>
        </div>
        <div className="text-red-600 text-[13px] caret-transparent hidden mt-[5px] font-montserrat"></div>
      </div>
    );
  }

  return (
    <div className="caret-transparent mb-[15px] md:mb-5">
      {props.label && (
        <label className="text-white text-base font-light caret-transparent block h-full leading-[23.2px] align-middle pr-2.5 pb-[5px] font-montserrat md:text-xl md:leading-[31px]">
          {props.label}
        </label>
      )}
      <div className="caret-transparent rounded-[30px]">
        <input
          type={props.fieldType}
          name={props.name}
          value={props.value}
          placeholder={props.placeholder}
          className="font-light box-border caret-transparent h-14 leading-[21.28px] text-start w-full px-5 py-0 rounded-[30px] font-montserrat"
        />
      </div>
      <div className="text-red-600 text-[13px] caret-transparent hidden mt-[5px] font-montserrat"></div>
    </div>
  );
};
