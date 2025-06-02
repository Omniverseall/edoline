
import React, { useRef, useState } from 'react';
import { useInView } from '../hooks/useInView';
import { Server, Lock, Shield, Key } from 'lucide-react';
import ContactModal from './ContactModal';
import { useLanguage } from '../contexts/LanguageContext';

const SecuritySection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.1 });
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <>
      <section id='безопасность' ref={sectionRef} className="section relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] -z-10 bg-blue-500/10 rounded-full filter blur-[80px] sm:blur-[100px]"></div>
        
        <div className="container">
          <div className={`text-center max-w-3xl mx-auto mb-12 sm:mb-16 ${isInView ? 'animate-fade-in' : 'opacity-0'}`}>
            <h3 className="text-base sm:text-lg font-medium text-blue-400 mb-2">{t('securitySubtitle')}</h3>
            <h2 className="mb-4 sm:mb-6">{t('securityTitle')}</h2>
            <p className="text-muted text-base sm:text-lg px-4">
              {t('securityDescription')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
            <div 
              className={`card text-center ${isInView ? 'animate-slide-up' : 'opacity-0'}`}
              style={{ animationDelay: '0.1s' }}
            >
              <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto glass flex items-center justify-center rounded-full mb-4 sm:mb-6">
                <Server className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">{t('confidentiality')}</h3>
              <p className="text-muted text-sm sm:text-base">{t('confidentialityDesc')}</p>
            </div>
            
            <div 
              className={`card text-center ${isInView ? 'animate-slide-up' : 'opacity-0'}`}
              style={{ animationDelay: '0.2s' }}
            >
              <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto glass flex items-center justify-center rounded-full mb-4 sm:mb-6">
                <Lock className="w-6 h-6 sm:w-8 sm:h-8 text-violet-400" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">{t('control')}</h3>
              <p className="text-muted text-sm sm:text-base">{t('controlDesc')}</p>
            </div>
            
            <div 
              className={`card text-center ${isInView ? 'animate-slide-up' : 'opacity-0'}`}
              style={{ animationDelay: '0.3s' }}
            >
              <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto glass flex items-center justify-center rounded-full mb-4 sm:mb-6">
                <Shield className="w-6 h-6 sm:w-8 sm:h-8 text-teal-400" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">{t('compliance')}</h3>
              <p className="text-muted text-sm sm:text-base">{t('complianceDesc')}</p>
            </div>
            
            <div 
              className={`card text-center ${isInView ? 'animate-slide-up' : 'opacity-0'}`}
              style={{ animationDelay: '0.4s' }}
            >
              <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto glass flex items-center justify-center rounded-full mb-4 sm:mb-6">
                <Key className="w-6 h-6 sm:w-8 sm:h-8 text-amber-400" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">{t('administration')}</h3>
              <p id='контакты' className="text-muted text-sm sm:text-base">{t('administrationDesc')}</p>
            </div>
          </div>
          
          <div className={`glass rounded-xl sm:rounded-2xl p-6 sm:p-8 ${isInView ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: '0.5s' }}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold mb-4">{t('turnkeyTitle')}</h3>
                <p className="text-muted mb-6 text-sm sm:text-base">
                  {t('turnkeyDescription')}
                </p>
                
                <ul className="space-y-3 sm:space-y-4">
                  <li className="flex items-start space-x-3">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-blue-500 flex items-center justify-center mt-1 flex-shrink-0">
                      <span className="text-xs">✓</span>
                    </div>
                    <p className="text-current text-sm sm:text-base">{t('platformCustomization')}</p>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-blue-500 flex items-center justify-center mt-1 flex-shrink-0">
                      <span className="text-xs">✓</span>
                    </div>
                    <p className="text-current text-sm sm:text-base">{t('documentConfiguration')}</p>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-blue-500 flex items-center justify-center mt-1 flex-shrink-0">
                      <span className="text-xs">✓</span>
                    </div>
                    <p className="text-current text-sm sm:text-base">{t('employeeTraining')}</p>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-blue-500 flex items-center justify-center mt-1 flex-shrink-0">
                      <span className="text-xs">✓</span>
                    </div>
                    <p className="text-current text-sm sm:text-base">{t('technicalSupport')}</p>
                  </li>
                </ul>
              </div>
              
              <div className="bg-surface p-4 sm:p-6 rounded-xl border border-custom">
                <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-center">{t('contactInfo')}</h3>
                <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 glass flex items-center justify-center rounded-full flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400 sm:w-5 sm:h-5">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                      </svg>
                    </div>
                    <span className="text-current text-sm sm:text-base">+99897 431 14 05</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 glass flex items-center justify-center rounded-full flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400 sm:w-5 sm:h-5">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                        <polyline points="22,6 12,13 2,6"></polyline>
                      </svg>
                    </div>
                    <span className="text-current text-sm sm:text-base break-all">spacenetdev@gmail.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 glass flex items-center justify-center rounded-full flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400 sm:w-5 sm:h-5">
                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                      </svg>
                    </div>
                    <span className="text-current text-sm sm:text-base">Аброрхон Абидов, CEO</span>
                  </div>
                </div>
                <button 
                  onClick={() => setIsContactModalOpen(true)}
                  className="btn btn-primary w-full"
                >
                  {t('contactUs')}
                </button>
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

export default SecuritySection;
