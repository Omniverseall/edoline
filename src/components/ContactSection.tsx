import React, { useRef, useState } from 'react';
import { useInView } from '../hooks/useInView';
import { Phone, Mail, UserCheck } from 'lucide-react';
import ContactModal from './ContactModal';
import { useLanguage } from '../contexts/LanguageContext';
import { TranslationKey } from '../locales/translations';

const ContactSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.05, once: true });
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const { t } = useLanguage();

  const turnkeyFeatures: TranslationKey[] = [
    'platformCustomization',
    'documentConfiguration',
    'employeeTraining',
    'technicalSupport'
  ];

  return (
    <section id="contact-section" ref={sectionRef} className="section relative overflow-hidden py-12 sm:py-16">
      <div className="container">
        <div className={`glass rounded-xl sm:rounded-2xl p-6 sm:p-8 ${isInView ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: `0.1s` }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold mb-4 text-themed-foreground">{t('turnkeyTitle')}</h3>
              <p className="text-themed-muted mb-6 text-sm sm:text-base">
                {t('turnkeyDescription')}
              </p>
              
              <ul className="space-y-3 sm:space-y-4">
                {turnkeyFeatures.map((featureKey, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-violet-500 flex items-center justify-center mt-1 flex-shrink-0">
                      <span className="text-xs text-white">✓</span>
                    </div>
                    <p className="text-themed-foreground text-sm sm:text-base">{t(featureKey)}</p>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-themed-surface p-4 sm:p-6 rounded-xl border border-themed-custom">
              <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-center text-themed-foreground">{t('contactInfo')}</h3>
              <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
                
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 glass flex items-center justify-center rounded-full flex-shrink-0">
                    <Phone className="text-blue-400 w-4 h-4 sm:w-5 sm:h-5"/>
                  </div>
                  <span className="text-themed-foreground text-sm sm:text-base">{t('contactPhone')}</span>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 glass flex items-center justify-center rounded-full flex-shrink-0">
                    <Mail className="text-blue-400 w-4 h-4 sm:w-5 sm:h-5"/>
                  </div>
                  <span className="text-themed-foreground text-sm sm:text-base break-all">{t('contactEmail')}</span>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 glass flex items-center justify-center rounded-full flex-shrink-0">
                    <UserCheck className="text-blue-400 w-4 h-4 sm:w-5 sm:h-5"/>
                  </div>
                  <span className="text-themed-foreground text-sm sm:text-base">{t('contactPerson')}</span>
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

      <ContactModal 
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </section>
  );
};

export default ContactSection;
