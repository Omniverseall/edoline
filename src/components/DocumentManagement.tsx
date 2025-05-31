import React, { useRef } from 'react';
import { useInView } from '../hooks/useInView';
import { 
  FileText, 
  FileCheck, 
  Users, 
  MessageCircle, 
  Clock, 
  ShieldCheck 
} from 'lucide-react';

const DocumentManagement: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.1 });

  const features = [
    {
      icon: <FileText className="w-6 h-6 text-blue-400" />,
      title: 'Управление документами',
      description: 'Создавайте, редактируйте, храните и архивируйте все ваши документы в одном месте.'
    },
    {
      icon: <FileCheck className="w-6 h-6 text-violet-400" />,
      title: 'Маршруты согласования',
      description: 'Упростите процессы согласования и утверждения документов, используя электронные подписи.'
    },
    {
      icon: <Clock className="w-6 h-6 text-green-400" />,
      title: 'Контроль исполнения',
      description: 'Отслеживайте состояние документов, сроки исполнения задач и контролируйте выполнение обязательств.'
    },
    {
      icon: <MessageCircle className="w-6 h-6 text-pink-400" />,
      title: 'Общение и сотрудничество',
      description: 'Обсуждайте документы, оставляйте комментарии и взаимодействуйте с коллегами в режиме реального времени.'
    },
    {
      icon: <Users className="w-6 h-6 text-amber-400" />,
      title: 'Организационная структура',
      description: 'Настройте иерархию: правление, комитеты, руководители и сотрудники с разными правами доступа.'
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-teal-400" />,
      title: 'Безопасность данных',
      description: 'Защита документов от несанкционированного доступа с помощью современных технологий шифрования.'
    }
  ];

  return (
    <section id="возможности" ref={sectionRef} className="section relative overflow-hidden bg-slate-950">
      <div className="absolute inset-0 -z-10 bg-grid-pattern opacity-10"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] -z-10 bg-blue-500/10 rounded-full filter blur-[100px]"></div>

      <div className="container text-center">
        <div className={`max-w-3xl mx-auto mb-16 ${isInView ? 'animate-fade-in' : 'opacity-0'}`}>
          <h3 className="text-lg font-medium text-blue-400 mb-2">Возможности системы</h3>
          <h2 className="mb-6">Комплексное решение для электронного документооборота</h2>
          <p className="text-gray-300 text-lg">
            EdoLine предоставляет полный набор инструментов для эффективного управления всеми аспектами документооборота в вашей организации.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`card hover:bg-gradient-to-br hover:from-slate-800/50 hover:to-blue-900/30 ${isInView ? 'animate-slide-up' : 'opacity-0'}`}
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <div className="glass inline-flex p-3 rounded-full mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DocumentManagement;