import React from "react";
import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";

export const PrivacyPage = () => {
  return (
    <body className="text-black text-base not-italic normal-nums font-normal accent-auto caret-transparent block tracking-[normal] leading-[normal] list-outside list-disc pointer-events-auto text-start indent-[0px] normal-case visible border-separate font-times_new_roman overflow-x-hidden">
      <div className="caret-transparent">
        <Header />
        
        <div className="bg-white caret-transparent w-full pt-[140px] pb-[60px] md:pt-[200px] md:pb-[120px]">
          <div className="max-w-[1920px] mx-auto">
            <div className="caret-transparent max-w-screen-sm w-full mx-auto px-5 md:max-w-[900px]">
              <h1 className="text-zinc-900 text-[32px] font-bold caret-transparent leading-[1.15] mb-8 font-montserrat md:text-[48px]">
                Политика конфиденциальности
              </h1>
              
              <div className="text-zinc-700 text-base caret-transparent leading-[1.7] font-montserrat space-y-6">
                <p>
                  Настоящая Политика конфиденциальности персональных данных (далее – Политика конфиденциальности) действует в отношении всей информации, которую сайт ltm-reactor.ru, расположенный на доменном имени ltm-reactor.ru, может получить о Пользователе во время использования сайта.
                </p>

                <h2 className="text-zinc-900 text-2xl font-bold mt-8 mb-4 font-montserrat">
                  1. ОПРЕДЕЛЕНИЕ ТЕРМИНОВ
                </h2>
                <p>
                  1.1. В настоящей Политике конфиденциальности используются следующие термины:
                </p>
                <p>
                  1.1.1. «Администрация сайта» – уполномоченные сотрудники на управление сайтом, действующие от имени ООО «ЛТМ», которые организуют и (или) осуществляют обработку персональных данных, а также определяет цели обработки персональных данных, состав персональных данных, подлежащих обработке, действия (операции), совершаемые с персональными данными.
                </p>

                <h2 className="text-zinc-900 text-2xl font-bold mt-8 mb-4 font-montserrat">
                  2. ОБЩИЕ ПОЛОЖЕНИЯ
                </h2>
                <p>
                  2.1. Использование Пользователем сайта означает согласие с настоящей Политикой конфиденциальности и условиями обработки персональных данных Пользователя.
                </p>

                <h2 className="text-zinc-900 text-2xl font-bold mt-8 mb-4 font-montserrat">
                  3. ПРЕДМЕТ ПОЛИТИКИ КОНФИДЕНЦИАЛЬНОСТИ
                </h2>
                <p>
                  3.1. Настоящая Политика конфиденциальности устанавливает обязательства Администрации сайта по неразглашению и обеспечению режима защиты конфиденциальности персональных данных.
                </p>

                <h2 className="text-zinc-900 text-2xl font-bold mt-8 mb-4 font-montserrat">
                  4. ЦЕЛИ СБОРА ПЕРСОНАЛЬНОЙ ИНФОРМАЦИИ
                </h2>
                <p>
                  4.1. Персональные данные Пользователя Администрация сайта может использовать в целях установления обратной связи и предоставления услуг.
                </p>

                <h2 className="text-zinc-900 text-2xl font-bold mt-8 mb-4 font-montserrat">
                  5. СПОСОБЫ И СРОКИ ОБРАБОТКИ ИНФОРМАЦИИ
                </h2>
                <p>
                  5.1. Обработка персональных данных Пользователя осуществляется без ограничения срока, любым законным способом.
                </p>

                <h2 className="text-zinc-900 text-2xl font-bold mt-8 mb-4 font-montserrat">
                  6. ОБЯЗАТЕЛЬСТВА СТОРОН
                </h2>
                <p>6.1. Пользователь обязан предоставить информацию о персональных данных, необходимую для пользования Сайтом.</p>
                <p>6.2. Администрация сайта обязана использовать полученную информацию исключительно для указанных целей.</p>

                <h2 className="text-zinc-900 text-2xl font-bold mt-8 mb-4 font-montserrat">
                  7. ОТВЕТСТВЕННОСТЬ СТОРОН
                </h2>
                <p>
                  7.1. Администрация сайта несёт ответственность за убытки в соответствии с законодательством Российской Федерации.
                </p>

                <h2 className="text-zinc-900 text-2xl font-bold mt-8 mb-4 font-montserrat">
                  8. РАЗРЕШЕНИЕ СПОРОВ
                </h2>
                <p>
                  8.1. До обращения в суд обязательным является предъявление претензии.
                </p>

                <h2 className="text-zinc-900 text-2xl font-bold mt-8 mb-4 font-montserrat">
                  9. ДОПОЛНИТЕЛЬНЫЕ УСЛОВИЯ
                </h2>
                <p>
                  9.1. Администрация сайта вправе вносить изменения в настоящую Политику конфиденциальности без согласия Пользователя.
                </p>
                <p>
                  9.2. Все предложения или вопросы следует сообщать по адресу: info@ltm-reactor.ru
                </p>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </body>
  );
};
