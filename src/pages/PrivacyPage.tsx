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
                  Настоящая Политика конфиденциальности персональных данных действует в отношении всей информации, которую сайт ltm-reactor.ru может получить о Пользователе во время использования сайта.
                </p>

                <h2 className="text-zinc-900 text-2xl font-bold mt-8 mb-4 font-montserrat">
                  1. ОПРЕДЕЛЕНИЕ ТЕРМИНОВ
                </h2>
                <p>
                  1.1. В настоящей Политике конфиденциальности используются следующие термины:
                </p>
                <p>
                  1.1.1. Администрация сайта – уполномоченные сотрудники на управление сайтом, действующие от имени ООО ЛТМ.
                </p>
                <p>
                  1.1.2. Персональные данные - любая информация, относящаяся к определенному физическому лицу.
                </p>

                <h2 className="text-zinc-900 text-2xl font-bold mt-8 mb-4 font-montserrat">
                  2. ОБЩИЕ ПОЛОЖЕНИЯ
                </h2>
                <p>
                  2.1. Использование Пользователем сайта означает согласие с настоящей Политикой конфиденциальности.
                </p>
                <p>
                  2.2. В случае несогласия с условиями Политики конфиденциальности Пользователь должен прекратить использование сайта.
                </p>

                <h2 className="text-zinc-900 text-2xl font-bold mt-8 mb-4 font-montserrat">
                  3. ПРЕДМЕТ ПОЛИТИКИ
                </h2>
                <p>
                  3.1. Настоящая Политика устанавливает обязательства по неразглашению персональных данных.
                </p>

                <h2 className="text-zinc-900 text-2xl font-bold mt-8 mb-4 font-montserrat">
                  4. ЦЕЛИ СБОРА ИНФОРМАЦИИ
                </h2>
                <p>
                  4.1. Персональные данные используются для установления обратной связи и предоставления услуг.
                </p>

                <h2 className="text-zinc-900 text-2xl font-bold mt-8 mb-4 font-montserrat">
                  5. СПОСОБЫ ОБРАБОТКИ
                </h2>
                <p>
                  5.1. Обработка персональных данных осуществляется без ограничения срока любым законным способом.
                </p>

                <h2 className="text-zinc-900 text-2xl font-bold mt-8 mb-4 font-montserrat">
                  6. ОБЯЗАТЕЛЬСТВА СТОРОН
                </h2>
                <p>6.1. Пользователь обязан предоставить необходимую информацию.</p>
                <p>6.2. Администрация обязана использовать информацию только для указанных целей.</p>

                <h2 className="text-zinc-900 text-2xl font-bold mt-8 mb-4 font-montserrat">
                  7. ОТВЕТСТВЕННОСТЬ
                </h2>
                <p>
                  7.1. Администрация несет ответственность в соответствии с законодательством РФ.
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
                  9.1. Администрация вправе вносить изменения в настоящую Политику.
                </p>
                <p>
                  9.2. Вопросы направляйте на: info@ltm-reactor.ru
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
