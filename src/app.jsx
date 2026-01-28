import React, { useState, useMemo, useEffect, useRef } from 'react';
import { Camera, Search, Globe, X, ChevronRight, Aperture, Focus, Maximize, ChevronDown } from 'lucide-react';
import photographersData from './data/photographers.js';
import techniquesData from './data/techniques.js';

/**
 * Photography World 100 - 世界百大攝影師資料庫
 * 完全適配 zh-TW, zh-CN, en, ja, ko 五種語言
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
    noPhotographers: '沒有找到相關攝影師',
    noTechniques: '沒有找到相關技巧',
    footerQuote: '"你不是在拍照，你是在造像。" — 安塞爾·亞當斯',
    footerCopyright: '© 2024 世界百大攝影師名錄。極簡主義存檔。'
  },
  'zh-CN': {
    title: '世界百大摄影师',
    subtitle: '摄影艺术数据库',
    navPhotographers: '摄影师名录',
    navTechniques: '技法辞典',
    searchPlaceholder: '搜索摄影师、风格或技巧...',
    viewProfile: '查看详情',
    backToList: '返回列表',
    focalLength: '常用焦段',
    aperture: '光圈习惯',
    composition: '构图特色',
    visitWebsite: '访问官方网站',
    noPhotographers: '没有找到相关摄影师',
    noTechniques: '没有找到相关技巧',
    footerQuote: '"你不是在拍照，你是在造像。" — 安塞尔·亚当斯',
    footerCopyright: '© 2024 世界百大摄影师名录。极简主义存档。'
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
    noPhotographers: 'No photographers found',
    noTechniques: 'No techniques found',
    footerQuote: '"You don\'t take a photograph, you make it." — Ansel Adams',
    footerCopyright: '© 2024 World Top 100 Photographers. Minimalist Archive.'
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
    noPhotographers: '該当する写真家は見つかりませんでした',
    noTechniques: '該当する技法は見つかりませんでした',
    footerQuote: '"写真は撮るものではなく、作るものだ。" — アンセル・アダムス',
    footerCopyright: '© 2024 世界百大写真家アーカイブ。ミニマリズム。'
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
    noPhotographers: '관련 사진가를 찾을 수 없습니다',
    noTechniques: '관련 기법을 찾을 수 없습니다',
    footerQuote: '"사진은 찍는 것이 아니라 만드는 것이다." — 안셀 아담스',
    footerCopyright: '© 2024 세계 100대 사진가 아카이브. 미니멀리즘.'
  }
};

export default function PhotographyApp() {
  const [lang, setLang] = useState(() => {
    const saved = localStorage.getItem('preferredLang');
    // 兼容舊版的 'zh' 設置
    if (saved === 'zh') return 'zh-TW';
    return saved || 'zh-TW';
  });

  const [view, setView] = useState('photographers');
  const [selectedPhotographer, setSelectedPhotographer] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const langMenuRef = useRef(null);

  useEffect(() => {
    localStorage.setItem('preferredLang', lang);
  }, [lang]);

  // 點擊外部關閉語言選單
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

  const filteredPhotographers = useMemo(() => {
    return photographersData.filter(p =>
      t(p.name).toLowerCase().includes(searchTerm.toLowerCase()) ||
      t(p.category).toLowerCase().includes(searchTerm.toLowerCase()) ||
      t(p.style).toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm, lang]);

  const filteredTechniques = useMemo(() => {
    return techniquesData.filter(tech =>
      t(tech.term).toLowerCase().includes(searchTerm.toLowerCase()) ||
      t(tech.desc).toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm, lang]);

  return (
    <div className={`min-h-screen bg-[#FDFBF7] text-[#333] font-sans selection:bg-gray-200 transition-colors duration-500`}>

      {/* HEADER */}
      <header className="fixed top-0 w-full z-40 bg-[#FDFBF7]/90 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => { setView('photographers'); setSelectedPhotographer(null); }}>
            <div className="w-10 h-10 bg-black text-white flex items-center justify-center rounded-full">
              <Camera size={20} strokeWidth={1.5} />
            </div>
            <div>
              <h1 className="text-lg font-serif font-bold tracking-wider uppercase">
                {ui.title}
              </h1>
              <p className="text-[10px] tracking-[0.2em] text-gray-500 uppercase">
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
                className="flex items-center gap-1 text-xs font-bold border border-gray-300 rounded-full px-3 py-1 hover:bg-black hover:text-white transition-colors"
              >
                <Globe size={12} />
                {LANGUAGES.find(l => l.code === lang)?.label || 'Language'}
                <ChevronDown size={12} className={`transition-transform ${isLangMenuOpen ? 'rotate-180' : ''}`} />
              </button>

              {isLangMenuOpen && (
                <div className="absolute right-0 mt-2 w-32 bg-white border border-gray-100 shadow-xl rounded-lg py-2 animate-fade-in-up">
                  {LANGUAGES.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => {
                        setLang(l.code);
                        setIsLangMenuOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2 text-xs hover:bg-gray-50 transition-colors ${lang === l.code ? 'font-bold text-black' : 'text-gray-500'}`}
                    >
                      {l.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="pt-32 pb-20 px-6 max-w-6xl mx-auto">

        {/* Search Bar */}
        <div className="mb-12 flex justify-center">
          <div className="relative w-full max-w-md group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-black transition-colors" size={18} />
            <input
              type="text"
              placeholder={ui.searchPlaceholder}
              className="w-full bg-white border border-gray-200 rounded-full py-3 pl-12 pr-6 text-sm focus:outline-none focus:border-gray-400 focus:ring-0 shadow-sm transition-all"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* VIEW: PHOTOGRAPHERS LIST */}
        {view === 'photographers' && !selectedPhotographer && (
          <div className="animate-fade-in">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPhotographers.map((p) => (
                <div
                  key={p.id}
                  onClick={() => setSelectedPhotographer(p)}
                  className="group bg-white border border-gray-100 p-8 cursor-pointer hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden flex flex-col"
                >
                  <div className="absolute top-0 left-0 w-1 h-full bg-black scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top"></div>

                  <div className="flex justify-between items-start mb-6">
                    <div className="w-16 h-16 bg-gray-50 text-gray-300 rounded-full flex items-center justify-center font-serif text-2xl group-hover:bg-black group-hover:text-white transition-colors duration-300">
                      {p.initials}
                    </div>
                    <span className="text-[10px] font-bold tracking-widest text-gray-400 uppercase border border-gray-100 px-2 py-1 rounded">
                      {t(p.category)}
                    </span>
                  </div>

                  <h3 className="text-xl font-serif font-bold mb-2 group-hover:text-black">{t(p.name)}</h3>
                  <p className="text-sm text-gray-500 line-clamp-2 leading-relaxed mb-4 min-h-[40px]">
                    {t(p.style)}
                  </p>

                  <div className="flex items-center text-xs font-medium text-gray-400 group-hover:text-black transition-colors mt-auto">
                    {ui.viewProfile} <ChevronRight size={14} className="ml-1" />
                  </div>
                </div>
              ))}
            </div>

            {filteredPhotographers.length === 0 && (
              <div className="text-center py-20 text-gray-400">
                {ui.noPhotographers}
              </div>
            )}
          </div>
        )}

        {/* VIEW: PHOTOGRAPHER DETAIL */}
        {selectedPhotographer && (
          <div className="animate-fade-in-up max-w-4xl mx-auto">
            <button
              onClick={() => setSelectedPhotographer(null)}
              className="mb-8 flex items-center text-sm text-gray-500 hover:text-black transition-colors"
            >
              <X size={16} className="mr-2" /> {ui.backToList}
            </button>

            <div className="bg-white shadow-sm border border-gray-100 overflow-hidden">
              <div className="p-8 md:p-12">
                <div className="flex flex-col md:flex-row gap-8 md:items-start border-b border-gray-100 pb-8 mb-8">
                  <div className="w-24 h-24 md:w-32 md:h-32 bg-black text-white flex items-center justify-center rounded-full text-4xl font-serif shrink-0">
                    {selectedPhotographer.initials}
                  </div>
                  <div>
                    <span className="text-xs font-bold tracking-[0.2em] text-gray-400 uppercase block mb-2">
                      {t(selectedPhotographer.category)}
                    </span>
                    <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
                      {t(selectedPhotographer.name)}
                    </h2>
                    <p className="text-gray-600 leading-loose text-lg">
                      {t(selectedPhotographer.style)}
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-8 mb-10">
                  <div className="space-y-2">
                    <div className="flex items-center text-gray-400 mb-1">
                      <Maximize size={16} className="mr-2" />
                      <span className="text-xs uppercase tracking-wider">{ui.focalLength}</span>
                    </div>
                    <p className="font-medium text-sm md:text-base">{t(selectedPhotographer.tech.focalLength)}</p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center text-gray-400 mb-1">
                      <Aperture size={16} className="mr-2" />
                      <span className="text-xs uppercase tracking-wider">{ui.aperture}</span>
                    </div>
                    <p className="font-medium text-sm md:text-base">{t(selectedPhotographer.tech.aperture)}</p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center text-gray-400 mb-1">
                      <Focus size={16} className="mr-2" />
                      <span className="text-xs uppercase tracking-wider">{ui.composition}</span>
                    </div>
                    <p className="font-medium text-sm md:text-base">{t(selectedPhotographer.tech.composition)}</p>
                  </div>
                </div>

                <a
                  href={selectedPhotographer.website}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors"
                >
                  <Globe size={16} />
                  {ui.visitWebsite}
                </a>
              </div>
            </div>
          </div>
        )}

        {/* VIEW: TECHNIQUES */}
        {view === 'techniques' && (
          <div className="animate-fade-in max-w-3xl mx-auto">
            <div className="space-y-6">
              {filteredTechniques.map((tech) => (
                <div key={tech.id} className="bg-white border-l-4 border-gray-200 p-6 hover:border-black transition-colors duration-300 shadow-sm">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-serif font-bold text-gray-900">
                      {t(tech.term)}
                    </h3>
                    <span className="text-[10px] uppercase tracking-wider bg-gray-100 px-2 py-1 text-gray-500 rounded">
                      {tech.category}
                    </span>
                  </div>
                  <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                    {t(tech.desc)}
                  </p>
                </div>
              ))}

              {filteredTechniques.length === 0 && (
                <div className="text-center py-20 text-gray-400">
                  {ui.noTechniques}
                </div>
              )}
            </div>
          </div>
        )}
      </main>

      {/* FOOTER */}
      <footer className="bg-white border-t border-gray-100 py-12 text-center text-gray-400 text-sm">
        <p className="font-serif italic mb-2">
          {ui.footerQuote}
        </p>
        <p className="text-xs uppercase tracking-widest opacity-60 mt-6">
          {ui.footerCopyright}
        </p>
      </footer>

      {/* CSS Animation embedded */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 0.6s ease-out forwards;
        }
        .animate-fade-in-up {
          animation: fadeIn 0.4s ease-out forwards;
        }
      `}</style>
    </div>
  );
}