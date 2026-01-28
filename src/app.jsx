import React, { useState, useMemo, useEffect, useRef } from 'react';
import { Camera, Search, Globe, X, ChevronRight, Aperture, Focus, Maximize, ChevronDown, ArrowUp } from 'lucide-react';
import photographersData from './data/photographers.js';
import techniquesData from './data/techniques.js';

/**
 * Photography World 100 - 世界百大攝影師資料庫
 * 功能擴充：分類篩選、Sticky UX、回到頂部、互動優化
 */

const LANGUAGES = [
  { code: 'zh-TW', label: '繁體中文' },
  { code: 'zh-CN', label: '简体中文' },
  { code: 'en', label: 'English' },
  { code: 'ja', label: '日本語' },
  { code: 'ko', label: '한국어' }
];

const UI_STRINGS = {
  'zh-TW': {
    title: '世界百大攝影師',
    subtitle: '攝影藝術資料庫',
    navPhotographers: '攝影師名錄',
    navTechniques: '技法辭典',
    searchPlaceholder: '搜尋攝影師、風格或技巧...',
    viewProfile: '查看詳情',
    backToList: '返回列表',
    focalLength: '常用焦段',
    aperture: '光圈習慣',
    composition: '構圖特色',
    visitWebsite: '訪問官方網站',
    noPhotographers: '沒有找到符合條件的攝影師',
    noTechniques: '沒有找到相關技巧',
    footerQuote: '"你不是在拍照，你是在造像。" — 安塞爾·亞當斯',
    footerCopyright: '© 2024 世界百大攝影師名錄。極簡主義存檔。',
    allCategories: '全部',
    clearFilters: '清除所有篩選條件'
  },
  'zh-CN': {
    title: '世界百大摄影师',
    subtitle: '摄影艺术数据库',
    navPhotographers: '摄影师名录',
    navTechniques: '技法辞典',
    searchPlaceholder: '搜索摄影师、风格 or 技巧...',
    viewProfile: '查看详情',
    backToList: '返回列表',
    focalLength: '常用焦段',
    aperture: '光圈习惯',
    composition: '构图特色',
    visitWebsite: '访问官方网站',
    noPhotographers: '没有找到符合条件的摄影师',
    noTechniques: '没有找到相关技巧',
    footerQuote: '"你不是在拍照，你是在造像。" — 安塞尔·亚当斯',
    footerCopyright: '© 2024 世界百大摄影师名录。极简主义存档。',
    allCategories: '全部',
    clearFilters: '清除所有筛选条件'
  },
  'en': {
    title: 'World Top 100',
    subtitle: 'Photography Archive',
    navPhotographers: 'Photographers',
    navTechniques: 'Techniques',
    searchPlaceholder: 'Search photographers, styles, or techniques...',
    viewProfile: 'View Profile',
    backToList: 'Back to list',
    focalLength: 'Focal Length',
    aperture: 'Aperture',
    composition: 'Composition',
    visitWebsite: 'Visit Website',
    noPhotographers: 'No photographers match your criteria',
    noTechniques: 'No techniques found',
    footerQuote: '"You don\'t take a photograph, you make it." — Ansel Adams',
    footerCopyright: '© 2024 World Top 100 Photographers. Minimalist Archive.',
    allCategories: 'All',
    clearFilters: 'Clear all filters'
  },
  'ja': {
    title: '世界百大写真家',
    subtitle: '写真芸術アーカイブ',
    navPhotographers: '写真家リスト',
    navTechniques: '技法辞典',
    searchPlaceholder: '写真家、スタイル、またはテクニックを検索...',
    viewProfile: '詳細を見る',
    backToList: 'リストに戻る',
    focalLength: '常用焦点距離',
    aperture: '絞り値の傾向',
    composition: '構図の特徴',
    visitWebsite: '公式サイトを訪問',
    noPhotographers: '条件に合う写真家は見つかりませんでした',
    noTechniques: '該当する技法は見つかりませんでした',
    footerQuote: '"写真は撮るものではなく、作るものだ。" — アンセル・アダムス',
    footerCopyright: '© 2024 世界百大写真家アーカイブ。ミニマリズム。',
    allCategories: 'すべて',
    clearFilters: 'すべてのフィルターをクリア'
  },
  'ko': {
    title: '세계 100대 사진가',
    subtitle: '사진 예술 아카이브',
    navPhotographers: '사진가 명부',
    navTechniques: '기법 사전',
    searchPlaceholder: '사진가, 스타일 또는 기법 검색...',
    viewProfile: '상세 보기',
    backToList: '목록으로 돌아가기',
    focalLength: '주요 초점 거리',
    aperture: '조리개 습관',
    composition: '구도 특징',
    visitWebsite: '공식 웹사이트 방문',
    noPhotographers: '조건에 맞는 사진가를 찾을 수 없습니다',
    noTechniques: '관련 기법을 찾을 수 없습니다',
    footerQuote: '"사진은 찍는 것이 아니라 만드는 것이다." — 안셀 아담스',
    footerCopyright: '© 2024 세계 100대 사진가 아카이브. 미니멀리즘.',
    allCategories: '전체',
    clearFilters: '모든 필터 초기화'
  }
};

