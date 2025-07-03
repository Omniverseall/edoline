import React, { useState, useEffect } from 'react';
import favicon from '../../favicon.svg';

interface LoadingAnimationProps {
  onComplete: () => void;
}

const LoadingAnimation: React.FC<LoadingAnimationProps> = ({ onComplete }) => {
  const letters = ['E', 'd', 'o', 'L', 'i', 'n', 'e'];
  const [isVisible, setIsVisible] = useState(true);
  const [showIcon, setShowIcon] = useState(false);
  const [showLetters, setShowLetters] = useState<boolean[]>(Array(letters.length).fill(false));

  // Ускоренные тайминги
  const firstLetterAppearTime = 800; // Было 1500
  const letterStaggerTime = 60; // Было 100

  useEffect(() => {
    const iconTimer = setTimeout(() => {
      setShowIcon(true);
    }, 300); // Было 500

    const letterTimers = letters.map((_, index) =>
      setTimeout(() => {
        setShowLetters(prev => {
          const newShowLetters = [...prev];
          newShowLetters[index] = true;
          return newShowLetters;
        });
      }, firstLetterAppearTime + index * letterStaggerTime)
    );

    // Ускоренный расчет времени завершения
    // Последняя буква 'e' (index 6): 800ms + 6 * 60ms = 1160ms
    // Анимация буквы: 1160ms + 400ms = 1560ms
    // Подзаголовок: 1160ms + 600ms = 1760ms
    // Точки: 1160ms + 800ms = 1960ms
    const completeTimerDelay = 1960 + 200; // 2160ms (было 4900ms)

    const completeTimer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 300); // Было 500
    }, completeTimerDelay);

    return () => {
      clearTimeout(iconTimer);
      letterTimers.forEach(timer => clearTimeout(timer));
      clearTimeout(completeTimer);
    };
  }, [onComplete, letters.length, firstLetterAppearTime, letterStaggerTime]);

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center transition-all duration-300 ${
      isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
    }`}>
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900"></div>
      
      <div className="relative z-10 text-center">
        <div className="mb-8 flex justify-center">
          <div className={`transition-all duration-600 ease-out ${
            showIcon 
              ? 'opacity-100 transform scale-100 rotate-0' 
              : 'opacity-0 transform scale-50 rotate-180'
          }`}>
            <img src={favicon} alt="EdoLine" className="w-20 h-20 sm:w-24 sm:h-24 drop-shadow-lg" />
          </div>
        </div>

        <div className="flex justify-center items-end space-x-1">
          {letters.map((letter, index) => (
            <div
              key={index}
              className={`text-4xl sm:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-400 ease-out ${
                showLetters[index]
                  ? 'opacity-100 transform translate-y-0'
                  : 'opacity-0 transform translate-y-8'
              }`}
            >
              {letter}
            </div>
          ))}
        </div>

        <div className={`mt-4 sm:mt-6 transition-all duration-600 ease-out delay-600 ${
          showLetters[6] 
            ? 'opacity-100 transform translate-y-0' 
            : 'opacity-0 transform translate-y-4'
        }`}>
          <p className="text-white/70 text-base sm:text-lg tracking-wider uppercase">
            Document Management System
          </p>
        </div>

        <div className={`flex justify-center mt-6 sm:mt-8 space-x-2 transition-all duration-600 ease-out delay-800 ${
          showLetters[6] 
            ? 'opacity-100 transform translate-y-0' 
            : 'opacity-0 transform translate-y-4'
        }`}>
          <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
          <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingAnimation;