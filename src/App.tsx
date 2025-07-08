import React, { useState } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import { LanguageProvider } from './contexts/LanguageContext';
import LoadingAnimation from './components/LoadingAnimation';
import Header from './components/Header';
import Hero from './components/Hero';
import DocumentManagement from './components/DocumentManagement';
import FeatureSection from './components/FeatureSection';
import ElectronicSignature from './components/ElectronicSignature';
import WorkflowSection from './components/WorkflowSection';
import SecuritySection from './components/SecuritySection';
import PricingSection from './components/PricingSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

const AppContent: React.FC = () => {
  const [isLoading, setIsLoading] = useState(() => {
    // Проверяем, был ли пользователь уже на сайте в этой сессии
    const hasVisited = sessionStorage.getItem('hasVisited');
    return !hasVisited;
  });

  const handleLoadingComplete = () => {
    setIsLoading(false);
    // Отмечаем, что пользователь уже видел загрузочную анимацию в этой сессии
    sessionStorage.setItem('hasVisited', 'true');
  };

  const handleOrderClick = () => {
    const contactSection = document.getElementById('contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (isLoading) {
    return <LoadingAnimation onComplete={handleLoadingComplete} />;
  }

  return (
    <div className="relative">
      <div className="parallax-bg"></div>
      <Header />
      <Hero />
      <DocumentManagement />
      <FeatureSection 
        id="solutions-section"
        titleKey="votingTitle"
        subtitleKey="votingSubtitle"
        descriptionKey="votingDescription"
        image="https://img.freepik.com/premium-photo/frustrated-business-people-sitting-table-office_252847-191.jpg"
        imageAlt="Рабочие группы и комитеты"
        featureKeys={["transparentPath","mobileVoting","speedUp","notifications"]}
        direction="right"
        gradient="from-blue-500/20 to-violet-500/20"
      />
      <ElectronicSignature />
      <WorkflowSection />
      <FeatureSection 
        id="adaptation-section"
        titleKey="adaptationTitle"
        subtitleKey="adaptationSubtitle"
        descriptionKey="adaptationDescription"
        image="https://media.istockphoto.com/id/1490859962/photo/power-soft-skills-multi-skills-responsibility-hr-human-resources-concept-personal-attribute.jpg?s=612x612&w=0&k=20&c=ToS6Yl5eZgQUc0t9FWp7tHkabQvoEe0ge1PFbPYvf7A="
        imageAlt="Адаптация под ваши нужды"
        featureKeys={["customization","documentTypes","training","support"]}
        direction="left"
        gradient="from-violet-500/20 to-pink-500/20"
      />
      <SecuritySection />
      <PricingSection onOrderClick={handleOrderClick} />
      <ContactSection />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <AppContent />
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;