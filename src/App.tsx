import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import { LanguageProvider } from './contexts/LanguageContext';
import Header from './components/Header';
import Hero from './components/Hero';
import DocumentManagement from './components/DocumentManagement';
import FeatureSection from './components/FeatureSection';
import ElectronicSignature from './components/ElectronicSignature';
import WorkflowSection from './components/WorkflowSection';
import SecuritySection from './components/SecuritySection';
import PricingSection from './components/PricingSection';
import ContactSection from './components/ContactSection'; // Импортируем новый компонент ContactSection
import Footer from './components/Footer';


const AppContent: React.FC = () => {

  // Просто скроллим к контактам без открытия модального окна
  const handleOrderClick = () => {
    const contactSection = document.getElementById('contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
        image="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
        imageAlt="Команда обсуждает документы"
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
        image="https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
        imageAlt="Настройка системы"
        featureKeys={["customization","documentTypes","training","support"]}
        direction="left"
        gradient="from-violet-500/20 to-pink-500/20"
      />
      <SecuritySection />
      <PricingSection onOrderClick={handleOrderClick} /> {/* Тарифы и стоимость после Безопасности */}
      <ContactSection /> {/* Контакты после Тарифов и стоимости */}
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