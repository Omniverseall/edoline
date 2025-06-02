
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logoSrc from './Logo.png';
import ThemeSwitcher from './ThemeSwitcher';
import LanguageSwitcher from './LanguageSwitcher';
import { useLanguage } from '../contexts/LanguageContext';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIsMenuOpen(false);
  };

  const navLinks = [
    { key: 'features', href: '#возможности' },
    { key: 'solutions', href: '#решения' },
    { key: 'processes', href: '#процессы' },
    { key: 'security', href: '#безопасность' },
    { key: 'contacts', href: '#контакты' }
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'glass shadow-lg' : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <div className="flex items-center space-x-2">
              <img src={logoSrc} alt="Логотип компании" className="h-12 w-12 sm:h-16 sm:w-16 md:h-[86px] md:w-[86px]" />
            </div>

            <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              {navLinks.map((item) => (
                <a
                  key={item.key}
                  href={item.href}
                  className="text-muted hover:text-current transition-colors text-sm xl:text-base"
                >
                  {t(item.key as any)}
                </a>
              ))}
            </nav>

            <div className="flex items-center space-x-2 sm:space-x-4">
              <ThemeSwitcher />
              <LanguageSwitcher />
              
              <button
                className="lg:hidden p-2 rounded-md text-muted hover:text-current"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label={isMenuOpen ? "Закрыть меню" : "Открыть меню"}
              >
                {isMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden glass p-4">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((item) => (
                <a
                  key={item.key}
                  href={item.href}
                  className="text-muted hover:text-current transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t(item.key as any)}
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
