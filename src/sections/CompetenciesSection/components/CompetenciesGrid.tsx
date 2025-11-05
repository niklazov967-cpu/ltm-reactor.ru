import React from "react";
import { CompetencyCard } from "@/sections/CompetenciesSection/components/CompetencyCard";

export const CompetenciesGrid = () => {
  return (
    <ul
      role="list"
      className="caret-transparent flex flex-wrap justify-center list-none w-full pl-0"
    >
      <CompetencyCard
        iconVariant="bg-[url('https://static.tildacdn.com/tild3332-6539-4934-b834-613339316633/vector.svg')]"
        title="Инжиниринг и проектирование"
        description="Разрабатываем оборудование по индивидуальным чертежам. Учитываем ваши требования к объему, давлению, температуре и материалам."
      />
      <CompetencyCard
        iconVariant="bg-[url('https://static.tildacdn.com/tild3733-3837-4939-b638-376532336535/vector.svg')]"
        title="Производство и контроль качества"
        description="Используем автоматизированную сварку и проводим неразрушающий контроль. Гарантируем высокое качество и надежность оборудования."
      />
      <CompetencyCard
        iconVariant="bg-[url('https://static.tildacdn.com/tild3830-6539-4537-b362-626639633633/vector.svg')]"
        title="Соблюдение сроков"
        description="Наша логистика и отлаженные процессы позволяют изготавливать оборудование в сжатые сроки — от 1 месяца. Мы информируем вас на каждом этапе проекта."
      />
      <CompetencyCard
        iconVariant="bg-[url('https://static.tildacdn.com/tild3161-6262-4961-b435-363762643130/vector.svg')]"
        title="Пусконаладка и сервис"
        description="Оказываем услуги по шеф-монтажу и пусконаладке на вашем объекте. Предоставляем гарантию 12 месяцев и последующую техническую поддержку."
      />
    </ul>
  );
};
