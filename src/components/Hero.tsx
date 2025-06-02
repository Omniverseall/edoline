
import React, { useEffect, useRef, useState } from 'react';
import ContactModal from './ContactModal';
import logoSrc from './Logo.png';
import { useLanguage } from '../contexts/LanguageContext';

const Hero: React.FC = () => {
  const parallaxRef = useRef<HTMLDivElement>(null);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      if (!parallaxRef.current) return;
      const scrollY = window.scrollY;
      parallaxRef.current.style.transform = `translateY(${scrollY * 0.5}px)`;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <section className="relative min-h-screen flex items-center overflow-hidden pt-20 pb-16">
        {/* Background elements */}
        <div className="absolute inset-0 -z-10 bg-grid-pattern opacity-20"></div>
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] sm:w-[1000px] h-[400px] sm:h-[600px] -z-10 bg-blue-500/20 rounded-full filter blur-[80px] sm:blur-[120px] animate-pulse-slow"
          style={{ transform: 'translateY(-50%)' }}
        ></div>

        {/* Floating elements */}
        <div ref={parallaxRef} className="absolute inset-0 pointer-events-none -z-5">
          <div className="absolute top-[20%] right-[5%] sm:right-[10%] w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm animate-float"></div>
          <div className="absolute top-[60%] left-[5%] sm:left-[15%] w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-gradient-to-r from-violet-500/20 to-pink-500/20 backdrop-blur-sm animate-float" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-[30%] left-[10%] sm:left-[20%] w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-sm animate-float" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 mt-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex justify-center mb-6">
              <div className="flex items-center space-x-2">
                <img src={logoSrc} alt="Логотип компании" className="h-24 w-24 sm:h-32 sm:w-32 md:h-48 md:w-48 lg:h-[200px] lg:w-[200px]" />
              </div>
            </div>

            <h1 className="mb-6 animate-fade-in">
              <span className="gradient-text">{t('heroTitle')}</span>
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-muted mb-8 animate-slide-up px-4" style={{ animationDelay: '0.2s' }}>
              {t('heroSubtitle')}
            </p>
            
            <div className="glass max-w-3xl mx-auto p-4 sm:p-6 rounded-xl sm:rounded-2xl animate-slide-up" style={{ animationDelay: '0.6s' }}>
              <h3 className="text-lg sm:text-xl mb-4">{t('heroDescription')}</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div className="p-3 sm:p-4 hover:bg-white/5 rounded-lg transition-colors">
                  <h4 className="text-blue-400 mb-2 text-sm sm:text-base">{t('documentManagement')}</h4>
                  <p className="text-muted text-xs sm:text-sm">{t('documentManagementDesc')}</p>
                </div>
                <div className="p-3 sm:p-4 hover:bg-white/5 rounded-lg transition-colors">
                  <h4 className="text-violet-400 mb-2 text-sm sm:text-base">{t('approvalRoutes')}</h4>
                  <p className="text-muted text-xs sm:text-sm">{t('approvalRoutesDesc')}</p>
                </div>
                <div className="p-3 sm:p-4 hover:bg-white/5 rounded-lg transition-colors">
                  <h4 className="text-purple-400 mb-2 text-sm sm:text-base">{t('executionControl')}</h4>
                  <p className="text-muted text-xs sm:text-sm">{t('executionControlDesc')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </>
  );
};

export default Hero;
