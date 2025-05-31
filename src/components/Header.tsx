import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logoSrc from './Logo.png'; // <--- ДОБАВЬТЕ ЭТУ СТРОКУ ДЛЯ ИМПОРТА

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();    setIsMenuOpen(false);
  };

  const navLinks = ['Возможности', 'Решения', 'Процессы', 'Безопасность', 'Контакты'];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-slate-900/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <div className="flex items-center space-x-2">
              <img src={logoSrc} alt="Логотип компании" className="h-[86px] w-[86px]" /> {/* <--- ИЗМЕНИТЕ ЭТУ СТРОКУ */}
            </div>

            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {item}
                </a>
              ))}
            </nav>

            <button
              className="md:hidden p-2 rounded-md text-gray-300 hover:text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Закрыть меню" : "Открыть меню"}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-slate-900/95 backdrop-blur-md p-4">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                  className="text-gray-300 hover:text-white transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <a
                href="#contacts"
                onClick={handleContactClick}
                className="text-gray-300 hover:text-white transition-colors py-2"
              >
                Контакты
              </a>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;