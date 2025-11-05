import React from "react";
import { ProcessStep } from "@/sections/ProcessSection/components/ProcessStep";

export const ProcessGrid = () => {
  return (
    <ul className="caret-transparent flex flex-wrap justify-center list-none max-w-screen-sm w-full mx-auto pl-0 md:max-w-[1200px]">
      <ProcessStep
        iconUrl="https://c.animaapp.com/mhl4okafNtEOeg/assets/support_consultant.svg"
        title="Консультация и ТЗ"
        description="Обсуждаем ваши задачи и составляем подробное техническое задание"
      />
      <ProcessStep
        iconUrl="https://c.animaapp.com/mhl4okafNtEOeg/assets/design_project_construct.svg"
        title="Проектирование"
        description="Наши инженеры разрабатывают проектную документацию в соответствии с ТЗ"
      />
      <ProcessStep
        iconUrl="https://c.animaapp.com/mhl4okafNtEOeg/assets/kid_child_boy.svg"
        title="Производство"
        description="Изготавливаем оборудование на собственных производственных мощностях"
      />
      <ProcessStep
        iconUrl="https://c.animaapp.com/mhl4okafNtEOeg/assets/certificate_quality.svg"
        title="Контроль качества"
        description="Проводим все необходимые испытания и контроль качества на каждом этапе"
      />
      <ProcessStep
        iconUrl="https://c.animaapp.com/mhl4okafNtEOeg/assets/trumpet.svg"
        title="Монтаж и пусконаладка"
        description="Осуществляем шеф-монтаж, пусконаладочные работы и обучение вашего персонала"
      />
    </ul>
  );
};
