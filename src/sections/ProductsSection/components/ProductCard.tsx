export type ProductCardProps = {
  iconVariant: string;
  title: string;
  description: string;
  contentVariant: string;
};

export const ProductCard = (props: ProductCardProps) => {
  return (
    <div className="text-[0px] box-border caret-transparent float-none max-w-full text-left align-top w-full mb-5 mx-0 px-2.5 md:text-base md:box-content md:float-left md:max-w-[360px] md:align-baseline md:mb-0 md:mx-5 md:px-0">
      <div className="text-[0px] bg-white caret-transparent overflow-hidden rounded-[30px] md:text-base transition-all duration-300 hover:shadow-[0_10px_40px_rgba(0,0,0,0.15)] hover:-translate-y-2">
        <div className="relative text-[0px] caret-transparent w-full pb-[83.3333%] md:text-base">
          <div
            className={`absolute text-[0px] bg-no-repeat bg-cover caret-transparent z-[2] bg-center inset-0 md:text-base ${props.iconVariant}`}
          ></div>
        </div>
        <div
          className={`relative text-[0px] caret-transparent h-auto md:text-base ${props.contentVariant}`}
        >
          <div className="text-[0px] box-border caret-transparent px-[30px] py-[27px] md:text-base">
            <div className="text-zinc-900 text-xl font-bold caret-transparent leading-[27px] font-montserrat">
              {props.title}
            </div>
            <div className="text-sm caret-transparent leading-[21.7px] mt-2 font-montserrat">
              {props.description}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
