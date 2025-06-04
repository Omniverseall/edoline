import React from 'react';
import { FileText, Phone, Mail, MapPin } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { TranslationKey } from '../locales/translations';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  const navLinks: {key: TranslationKey}[] = [
    { key: 'home' },
    { key: 'features' },
    { key: 'solutions' },
    { key: 'processes' },
    { key: 'security' },
    { key: 'contacts' }
  ];

  const featureLinks: {key: TranslationKey}[] = [
    { key: 'documentManagement' },
    { key: 'approvalRoutes' },
    { key: 'executionControl' },
    { key: 'electronicSignature' },
    { key: 'hrDocuments' },
    { key: 'knowledgeBase' }
  ];

  return (
    <footer className="bg-themed-surface py-12 sm:py-16 relative overflow-hidden border-t border-themed-custom">
      <div className="absolute inset-0 -z-10 bg-grid-pattern opacity-10 dark:opacity-5"></div>
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 mb-4 sm:mb-12">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4 sm:mb-6">
              <FileText className="w-7 h-7 sm:w-8 sm:h-8 text-blue-500" />
              <span className="text-xl sm:text-2xl font-bold text-blue-500 ">EdoLine</span>
            </div>
            <p className="text-themed-muted mb-4 sm:mb-6 text-sm sm:text-base">
              {t('footerDescription')}
            </p>
          </div>
          
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6 text-themed-foreground">{t('navigation')}</h3>
            <ul className="space-y-2 sm:space-y-3">
              {navLinks.map((item) => (
                <li key={item.key}>
                  <span className="text-themed-muted text-sm sm:text-base">
                    {t(item.key)}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6 text-themed-foreground">{t('features')}</h3>
            <ul className="space-y-2 sm:space-y-3">
              {featureLinks.map((item) => (
                <li key={item.key}>
                  <span className="text-themed-muted text-sm sm:text-base">
                    {t(item.key)}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6 text-themed-foreground">{t('contacts')}</h3>
            <ul className="space-y-3 sm:space-y-4">
              <li className="flex items-start space-x-2 sm:space-x-3">
                <Phone className="text-blue-500 dark:text-blue-400 mt-1 flex-shrink-0 w-4 h-4 sm:w-5 sm:h-5"/>
                <span className="text-themed-muted text-sm sm:text-base">{t('contactPhone')}</span>
              </li>
              <li className="flex items-start space-x-2 sm:space-x-3">
                <Mail className="text-blue-500 dark:text-blue-400 mt-1 flex-shrink-0 w-4 h-4 sm:w-5 sm:h-5"/>
                <span className="text-themed-muted text-sm sm:text-base break-all">{t('contactEmail')}</span>
              </li>
              <li className="flex items-start space-x-2 sm:space-x-3">
                <MapPin className="text-blue-500 dark:text-blue-400 mt-1 flex-shrink-0 w-4 h-4 sm:w-5 sm:h-5"/>
                <span className="text-themed-muted text-sm sm:text-base">{t('contactAddress')}</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-themed-custom pt-6 sm:pt-8 mt-6 sm:mt-8 text-center">
          <p className="text-themed-muted text-sm sm:text-base">© {new Date().getFullYear()} EdoLine. {t('allRightsReserved')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;