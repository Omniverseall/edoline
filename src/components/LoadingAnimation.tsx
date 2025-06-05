
import React, { useState, useEffect } from 'react';
import { File } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface LoadingAnimationProps {
  onComplete: () => void;
}

const LoadingAnimation: React.FC<LoadingAnimationProps> = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [animationPhase, setAnimationPhase] = useState(0);
  const { t } = useLanguage();

  useEffect(() => {
    // Фазы анимации
    const phaseTimers = [
      setTimeout(() => setAnimationPhase(1), 500),   // Появление букв
      setTimeout(() => setAnimationPhase(2), 1500),  // Формирование файла
      setTimeout(() => setAnimationPhase(3), 2500),  // Показ EdoLine
    ];

    const completeTimer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 500);
    }, 3500);

    return () => {
      phaseTimers.forEach(timer => clearTimeout(timer));
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  const letters = ['E', 'd', 'o', 'L', 'i', 'n', 'e'];

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center transition-all duration-500 ${
      isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
    }`}>
      {/* Фон с градиентом */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-violet-900"></div>
      
      {/* Анимированные частицы */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-1 h-1 bg-blue-400 rounded-full animate-ping ${
              animationPhase >= 1 ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${1 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Основной контент */}
      <div className="relative z-10 text-center">
        {/* Анимированные буквы, формирующие файл */}
        <div className="mb-8 relative flex items-center justify-center h-32">
          {/* Буквы, которые летят и формируют иконку файла */}
          <div className="absolute inset-0 flex items-center justify-center">
            {letters.map((letter, index) => (
              <div
                key={index}
                className={`absolute text-4xl font-bold text-white transition-all duration-1000 transform ${
                  animationPhase >= 1 
                    ? `animate-bounce opacity-100 ${
                        animationPhase >= 2 
                          ? 'scale-0 opacity-0' 
                          : ''
                      }` 
                    : 'scale-0 opacity-0'
                }`}
                style={{
                  left: `${index * 40 - 120}px`,
                  animationDelay: `${index * 0.1}s`,
                  animationDuration: '0.8s',
                }}
              >
                {letter}
              </div>
            ))}
          </div>

          {/* Иконка файла, которая появляется из букв */}
          <div className={`transition-all duration-1000 transform ${
            animationPhase >= 2 
              ? 'scale-100 opacity-100 animate-float' 
              : 'scale-0 opacity-0'
          }`}>
            <File 
              className="w-24 h-24 text-white" 
              strokeWidth={1.5}
            />
            
            {/* Круги вокруг иконки */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-40 h-40 border-2 border-blue-400/30 rounded-full animate-spin-slow"></div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-32 h-32 border border-purple-400/40 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Пульсирующий текст загрузки */}
        <div className={`space-y-4 transition-all duration-500 ${
          animationPhase >= 2 ? 'opacity-100' : 'opacity-0'
        }`}>
          <h2 className="text-3xl font-bold text-white animate-pulse">
            {t('loadingTitle')}
          </h2>
          <p className="text-xl text-white/80 animate-pulse" style={{ animationDelay: '0.5s' }}>
            {t('loadingSubtitle')}
          </p>
        </div>

        {/* Полоса загрузки */}
        <div className={`mt-8 w-80 mx-auto transition-all duration-500 ${
          animationPhase >= 2 ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className="w-full bg-white/20 rounded-full h-2">
            <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full loading-bar"></div>
          </div>
        </div>

        {/* EdoLine логотип */}
        <div className={`mt-12 transition-all duration-1000 transform ${
          animationPhase >= 3 
            ? 'translate-y-0 opacity-100 scale-100' 
            : 'translate-y-8 opacity-0 scale-95'
        }`}>
          <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-violet-400 animate-pulse">
            EdoLine
          </div>
          <div className="mt-2 text-sm text-white/60 tracking-widest uppercase">
            Document Management System
          </div>
        </div>

        {/* Точки загрузки */}
        <div className={`flex justify-center mt-6 space-x-2 transition-all duration-500 ${
          animationPhase >= 2 ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className="w-3 h-3 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
          <div className="w-3 h-3 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          <div className="w-3 h-3 bg-violet-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingAnimation;
