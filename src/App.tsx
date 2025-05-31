import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import DocumentManagement from './components/DocumentManagement';
import FeatureSection from './components/FeatureSection';
import ElectronicSignature from './components/ElectronicSignature';
import WorkflowSection from './components/WorkflowSection';
import SecuritySection from './components/SecuritySection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative">
      {/* Background */}
      <div className="parallax-bg"></div>
      
      {/* Content */}
      <Header />
      <Hero />
      <DocumentManagement />
      
      <FeatureSection 
        id="решения"
        title="Голосование и согласование документов"
        subtitle="Простые решения"
        description="Система EdoLine предоставляет удобные инструменты для голосования и согласования документов, делая процесс принятия решений более эффективным и прозрачным."
        image="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
        imageAlt="Команда обсуждает документы"
        features={[
          "Прозрачный путь документа через все стадии согласования",
          "Возможность голосовать и комментировать с мобильных устройств",
          "Ускорение процесса принятия решений",
          "Автоматические уведомления и напоминания"
        ]}
        direction="right"
        gradient="from-blue-500/20 to-violet-500/20"
      />
      
      <ElectronicSignature />
      
      <WorkflowSection />
      
      <FeatureSection 
        id="адаптация"
        title="Адаптация под ваши потребности"
        subtitle="Индивидуальный подход"
        description="Платформа EdoLine легко адаптируется под специфические потребности вашей организации, обеспечивая максимальную эффективность документооборота."
        image="https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
        imageAlt="Настройка системы"
        features={[
          "Кастомизация под корпоративный стиль компании",
          "Настройка типов документов и маршрутов согласования",
          "Обучение сотрудников работе с системой",
          "Техническая поддержка на всех этапах внедрения"
        ]}
        direction="left"
        gradient="from-violet-500/20 to-pink-500/20"
      />
      
      <SecuritySection />
      
      <Footer />
    </div>
  );
}

export default App;