import React, { useEffect } from "react";
import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { AboutSection } from "@/sections/AboutSection";
import { ProductsSection } from "@/sections/ProductsSection";
import { CompetenciesSection } from "@/sections/CompetenciesSection";
import { AdvantagesSection } from "@/sections/AdvantagesSection";
import { SpecificationsSection } from "@/sections/SpecificationsSection";
import { ProcessSection } from "@/sections/ProcessSection";
import { ContactFormSection } from "@/sections/ContactFormSection";
import { Footer } from "@/sections/Footer";

export const HomePage = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll('.fade-in-section');
    sections.forEach(section => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <body className="text-black text-base not-italic normal-nums font-normal accent-auto caret-transparent block tracking-[normal] leading-[normal] list-outside list-disc pointer-events-auto text-start indent-[0px] normal-case visible border-separate font-times_new_roman overflow-x-hidden">
      <div className="caret-transparent">
        <Header />
        <div className="caret-transparent">
          <div className="caret-transparent">
            <div className="caret-transparent w-full before:accent-auto before:caret-transparent before:text-black before:table before:text-base before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[normal] before:list-outside before:list-disc before:pointer-events-auto before:text-start before:indent-[0px] before:normal-case before:visible before:w-0 before:border-separate before:font-times_new_roman after:accent-auto after:caret-transparent after:clear-both after:text-black after:table after:text-base after:not-italic after:normal-nums after:font-normal after:tracking-[normal] after:leading-[normal] after:list-outside after:list-disc after:pointer-events-auto after:text-start after:indent-[0px] after:normal-case after:visible after:w-0 after:border-separate after:font-times_new_roman">
              <div className="caret-transparent max-w-full w-full"></div>
            </div>
          </div>
        </div>
        <Hero />
        <div className="fade-in-section">
          <AboutSection />
        </div>
        <div className="caret-transparent pt-[60px] pb-[90px] md:pb-[120px] fade-in-section">
          <div className="caret-transparent">
            <ul
              role="list"
              className="caret-transparent flex flex-wrap justify-center list-none max-w-screen-sm w-full mx-auto pl-0 md:max-w-[1200px]"
            >
              <li className="box-border caret-transparent block max-w-full w-full mx-0 px-5 md:box-content md:max-w-[360px] md:mx-5 md:px-0 transition-all duration-300 hover:-translate-y-1">
                <div className="text-[#9f001f] text-3xl font-semibold caret-transparent leading-[36.9px] text-center pt-2 pb-1.5 font-montserrat md:text-[52px] md:leading-[63.96px]">
                  15+
                </div>
                <hr className="relative text-zinc-500 bg-black caret-transparent h-px opacity-20 mx-auto my-3.5" />
                <div className="text-xl caret-transparent leading-[29px] text-center pt-1 pb-1.5 font-montserrat md:leading-[31px]">
                  лет опыта
                </div>
              </li>
              <li className="box-border caret-transparent block max-w-full w-full mt-5 mx-0 px-5 md:box-content md:max-w-[360px] md:mt-0 md:mx-5 md:px-0 transition-all duration-300 hover:-translate-y-1">
                <div className="text-[#9f001f] text-3xl font-semibold caret-transparent leading-[36.9px] text-center pt-2 pb-1.5 font-montserrat md:text-[52px] md:leading-[63.96px]">
                  200+
                </div>
                <hr className="relative text-zinc-500 bg-black caret-transparent h-px opacity-20 mx-auto my-3.5" />
                <div className="text-xl caret-transparent leading-[29px] text-center pt-1 pb-1.5 font-montserrat md:leading-[31px]">
                  реализованных проектов
                </div>
              </li>
              <li className="box-border caret-transparent block max-w-full w-full mt-5 mx-0 px-5 md:box-content md:max-w-[360px] md:mt-0 md:mx-5 md:px-0 transition-all duration-300 hover:-translate-y-1">
                <div className="text-[#9f001f] text-3xl font-semibold caret-transparent leading-[36.9px] text-center pt-2 pb-1.5 font-montserrat md:text-[52px] md:leading-[63.96px]">
                  от 1
                </div>
                <hr className="relative text-zinc-500 bg-black caret-transparent h-px opacity-20 mx-auto my-3.5" />
                <div className="text-xl caret-transparent leading-[29px] text-center pt-1 pb-1.5 font-montserrat md:leading-[31px]">
                  месяца изготовление
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="fade-in-section">
          <ProductsSection />
        </div>
        <div className="bg-stone-50 caret-transparent pb-[90px] md:pb-[120px] fade-in-section">
          <div className="caret-transparent">
            <div className="text-[0px] box-border caret-transparent flex flex-wrap justify-center gap-y-8 max-w-screen-sm w-full mx-auto px-2.5 md:text-base md:box-content md:max-w-[1200px] md:px-0 md:gap-y-10">
              <div className="text-[0px] box-border caret-transparent float-none max-w-full text-left align-top w-full mb-5 mx-0 px-2.5 md:text-base md:box-content md:float-left md:max-w-[360px] md:align-baseline md:mb-0 md:mx-5 md:px-0">
                <div className="text-[0px] bg-white caret-transparent overflow-hidden rounded-[30px] md:text-base transition-all duration-300 hover:shadow-[0_10px_40px_rgba(0,0,0,0.15)] hover:-translate-y-2">
                  <div className="relative text-[0px] caret-transparent w-full pb-[83.3333%] md:text-base">
                    <div className="absolute text-[0px] bg-[url('https://static.tildacdn.com/tild3866-3136-4265-b165-373638386339/-2.svg')] bg-no-repeat bg-cover caret-transparent z-[2] bg-center inset-0 md:text-base"></div>
                  </div>
                  <div className="relative text-[0px] caret-transparent h-auto md:text-base md:h-56">
                    <div className="text-[0px] box-border caret-transparent px-[30px] py-[27px] md:text-base">
                      <div className="text-zinc-900 text-xl font-bold caret-transparent leading-[27px] font-montserrat">
                        Химические реакторы
                      </div>
                      <div className="text-sm caret-transparent leading-[21.7px] mt-2 font-montserrat">
                        Эмалированные и из нержавеющей стали. Для химической,
                        нефтехимической и лакокрасочной промышленности. Работают
                        при высоких температурах и давлении.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-[0px] box-border caret-transparent float-none max-w-full text-left align-top w-full mb-5 mx-0 px-2.5 md:text-base md:box-content md:float-left md:max-w-[360px] md:align-baseline md:mb-0 md:mx-5 md:px-0">
                <div className="text-[0px] bg-white caret-transparent overflow-hidden rounded-[30px] md:text-base transition-all duration-300 hover:shadow-[0_10px_40px_rgba(0,0,0,0.15)] hover:-translate-y-2">
                  <div className="relative text-[0px] caret-transparent w-full pb-[83.3333%] md:text-base">
                    <div className="absolute text-[0px] bg-[url('https://static.tildacdn.com/tild3134-6632-4532-b436-363733386465/-3.svg')] bg-no-repeat bg-cover caret-transparent z-[2] bg-center inset-0 md:text-base"></div>
                  </div>
                  <div className="relative text-[0px] caret-transparent h-auto md:text-base md:h-56">
                    <div className="text-[0px] box-border caret-transparent px-[30px] py-[27px] md:text-base">
                      <div className="text-zinc-900 text-xl font-bold caret-transparent leading-[27px] font-montserrat">
                        Биореакторы и ферментеры
                      </div>
                      <div className="text-sm caret-transparent leading-[21.7px] mt-2 font-montserrat">
                        Стерильное исполнение для фармацевтической и пищевой
                        отраслей. Оснащаются системами безразборной мойки и
                        стерилизации (CIP/SIP).
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-[0px] box-border caret-transparent float-none max-w-full text-left align-top w-full mb-5 mx-0 px-2.5 md:text-base md:box-content md:float-left md:max-w-[360px] md:align-baseline md:mb-0 md:mx-5 md:px-0">
                <div className="text-[0px] bg-white caret-transparent overflow-hidden rounded-[30px] md:text-base transition-all duration-300 hover:shadow-[0_10px_40px_rgba(0,0,0,0.15)] hover:-translate-y-2">
                  <div className="relative text-[0px] caret-transparent w-full pb-[83.3333%] md:text-base">
                    <div className="absolute text-[0px] bg-[url('https://static.tildacdn.com/tild3034-6531-4437-b966-336139663538/-.svg')] bg-no-repeat bg-cover caret-transparent z-[2] bg-center inset-0 md:text-base"></div>
                  </div>
                  <div className="relative text-[0px] caret-transparent h-auto md:text-base md:h-56">
                    <div className="text-[0px] box-border caret-transparent px-[30px] py-[27px] md:text-base">
                      <div className="text-zinc-900 text-xl font-bold caret-transparent leading-[27px] font-montserrat">
                        Смесительные аппараты
                      </div>
                      <div className="text-sm caret-transparent leading-[21.7px] mt-2 font-montserrat">
                        Для косметической, пищевой промышленности и производства
                        бытовой химии. Оснащаются различными типами мешалок.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-[0px] caret-transparent clear-both hidden mb-10 md:text-base md:block"></div>
              <div className="text-[0px] box-border caret-transparent float-none max-w-full text-left align-top w-full mb-5 mx-0 px-2.5 md:text-base md:box-content md:float-left md:max-w-[360px] md:align-baseline md:mb-0 md:mx-5 md:px-0">
                <div className="text-[0px] bg-white caret-transparent overflow-hidden rounded-[30px] md:text-base transition-all duration-300 hover:shadow-[0_10px_40px_rgba(0,0,0,0.15)] hover:-translate-y-2">
                  <div className="relative text-[0px] caret-transparent w-full pb-[83.3333%] md:text-base">
                    <div className="absolute text-[0px] bg-[url('https://static.tildacdn.com/tild6334-3333-4165-b761-656535656630/-4.svg')] bg-no-repeat bg-cover caret-transparent z-[2] bg-center inset-0 md:text-base"></div>
                  </div>
                  <div className="relative text-[0px] caret-transparent h-auto md:text-base md:h-[154px]">
                    <div className="text-[0px] box-border caret-transparent px-[30px] py-[27px] md:text-base">
                      <div className="text-zinc-900 text-xl font-bold caret-transparent leading-[27px] font-montserrat">
                        Адсорбционные колонны
                      </div>
                      <div className="text-sm caret-transparent leading-[21.7px] mt-2 font-montserrat">
                        Для систем очистки газов и жидкостей. Угольные адсорберы
                        и фильтры для различных сред.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-[0px] box-border caret-transparent float-none max-w-full text-left align-top w-full mb-5 mx-0 px-2.5 md:text-base md:box-content md:float-left md:max-w-[360px] md:align-baseline md:mb-0 md:mx-5 md:px-0">
                <div className="text-[0px] bg-white caret-transparent overflow-hidden rounded-[30px] md:text-base transition-all duration-300 hover:shadow-[0_10px_40px_rgba(0,0,0,0.15)] hover:-translate-y-2">
                  <div className="relative text-[0px] caret-transparent w-full pb-[83.3333%] md:text-base">
                    <div className="absolute text-[0px] bg-[url('https://static.tildacdn.com/tild3835-3839-4530-b836-336664626464/-5.svg')] bg-no-repeat bg-cover caret-transparent z-[2] bg-center inset-0 md:text-base"></div>
                  </div>
                  <div className="relative text-[0px] caret-transparent h-auto md:text-base md:h-[154px]">
                    <div className="text-[0px] box-border caret-transparent px-[30px] py-[27px] md:text-base">
                      <div className="text-zinc-900 text-xl font-bold caret-transparent leading-[27px] font-montserrat">
                        Ресиверы и резервуары
                      </div>
                      <div className="text-sm caret-transparent leading-[21.7px] mt-2 font-montserrat">
                        Для хранения и аккумулирования сред (воздух, жидкости).
                        Любого объема и давления.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="fade-in-section">
          <CompetenciesSection />
        </div>
        <div className="fade-in-section">
          <AdvantagesSection />
        </div>
        <div className="fade-in-section">
          <SpecificationsSection />
        </div>
        <div className="fade-in-section">
          <ProcessSection />
        </div>
        <div className="fade-in-section">
          <ContactFormSection />
        </div>
        <Footer />
      </div>
      <div className="fixed bg-white shadow-[rgba(0,0,0,0.1)_0px_0px_1px_0px] caret-transparent hidden max-h-[200px] min-w-0 overflow-x-auto overflow-y-scroll z-[10000001] border border-zinc-100 py-[5px] rounded-[7px] border-solid md:min-w-[410px]"></div>
    </body>
  );
};