export default function PhotographyApp() {
  const [lang, setLang] = useState(() => {
    const saved = localStorage.getItem('preferredLang');
    if (saved === 'zh') return 'zh-TW';
    return saved || 'zh-TW';
  });

  const [view, setView] = useState('photographers');
  const [selectedPhotographer, setSelectedPhotographer] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const langMenuRef = useRef(null);

  useEffect(() => {
    localStorage.setItem('preferredLang', lang);
  }, [lang]);

  useEffect(() => {
    function handleScroll() {
      setShowScrollTop(window.scrollY > 400);
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    function handleClickOutside(event) {
      if (langMenuRef.current && !langMenuRef.current.contains(event.target)) {
        setIsLangMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const t = (obj) => {
    if (!obj) return '';
    if (typeof obj === 'string') return obj;
    return obj[lang] || obj['en'] || obj['zh-TW'] || '';
  };

  const ui = UI_STRINGS[lang] || UI_STRINGS['en'];

  // 動態獲取全部分類 (基於 English key，因為它是資料庫中最穩定的 key)
  const categories = useMemo(() => {
    const set = new Set();
    photographersData.forEach(p => {
      if (p.category && p.category['en']) {
        set.add(p.category['en']);
      }
    });
    return ['All', ...Array.from(set)];
  }, []);

  const filteredPhotographers = useMemo(() => {
    return photographersData.filter(p => {
      const matchesSearch =
        t(p.name).toLowerCase().includes(searchTerm.toLowerCase()) ||
        t(p.category).toLowerCase().includes(searchTerm.toLowerCase()) ||
        t(p.style).toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCategory = selectedCategory === 'All' || p.category['en'] === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, lang, selectedCategory]);

  const filteredTechniques = useMemo(() => {
    return techniquesData.filter(tech =>
      t(tech.term).toLowerCase().includes(searchTerm.toLowerCase()) ||
      t(tech.desc).toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm, lang]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={`min-h-screen bg-[#FDFBF7] text-[#333] font-sans selection:bg-gray-200`}>

      {/* HEADER & STICKY CONTAINER */}
      <div className="sticky top-0 z-40 bg-[#FDFBF7]/90 backdrop-blur-md border-b border-gray-100 transition-all duration-300">
        <header className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => { setView('photographers'); setSelectedPhotographer(null); setSelectedCategory('All'); setSearchTerm(''); scrollToTop(); }}>
            <div className="w-10 h-10 bg-black text-white flex items-center justify-center rounded-full shadow-lg">
              <Camera size={20} strokeWidth={1.5} />
            </div>
            <div>
              <h1 className="text-lg font-serif font-bold tracking-wider uppercase leading-none mb-1">
                {ui.title}
              </h1>
              <p className="text-[9px] tracking-[0.2em] text-gray-500 uppercase leading-none">
                {ui.subtitle}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <nav className="hidden md:flex gap-6 text-sm font-medium tracking-wide">
              <button
                onClick={() => { setView('photographers'); setSelectedPhotographer(null); }}
                className={`${view === 'photographers' ? 'text-black border-b-2 border-black' : 'text-gray-400 hover:text-gray-600'} pb-1 transition-all`}
              >
                {ui.navPhotographers}
              </button>
              <button
                onClick={() => { setView('techniques'); setSelectedPhotographer(null); }}
                className={`${view === 'techniques' ? 'text-black border-b-2 border-black' : 'text-gray-400 hover:text-gray-600'} pb-1 transition-all`}
              >
                {ui.navTechniques}
              </button>
            </nav>

            {/* Language Dropdown */}
            <div className="relative" ref={langMenuRef}>
              <button
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                className="flex items-center gap-1 text-[11px] font-bold border border-gray-200 rounded-full px-3 py-1.5 hover:bg-black hover:text-white transition-all shadow-sm"
              >
                <Globe size={12} />
                {LANGUAGES.find(l => l.code === lang)?.label || 'Language'}
                <ChevronDown size={12} className={`transition-transform duration-300 ${isLangMenuOpen ? 'rotate-180' : ''}`} />
              </button>

              {isLangMenuOpen && (
                <div className="absolute right-0 mt-2 w-36 bg-white border border-gray-100 shadow-2xl rounded-xl py-2 animate-fade-in-up">
                  {LANGUAGES.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => {
                        setLang(l.code);
                        setIsLangMenuOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2 text-xs hover:bg-gray-50 transition-colors ${lang === l.code ? 'font-bold text-black bg-gray-50/50' : 'text-gray-500'}`}
                    >
                      {l.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </header>

        {/* Dynamic Filter Bar - Only visible in photographers list view */}
        {view === 'photographers' && !selectedPhotographer && (
          <div className="max-w-6xl mx-auto px-6 pb-4">
            <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none no-scrollbar">
              {categories.map((cat) => {
                const isAll = cat === 'All';
                const isActive = selectedCategory === cat;
                const displayLabel = isAll ? ui.allCategories : t(photographersData.find(p => p.category['en'] === cat)?.category);

                return (
                  <button
                    key={cat}
                    onClick={() => { setSelectedCategory(cat); scrollToTop(); }}
                    className={`whitespace-nowrap px-4 py-1.5 rounded-full text-[11px] font-bold tracking-wider uppercase transition-all duration-300 ${isActive
                        ? 'bg-black text-white shadow-md'
                        : 'bg-white text-gray-400 border border-gray-100 hover:border-gray-300 hover:text-gray-600'
                      }`}
                  >
                    {displayLabel}
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* MAIN CONTENT */}
      <main className="pt-12 pb-20 px-6 max-w-6xl mx-auto min-h-[60vh]">

        {/* Search Bar */}
        <div className="mb-12 flex justify-center">
          <div className="relative w-full max-w-md group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-black transition-colors" size={18} />
            <input
              type="text"
              placeholder={ui.searchPlaceholder}
              className="w-full bg-white border border-gray-100 rounded-full py-3.5 pl-12 pr-6 text-sm focus:outline-none focus:border-gray-300 focus:ring-0 shadow-sm group-hover:shadow-md transition-all duration-300"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-300 hover:text-black transition-colors"
              >
                <X size={16} />
              </button>
            )}
          </div>
        </div>

        {/* VIEW: PHOTOGRAPHERS LIST */}
        {view === 'photographers' && !selectedPhotographer && (
          <div className="animate-fade-in">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPhotographers.map((p) => (
                <div
                  key={p.id}
                  onClick={() => { setSelectedPhotographer(p); scrollToTop(); }}
                  className="group bg-white border border-gray-100 p-8 cursor-pointer hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 relative overflow-hidden flex flex-col rounded-sm"
                >
                  <div className="absolute top-0 left-0 w-1.5 h-full bg-black scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top"></div>

                  <div className="flex justify-between items-start mb-6">
                    <div className="w-16 h-16 bg-gray-50 text-gray-200 rounded-full flex items-center justify-center font-serif text-2xl group-hover:bg-black group-hover:text-white group-hover:shadow-lg transition-all duration-500">
                      {p.initials}
                    </div>
                    <span className="text-[9px] font-black tracking-[0.2em] text-gray-300 group-hover:text-gray-500 transition-colors uppercase border border-gray-50 group-hover:border-gray-200 px-2 py-1 rounded-sm">
                      {t(p.category)}
                    </span>
                  </div>

                  <h3 className="text-xl font-serif font-bold mb-3 group-hover:text-black transition-colors">{t(p.name)}</h3>
                  <p className="text-sm text-gray-400 group-hover:text-gray-600 line-clamp-3 leading-relaxed mb-6 min-h-[60px] transition-colors">
                    {t(p.style)}
                  </p>

                  <div className="flex items-center text-[10px] font-black tracking-widest text-gray-300 group-hover:text-black transition-all uppercase mt-auto">
                    {ui.viewProfile} <ChevronRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              ))}
            </div>

            {filteredPhotographers.length === 0 && (
              <div className="text-center py-32 animate-fade-in">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gray-50 rounded-full mb-6">
                  <Search size={32} className="text-gray-200" />
                </div>
                <p className="text-gray-400 mb-6 font-medium">{ui.noPhotographers}</p>
                <button
                  onClick={() => { setSearchTerm(''); setSelectedCategory('All'); }}
                  className="text-xs font-bold border-b-2 border-black pb-1 hover:text-gray-500 hover:border-gray-300 transition-all"
                >
                  {ui.clearFilters}
                </button>
              </div>
            )}
          </div>
        )}

        {/* VIEW: PHOTOGRAPHER DETAIL */}
        {selectedPhotographer && (
          <div className="animate-fade-in-up max-w-4xl mx-auto mb-10">
            <button
              onClick={() => setSelectedPhotographer(null)}
              className="mb-8 flex items-center text-xs font-black tracking-widest text-gray-400 hover:text-black transition-all group uppercase"
            >
              <X size={14} className="mr-2 group-hover:rotate-90 transition-transform duration-300" /> {ui.backToList}
            </button>

            <div className="bg-white shadow-2xl border border-gray-50 rounded-sm overflow-hidden transform transition-all">
              <div className="p-8 md:p-16">
                <div className="flex flex-col md:flex-row gap-10 md:items-start border-b border-gray-100 pb-12 mb-12">
                  <div className="w-24 h-24 md:w-40 md:h-40 bg-black text-white flex items-center justify-center rounded-full text-5xl font-serif shrink-0 shadow-2xl ring-8 ring-gray-50">
                    {selectedPhotographer.initials}
                  </div>
                  <div className="flex-1">
                    <span className="text-[10px] font-black tracking-[0.3em] text-gray-400 uppercase block mb-4">
                      {t(selectedPhotographer.category)}
                    </span>
                    <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 tracking-tight leading-tight">
                      {t(selectedPhotographer.name)}
                    </h2>
                    <p className="text-gray-500 leading-relaxed text-lg md:text-xl font-light italic">
                      {t(selectedPhotographer.style)}
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-12 mb-12">
                  <div className="space-y-4">
                    <div className="flex items-center text-gray-300 group">
                      <Maximize size={16} className="mr-3 group-hover:text-black transition-colors" />
                      <span className="text-[10px] font-black uppercase tracking-[0.2em]">{ui.focalLength}</span>
                    </div>
                    <p className="font-serif text-lg leading-tight border-l-2 border-gray-100 pl-4">{t(selectedPhotographer.tech.focalLength)}</p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center text-gray-300 group">
                      <Aperture size={16} className="mr-3 group-hover:text-black transition-colors" />
                      <span className="text-[10px] font-black uppercase tracking-[0.2em]">{ui.aperture}</span>
                    </div>
                    <p className="font-serif text-lg leading-tight border-l-2 border-gray-100 pl-4">{t(selectedPhotographer.tech.aperture)}</p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center text-gray-300 group">
                      <Focus size={16} className="mr-3 group-hover:text-black transition-colors" />
                      <span className="text-[10px] font-black uppercase tracking-[0.2em]">{ui.composition}</span>
                    </div>
                    <p className="font-serif text-lg leading-tight border-l-2 border-gray-100 pl-4">{t(selectedPhotographer.tech.composition)}</p>
                  </div>
                </div>

                <div className="flex justify-start">
                  <a
                    href={selectedPhotographer.website}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-3 bg-black text-white px-8 py-4 rounded-full text-xs font-black tracking-[0.2em] uppercase hover:bg-gray-800 hover:shadow-xl transition-all duration-300 active:scale-95"
                  >
                    <Globe size={16} />
                    {ui.visitWebsite}
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* VIEW: TECHNIQUES */}
        {view === 'techniques' && (
          <div className="animate-fade-in max-w-3xl mx-auto">
            <div className="space-y-8">
              {filteredTechniques.map((tech) => (
                <div key={tech.id} className="bg-white border-l-4 border-gray-100 p-8 hover:border-black transition-all duration-500 shadow-sm hover:shadow-xl rounded-r-sm group">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-2xl font-serif font-bold text-gray-900 leading-none">
                      {t(tech.term)}
                    </h3>
                    <span className="text-[9px] font-black uppercase tracking-widest bg-gray-50 px-3 py-1.5 text-gray-400 rounded-full group-hover:bg-black group-hover:text-white transition-all">
                      {tech.category}
                    </span>
                  </div>
                  <p className="text-gray-500 leading-relaxed text-base md:text-lg font-light">
                    {t(tech.desc)}
                  </p>
                </div>
              ))}

              {filteredTechniques.length === 0 && (
                <div className="text-center py-32 animate-fade-in">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-gray-50 rounded-full mb-6">
                    <Focus size={32} className="text-gray-200" />
                  </div>
                  <p className="text-gray-400 font-medium">{ui.noTechniques}</p>
                </div>
              )}
            </div>
          </div>
        )}
      </main>

      {/* FOOTER */}
      <footer className="bg-white border-t border-gray-50 py-20 text-center text-gray-300">
        <div className="max-w-6xl mx-auto px-6">
          <div className="w-12 h-px bg-gray-100 mx-auto mb-10"></div>
          <p className="font-serif italic text-lg text-gray-400 mb-4 max-w-xl mx-auto leading-relaxed">
            {ui.footerQuote}
          </p>
          <p className="text-[10px] font-black uppercase tracking-[0.4em] opacity-40 mt-12 mb-2">
            Photography World 100
          </p>
          <p className="text-[9px] uppercase tracking-widest opacity-30">
            {ui.footerCopyright}
          </p>
        </div>
      </footer>

      {/* BACK TO TOP BUTTON */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 z-50 p-4 bg-black text-white rounded-full shadow-2xl transition-all duration-500 hover:scale-110 active:scale-90 ${showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
          }`}
        aria-label="Back to top"
      >
        <ArrowUp size={20} />
      </button>

      {/* CSS Animations & Global Styles */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(15px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-fade-in-up {
          animation: fadeIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        ::selection {
          background: #000;
          color: #fff;
        }
      `}</style>
    </div>
  );
}