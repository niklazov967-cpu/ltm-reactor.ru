import React, { useState } from "react";
import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";

const BlogHero = () => {
  return (
    <div className="bg-[#9f001f] caret-transparent w-full pt-[70px] md:pt-[100px]">
      <div className="relative caret-transparent max-w-[1920px] mx-auto">
        <div className="relative caret-transparent flex flex-col justify-center min-h-0 overflow-hidden md:min-h-[800px]">
          <div className="static box-border caret-transparent w-full z-[1] py-[80px] md:relative md:py-[120px]">
            <div className="caret-transparent max-w-screen-sm w-full mx-auto md:max-w-[1200px]">
              <div className="box-border caret-transparent float-none max-w-full w-full mx-0 px-5 md:box-content md:float-left md:max-w-[560px] md:mx-5 md:px-0">
                <h1 className="text-white text-[32px] font-bold caret-transparent leading-[1.15] font-montserrat md:text-[62px]">
                  Статьи и публикации
                </h1>
                <div className="text-white text-lg caret-transparent leading-[1.55] pt-[30px] pb-[40px] font-montserrat md:text-2xl md:pt-10 md:pb-[50px]">
                  Полезные материалы о производстве технологического оборудования
                </div>
              </div>
            </div>
          </div>
          <div className="relative box-border caret-transparent h-[300px] min-h-[auto] min-w-[auto] w-full right-0 top-0 md:absolute md:h-full md:min-h-0 md:min-w-0 md:w-[55%]">
            <div className="relative bg-[url('https://optim.tildacdn.com/tild3838-3466-4438-a666-313162356137/-/resize/818x661/-/format/webp/3Generated_Image_Oct.png.webp')] bg-no-repeat bg-contain caret-transparent h-full w-full bg-center bg-right md:h-[calc(100%_-_80px)] md:w-[calc(100%_-_80px)] md:m-10 after:accent-auto after:bg-[#9f001f] after:caret-transparent after:text-black after:block after:text-base after:not-italic after:normal-nums after:font-normal after:tracking-[normal] after:leading-[normal] after:list-outside after:list-disc after:opacity-40 after:pointer-events-auto after:absolute after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:inset-0 after:font-times_new_roman"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

const BlogCard = ({ title, date, excerpt, category, tags, readTime, views }: { 
  title: string; 
  date: string; 
  excerpt: string; 
  category: string;
  tags: string[];
  readTime: string;
  views: number;
}) => {
  return (
    <div className="box-border caret-transparent block max-w-full w-full mb-8 mx-0 px-5 md:box-content md:max-w-[calc(33.333%-40px)] md:mx-5 md:px-0">
      <div className="bg-white caret-transparent overflow-hidden rounded-[20px] shadow-sm transition-all duration-300 hover:shadow-[0_10px_40px_rgba(0,0,0,0.15)] hover:-translate-y-2 h-full flex flex-col">
        <div className="caret-transparent p-[25px] flex-1 flex flex-col">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-[#9f001f] text-xs font-semibold caret-transparent leading-[1.55] px-2 py-1 bg-red-50 rounded font-montserrat">
              {category}
            </span>
            <span className="text-zinc-400 text-xs caret-transparent leading-[1.55] font-montserrat">
              {readTime}
            </span>
          </div>
          
          <h3 className="text-zinc-900 text-lg font-bold caret-transparent leading-[1.35] mb-3 font-montserrat md:text-xl">
            {title}
          </h3>
          
          <p className="text-zinc-600 text-sm caret-transparent leading-[1.55] mb-4 font-montserrat md:text-base flex-1">
            {excerpt}
          </p>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag, index) => (
              <span key={index} className="text-zinc-500 text-xs caret-transparent leading-[1.55] px-2 py-1 bg-zinc-100 rounded font-montserrat">
                #{tag}
              </span>
            ))}
          </div>
          
          <div className="flex items-center justify-between pt-4 border-t border-zinc-100">
            <span className="text-zinc-400 text-xs caret-transparent leading-[1.55] font-montserrat">
              {date}
            </span>
            <span className="text-zinc-400 text-xs caret-transparent leading-[1.55] font-montserrat flex items-center gap-1">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M8 3C4.5 3 2 8 2 8s2.5 5 6 5 6-5 6-5-2.5-5-6-5z"/>
                <circle cx="8" cy="8" r="2"/>
              </svg>
              {views}
            </span>
          </div>
          
          <a
            href="#"
            className="inline-block text-[#9f001f] text-sm font-semibold caret-transparent leading-[1.55] mt-4 font-montserrat hover:underline md:text-base"
          >
            Читать далее →
          </a>
        </div>
      </div>
    </div>
  );
};

