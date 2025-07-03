import React, { useEffect, useRef } from 'react';
import logoSrc from './Logo.png';
import { useLanguage } from '../contexts/LanguageContext';
import { ChevronDown } from 'lucide-react';
import { TranslationKey } from '../locales/translations';

const Hero: React.FC = () => {
  const parallaxRef = useRef<HTMLDivElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      
      // Параллакс для декоративных элементов
      if (parallaxRef.current) {
        parallaxRef.current.style.transform = `translateY(${scrollY * 0.2}px)`;
      }
      
      // Параллакс для фона
      if (backgroundRef.current) {
        backgroundRef.current.style.transform = `translateY(${scrollY * 0.1}px) scale(${1 + scrollY * 0.0002})`;
      }
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
        {/* Параллакс фон */}
        <div 
          ref={backgroundRef}
          className="absolute inset-0 -z-20"
          style={{
            background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 25%, #334155 50%, #1e40af 75%, #3730a3 100%)',
            backgroundSize: '200% 200%',
            animation: 'gradientShift 15s ease infinite'
          }}
        ></div>
        
        {/* Сетка */}
        <div className="absolute inset-0 -z-10 bg-grid-pattern opacity-20 dark:opacity-10"></div>
        
        {/* Светящиеся элементы с параллаксом */}
        <div 
          ref={parallaxRef} 
          className="absolute inset-0 pointer-events-none -z-5"
        >
          {/* Большой центральный элемент */}
          <div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-radial from-blue-500/20 via-purple-500/10 to-transparent rounded-full filter blur-3xl animate-pulse-slow"
          ></div>
          
          {/* Плавающие элементы */}
          <div className="absolute top-[20%] right-[10%] w-32 h-32 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full filter blur-2xl animate-float"></div>
          <div className="absolute top-[70%] left-[15%] w-24 h-24 bg-gradient-to-r from-violet-400/20 to-pink-400/20 rounded-full filter blur-2xl animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-[40%] left-[80%] w-20 h-20 bg-gradient-to-r from-purple-400/20 to-indigo-400/20 rounded-full filter blur-2xl animate-float" style={{ animationDelay: '4s' }}></div>
          <div className="absolute top-[60%] right-[20%] w-16 h-16 bg-gradient-to-r from-teal-400/20 to-blue-400/20 rounded-full filter blur-xl animate-float" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-[30%] left-[5%] w-28 h-28 bg-gradient-to-r from-cyan-400/15 to-blue-400/15 rounded-full filter blur-2xl animate-float" style={{ animationDelay: '3s' }}></div>
        </div>

        <div className="container mx-auto px-2 sm:px-4 relative z-10 max-w-2xl sm:max-w-4xl">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex justify-center mb-4 sm:mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <img src={logoSrc} alt={t('logoAlt')} className="h-24 sm:h-32 md:h-40 lg:h-48 object-contain drop-shadow-2xl" />
            </div>

            <h1 className="mb-4 sm:mb-6 animate-fade-in drop-shadow-lg" style={{ animationDelay: '0.2s' }}>
              <span className="gradient-text">{t('heroTitle')}</span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-themed-muted mb-8 sm:mb-10 animate-slide-up drop-shadow-md" style={{ animationDelay: '0.3s' }}>
              {t('heroSubtitle')}
            </p>
            
            <div className="glass max-w-3xl mx-auto p-3 sm:p-4 md:p-6 rounded-lg sm:rounded-xl animate-slide-up shadow-2xl backdrop-blur-xl" style={{ animationDelay: '0.4s' }}>
              <h3 className="text-base sm:text-lg md:text-xl mb-3 sm:mb-4 text-themed-foreground">{t('heroDescription')}</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-2 sm:gap-3 text-center">
                {heroFeatures.map((item, index) => (
                  <div key={index} className="p-2 sm:p-3 hover:bg-white/10 dark:hover:bg-white/5 light:hover:bg-slate-100/70 rounded-md transition-all duration-300 hover:scale-105">
                    <h4 className={`${item.color} font-semibold mb-1 text-xs sm:text-sm md:text-base`}>{t(item.titleKey)}</h4>
                    <p className="text-themed-muted text-xs sm:text-sm">{t(item.descKey)}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 sm:mt-10 animate-slide-up" style={{ animationDelay: '0.5s' }}>
              <a href="#features-section" className="btn btn-primary text-sm sm:text-base md:text-lg px-6 sm:px-8 py-2 sm:py-3 group shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105">
                {t('heroCTA')} <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 ml-2 -mr-1 group-hover:translate-y-1 transition-transform"/>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;