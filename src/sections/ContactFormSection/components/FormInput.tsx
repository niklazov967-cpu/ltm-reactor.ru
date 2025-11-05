import React from "react";

export type FormInputProps = {
  placeholder: string;
  variant?: string;
  name?: string;
  type?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  required?: boolean;
  isTextarea?: boolean;
};

export const FormInput = (props: FormInputProps) => {
  if (props.isTextarea) {
    return (
      <div
        className={`relative bg-white box-border caret-transparent w-full mb-5 rounded-[30px] ${props.variant || "h-[150px]"}`}
      >
        <textarea
          name={props.name}
          placeholder={props.placeholder}
          value={props.value}
          onChange={props.onChange}
          required={props.required}
          className="absolute caret-transparent h-full w-full px-[30px] py-[20px] rounded-[30px] border-0 outline-none resize-none font-montserrat"
        />
      </div>
    );
  }

  return (
    <div
      className={`relative bg-white box-border caret-transparent h-[60px] w-full mb-5 rounded-[30px] ${props.variant || ""}`}
    >
      <input
        type={props.type || "text"}
        name={props.name}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
        required={props.required}
        className="absolute caret-transparent h-full w-full px-[30px] rounded-[30px] border-0 outline-none font-montserrat"
      />
    </div>
  );
};
