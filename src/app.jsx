import React, { useState, useMemo, useEffect } from 'react';
import { Camera, Search, Globe, X, ChevronRight, Aperture, Focus, Maximize } from 'lucide-react';
import photographersData from './data/photographers.js';
import techniquesData from './data/techniques.js';

/**
 * Photography World 100 - 世界百大攝影師資料庫
 * 資料已移至 src/data/ 目錄方便管理與擴充
 */

// 移除原本的 photographersData，改用 import
const _photographersData_removed = [
  // 資料已移至外部檔案，此處移除
];

export default function PhotographyApp() {
  // 從 localStorage 讀取語言偏好，預設為繁體中文
  const [lang, setLang] = useState(() => {
    return localStorage.getItem('preferredLang') || 'zh';
  });
  const [view, setView] = useState('photographers'); // 'photographers' or 'techniques'
  const [selectedPhotographer, setSelectedPhotographer] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  // 當語言變更時，儲存至 localStorage
  useEffect(() => {
    localStorage.setItem('preferredLang', lang);
  }, [lang]);

  // Helper to get text based on language
  const t = (obj) => {
    if (typeof obj === 'string') return obj;
    return obj[lang];
  };

  const filteredPhotographers = useMemo(() => {
    return photographersData.filter(p =>
      t(p.name).toLowerCase().includes(searchTerm.toLowerCase()) ||
      t(p.category).toLowerCase().includes(searchTerm.toLowerCase())
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
                {lang === 'zh' ? '世界百大攝影師' : 'World Top 100'}
              </h1>
              <p className="text-[10px] tracking-[0.2em] text-gray-500 uppercase">
                {lang === 'zh' ? '攝影藝術資料庫' : 'Photography Archive'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <nav className="hidden md:flex gap-6 text-sm font-medium tracking-wide">
              <button
                onClick={() => { setView('photographers'); setSelectedPhotographer(null); }}
                className={`${view === 'photographers' ? 'text-black border-b-2 border-black' : 'text-gray-400 hover:text-gray-600'} pb-1 transition-all`}
              >
                {lang === 'zh' ? '攝影師名錄' : 'Photographers'}
              </button>
              <button
                onClick={() => { setView('techniques'); setSelectedPhotographer(null); }}
                className={`${view === 'techniques' ? 'text-black border-b-2 border-black' : 'text-gray-400 hover:text-gray-600'} pb-1 transition-all`}
              >
                {lang === 'zh' ? '技法辭典' : 'Techniques'}
              </button>
            </nav>

            <button
              onClick={() => setLang(lang === 'zh' ? 'en' : 'zh')}
              className="text-xs font-bold border border-gray-300 rounded-full px-3 py-1 hover:bg-black hover:text-white transition-colors"
            >
              {lang === 'zh' ? 'EN' : '中'}
            </button>
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
              placeholder={lang === 'zh' ? "搜尋攝影師、風格或技巧..." : "Search photographers, styles, or techniques..."}
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
                  className="group bg-white border border-gray-100 p-8 cursor-pointer hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
                >
                  <div className="absolute top-0 left-0 w-1 h-full bg-black scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top"></div>

                  <div className="flex justify-between items-start mb-6">
                    <div className="w-16 h-16 bg-gray-50 text-gray-300 rounded-full flex items-center justify-center font-serif text-2xl group-hover:bg-black group-hover:text-white transition-colors duration-300">
                      {p.initials}
                    </div>
                    <span className="text-xs font-bold tracking-widest text-gray-400 uppercase border border-gray-100 px-2 py-1 rounded">
                      {t(p.category)}
                    </span>
                  </div>

                  <h3 className="text-xl font-serif font-bold mb-2 group-hover:text-black">{t(p.name)}</h3>
                  <p className="text-sm text-gray-500 line-clamp-2 leading-relaxed mb-4 min-h-[40px]">
                    {t(p.style)}
                  </p>

                  <div className="flex items-center text-xs font-medium text-gray-400 group-hover:text-black transition-colors mt-auto">
                    {lang === 'zh' ? '查看詳情' : 'View Profile'} <ChevronRight size={14} className="ml-1" />
                  </div>
                </div>
              ))}
            </div>

            {filteredPhotographers.length === 0 && (
              <div className="text-center py-20 text-gray-400">
                {lang === 'zh' ? '沒有找到相關攝影師' : 'No photographers found'}
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
              <X size={16} className="mr-2" /> {lang === 'zh' ? '返回列表' : 'Back to list'}
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
                      <span className="text-xs uppercase tracking-wider">{lang === 'zh' ? '常用焦段' : 'Focal Length'}</span>
                    </div>
                    <p className="font-medium">{t(selectedPhotographer.tech.focalLength)}</p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center text-gray-400 mb-1">
                      <Aperture size={16} className="mr-2" />
                      <span className="text-xs uppercase tracking-wider">{lang === 'zh' ? '光圈習慣' : 'Aperture'}</span>
                    </div>
                    <p className="font-medium">{t(selectedPhotographer.tech.aperture)}</p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center text-gray-400 mb-1">
                      <Focus size={16} className="mr-2" />
                      <span className="text-xs uppercase tracking-wider">{lang === 'zh' ? '構圖特色' : 'Composition'}</span>
                    </div>
                    <p className="font-medium">{t(selectedPhotographer.tech.composition)}</p>
                  </div>
                </div>

                <a
                  href={selectedPhotographer.website}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors"
                >
                  <Globe size={16} />
                  {lang === 'zh' ? '訪問官方網站' : 'Visit Website'}
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
                  <p className="text-gray-600 leading-relaxed">
                    {t(tech.desc)}
                  </p>
                </div>
              ))}

              {filteredTechniques.length === 0 && (
                <div className="text-center py-20 text-gray-400">
                  {lang === 'zh' ? '沒有找到相關技巧' : 'No techniques found'}
                </div>
              )}
            </div>
          </div>
        )}
      </main>

      {/* FOOTER */}
      <footer className="bg-white border-t border-gray-100 py-12 text-center text-gray-400 text-sm">
        <p className="font-serif italic mb-2">
          "You don't take a photograph, you make it." — Ansel Adams
        </p>
        <p className="text-xs uppercase tracking-widest opacity-60 mt-6">
          © 2024 World Top 100 Photographers. Minimalist Archive.
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