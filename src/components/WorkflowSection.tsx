import React, { useRef } from 'react';
import { useInView } from '../hooks/useInView';
import { Settings, Vote, FileSearch, Database } from 'lucide-react';

const WorkflowSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.1 });

  return (
    <section id="процессы" ref={sectionRef} className="section relative overflow-hidden bg-slate-950">
      <div className="absolute inset-0 -z-10 bg-grid-pattern opacity-10"></div>
      <div className="absolute top-0 right-0 w-[800px] h-[600px] -z-10 bg-teal-500/10 rounded-full filter blur-[100px]"></div>

      <div className="container">
        <div className={`text-center max-w-3xl mx-auto mb-16 ${isInView ? 'animate-fade-in' : 'opacity-0'}`}>
          <h3 className="text-lg font-medium text-teal-400 mb-2">Управление процессами</h3>
          <h2 className="mb-6">Динамическое управление документооборотом</h2>
          <p className="text-gray-300 text-lg">
            Настраивайте и оптимизируйте бизнес-процессы вашей организации с помощью гибких инструментов EdoLine.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Voting and Approval */}
          <div className={`card ${isInView ? 'animate-slide-up' : 'opacity-0'}`}>
            <div className="mb-6">
              <div className="w-12 h-12 glass flex items-center justify-center rounded-full mb-4">
                <Vote className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Голосование и согласование документов</h3>
            </div>
            
            <div className="space-y-6">
              <div className="glass p-4 rounded-xl hover:bg-white/5 transition-all">
                <h4 className="font-semibold mb-2 flex items-center"><span className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center mr-2 text-xs">1</span> Прозрачность</h4>
                <p className="text-gray-300">Проследите путь документа через все стадии согласования, от начального проекта до окончательного утверждения.</p>
              </div>
              <div className="glass p-4 rounded-xl hover:bg-white/5 transition-all">
                <h4 className="font-semibold mb-2 flex items-center"><span className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center mr-2 text-xs">2</span> Удобство</h4>
                <p className="text-gray-300">Голосуйте за документы, оставляйте комментарии и участвуйте в обсуждениях из любого места с помощью мобильных устройств.</p>
              </div>
              <div className="glass p-4 rounded-xl hover:bg-white/5 transition-all">
                <h4 className="font-semibold mb-2 flex items-center"><span className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center mr-2 text-xs">3</span> Эффективность</h4>
                <p className="text-gray-300">Ускорьте принятие решений и сократите время, затрачиваемое на согласование документов.</p>
              </div>
            </div>
          </div>

          {/* Dynamic Documents */}
          <div className={`card ${isInView ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
            <div className="mb-6">
              <div className="w-12 h-12 glass flex items-center justify-center rounded-full mb-4">
                <Settings className="w-6 h-6 text-teal-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Динамическое добавление типов документов</h3>
            </div>
            
            <div className="space-y-6">
              <div className="glass p-4 rounded-xl hover:bg-white/5 transition-all">
                <h4 className="font-semibold mb-2 flex items-center"><span className="w-6 h-6 rounded-full bg-teal-500 flex items-center justify-center mr-2 text-xs">1</span> Гибкость</h4>
                <p className="text-gray-300">Создавайте новые типы документов и настраивайте маршруты их согласования в соответствии с потребностями вашей организации.</p>
              </div>
              <div className="glass p-4 rounded-xl hover:bg-white/5 transition-all">
                <h4 className="font-semibold mb-2 flex items-center"><span className="w-6 h-6 rounded-full bg-teal-500 flex items-center justify-center mr-2 text-xs">2</span> Эффективность</h4>
                <p className="text-gray-300">Устраните необходимость в ручном создании маршрутов и оптимизируйте процессы документооборота.</p>
              </div>
              <div className="glass p-4 rounded-xl hover:bg-white/5 transition-all">
                <h4 className="font-semibold mb-2 flex items-center"><span className="w-6 h-6 rounded-full bg-teal-500 flex items-center justify-center mr-2 text-xs">3</span> Адаптация</h4>
                <p className="text-gray-300">Легко адаптируйте систему к изменениям в бизнес-процессах и потребностям компании.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* HR Workflow */}
          <div className={`card ${isInView ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
            <div className="mb-6">
              <div className="w-12 h-12 glass flex items-center justify-center rounded-full mb-4">
                <FileSearch className="w-6 h-6 text-violet-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Циклы HR документооборота</h3>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="glass p-4 rounded-xl hover:bg-white/5 transition-all">
                <h4 className="font-semibold mb-2">Кадровые документы</h4>
                <p className="text-gray-300 text-sm">Оформление сотрудников, контракты, анкеты, приказы и перемещения.</p>
              </div>
              <div className="glass p-4 rounded-xl hover:bg-white/5 transition-all">
                <h4 className="font-semibold mb-2">Карточка сотрудника</h4>
                <p className="text-gray-300 text-sm">Образование, опыт работы, и другие документы, связанные с сотрудниками.</p>
              </div>
              <div className="glass p-4 rounded-xl hover:bg-white/5 transition-all">
                <h4 className="font-semibold mb-2">Оценки и повышение</h4>
                <p className="text-gray-300 text-sm">Документы, касающиеся оценки персонала, повышения квалификации и карьерного роста.</p>
              </div>
              <div className="glass p-4 rounded-xl hover:bg-white/5 transition-all">
                <h4 className="font-semibold mb-2">Увольнение</h4>
                <p className="text-gray-300 text-sm">Документы, связанные с увольнением сотрудников, оформлением выходных пособий и другими процедурами.</p>
              </div>
            </div>
          </div>

          {/* Document Control */}
          <div className={`card ${isInView ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
            <div className="mb-6">
              <div className="w-12 h-12 glass flex items-center justify-center rounded-full mb-4">
                <Database className="w-6 h-6 text-pink-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Контроль и база знаний</h3>
            </div>
            
            <div className="space-y-6">
              <div className="glass p-4 rounded-xl hover:bg-white/5 transition-all">
                <h4 className="font-semibold mb-2">Контроль исполнения</h4>
                <p className="text-gray-300">Следите за сроками выполнения задач и отслеживайте статус документов. Получайте уведомления о приближающихся дедлайнах.</p>
              </div>
              <div className="glass p-4 rounded-xl hover:bg-white/5 transition-all">
                <h4 className="font-semibold mb-2">Обсуждение документов</h4>
                <p className="text-gray-300">Общайтесь с коллегами, оставляйте комментарии и делитесь идеями прямо в контексте документа.</p>
              </div>
              <div className="glass p-4 rounded-xl hover:bg-white/5 transition-all">
                <h4 className="font-semibold mb-2">База знаний</h4>
                <p className="text-gray-300">Создайте репозиторий с документами, шаблонами и другой полезной информацией для быстрого доступа.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkflowSection;