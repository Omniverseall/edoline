import React, { useEffect, useRef, useState } from 'react';
import ContactModal from './ContactModal';
import logoSrc from './Logo.png';
const Hero: React.FC = () => {
  const parallaxRef = useRef<HTMLDivElement>(null);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!parallaxRef.current) return;
      const scrollY = window.scrollY;
      parallaxRef.current.style.transform = `translateY(${scrollY * 0.5}px)`;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <section className="relative min-h-screen flex items-center overflow-hidden pt-20 pb-16">
        {/* Background elements */}
        <div className="absolute inset-0 -z-10 bg-grid-pattern opacity-20"></div>
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] -z-10 bg-blue-500/20 rounded-full filter blur-[120px] animate-pulse-slow"
          style={{ transform: 'translateY(-50%)' }}
        ></div>

        {/* Floating elements */}
        <div ref={parallaxRef} className="absolute inset-0 pointer-events-none -z-5">
          <div className="absolute top-[20%] right-[10%] w-20 h-20 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm animate-float"></div>
          <div className="absolute top-[60%] left-[15%] w-32 h-32 rounded-full bg-gradient-to-r from-violet-500/20 to-pink-500/20 backdrop-blur-sm animate-float" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-[30%] left-[20%] w-16 h-16 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-sm animate-float" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 mt-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex justify-center mb-4">
              <div className="flex items-center space-x-2">
                <img src={logoSrc} alt="Логотип компании" className="h-[200px] w-[200px]" /> {/* <--- ИЗМЕНИТЕ ЭТУ СТРОКУ */}
              </div>
            </div>

            <h1 className="mb-6 animate-fade-in">
              <span className="gradient-text">EdoLine</span> - Платформа электронного документооборота
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              Система ЭДО для управления документами, исполнением и оптимизации бизнес-процессов.
            </p>
            <div className="glass max-w-3xl mx-auto p-6 rounded-2xl animate-slide-up" style={{ animationDelay: '0.6s' }}>
              <h3 className="text-xl mb-4">Комплексное решение для внутреннего документооборота</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div className="p-4 hover:bg-white/5 rounded-lg transition-colors">
                  <h4 className="text-blue-400 mb-2">Управление документами</h4>
                  <p className="text-gray-300 text-sm">Создавайте, редактируйте, храните и архивируйте все документы</p>
                </div>
                <div className="p-4 hover:bg-white/5 rounded-lg transition-colors">
                  <h4 className="text-violet-400 mb-2">Маршруты согласования</h4>
                  <p className="text-gray-300 text-sm">Упростите процессы согласования с электронными подписями</p>
                </div>
                <div className="p-4 hover:bg-white/5 rounded-lg transition-colors">
                  <h4 className="text-purple-400 mb-2">Контроль исполнения</h4>
                  <p className="text-gray-300 text-sm">Отслеживайте состояние документов и сроки исполнения</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </>
  );
};

export default Hero;