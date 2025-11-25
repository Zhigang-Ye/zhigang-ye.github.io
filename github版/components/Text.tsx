
import React, { useState } from 'react';
import { TEXT_SECTIONS } from '../constants';
import { ArrowLeft } from 'lucide-react';
import { TextEntry, MultiLangString } from '../types';

type Lang = 'cn' | 'tw' | 'en';

const Text: React.FC = () => {
  const [selectedEntry, setSelectedEntry] = useState<TextEntry | null>(null);
  const [lang, setLang] = useState<Lang>('en');

  const getLangString = (obj: MultiLangString | string) => {
    if (typeof obj === 'string') return obj;
    return obj[lang] || obj['cn'] || '';
  };

  const toggleLang = () => {
    if (lang === 'en') setLang('cn');
    else if (lang === 'cn') setLang('tw');
    else setLang('en');
  };

  const getLangLabel = () => {
    switch (lang) {
      case 'cn': return '简体';
      case 'tw': return '繁體';
      case 'en': return 'EN';
      default: return 'EN';
    }
  };

  return (
    <div className="w-full min-h-screen bg-white px-6 md:px-12 py-10 md:py-10 text-black font-sans relative">
      
      {/* Language Toggle - Single Button - Fixed Bottom Right */}
      {/* z-30 to be below Nav (z-50) */}
      <div className="fixed bottom-10 right-6 md:right-12 z-30 pointer-events-auto">
        <button 
          onClick={toggleLang}
          className="flex items-center justify-center w-16 h-16 bg-white/90 backdrop-blur border border-black rounded-full hover:bg-black hover:text-white transition-all duration-200 text-xs shadow-sm"
        >
          {getLangLabel()}
        </button>
      </div>

      {selectedEntry ? (
        // DETAIL VIEW
        <div className="max-w-3xl mx-auto animate-in fade-in duration-300 pb-20 pt-20 md:pt-12">
          {/* Back Button - Fixed Top Left in Reading Mode */}
          <div className="fixed top-24 left-6 md:top-32 md:left-12 z-40">
             <button 
              onClick={() => setSelectedEntry(null)}
              className="flex items-center text-sm bg-white/90 backdrop-blur px-3 py-1 border border-black hover:bg-black hover:text-white transition-colors"
            >
              <ArrowLeft size={16} className="mr-2" />
              BACK
            </button>
          </div>

          <article className="mt-12 md:mt-0">
            <h1 className="text-xl mb-10 font-normal pr-20">{getLangString(selectedEntry.title)}</h1>
            <div className="whitespace-pre-wrap text-base leading-relaxed font-sans text-justify">
              {getLangString(selectedEntry.content)}
            </div>
          </article>
        </div>
      ) : (
        // LIST VIEW
        <div className="max-w-5xl mx-auto pt-4">
          {TEXT_SECTIONS.map((section, idx) => (
            <div key={idx} className="mb-16">
              {/* Category Header with Full-width Line */}
              <div className="border-b border-black pb-2 mb-6">
                <h2 className="text-base font-normal">{getLangString(section.category)}</h2>
              </div>
              
              {/* Article List */}
              <div className="flex flex-col gap-y-3">
                {section.items.map((entry) => (
                  <div 
                    key={entry.id}
                    onClick={() => setSelectedEntry(entry)}
                    className="cursor-pointer group flex items-baseline justify-between hover:text-[#F22C2C] transition-colors duration-200"
                  >
                    <span className="text-base">{getLangString(entry.title)}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Text;