const SearchBar = ({ searchTerm, setSearchTerm }: { searchTerm: string; setSearchTerm: (term: string) => void }) => {
  return (
    <div className="relative flex-1 mb-4 md:mb-0 flex items-center">
      <input
        type="text"
        placeholder="Поиск статей..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full px-5 py-3 pr-12 rounded-[30px] border border-zinc-200 focus:outline-none focus:border-[#9f001f] font-montserrat h-[48px]"
      />
      <svg 
        className="absolute right-5 text-zinc-400 pointer-events-none" 
        width="20" 
        height="20" 
        viewBox="0 0 20 20" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2"
      >
        <circle cx="8" cy="8" r="6"/>
        <path d="M12.5 12.5L17 17"/>
      </svg>
    </div>
  );
};

const CategoryFilter = ({ categories, selectedCategory, setSelectedCategory, tags, selectedTags, setSelectedTags }: { 
  categories: string[]; 
  selectedCategory: string; 
  setSelectedCategory: (cat: string) => void;
  tags: string[];
  selectedTags: string[];
  setSelectedTags: (tags: string[]) => void;
}) => {
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isTagsOpen, setIsTagsOpen] = useState(false);

  const toggleTag = (tag: string) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter(t => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  return (
    <div className="flex flex-col md:flex-row gap-4 mb-8 md:items-center">
      <div className="relative md:w-[250px]">
        <button
          onClick={() => setIsCategoryOpen(!isCategoryOpen)}
          className="w-full px-5 py-3 bg-white rounded-[30px] border border-zinc-200 font-montserrat text-sm text-left flex items-center justify-between"
        >
          <span>Категория: {selectedCategory}</span>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" className={`transition-transform ${isCategoryOpen ? 'rotate-180' : ''}`}>
            <path d="M4 6l4 4 4-4"/>
          </svg>
        </button>
        {isCategoryOpen && (
          <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-[20px] shadow-lg border border-zinc-200 z-10 max-h-[300px] overflow-y-auto">
            <button
              onClick={() => { setSelectedCategory("Все"); setIsCategoryOpen(false); }}
              className="w-full px-5 py-3 text-left hover:bg-zinc-50 font-montserrat text-sm"
            >
              Все
            </button>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => { setSelectedCategory(cat); setIsCategoryOpen(false); }}
                className="w-full px-5 py-3 text-left hover:bg-zinc-50 font-montserrat text-sm"
              >
                {cat}
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="relative md:w-[250px]">
        <button
          onClick={() => setIsTagsOpen(!isTagsOpen)}
          className="w-full px-5 py-3 bg-white rounded-[30px] border border-zinc-200 font-montserrat text-sm text-left flex items-center justify-between"
        >
          <span>Теги: {selectedTags.length > 0 ? selectedTags.join(", ") : "Все"}</span>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" className={`transition-transform ${isTagsOpen ? 'rotate-180' : ''}`}>
            <path d="M4 6l4 4 4-4"/>
          </svg>
        </button>
        {isTagsOpen && (
          <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-[20px] shadow-lg border border-zinc-200 z-10 max-h-[300px] overflow-y-auto">
            {tags.map((tag) => (
              <label
                key={tag}
                className="flex items-center px-5 py-3 hover:bg-zinc-50 cursor-pointer font-montserrat text-sm"
              >
                <input
                  type="checkbox"
                  checked={selectedTags.includes(tag)}
                  onChange={() => toggleTag(tag)}
                  className="mr-3"
                />
                {tag}
              </label>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const Pagination = ({ currentPage, totalPages, setCurrentPage }: { 
  currentPage: number; 
  totalPages: number; 
  setCurrentPage: (page: number) => void 
}) => {
  return (
    <div className="flex justify-center items-center gap-2 mt-12">
      <button
        onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
        disabled={currentPage === 1}
        className="px-4 py-2 rounded-[30px] bg-white text-zinc-600 font-montserrat disabled:opacity-50 disabled:cursor-not-allowed hover:bg-zinc-100"
      >
        ←
      </button>
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <button
          key={page}
          onClick={() => setCurrentPage(page)}
          className={`px-4 py-2 rounded-[30px] font-montserrat ${
            currentPage === page 
              ? "bg-[#9f001f] text-white" 
              : "bg-white text-zinc-600 hover:bg-zinc-100"
          }`}
        >
          {page}
        </button>
      ))}
      <button
        onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage === totalPages}
        className="px-4 py-2 rounded-[30px] bg-white text-zinc-600 font-montserrat disabled:opacity-50 disabled:cursor-not-allowed hover:bg-zinc-100"
      >
        →
      </button>
    </div>
  );
};

const SubscribeBlock = () => {
  return (
    <div className="bg-[#9f001f] rounded-[30px] p-8 md:p-12 text-center mb-12">
      <h3 className="text-white text-2xl font-bold mb-4 font-montserrat md:text-3xl">
        Подпишитесь на рассылку
      </h3>
      <p className="text-white text-base mb-6 font-montserrat md:text-lg">
        Получайте новые статьи и полезные материалы на почту
      </p>
      <div className="flex flex-col md:flex-row gap-3 max-w-[500px] mx-auto">
        <input
          type="email"
          placeholder="Ваш email"
          className="flex-1 px-5 py-3 rounded-[30px] font-montserrat focus:outline-none"
        />
        <button className="px-8 py-3 bg-zinc-900 text-white rounded-[30px] font-montserrat font-semibold hover:bg-zinc-800 transition-all">
          Подписаться
        </button>
      </div>
    </div>
  );
};

const RandomArticle = ({ article }: { article: any }) => {
  return (
    <div className="bg-zinc-50 rounded-[30px] p-8 md:p-12 mb-12">
      <h3 className="text-zinc-900 text-xl font-bold mb-4 font-montserrat md:text-2xl">
        Случайная статья
      </h3>
      <div className="bg-white rounded-[20px] p-6 shadow-sm">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-[#9f001f] text-xs font-semibold px-2 py-1 bg-red-50 rounded font-montserrat">
            {article.category}
          </span>
        </div>
        <h4 className="text-zinc-900 text-lg font-bold mb-2 font-montserrat">
          {article.title}
        </h4>
        <p className="text-zinc-600 text-sm mb-4 font-montserrat">
          {article.excerpt}
        </p>
        <a
          href="#"
          className="inline-block text-[#9f001f] text-sm font-semibold font-montserrat hover:underline"
        >
          Читать далее →
        </a>
      </div>
    </div>
  );
};

export const BlogPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Все");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 12;

  const categories = ["Проектирование", "Производство", "Технологии", "Качество"];
  const allTags = ["реакторы", "проектирование", "химия", "материалы", "производство", "биореакторы", "CIP", "SIP", "качество", "контроль", "стандарты", "автоматизация", "технологии", "энергоэффективность", "оптимизация", "безопасность", "сварка", "инновации"];
  
  const allArticles = [
    {
      title: "Особенности проектирования химических реакторов",
      date: "15 января 2025",
      excerpt: "Рассказываем о ключевых аспектах проектирования реакторного оборудования для химической промышленности.",
      category: "Проектирование",
      tags: ["реакторы", "проектирование", "химия"],
      readTime: "5 мин",
      views: 1234
    },
    {
      title: "Материалы для производства емкостного оборудования",
      date: "10 января 2025",
      excerpt: "Обзор современных материалов и их применение в производстве технологического оборудования.",
      category: "Производство",
      tags: ["материалы", "производство"],
      readTime: "7 мин",
      views: 987
    },
    {
      title: "Системы CIP/SIP в биореакторах",
      date: "5 января 2025",
      excerpt: "Важность систем безразборной мойки и стерилизации в фармацевтическом производстве.",
      category: "Технологии",
      tags: ["биореакторы", "CIP", "SIP"],
      readTime: "6 мин",
      views: 1456
    },
    {
      title: "Контроль качества при производстве оборудования",
      date: "28 декабря 2024",
      excerpt: "Методы и стандарты контроля качества на всех этапах производства технологического оборудования.",
      category: "Качество",
      tags: ["качество", "контроль", "стандарты"],
      readTime: "8 мин",
      views: 2103
    },
    {
      title: "Автоматизация производственных процессов",
      date: "20 декабря 2024",
      excerpt: "Современные решения для автоматизации и управления технологическими процессами.",
      category: "Технологии",
      tags: ["автоматизация", "технологии"],
      readTime: "6 мин",
      views: 1678
    },
    {
      title: "Энергоэффективность в производстве",
      date: "15 декабря 2024",
      excerpt: "Как оптимизировать энергопотребление при эксплуатации технологического оборудования.",
      category: "Производство",
      tags: ["энергоэффективность", "оптимизация"],
      readTime: "5 мин",
      views: 1345
    },
    {
      title: "Новые стандарты безопасности оборудования",
      date: "10 декабря 2024",
      excerpt: "Обзор обновленных требований к безопасности технологического оборудования.",
      category: "Качество",
      tags: ["безопасность", "стандарты"],
      readTime: "7 мин",
      views: 1890
    },
    {
      title: "Инновации в сварочных технологиях",
      date: "5 декабря 2024",
      excerpt: "Современные методы сварки для производства высокотехнологичного оборудования.",
      category: "Технологии",
      tags: ["сварка", "инновации"],
      readTime: "6 мин",
      views: 1567
    }
  ];

  const filteredArticles = allArticles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "Все" || article.category === selectedCategory;
    const matchesTags = selectedTags.length === 0 || selectedTags.some(tag => article.tags.includes(tag));
    return matchesSearch && matchesCategory && matchesTags;
  });

  const totalPages = Math.ceil(filteredArticles.length / articlesPerPage);
  const startIndex = (currentPage - 1) * articlesPerPage;
  const displayedArticles = filteredArticles.slice(startIndex, startIndex + articlesPerPage);

  const randomArticle = allArticles[Math.floor(Math.random() * allArticles.length)];

  return (
    <body className="text-black text-base not-italic normal-nums font-normal accent-auto caret-transparent block tracking-[normal] leading-[normal] list-outside list-disc pointer-events-auto text-start indent-[0px] normal-case visible border-separate font-times_new_roman overflow-x-hidden">
      <div className="caret-transparent">
        <Header />
        <BlogHero />
        
        <div className="bg-white caret-transparent w-full py-[60px] md:py-[90px]">
          <div className="max-w-[1920px] mx-auto">
            <div className="caret-transparent max-w-screen-sm w-full mx-auto px-5 md:max-w-[1200px]">
              
              <div className="flex flex-col md:flex-row gap-4 mb-8">
                <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
                
                <CategoryFilter 
                categories={categories} 
                selectedCategory={selectedCategory} 
                setSelectedCategory={setSelectedCategory}
                tags={allTags}
                  selectedTags={selectedTags}
                  setSelectedTags={setSelectedTags}
                />
              </div>
              
              <div className="caret-transparent flex flex-wrap justify-center mb-12">
                {displayedArticles.map((article, index) => (
                  <BlogCard key={index} {...article} />
                ))}
              </div>

              {filteredArticles.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-zinc-500 text-lg font-montserrat">
                    Статьи не найдены. Попробуйте изменить параметры поиска.
                  </p>
                </div>
              )}

              {filteredArticles.length > articlesPerPage && (
                <Pagination 
                  currentPage={currentPage} 
                  totalPages={totalPages} 
                  setCurrentPage={setCurrentPage} 
                />
              )}

              <SubscribeBlock />
              
              <RandomArticle article={randomArticle} />
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </body>
  );
};
