import React, { useState } from "react";

export const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="absolute text-white caret-transparent z-[4] right-5 top-[25px] md:hidden"
        aria-label="Toggle menu"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {isOpen ? (
            <>
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </>
          ) : (
            <>
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </>
          )}
        </svg>
      </button>

      {isOpen && (
        <div className="fixed bg-[#9f001f] caret-transparent w-full h-screen z-[3] left-0 top-[70px] md:hidden">
          <nav className="flex flex-col items-center pt-10 gap-8">
            <a
              href="/#rec1388514251"
              onClick={() => setIsOpen(false)}
              className="text-white text-xl font-medium caret-transparent font-montserrat"
            >
              Продукция
            </a>
            <a
              href="/#rec1388722421"
              onClick={() => setIsOpen(false)}
              className="text-white text-xl font-medium caret-transparent font-montserrat"
            >
              О компании
            </a>
            <a
              href="/blog"
              onClick={() => setIsOpen(false)}
              className="text-white text-xl font-medium caret-transparent font-montserrat"
            >
              Статьи
            </a>
            <a
              href="/#rec1388869181"
              onClick={() => setIsOpen(false)}
              className="text-white text-xl font-medium caret-transparent font-montserrat"
            >
              Контакты
            </a>
          </nav>
        </div>
      )}
    </>
  );
};
