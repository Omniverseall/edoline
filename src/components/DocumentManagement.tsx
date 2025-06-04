import React, { useRef } from 'react';
import { useInView } from '../hooks/useInView';
import { 
  FileText, 
  FileCheck, 
  Users, 
  MessageCircle, 
  Clock, 
  ShieldCheck 
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { TranslationKey } from '../locales/translations';


const DocumentManagement: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.1 });
  const { t } = useLanguage();

  const features: {icon: JSX.Element, titleKey: TranslationKey, descriptionKey: TranslationKey}[] = [
    {
      icon: <FileText className="w-6 h-6 text-blue-400" />,
      titleKey: 'docMgmtFeature1Title',
      descriptionKey: 'docMgmtFeature1Desc'
    },
    {
      icon: <FileCheck className="w-6 h-6 text-violet-400" />,
      titleKey: 'docMgmtFeature2Title',
      descriptionKey: 'docMgmtFeature2Desc'
    },
    {
      icon: <Clock className="w-6 h-6 text-green-400" />,
      titleKey: 'docMgmtFeature3Title',
      descriptionKey: 'docMgmtFeature3Desc'
    },
    {
      icon: <MessageCircle className="w-6 h-6 text-pink-400" />,
      titleKey: 'docMgmtFeature4Title',
      descriptionKey: 'docMgmtFeature4Desc'
    },
    {
      icon: <Users className="w-6 h-6 text-amber-400" />,
      titleKey: 'docMgmtFeature5Title',
      descriptionKey: 'docMgmtFeature5Desc'
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-teal-400" />,
      titleKey: 'docMgmtFeature6Title',
      descriptionKey: 'docMgmtFeature6Desc'
    }
  ];

  return (
    <section id="features-section" ref={sectionRef} className="section relative overflow-hidden bg-themed-surface"> 
      <div className="absolute inset-0 -z-10 bg-grid-pattern opacity-10 dark:opacity-5"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[calc(100vw+200px)] max-w-[1000px] h-[600px] -z-10 bg-blue-500/10 dark:bg-blue-500/5 rounded-full filter blur-[100px]"></div>

      <div className="container text-center">
        <div className={`max-w-3xl mx-auto mb-12 sm:mb-16 ${isInView ? 'animate-fade-in' : 'opacity-0'}`}>
          <h3 className="text-lg font-medium text-blue-400 mb-2">{t('docMgmtSubtitle')}</h3>
          <h2 className="mb-6 text-themed-foreground">{t('docMgmtTitle')}</h2>
          <p className="text-themed-muted text-lg">
            {t('docMgmtDescription')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`card hover:bg-gradient-to-br hover:from-slate-800/50 hover:to-blue-900/30 dark:hover:from-slate-700/50 dark:hover:to-blue-800/30 light:hover:from-slate-100/50 light:hover:to-blue-200/30 ${isInView ? 'animate-slide-up' : 'opacity-0'}`}
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <div className="glass inline-flex p-3 rounded-full mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-themed-foreground">{t(feature.titleKey)}</h3>
              <p className="text-themed-muted">{t(feature.descriptionKey)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DocumentManagement;