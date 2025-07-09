import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { TranslationKey } from '../locales/translations';
import { FileText } from 'lucide-react';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  const navLinks = [
    { key: 'home', href: '#' },
    { key: 'features', href: '#features-section' },
    { key: 'solutions', href: '#solutions-section' },
    { key: 'processes', href: '#processes-section' },
    { key: 'security', href: '#security-section' },
    { key: 'pricing', href: '#pricing-section' },
    { key: 'contacts', href: '#contact-section' },
  ];

  return (
    <footer className="bg-slate-900 border-t border-slate-800 text-slate-300">
      <div className="container mx-auto px-4 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10 text-center md:text-left">
          
          <div>
            <a href="#" aria-label="EdoLine Home" className="flex items-center justify-center md:justify-start space-x-2 mb-4">
                <FileText className="w-8 h-8 text-blue-500" />
                <span className="text-xl font-bold text-white">EdoLine</span>
            </a>
            <p className="text-slate-400 text-sm mb-4">
              {t('footerDescription')}
            </p>
          </div>

          <div className="md:mx-auto">
            <h4 className="font-bold text-white mb-4">{t('navigation')}</h4>
            <ul className="space-y-2">
              {navLinks.map(link => (
                <li key={link.key}>
                  <a href={link.href} className="text-slate-400 hover:text-blue-400 transition-colors text-sm">
                    {t(link.key as TranslationKey)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:mx-auto">
            <h4 className="font-bold text-white mb-4">{t('contacts')}</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li><a href="mailto:info@edoline.uz" className="hover:text-blue-400 transition-colors">info@edoline.uz</a></li>
              <li><a href="tel:+998770485151" className="hover:text-blue-400 transition-colors">+998 77 048 51 51</a></li>
              <li>{t('footerperevod')}</li>
            </ul>
          </div>
          
        </div>

        <div className="border-t border-slate-800 pt-8 mt-8 flex flex-col sm:flex-row justify-between items-center text-center">
          <p className="text-slate-500 text-xs">
            © {new Date().getFullYear()} EdoLine. {t('footerRights')}
          </p>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            <a href="#" className="text-slate-500 hover:text-slate-300 text-xs transition-colors">{t('footerTerms')}</a>
            <a href="#" className="text-slate-500 hover:text-slate-300 text-xs transition-colors">{t('footerPrivacy')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;