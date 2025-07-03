import React, { useEffect, useRef } from 'react';
import logoSrc from './Logo.png';
import { useLanguage } from '../contexts/LanguageContext';
import { ChevronDown } from 'lucide-react';
import { TranslationKey } from '../locales/translations';

const Hero: React.FC = () => {
  const parallaxRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  useEffect(() => {
    // Отключаем параллакс на мобильных для производительности
    const isMobile = window.innerWidth <= 768;
    if (isMobile) return;

    const handleScroll = () => {
      if (!parallaxRef.current) return;
      const scrollY = window.scrollY;
      parallaxRef.current.style.transform = `translateY(${scrollY * 0.3}px)`;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const heroFeatures: {titleKey: TranslationKey, descKey: TranslationKey, color: string}[] = [
    { titleKey: 'documentManagement', descKey: 'documentManagementDesc', color: 'text-blue-400' },
    { titleKey: 'approvalRoutes', descKey: 'approvalRoutesDesc', color: 'text-violet-400' },
    { titleKey: 'executionControl', descKey: 'executionControlDesc', color: 'text-purple-400' }
  ];

  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-12 sm:pt-24 md:pt-28">
        <div className="absolute inset-0 -z-10 bg-grid-pattern opacity-20 dark:opacity-10"></div>
        
        {/* Упрощенный фон для мобильных */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 -z-10 bg-blue-500/15 dark:bg-blue-600/8 rounded-full filter blur-3xl"></div>

        {/* Параллакс элементы только для десктопа */}
        <div ref={parallaxRef} className="absolute inset-0 pointer-events-none -z-5 hidden md:block">
          <div className="absolute top-[15%] right-[8%] w-16 h-16 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-500/20 dark:to-purple-500/20 backdrop-blur-sm animate-float"></div>
          <div className="absolute top-[65%] left-[10%] w-24 h-24 rounded-full bg-gradient-to-r from-violet-500/10 to-pink-500/10 dark:from-violet-500/20 dark:to-pink-500/20 backdrop-blur-sm animate-float" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-[35%] left-[18%] w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 dark:from-cyan-500/20 dark:to-blue-500/20 backdrop-blur-sm animate-float" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="container mx-auto px-2 sm:px-4 relative z-10 max-w-2xl sm:max-w-4xl">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex justify-center mb-4 sm:mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <img src={logoSrc} alt={t('logoAlt')} className="h-24 sm:h-32 md:h-40 lg:h-48 object-contain" />
            </div>

            <h1 className="mb-4 sm:mb-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <span className="gradient-text">{t('heroTitle')}</span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-themed-muted mb-8 sm:mb-10 animate-slide-up" style={{ animationDelay: '0.3s' }}>
              {t('heroSubtitle')}
            </p>
            
            <div className="glass max-w-3xl mx-auto p-3 sm:p-4 md:p-6 rounded-lg sm:rounded-xl animate-slide-up shadow-xl" style={{ animationDelay: '0.4s' }}>
              <h3 className="text-base sm:text-lg md:text-xl mb-3 sm:mb-4 text-themed-foreground">{t('heroDescription')}</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-2 sm:gap-3 text-center">
                {heroFeatures.map((item, index) => (
                  <div key={index} className="p-2 sm:p-3 hover:bg-white/5 dark:hover:bg-black/5 light:hover:bg-slate-100/70 rounded-md transition-colors duration-200">
                    <h4 className={`${item.color} font-semibold mb-1 text-xs sm:text-sm md:text-base`}>{t(item.titleKey)}</h4>
                    <p className="text-themed-muted text-xs sm:text-sm">{t(item.descKey)}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 sm:mt-10 animate-slide-up" style={{ animationDelay: '0.5s' }}>
              <a href="#features-section" className="btn btn-primary text-sm sm:text-base md:text-lg px-6 sm:px-8 py-2 sm:py-3 group">
                {t('heroCTA')} <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 ml-2 -mr-1 group-hover:translate-y-0.5 transition-transform"/>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;