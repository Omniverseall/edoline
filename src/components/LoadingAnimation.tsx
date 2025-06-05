import React, { useState, useEffect } from 'react';
import { FileText } from 'lucide-react';

interface LoadingAnimationProps {
  onComplete: () => void;
}

const LoadingAnimation: React.FC<LoadingAnimationProps> = ({ onComplete }) => {
  const letters = ['E', 'd', 'o', 'L', 'i', 'n', 'e'];
  const [isVisible, setIsVisible] = useState(true);
  const [showIcon, setShowIcon] = useState(false);
  const [showLetters, setShowLetters] = useState<boolean[]>(Array(letters.length).fill(false));

  const firstLetterAppearTime = 1500; // Время начала появления первой буквы
  const letterStaggerTime = 100; // Задержка между появлением букв (было 200)

  useEffect(() => {
    const iconTimer = setTimeout(() => {
      setShowIcon(true);
    }, 500);

    const letterTimers = letters.map((_, index) =>
      setTimeout(() => {
        setShowLetters(prev => {
          const newShowLetters = [...prev];
          newShowLetters[index] = true;
          return newShowLetters;
        });
      }, firstLetterAppearTime + index * letterStaggerTime)
    );

    // Расчет времени завершения всех анимаций
    // Иконка: появляется в 500ms, анимация 1000ms, заканчивается в 1500ms.
    // Последняя буква 'e' (index 6):
    //   - showLetters[6] становится true в: 1500ms + 6 * 100ms = 2100ms.
    //   - Анимация буквы 'e' (duration-700) начинается в 2100ms, заканчивается в 2100ms + 700ms = 2800ms.
    // Подзаголовок (зависит от showLetters[6]):
    //   - showLetters[6] true в 2100ms.
    //   - Tailwind 'delay-1000' -> анимация начинается в 2100ms + 1000ms = 3100ms.
    //   - Tailwind 'duration-1000' -> анимация заканчивается в 3100ms + 1000ms = 4100ms.
    // Точки (зависят от showLetters[6]):
    //   - showLetters[6] true в 2100ms.
    //   - Tailwind 'delay-1500' -> анимация начинается в 2100ms + 1500ms = 3600ms.
    //   - Tailwind 'duration-1000' -> анимация заканчивается в 3600ms + 1000ms = 4600ms.
    // Самый поздний элемент (точки) заканчивает анимацию в 4600ms.
    // Добавим небольшую паузу перед скрытием.
    const completeTimerDelay = 4600 + 300; // 4900ms (было 5500ms)

    const completeTimer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 500); // 500ms для fade-out
    }, completeTimerDelay);

    return () => {
      clearTimeout(iconTimer);
      letterTimers.forEach(timer => clearTimeout(timer));
      clearTimeout(completeTimer);
    };
  }, [onComplete, letters.length, firstLetterAppearTime, letterStaggerTime]);

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center transition-all duration-500 ${
      isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
    }`}>
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900"></div>
      
      <div className="relative z-10 text-center">
        <div className="mb-8 flex justify-center">
          <div className={`transition-all duration-1000 ease-out ${
            showIcon 
              ? 'opacity-100 transform scale-100 rotate-0' 
              : 'opacity-0 transform scale-50 rotate-180'
          }`}>
            <FileText className="w-24 h-24 text-blue-400 drop-shadow-lg" />
          </div>
        </div>

        <div className="flex justify-center items-end space-x-1">
          {letters.map((letter, index) => (
            <div
              key={index}
              className={`text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-700 ease-out ${ // Длительность анимации самой буквы 700ms
                showLetters[index]
                  ? 'opacity-100 transform translate-y-0'
                  : 'opacity-0 transform translate-y-8'
              }`}
              // Убрали style={{ transitionDelay: ... }} отсюда
            >
              {letter}
            </div>
          ))}
        </div>

        <div className={`mt-6 transition-all duration-1000 ease-out delay-1000 ${
          showLetters[6] 
            ? 'opacity-100 transform translate-y-0' 
            : 'opacity-0 transform translate-y-4'
        }`}>
          <p className="text-white/70 text-lg tracking-wider uppercase">
            Document Management System
          </p>
        </div>

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
