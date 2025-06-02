import React, { useRef, useState } from 'react';
import { useInView } from '../hooks/useInView';
import { Lock, Shield, FileCheck, QrCode } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { TranslationKey } from '../locales/translations';

const ElectronicSignature: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.1 });
  const [activeTab, setActiveTab] = useState(0);
  const { t } = useLanguage();

  const features: {icon: JSX.Element, titleKey: TranslationKey, descriptionKey: TranslationKey}[] = [
    {
      icon: <Shield className="w-6 h-6 text-blue-400" />,
      titleKey: 'eSignFeature1Title',
      descriptionKey: 'eSignFeature1Desc'
    },
    {
      icon: <FileCheck className="w-6 h-6 text-green-400" />,
      titleKey: 'eSignFeature2Title',
      descriptionKey: 'eSignFeature2Desc'
    },
    {
      icon: <Lock className="w-6 h-6 text-amber-400" />,
      titleKey: 'eSignFeature3Title',
      descriptionKey: 'eSignFeature3Desc'
    },
    {
      icon: <QrCode className="w-6 h-6 text-violet-400" />,
      titleKey: 'eSignFeature4Title',
      descriptionKey: 'eSignFeature4Desc'
    }
  ];

  const tabs: {key: TranslationKey, icon: JSX.Element}[] = [
    { key: 'eSignTabSign', icon: <FileCheck className="w-8 h-8 text-blue-400" /> },
    { key: 'eSignTabVerify', icon: <Shield className="w-8 h-8 text-green-400" /> },
    { key: 'eSignTabHistory', icon: <QrCode className="w-8 h-8 text-amber-400" /> }
  ];

  return (
    <section ref={sectionRef} className="section relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[calc(80vw)] max-w-[800px] h-[600px] -z-10 bg-violet-500/10 dark:bg-violet-500/5 rounded-full filter blur-[100px] opacity-70"></div>
      
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className={`${isInView ? 'animate-slide-up' : 'opacity-0'}`}>
            <h3 className="text-lg font-medium text-violet-400 mb-2">{t('eSignSubtitle')}</h3>
            <h2 className="mb-6 text-themed-foreground">{t('eSignTitle')}</h2>
            <p className="text-themed-muted text-lg mb-8">
              {t('eSignDescription')}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className={`glass p-4 rounded-xl hover:bg-white/5 dark:hover:bg-white/5 light:hover:bg-black/5 transition-all ${isInView ? 'animate-slide-up' : 'opacity-0'}`}
                  style={{ animationDelay: `${0.1 * index}s` }}
                >
                  <div className="flex items-start space-x-3">
                    <div className="mt-1">{feature.icon}</div>
                    <div>
                      <h4 className="font-semibold mb-1 text-themed-foreground">{t(feature.titleKey)}</h4>
                      <p className="text-themed-muted text-sm">{t(feature.descriptionKey)}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className={`glass rounded-2xl p-4 sm:p-6 overflow-hidden ${isInView ? 'animate-slide-in-right' : 'opacity-0'}`}>
            <div className="tabs flex mb-6 space-x-1 bg-slate-900/50 dark:bg-slate-800/70 light:bg-slate-200/70 p-1 rounded-lg">
              {tabs.map((tab, index) => (
                <button
                  key={index}
                  className={`flex-1 py-2 px-3 sm:px-4 rounded-md sm:rounded-lg transition-all text-sm sm:text-base ${activeTab === index ? 'bg-blue-600 text-white' : 'text-themed-muted hover:text-themed-foreground'}`}
                  onClick={() => setActiveTab(index)}
                >
                  {t(tab.key)}
                </button>
              ))}
            </div>
            
            <div className="signature-demo p-4 bg-slate-900/50 dark:bg-slate-800/70 light:bg-slate-100 rounded-xl min-h-[250px] sm:min-h-[300px] flex items-center justify-center">
              {tabs.map((tab, index) => activeTab === index && (
                <div key={tab.key} className="text-center animate-fade-in">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full ${index === 0 ? 'bg-blue-500/20' : index === 1 ? 'bg-green-500/20' : 'bg-amber-500/20'} flex items-center justify-center`}>
                    {tab.icon}
                  </div>
                  <h4 className="text-xl mb-2 text-themed-foreground">{t(`${tab.key}Title` as TranslationKey)}</h4>
                  <p className="text-themed-muted mb-4">{t(`${tab.key}Desc` as TranslationKey)}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ElectronicSignature;