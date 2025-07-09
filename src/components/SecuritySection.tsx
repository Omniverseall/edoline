import React, { useRef } from 'react';
import { useInView } from '../hooks/useInView';
// Убираем ListChecks и Settings2, так как они не используются. Оставляем нужные.
import { ShieldCheck, Cloud, HardDrive, Layers, Lock, Key } from 'lucide-react'; 
// import ContactModal from './ContactModal'; // Удаляем импорт ContactModal
import { useLanguage } from '../contexts/LanguageContext';
import { TranslationKey } from '../locales/translations';

interface DeploymentOption {
  icon: JSX.Element;
  titleKey: TranslationKey;
  descKey: TranslationKey;
  features: TranslationKey[];
}

interface SecurityBenefit {
  icon: JSX.Element;
  titleKey: TranslationKey;
  descKey: TranslationKey;
}

const SecuritySection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.05, once: true });
  // const [isContactModalOpen, setIsContactModalOpen] = useState(false); // Удаляем состояние для модального окна
  const { t } = useLanguage();

  const deploymentOptions: DeploymentOption[] = [
    { 
      icon: <HardDrive className="w-8 h-8 sm:w-12 sm:h-12 text-blue-400 mb-4" />, 
      titleKey: 'onPremiseDeploymentTitle', 
      descKey: 'onPremiseDeploymentDesc',
      features: [
        'onPremiseFeature1',
        'onPremiseFeature2',
        'onPremiseFeature3',
      ]
    },
    { 
      icon: <Cloud className="w-10 h-10 sm:w-12 sm:h-12 text-teal-400 mb-4" />, 
      titleKey: 'cloudDeploymentTitle', 
      descKey: 'cloudDeploymentDesc',
      features: [
        'cloudFeature1',
        'cloudFeature2',
        'cloudFeature3',
      ]
    },
  ];

  // Используем иконки, которые ближе к скриншоту и уже импортированы или легко доступны
  const coreSecurityBenefits: SecurityBenefit[] = [
    {
      icon: <Layers className="w-8 h-8 text-blue-500" />, 
      titleKey: 'securityBenefitConfidentialityTitle',
      descKey: 'securityBenefitConfidentialityDesc'
    },
    {
      icon: <Lock className="w-8 h-8 text-violet-500" />, 
      titleKey: 'securityBenefitControlTitle',
      descKey: 'securityBenefitControlDesc'
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-teal-500" />, 
      titleKey: 'securityBenefitComplianceTitle',
      descKey: 'securityBenefitComplianceDesc'
    },
    {
      icon: <Key className="w-8 h-8 text-amber-500" />, 
      titleKey: 'securityBenefitAdminTitle',
      descKey: 'securityBenefitAdminDesc'
    }
  ];


  // Удаляем turnkeyFeatures, так как они перенесены в ContactSection
  // const turnkeyFeatures: TranslationKey[] = [
  //   'platformCustomization',
  //   'documentConfiguration',
  //   'employeeTraining',
  //   'technicalSupport'
  // ];

  return (
    <section id='security-section' ref={sectionRef} className="section relative overflow-hidden">
      <div className="absolute top-0 left-0 w-[calc(60vw)] max-w-[800px] h-[700px] -z-10 bg-blue-500/10 dark:bg-blue-500/5 rounded-full filter blur-[80px] sm:blur-[100px] -translate-y-1/4"></div>
      <div className="absolute bottom-0 right-0 w-[calc(50vw)] max-w-[700px] h-[600px] -z-10 bg-teal-500/10 dark:bg-teal-500/5 rounded-full filter blur-[80px] sm:blur-[100px] translate-y-1/4"></div>
      
      <div className="container">
        <div className={`text-center max-w-3xl mx-auto mb-12 sm:mb-16 ${isInView ? 'animate-fade-in' : 'opacity-0'}`}>
          <div className="inline-flex items-center justify-center bg-gradient-to-r from-blue-500/20 to-teal-500/20 p-3 rounded-full mb-4">
              <ShieldCheck className="w-8 h-8 text-blue-400" />
          </div>
          <h2 className="mb-4 sm:mb-6 text-themed-foreground">{t('securitySectionMainTitle')}</h2>
          <p className="text-themed-muted text-base sm:text-lg">
            {t('securitySectionMainDesc')}
          </p>
        </div>

        {/* Core Security Benefits */}
        <div  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 sm:mb-20">
          {coreSecurityBenefits.map((benefit, index) => (
            <div
              key={benefit.titleKey}
              className={`card text-center p-6 ${isInView ? 'animate-slide-up' : 'opacity-0'}`}
              style={{ animationDelay: `${0.1 * index}s` }} 
            >
              <div className="w-16 h-16 mx-auto glass flex items-center justify-center rounded-full mb-6">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-themed-foreground">{t(benefit.titleKey)}</h3>
              <p className="text-themed-muted text-sm">{t(benefit.descKey)}</p>
            </div>
          ))}
        </div>

        {/* Deployment Options */}
        <div  className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 mb-16 sm:mb-20">
          {deploymentOptions.map((option, index) => (
            <div
              key={option.titleKey}
              className={`card text-left p-6 sm:p-8 ${isInView ? 'animate-slide-up' : 'opacity-0'}`}
              style={{ animationDelay: `${0.1 * (index + coreSecurityBenefits.length)}s` }}
            >
              <div  className="flex flex-col sm:flex-row items-start sm:items-center mb-5">
                {option.icon}
                <h3 className="text-xl sm:text-2xl font-bold text-themed-foreground sm:ml-4 mt-2 sm:mt-0">{t(option.titleKey)}</h3>
              </div>
              <p className="text-themed-muted mb-6 text-sm sm:text-base">
                {t(option.descKey)}
              </p>
              <ul className="space-y-3">
                {option.features.map((featureKey, fIndex) => (
                   <li key={fIndex} className="flex items-start space-x-3">
                    <div className={`w-5 h-5 rounded-full ${index === 0 ? 'bg-blue-500' : 'bg-teal-500'} flex items-center justify-center mt-1 flex-shrink-0`}>
                      <span className="text-xs text-white">✓</span>
                    </div>
                    <p className="text-themed-foreground text-sm sm:text-base">{t(featureKey)}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;