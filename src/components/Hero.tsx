import React, { useEffect, useRef } from 'react';
// import ContactModal from './ContactModal'; // Если модальное окно не открывается из Hero, его можно убрать
import logoSrc from './Logo.png';
import { useLanguage } from '../contexts/LanguageContext';
import { ChevronDown } from 'lucide-react';
import { TranslationKey } from '../locales/translations';

const Hero: React.FC = () => {
  const parallaxRef = useRef<HTMLDivElement>(null);
  // const [isContactModalOpen, setIsContactModalOpen] = useState(false); // Убрано, т.к. не используется здесь
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      if (!parallaxRef.current) return;
      const scrollY = window.scrollY;
      parallaxRef.current.style.transform = `translateY(${scrollY * 0.4}px)`;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const heroFeatures: {titleKey: TranslationKey, descKey: TranslationKey, color: string}[] = [
    { titleKey: 'documentManagement', descKey: 'documentManagementDesc', color: 'text-blue-400' },
    { titleKey: 'approvalRoutes', descKey: 'approvalRoutesDesc', color: 'text-violet-400' },
    { titleKey: 'executionControl', descKey: 'executionControlDesc', color: 'text-purple-400' }
  ];


  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16 sm:pt-28 md:pt-32">
        <div className="absolute inset-0 -z-10 bg-grid-pattern opacity-20 dark:opacity-10"></div>
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[calc(100vw+400px)] max-w-[1200px] h-[50vh] max-h-[700px] -z-10 bg-blue-500/20 dark:bg-blue-600/10 rounded-full filter blur-[100px] sm:blur-[150px] animate-pulse-slow"
          style={{ transform: 'translateY(-40%) translateX(-50%)' }}
        ></div>

        <div ref={parallaxRef} className="absolute inset-0 pointer-events-none -z-5">
          <div className="absolute top-[15%] right-[5%] sm:right-[8%] w-14 h-14 sm:w-20 sm:h-20 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-500/20 dark:to-purple-500/20 backdrop-blur-sm animate-float"></div>
          <div className="absolute top-[65%] left-[5%] sm:left-[10%] w-20 h-20 sm:w-28 sm:h-28 rounded-full bg-gradient-to-r from-violet-500/10 to-pink-500/10 dark:from-violet-500/20 dark:to-pink-500/20 backdrop-blur-sm animate-float" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-[35%] left-[8%] sm:left-[18%] w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 dark:from-cyan-500/20 dark:to-blue-500/20 backdrop-blur-sm animate-float" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="container mx-auto px-2 sm:px-4 relative z-10 max-w-2xl sm:max-w-4xl">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex justify-center mb-6 sm:mb-8 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <img src={logoSrc} alt={t('logoAlt')} className="h-10 sm:h-[200px] md:h-[200px] object-contain" />
            </div>

            <h1 className="mb-6 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <span className="gradient-text">{t('heroTitle')}</span>
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-themed-muted mb-10 sm:mb-12 animate-slide-up" style={{ animationDelay: '0.5s' }}>
              {t('heroSubtitle')}
            </p>
            
            <div className="glass max-w-3xl mx-auto p-4 sm:p-6 rounded-xl sm:rounded-2xl animate-slide-up shadow-xl" style={{ animationDelay: '0.7s' }}>
              <h3 className="text-lg sm:text-xl mb-4 text-themed-foreground">{t('heroDescription')}</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 text-center">
                {heroFeatures.map((item, index) => (
                  <div key={index} className="p-3 sm:p-4 hover:bg-white/5 dark:hover:bg-black/5 light:hover:bg-slate-100/70 rounded-lg transition-colors duration-200">
                    <h4 className={`${item.color} font-semibold mb-1 sm:mb-2 text-sm sm:text-base`}>{t(item.titleKey)}</h4>
                    <p className="text-themed-muted text-xs sm:text-sm">{t(item.descKey)}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-12 animate-slide-up" style={{ animationDelay: '0.9s' }}>
              <a href="#features-section" className="btn btn-primary text-base sm:text-lg px-8 py-3 group">
                {t('heroCTA')} <ChevronDown className="w-5 h-5 ml-2 -mr-1 group-hover:translate-y-0.5 transition-transform"/>
              </a>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;