import { HeroContent } from "@/sections/Hero/components/HeroContent";
import { HeroImage } from "@/sections/Hero/components/HeroImage";

export const Hero = () => {
  return (
    <div className="bg-[#9f001f] caret-transparent w-full">
      <div className="relative caret-transparent max-w-[1920px] mx-auto">
        <div className="relative caret-transparent flex flex-col justify-center min-h-0 overflow-hidden md:min-h-[800px]">
          <HeroContent />
          <HeroImage />
        </div>
      </div>
    </div>
  );
};
