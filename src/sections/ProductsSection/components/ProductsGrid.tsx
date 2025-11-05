import { ProductCard } from "@/sections/ProductsSection/components/ProductCard";

export const ProductsGrid = () => {
  return (
    <div className="text-[0px] box-border caret-transparent flex flex-wrap justify-center max-w-screen-sm w-full mx-auto px-2.5 md:text-base md:box-content md:max-w-[1200px] md:px-0">
      <ProductCard
        iconVariant="bg-[url('https://static.tildacdn.com/tild3866-3136-4265-b165-373638386339/-2.svg')]"
        title="Химические реакторы"
        description="Эмалированные и из нержавеющей стали. Для химической, нефтехимической и лакокрасочной промышленности. Работают при высоких температурах и давлении."
        contentVariant="md:h-56"
      />
      <ProductCard
        iconVariant="bg-[url('https://static.tildacdn.com/tild3134-6632-4532-b436-363733386465/-3.svg')]"
        title="Биореакторы и ферментеры"
        description="Стерильное исполнение для фармацевтической и пищевой отраслей. Оснащаются системами безразборной мойки и стерилизации (CIP/SIP)."
        contentVariant="md:h-56"
      />
      <ProductCard
        iconVariant="bg-[url('https://static.tildacdn.com/tild3034-6531-4437-b966-336139663538/-.svg')]"
        title="Смесительные аппараты"
        description="Для косметической, пищевой промышленности и производства бытовой химии. Оснащаются различными типами мешалок."
        contentVariant="md:h-56"
      />
      <div className="text-[0px] caret-transparent clear-both hidden mb-10 md:text-base md:block"></div>
      <ProductCard
        iconVariant="bg-[url('https://static.tildacdn.com/tild6334-3333-4165-b761-656535656630/-4.svg')]"
        title="Адсорбционные колонны"
        description="Для систем очистки газов и жидкостей. Угольные адсорберы и фильтры для различных сред."
        contentVariant="md:h-[154px]"
      />
      <ProductCard
        iconVariant="bg-[url('https://static.tildacdn.com/tild3835-3839-4530-b836-336664626464/-5.svg')]"
        title="Ресиверы и резервуары"
        description="Для хранения и аккумулирования сред (воздух, жидкости). Любого объема и давления."
        contentVariant="md:h-[154px]"
      />
    </div>
  );
};
