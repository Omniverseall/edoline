
import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

interface LoadingAnimationProps {
  onComplete: () => void;
}

const LoadingAnimation: React.FC<LoadingAnimationProps> = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);
  const { t } = useLanguage();

  useEffect(() => {
    // Плавное увеличение прогресса
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    // Завершение загрузки
    const completeTimer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 300);
    }, 3000);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center transition-all duration-300 ${
      isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
    }`}>
      {/* Минималистичный фон */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900"></div>
      
      {/* Геометрические элементы */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-blue-400/20 rounded-full animate-spin-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-24 h-24 border border-purple-400/20 rounded-full animate-spin-slow" style={{ animationDirection: 'reverse' }}></div>
        <div className="absolute top-1/2 left-1/6 w-16 h-16 border border-cyan-400/20 rounded-full animate-pulse"></div>
      </div>

      {/* Главный контент */}
      <div className="relative z-10 text-center">
        {/* Центральная окружность с прогрессом */}
        <div className="relative mb-12 mx-auto w-48 h-48 flex items-center justify-center">
          {/* Фоновая окружность */}
          <div className="absolute inset-0 rounded-full border-4 border-white/10"></div>
          
          {/* Прогресс окружность */}
          <svg className="absolute inset-0 w-full h-full transform -rotate-90" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="46"
              fill="none"
              stroke="url(#gradient)"
              strokeWidth="4"
              strokeLinecap="round"
              strokeDasharray={`${progress * 2.89} 289`}
              className="transition-all duration-500 ease-out"
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3B82F6" />
                <stop offset="50%" stopColor="#8B5CF6" />
                <stop offset="100%" stopColor="#06B6D4" />
              </linearGradient>
            </defs>
          </svg>
          
          {/* Внутренний контент */}
          <div className="relative z-10 text-center">
            <div className="text-4xl font-bold text-white mb-2">
              {Math.round(progress)}%
            </div>
            <div className="text-blue-300 text-sm uppercase tracking-widest">
              Loading
            </div>
          </div>
        </div>

        {/* EdoLine лого */}
        <div className="animate-pulse">
          <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 mb-4">
            EdoLine
          </h1>
          <p className="text-white/70 text-lg tracking-wider uppercase">
            Document Management System
          </p>
        </div>

        {/* Анимированные точки */}
        <div className="flex justify-center mt-8 space-x-2">
          <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
          <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0.3s' }}></div>
          <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '0.6s' }}></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingAnimation;
