import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { FileText} from 'lucide-react';

import ThemeSwitcher from './ThemeSwitcher';
import LanguageSwitcher from './LanguageSwitcher';
import { useLanguage } from '../contexts/LanguageContext';
import { TranslationKey } from '../locales/translations';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { key: TranslationKey, href: string }[] = [
    { key: 'features', href: '#features-section' },
    { key: 'solutions', href: '#solutions-section' },
    { key: 'processes', href: '#processes-section' },
    { key: 'security', href: '#security-section' },
    { key: 'pricing', href: '#pricing-section' },
    { key: 'contacts', href: '#contact-section' }
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 
          ${isScrolled || isMenuOpen ? 'glass shadow-lg' : 'bg-transparent'}`}
      >
        <div className="container mx-auto px-2 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 sm:h-16 md:h-20">
            <a href="#" aria-label="EdoLine Home" className="flex items-center space-x-2">
              <div className="flex items-center space-x-2">
                <FileText className="w-7 h-7 sm:w-8 sm:h-8 text-blue-500" />
                <span className="text-xl sm:text-2xl font-bold text-blue-500 ">EdoLine</span>
              </div>
            </a>

            <nav className="hidden lg:flex items-center space-x-5 xl:space-x-7">
              {navLinks.map((item) => (
                <a
                  key={item.key}
                  href={item.href}
                  className="text-themed-muted hover:text-blue-500 dark:hover:text-blue-400 transition-colors text-sm xl:text-base font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t(item.key)}
                </a>
              ))}
            </nav>

            <div className="flex items-center space-x-2 sm:space-x-3">
              <ThemeSwitcher />
              <LanguageSwitcher />

              <button
                className="lg:hidden p-2 rounded-md text-themed-muted hover:text-themed-foreground focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label={isMenuOpen ? t('closeMenuAria') : t('openMenuAria')}
                aria-expanded={isMenuOpen}
              >
                {isMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden bg-themed-surface p-2 sm:p-3 absolute top-full left-0 right-0 shadow-xl rounded-b-xl max-w-xs w-full mx-auto border-x border-b border-themed-custom"
               style={{ right: '0', left: '0' }}>
            <nav className="flex flex-col space-y-1">
              {navLinks.map((item) => (
                <a
                  key={item.key}
                  href={item.href}
                  className="text-themed-muted hover:text-blue-500 dark:hover:text-blue-400 hover:bg-white/5 dark:hover:bg-black/10 light:hover:bg-slate-100 transition-colors py-2 px-3 rounded-md text-base font-medium"
                  style={{ fontSize: '1rem', minHeight: '40px' }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t(item.key)}
                </a>
              ))}
            </nav>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;