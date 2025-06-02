import React, { useState } from 'react';
import { Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Language } from '../locales/translations';

const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const languages: { code: Language; name: string; flag: string }[] = [
    { code: 'ru', name: 'Русский', flag: '🇷🇺' },
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'uz', name: 'O\'zbekcha', flag: '🇺🇿' }
  ];

  const currentLanguage = languages.find(lang => lang.code === language);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 p-2 rounded-lg glass hover:bg-white/20 dark:hover:bg-white/10 light:hover:bg-black/5 transition-colors"
        aria-label="Change language"
      >
        <Globe className="w-5 h-5 text-themed-foreground" />
        <span className="text-sm font-medium text-themed-foreground">{currentLanguage?.flag}</span>
      </button>

      {isOpen && (
        <div 
        className="absolute top-full right-0 mt-2 w-40 sm:w-48 rounded-lg shadow-xl z-50 
                   bg-themed-surface border border-themed-custom glass overflow-hidden"
        onMouseLeave={() => setIsOpen(false)} // Закрывать при уводе мыши
        >
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                setLanguage(lang.code);
                setIsOpen(false);
              }}
              className={`w-full flex items-center space-x-3 px-4 py-3 text-left 
                         hover:bg-blue-500/10 dark:hover:bg-blue-400/20 light:hover:bg-blue-500/10
                         transition-colors duration-150
                         ${language === lang.code ? 'bg-blue-500/20 dark:bg-blue-400/30 light:bg-blue-500/20' : ''}`}
            >
              <span className="text-lg">{lang.flag}</span>
              <span className="text-sm text-themed-foreground">{lang.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;