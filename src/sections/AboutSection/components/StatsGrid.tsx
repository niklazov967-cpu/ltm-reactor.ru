import { StatCard } from "@/sections/AboutSection/components/StatCard";

export const StatsGrid = () => {
  return (
    <ul
      role="list"
      className="caret-transparent flex flex-wrap justify-center list-none max-w-screen-sm w-full mx-auto pl-0 md:max-w-[1200px]"
    >
      <StatCard value="15+" description="лет опыта" />
      <StatCard value="200+" description="реализованных проектов" />
      <StatCard value="от 1" description="месяца изготовление" />
    </ul>
  );
};
