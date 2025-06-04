import React, { useRef } from 'react';
import { useInView } from '../hooks/useInView';
import { Settings, Vote, FileSearch, Database } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { TranslationKey } from '../locales/translations';

const WorkflowSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.1 });
  const { t } = useLanguage();

  const votingFeatures: {titleKey: TranslationKey, descKey: TranslationKey}[] = [
    { titleKey: 'workflowVoteFeat1Title', descKey: 'workflowVoteFeat1Desc' },
    { titleKey: 'workflowVoteFeat2Title', descKey: 'workflowVoteFeat2Desc' },
    { titleKey: 'workflowVoteFeat3Title', descKey: 'workflowVoteFeat3Desc' },
  ];

  const dynamicDocFeatures: {titleKey: TranslationKey, descKey: TranslationKey}[] = [
    { titleKey: 'workflowDynDocFeat1Title', descKey: 'workflowDynDocFeat1Desc' },
    { titleKey: 'workflowDynDocFeat2Title', descKey: 'workflowDynDocFeat2Desc' },
    { titleKey: 'workflowDynDocFeat3Title', descKey: 'workflowDynDocFeat3Desc' },
  ];

  const hrWorkflowItems: {titleKey: TranslationKey, descKey: TranslationKey}[] = [
    { titleKey: 'workflowHRFeat1Title', descKey: 'workflowHRFeat1Desc' },
    { titleKey: 'workflowHRFeat2Title', descKey: 'workflowHRFeat2Desc' },
    { titleKey: 'workflowHRFeat3Title', descKey: 'workflowHRFeat3Desc' },
    { titleKey: 'workflowHRFeat4Title', descKey: 'workflowHRFeat4Desc' },
  ];

  const controlKnowledgeItems: {titleKey: TranslationKey, descKey: TranslationKey}[] = [
    { titleKey: 'workflowControlFeat1Title', descKey: 'workflowControlFeat1Desc' },
    { titleKey: 'workflowControlFeat2Title', descKey: 'workflowControlFeat2Desc' },
    { titleKey: 'workflowControlFeat3Title', descKey: 'workflowControlFeat3Desc' },
  ];

  return (
    <section id="processes-section" ref={sectionRef} className="section relative overflow-hidden bg-themed-surface">
      <div className="absolute inset-0 -z-10 bg-grid-pattern opacity-10 dark:opacity-5"></div>
      <div className="absolute top-0 right-0 w-[calc(100vw+100px)] max-w-[1000px] h-[600px] -z-10 bg-teal-500/10 dark:bg-teal-500/5 rounded-full filter blur-[100px]"></div>

      <div className="container">
        <div className={`text-center max-w-3xl mx-auto mb-8 sm:mb-16 ${isInView ? 'animate-fade-in' : 'opacity-0'}`}>
          <h3 className="text-lg font-medium text-teal-400 mb-2">{t('workflowSectionSubtitle')}</h3>
          <h2 className="mb-6 text-themed-foreground">{t('workflowSectionTitle')}</h2>
          <p className="text-themed-muted text-lg">
            {t('workflowSectionDescription')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 mb-12 sm:mb-16">
          <div className={`card ${isInView ? 'animate-slide-up' : 'opacity-0'}`}>
            <div className="mb-6">
              <div className="w-12 h-12 glass flex items-center justify-center rounded-full mb-4">
                <Vote className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-4 text-themed-foreground">{t('workflowVoteTitle')}</h3>
            </div>
            
            <div className="space-y-4 sm:space-y-6">
              {votingFeatures.map((item, index) => (
                <div key={item.titleKey} className="glass p-4 rounded-xl hover:bg-white/5 dark:hover:bg-black/5 light:hover:bg-slate-100/70 transition-all">
                  <h4 className="font-semibold mb-2 flex items-center text-themed-foreground">
                    <span className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center mr-2 text-xs text-white">{index + 1}</span>
                    {t(item.titleKey)}
                  </h4>
                  <p className="text-themed-muted text-sm">{t(item.descKey)}</p>
                </div>
              ))}
            </div>
          </div>

          <div className={`card ${isInView ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
            <div className="mb-6">
              <div className="w-12 h-12 glass flex items-center justify-center rounded-full mb-4">
                <Settings className="w-6 h-6 text-teal-400" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-4 text-themed-foreground">{t('workflowDynDocTitle')}</h3>
            </div>
            
            <div className="space-y-4 sm:space-y-6">
              {dynamicDocFeatures.map((item, index) => (
                 <div key={item.titleKey} className="glass p-4 rounded-xl hover:bg-white/5 dark:hover:bg-black/5 light:hover:bg-slate-100/70 transition-all">
                  <h4 className="font-semibold mb-2 flex items-center text-themed-foreground">
                    <span className="w-6 h-6 rounded-full bg-teal-500 flex items-center justify-center mr-2 text-xs text-white">{index + 1}</span>
                    {t(item.titleKey)}
                  </h4>
                  <p className="text-themed-muted text-sm">{t(item.descKey)}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          <div className={`card ${isInView ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
            <div className="mb-6">
              <div className="w-12 h-12 glass flex items-center justify-center rounded-full mb-4">
                <FileSearch className="w-6 h-6 text-violet-400" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-4 text-themed-foreground">{t('workflowHRTitle')}</h3>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {hrWorkflowItems.map((item) => (
                <div key={item.titleKey} className="glass p-4 rounded-xl hover:bg-white/5 dark:hover:bg-black/5 light:hover:bg-slate-100/70 transition-all">
                  <h4 className="font-semibold mb-2 text-themed-foreground">{t(item.titleKey)}</h4>
                  <p className="text-themed-muted text-sm">{t(item.descKey)}</p>
                </div>
              ))}
            </div>
          </div>

          <div className={`card ${isInView ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
            <div className="mb-6">
              <div className="w-12 h-12 glass flex items-center justify-center rounded-full mb-4">
                <Database className="w-6 h-6 text-pink-400" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-4 text-themed-foreground">{t('workflowControlTitle')}</h3>
            </div>
            
            <div className="space-y-4 sm:space-y-6">
              {controlKnowledgeItems.map((item) => (
                <div key={item.titleKey} className="glass p-4 rounded-xl hover:bg-white/5 dark:hover:bg-black/5 light:hover:bg-slate-100/70 transition-all">
                  <h4 className="font-semibold mb-2 text-themed-foreground">{t(item.titleKey)}</h4>
                  <p className="text-themed-muted text-sm">{t(item.descKey)}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkflowSection;