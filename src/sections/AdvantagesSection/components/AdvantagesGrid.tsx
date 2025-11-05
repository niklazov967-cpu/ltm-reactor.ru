import { AdvantageCard } from "@/sections/AdvantagesSection/components/AdvantageCard";

export const AdvantagesGrid = () => {
  return (
    <ul
      role="list"
      className="caret-transparent flex flex-wrap justify-center list-none w-full pl-0"
    >
      <AdvantageCard
        iconVariant="bg-[url('https://static.tildacdn.com/tild6363-3734-4233-a361-636266336364/vector.svg')]"
        title="Технологическая гибкость"
        description="Мы не предлагаем стандартные решения. Мы проектируем оборудование под ваш конкретный технологический процесс и реализуем проекты любой сложности."
      />
      <AdvantageCard
        iconVariant="bg-[url('https://static.tildacdn.com/tild6434-3366-4731-b638-333764343633/vector.svg')]"
        title="Оперативность"
        description="Мы минимизируем сроки от проектирования до ввода в эксплуатацию, чтобы снизить ваши производственные простои и ускорить запуск."
      />
      <AdvantageCard
        iconVariant="bg-[url('https://static.tildacdn.com/tild6561-3439-4636-a433-393538656131/vector.svg')]"
        title="Отраслевой опыт"
        description="Мы реализовали десятки проектов с учетом отраслевых стандартов и нормативов. Гарантируем конструктивную надежность и безопасность вашего оборудования."
      />
      <AdvantageCard
        iconVariant="bg-[url('https://static.tildacdn.com/tild3533-3163-4231-b733-626631353037/vector.svg')]"
        title="Качество изготовления"
        description="Мы применяем только сертифицированные материалы и комплектующие. Многоступенчатый входной и операционный контроль качества гарантирует надежность."
      />
      <AdvantageCard
        iconVariant="bg-[url('https://static.tildacdn.com/tild6162-3232-4434-a262-366535323637/vector.svg')]"
        title="Техническая поддержка"
        description="Мы обеспечиваем комплексное сервисное сопровождение на всех этапах жизненного цикла вашего оборудования. Вы всегда можете на нас положиться."
      />
    </ul>
  );
};
