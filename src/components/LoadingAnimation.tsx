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
  const firstLetterAppearTime = 600;
  const letterStaggerTime = 50;

  useEffect(() => {
    const iconTimer = setTimeout(() => {
      setShowIcon(true);
    }, 200);

    const letterTimers = letters.map((_, index) =>
      setTimeout(() => {
        setShowLetters(prev => {
          const newShowLetters = [...prev];
          newShowLetters[index] = true;
          return newShowLetters;
        });
      }, firstLetterAppearTime + index * letterStaggerTime)
    );

    // Быстрое завершение: 600ms + 6 * 50ms + 800ms = 1700ms
    const completeTimerDelay = 1700;

    const completeTimer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 200);
    }, completeTimerDelay);

    return () => {
      clearTimeout(iconTimer);
      letterTimers.forEach(timer => clearTimeout(timer));
      clearTimeout(completeTimer);
    };
  }, [onComplete, letters.length, firstLetterAppearTime, letterStaggerTime]);

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center transition-all duration-200 ${
      isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
    }`}>
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900"></div>
      
      <div className="relative z-10 text-center">
        <div className="mb-6 flex justify-center">
          <div className={`transition-all duration-500 ease-out ${
            showIcon 
              ? 'opacity-100 transform scale-100 rotate-0' 
              : 'opacity-0 transform scale-50 rotate-180'
          }`}>
            <img src={favicon} alt="EdoLine" className="w-16 h-16 sm:w-20 sm:h-20 drop-shadow-lg" />
          </div>
        </div>

        <div className="flex justify-center items-end space-x-1">
          {letters.map((letter, index) => (
            <div
              key={index}
              className={`text-3xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-300 ease-out ${
                showLetters[index]
                  ? 'opacity-100 transform translate-y-0'
                  : 'opacity-0 transform translate-y-6'
              }`}
            >
              {letter}
            </div>
          ))}
        </div>

        <div className={`mt-4 transition-all duration-400 ease-out delay-300 ${
          showLetters[6] 
            ? 'opacity-100 transform translate-y-0' 
            : 'opacity-0 transform translate-y-4'
        }`}>
          <p className="text-white/70 text-sm sm:text-base tracking-wider">
            Платформа электронного документооборота
          </p>
        </div>

        <div className={`flex justify-center mt-4 space-x-1 transition-all duration-400 ease-out delay-500 ${
          showLetters[6] 
            ? 'opacity-100 transform translate-y-0' 
            : 'opacity-0 transform translate-y-4'
        }`}>
          <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
          <div className="w-1.5 h-1.5 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingAnimation;