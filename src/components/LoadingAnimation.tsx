
import React, { useState, useEffect } from 'react';
import { FileText } from 'lucide-react';

interface LoadingAnimationProps {
  onComplete: () => void;
}

const LoadingAnimation: React.FC<LoadingAnimationProps> = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [showIcon, setShowIcon] = useState(false);
  const [showLetters, setShowLetters] = useState<boolean[]>([false, false, false, false, false, false]);

  useEffect(() => {
    // Показываем иконку через 500мс
    const iconTimer = setTimeout(() => {
      setShowIcon(true);
    }, 500);

    // Показываем буквы по очереди начиная с 1.5 секунды
    const letterTimers = [
      setTimeout(() => setShowLetters(prev => [true, ...prev.slice(1)]), 1500),
      setTimeout(() => setShowLetters(prev => [prev[0], true, ...prev.slice(2)]), 1700),
      setTimeout(() => setShowLetters(prev => [...prev.slice(0, 2), true, ...prev.slice(3)]), 1900),
      setTimeout(() => setShowLetters(prev => [...prev.slice(0, 3), true, ...prev.slice(4)]), 2100),
      setTimeout(() => setShowLetters(prev => [...prev.slice(0, 4), true, prev[5]]), 2300),
      setTimeout(() => setShowLetters(prev => [...prev.slice(0, 5), true]), 2500),
    ];

    // Завершение анимации
    const completeTimer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 500);
    }, 4000);

    return () => {
      clearTimeout(iconTimer);
      letterTimers.forEach(timer => clearTimeout(timer));
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  const letters = ['E', 'd', 'o', 'L', 'i', 'n', 'e'];

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center transition-all duration-500 ${
      isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
    }`}>
      {/* Градиентный фон */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900"></div>
      
      {/* Основной контент */}
      <div className="relative z-10 text-center">
        {/* SVG иконка с анимацией появления */}
        <div className="mb-8 flex justify-center">
          <div className={`transition-all duration-1000 ease-out ${
            showIcon 
              ? 'opacity-100 transform scale-100 rotate-0' 
              : 'opacity-0 transform scale-50 rotate-180'
          }`}>
            <FileText className="w-24 h-24 text-blue-400 drop-shadow-lg" />
          </div>
        </div>

        {/* Буквы EdoLine с анимацией снизу вверх */}
        <div className="flex justify-center items-end space-x-1">
          {letters.map((letter, index) => (
            <div
              key={index}
              className={`text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-700 ease-out ${
                showLetters[index]
                  ? 'opacity-100 transform translate-y-0'
                  : 'opacity-0 transform translate-y-8'
              }`}
              style={{
                transitionDelay: `${index * 200}ms`
              }}
            >
              {letter}
            </div>
          ))}
        </div>

        {/* Подзаголовок */}
        <div className={`mt-6 transition-all duration-1000 ease-out delay-1000 ${
          showLetters[6] 
            ? 'opacity-100 transform translate-y-0' 
            : 'opacity-0 transform translate-y-4'
        }`}>
          <p className="text-white/70 text-lg tracking-wider uppercase">
            Document Management System
          </p>
        </div>

        {/* Анимированные точки */}
        <div className={`flex justify-center mt-8 space-x-2 transition-all duration-1000 ease-out delay-1500 ${
          showLetters[6] 
            ? 'opacity-100 transform translate-y-0' 
            : 'opacity-0 transform translate-y-4'
        }`}>
          <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
          <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0.3s' }}></div>
          <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '0.6s' }}></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingAnimation;
