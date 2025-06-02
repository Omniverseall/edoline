import React, { useRef } from 'react';
import { useInView } from '../hooks/useInView';
import { useLanguage } from '../contexts/LanguageContext';
import { TranslationKey } from '../locales/translations';

interface FeatureSectionProps {
  id: string;
  titleKey: TranslationKey;
  subtitleKey: TranslationKey;
  descriptionKey: TranslationKey;
  image: string;
  imageAlt: string;
  featureKeys: TranslationKey[];
  direction?: 'left' | 'right';
  gradient?: string;
}

const FeatureSection: React.FC<FeatureSectionProps> = ({
  id,
  titleKey,
  subtitleKey,
  descriptionKey,
  image,
  imageAlt,
  featureKeys,
  direction = 'right',
  gradient = 'from-blue-500/20 to-violet-500/20',
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.1 });
  const { t } = useLanguage();
  
  return (
    <section id={id} ref={sectionRef} className="section relative overflow-hidden">
      <div className={`absolute -z-10 w-[calc(80vw)] max-w-[1000px] h-[800px] rounded-full filter blur-[120px] bg-gradient-to-r ${gradient} opacity-30 dark:opacity-20 ${direction === 'right' ? 'left-0 -translate-x-1/2' : 'right-0 translate-x-1/2'} top-1/2 -translate-y-1/2`}></div>
      
      <div className="container">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center ${direction === 'left' ? 'lg:flex-row-reverse' : ''}`}>
          <div className={`${isInView ? 'animate-slide-up' : 'opacity-0'}`}>
            <h3 className="text-lg font-medium text-blue-400 mb-2">{t(subtitleKey)}</h3>
            <h2 className="mb-6 gradient-text">{t(titleKey)}</h2>
            <p className="text-themed-muted mb-8 text-lg">
              {t(descriptionKey)}
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 mb-8">
              {featureKeys.map((featureKey, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center">
                    <span className="text-xs font-bold text-white">{index + 1}</span>
                  </div>
                  <span className="text-themed-foreground">{t(featureKey)}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className={`${isInView && direction === 'right' ? 'animate-slide-in-right' : isInView && direction === 'left' ? 'animate-slide-up' : 'opacity-0'} glass rounded-2xl p-1 overflow-hidden`}>
            <img 
              src={image} 
              alt={imageAlt} 
              className="w-full h-auto rounded-xl object-cover"
              style={{ animationDelay: '0.2s' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;