import React, { useRef, useState } from 'react';
import { useInView } from '../hooks/useInView';
import { Lock, Shield, FileCheck, QrCode } from 'lucide-react';

const ElectronicSignature: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.1 });
  const [activeTab, setActiveTab] = useState(0);

  const features = [
    {
      icon: <Shield className="w-6 h-6 text-blue-400" />,
      title: 'Безопасность',
      description: 'Защитите ваши документы от несанкционированного доступа и изменений.'
    },
    {
      icon: <FileCheck className="w-6 h-6 text-green-400" />,
      title: 'Юридическая сила',
      description: 'Обеспечьте юридическую силу вашим документам, используя электронную подпись, отвечающую требованиям законодательства.'
    },
    {
      icon: <Lock className="w-6 h-6 text-amber-400" />,
      title: 'Достоверность',
      description: 'Проверьте подлинность документов и убедитесь в их аутентичности.'
    },
    {
      icon: <QrCode className="w-6 h-6 text-violet-400" />,
      title: 'QR Code',
      description: 'Уникальный код каждой подписи или документа для быстрой проверки.'
    }
  ];

  return (
    <section  ref={sectionRef} className="section relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] -z-10 bg-violet-500/10 rounded-full filter blur-[100px] opacity-70"></div>
      
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className={`${isInView ? 'animate-slide-up' : 'opacity-0'}`}>
            <h3 className="text-lg font-medium text-violet-400 mb-2">Электронная подпись EIMZO</h3>
            <h2 className="mb-6">Безопасное подтверждение документов</h2>
            <p className="text-gray-300 text-lg mb-8">
              Система EdoLine интегрирована с национальной системой электронной подписи EIMZO, 
              что обеспечивает юридическую значимость всех документов и соответствие требованиям законодательства.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className={`glass p-4 rounded-xl hover:bg-white/5 transition-all ${isInView ? 'animate-slide-up' : 'opacity-0'}`}
                  style={{ animationDelay: `${0.1 * index}s` }}
                >
                  <div className="flex items-start space-x-3">
                    <div className="mt-1">{feature.icon}</div>
                    <div>
                      <h4 className="font-semibold mb-1">{feature.title}</h4>
                      <p className="text-gray-300 text-sm">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className={`glass rounded-2xl p-6 overflow-hidden ${isInView ? 'animate-slide-in-right' : 'opacity-0'}`}>
            <div className="tabs flex mb-6 space-x-1 bg-slate-900/50 p-1 rounded-lg">
              {['Подписание', 'Проверка', 'История'].map((tab, index) => (
                <button
                  key={index}
                  className={`flex-1 py-2 px-4 rounded-lg transition-all ${activeTab === index ? 'bg-blue-600 text-white' : 'text-gray-400 hover:text-white'}`}
                  onClick={() => setActiveTab(index)}
                >
                  {tab}
                </button>
              ))}
            </div>
            
            <div className="signature-demo p-4 bg-slate-900/50 rounded-xl h-[300px] flex items-center justify-center">
              {activeTab === 0 && (
                <div className="text-center animate-fade-in">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-500/20 flex items-center justify-center">
                    <FileCheck className="w-8 h-8 text-blue-400" />
                  </div>
                  <h4 className="text-xl mb-2">Подписание документа</h4>
                  <p className="text-gray-300 mb-4">Выберите документ и подпишите его с помощью вашей ЭЦП</p>
                  
                </div>
              )}
              
              {activeTab === 1 && (
                <div className="text-center animate-fade-in">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-500/20 flex items-center justify-center">
                    <Shield className="w-8 h-8 text-green-400" />
                  </div>
                  <h4 className="text-xl mb-2">Проверка подписи</h4>
                  <p className="text-gray-300 mb-4">Загрузите документ для проверки электронной подписи</p>
                  
                </div>
              )}
              
              {activeTab === 2 && (
                <div className="text-center animate-fade-in">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-amber-500/20 flex items-center justify-center">
                    <QrCode className="w-8 h-8 text-amber-400" />
                  </div>
                  <h4 className="text-xl mb-2">История подписей</h4>
                  <p className="text-gray-300 mb-4">Просмотрите историю всех подписанных документов</p>
                  
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ElectronicSignature;