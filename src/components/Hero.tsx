import React from 'react';
import logoSrc from './Logo.png';
import { useLanguage } from '../contexts/LanguageContext';
import { ChevronDown } from 'lucide-react';
import { TranslationKey } from '../locales/translations';

const Hero: React.FC = () => {
  const { t } = useLanguage();

  const heroFeatures: {titleKey: TranslationKey, descKey: TranslationKey, color: string}[] = [
    { titleKey: 'documentManagement', descKey: 'documentManagementDesc', color: 'text-blue-400' },
    { titleKey: 'approvalRoutes', descKey: 'approvalRoutesDesc', color: 'text-violet-400' },
    { titleKey: 'executionControl', descKey: 'executionControlDesc', color: 'text-purple-400' }
  ];

  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-12 sm:pt-24 md:pt-28">
        {/* Простой статичный фон */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900"></div>
        
        {/* Сетка */}
        <div className="absolute inset-0 -z-10 bg-grid-pattern opacity-20 dark:opacity-10"></div>
        
        {/* Простые статичные декоративные элементы */}
        <div className="absolute top-[20%] right-[10%] w-32 h-32 bg-blue-500/10 rounded-full filter blur-3xl"></div>
        <div className="absolute top-[70%] left-[15%] w-24 h-24 bg-violet-500/10 rounded-full filter blur-2xl"></div>
        <div className="absolute top-[40%] left-[80%] w-20 h-20 bg-purple-500/10 rounded-full filter blur-2xl"></div>

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
            
            <div className="glass max-w-3xl mx-auto p-3 sm:p-4 md:p-6 rounded-lg sm:rounded-xl animate-slide-up shadow-2xl" style={{ animationDelay: '0.4s' }}>
              <h3 className="text-base sm:text-lg md:text-xl mb-3 sm:mb-4 text-themed-foreground">{t('heroDescription')}</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-2 sm:gap-3 text-center">
                {heroFeatures.map((item, index) => (
                  <div key={index} className="p-2 sm:p-3 hover:bg-white/10 dark:hover:bg-white/5 light:hover:bg-slate-100/70 rounded-md transition-colors duration-200">
                    <h4 className={`${item.color} font-semibold mb-1 text-xs sm:text-sm md:text-base`}>{t(item.titleKey)}</h4>
                    <p className="text-themed-muted text-xs sm:text-sm">{t(item.descKey)}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 sm:mt-10 animate-slide-up" style={{ animationDelay: '0.5s' }}>
              <a href="#features-section" className="btn btn-primary text-sm sm:text-base md:text-lg px-6 sm:px-8 py-2 sm:py-3 group">
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