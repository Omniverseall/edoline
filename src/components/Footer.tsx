
import React from 'react';
import { FileText } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-surface py-12 sm:py-16 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-grid-pattern opacity-5"></div>
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-8 sm:mb-12">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4 sm:mb-6">
              <FileText className="w-6 h-6 sm:w-8 sm:h-8 text-blue-500" />
              <span className="text-lg sm:text-xl font-bold">EdoLine</span>
            </div>
            <p className="text-muted mb-4 sm:mb-6 text-sm sm:text-base">
              {t('footerDescription')}
            </p>
          </div>
          
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">{t('navigation')}</h3>
            <ul className="space-y-2 sm:space-y-3">
              {[
                { key: 'home', href: '#' },
                { key: 'features', href: '#возможности' },
                { key: 'solutions', href: '#решения' },
                { key: 'processes', href: '#процессы' },
                { key: 'security', href: '#безопасность' },
                { key: 'contacts', href: '#контакты' }
              ].map((item) => (
                <li key={item.key}>
                  <a href={item.href} className="text-muted hover:text-current transition-colors text-sm sm:text-base">
                    {t(item.key as any)}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">{t('features')}</h3>
            <ul className="space-y-2 sm:space-y-3">
              {[
                { key: 'documentManagement' },
                { key: 'approvalRoutes' },
                { key: 'executionControl' },
                { key: 'electronicSignature' },
                { key: 'hrDocuments' },
                { key: 'knowledgeBase' }
              ].map((item) => (
                <li key={item.key}>
                  <a href="#" className="text-muted hover:text-current transition-colors text-sm sm:text-base">
                    {t(item.key as any)}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">{t('contacts')}</h3>
            <ul className="space-y-3 sm:space-y-4">
              <li className="flex items-start space-x-2 sm:space-x-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400 mt-1 flex-shrink-0 sm:w-5 sm:h-5">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <span className="text-muted text-sm sm:text-base">+99897 431 14 05</span>
              </li>
              <li className="flex items-start space-x-2 sm:space-x-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400 mt-1 flex-shrink-0 sm:w-5 sm:h-5">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                <span className="text-muted text-sm sm:text-base break-all">spacenetdev@gmail.com</span>
              </li>
              <li className="flex items-start space-x-2 sm:space-x-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400 mt-1 flex-shrink-0 sm:w-5 sm:h-5">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <span className="text-muted text-sm sm:text-base">Аброрхон Абидов, CEO</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-custom pt-6 sm:pt-8 mt-6 sm:mt-8 text-center">
          <p className="text-muted text-sm sm:text-base">© 2025 EdoLine. {t('allRightsReserved')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
