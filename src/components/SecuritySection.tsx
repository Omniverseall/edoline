import React, { useRef, useState } from 'react';
import { useInView } from '../hooks/useInView';
import { Server, Lock, Shield, Key } from 'lucide-react';
import ContactModal from './ContactModal';

const SecuritySection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.1 });
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <>
      <section id='безопасность' ref={sectionRef} className="section relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] -z-10 bg-blue-500/10 rounded-full filter blur-[100px]"></div>
        
        <div className="container">
          <div className={`text-center max-w-3xl mx-auto mb-16 ${isInView ? 'animate-fade-in' : 'opacity-0'}`}>
            <h3 className="text-lg font-medium text-blue-400 mb-2">Безопасность данных</h3>
            <h2 className="mb-6">Локальное размещение на сервере заказчика</h2>
            <p className="text-gray-300 text-lg">
              Обеспечьте максимальную безопасность и конфиденциальность ваших данных с помощью локального размещения системы EdoLine.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <div 
              className={`card text-center ${isInView ? 'animate-slide-up' : 'opacity-0'}`}
              style={{ animationDelay: '0.1s' }}
            >
              <div className="w-16 h-16 mx-auto glass flex items-center justify-center rounded-full mb-6">
                <Server className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Конфиденциальность</h3>
              <p className="text-gray-300">Обеспечьте безопасность вашей информации благодаря размещению системы на ваших серверах.</p>
            </div>
            
            <div 
              className={`card text-center ${isInView ? 'animate-slide-up' : 'opacity-0'}`}
              style={{ animationDelay: '0.2s' }}
            >
              <div className="w-16 h-16 mx-auto glass flex items-center justify-center rounded-full mb-6">
                <Lock className="w-8 h-8 text-violet-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Контроль</h3>
              <p className="text-gray-300">Полный контроль доступа к документам и данным. Настройте права для каждого пользователя.</p>
            </div>
            
            <div 
              className={`card text-center ${isInView ? 'animate-slide-up' : 'opacity-0'}`}
              style={{ animationDelay: '0.3s' }}
            >
              <div className="w-16 h-16 mx-auto glass flex items-center justify-center rounded-full mb-6">
                <Shield className="w-8 h-8 text-teal-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Соответствие</h3>
              <p className="text-gray-300">Соблюдение требований законодательства о защите данных и информационной безопасности.</p>
            </div>
            
            <div 
              className={`card text-center ${isInView ? 'animate-slide-up' : 'opacity-0'}`}
              style={{ animationDelay: '0.4s' }}
            >
              <div className="w-16 h-16 mx-auto glass flex items-center justify-center rounded-full mb-6">
                <Key className="w-8 h-8 text-amber-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Администрирование</h3>
              <p id='контакты' className="text-gray-300">Удобное и простое локальное администрирование платформы с полным доступом к настройкам.</p>
            </div>
          </div>
          
          <div className={`glass rounded-2xl p-8 ${isInView ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: '0.5s' }}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">Адаптация, внедрение и запуск под ключ</h3>
                <p className="text-gray-300 mb-6">
                  Мы предлагаем полный цикл внедрения системы EdoLine, включая настройку, обучение сотрудников и техническую поддержку.
                </p>
                
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center mt-1">
                      <span className="text-xs">✓</span>
                    </div>
                    <p className="text-gray-200">Платформа легко кастомизируется под стилистику Заказчика</p>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center mt-1">
                      <span className="text-xs">✓</span>
                    </div>
                    <p className="text-gray-200">Изучаются и настраиваются необходимые типы документов с маршрутами согласований</p>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center mt-1">
                      <span className="text-xs">✓</span>
                    </div>
                    <p className="text-gray-200">Проводится обучение сотрудников Заказчика с видеоматериалами и туториалами</p>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center mt-1">
                      <span className="text-xs">✓</span>
                    </div>
                    <p className="text-gray-200">Запуск и техническое сопровождение в течение 3-х месяцев</p>
                  </li>
                </ul>
              </div>
              
              <div className="bg-slate-900/50 p-6 rounded-xl border border-white/10">
                <h3 className="text-xl font-semibold mb-6 text-center">Свяжитесь с нами для подробной информации</h3>
                <div className="space-y-4 mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 glass flex items-center justify-center rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                      </svg>
                    </div>
                    <span className="text-gray-200">+99897 431 14 05</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 glass flex items-center justify-center rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                        <polyline points="22,6 12,13 2,6"></polyline>
                      </svg>
                    </div>
                    <span className="text-gray-200">spacenetdev@gmail.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 glass flex items-center justify-center rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400">
                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                      </svg>
                    </div>
                    <span className="text-gray-200">Аброрхон Абидов, CEO</span>
                  </div>
                </div>
                <button 
                  onClick={() => setIsContactModalOpen(true)}
                  className="btn btn-primary w-full"
                >
                  Связаться с нами
                </button>
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

export default SecuritySection;