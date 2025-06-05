
import React, { useState, useEffect } from 'react';
import { File } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface LoadingAnimationProps {
  onComplete: () => void;
}

const LoadingAnimation: React.FC<LoadingAnimationProps> = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);
  const { t } = useLanguage();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 500); // Даем время для fade out анимации
    }, 3000); // Показываем анимацию 3 секунды

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center transition-all duration-500 ${
      isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
    }`}>
      {/* Фон с градиентом */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-violet-900 dark:from-slate-900 dark:via-blue-900 dark:to-purple-900 light:from-blue-50 light:via-purple-50 light:to-violet-50"></div>
      
      {/* Анимированные частицы */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-ping" style={{ animationDelay: '0s' }}></div>
        <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-purple-400 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-1 h-1 bg-violet-400 rounded-full animate-ping" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/4 right-1/3 w-2 h-2 bg-cyan-400 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
      </div>

      {/* Основной контент */}
      <div className="relative z-10 text-center">
        {/* Иконка файла с анимацией */}
        <div className="mb-8 relative">
          <div className="animate-bounce">
            <File 
              className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 mx-auto text-white dark:text-blue-300 light:text-blue-600" 
              strokeWidth={1.5}
            />
          </div>
          
          {/* Круги вокруг иконки */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-32 h-32 sm:w-40 sm:h-40 border-2 border-blue-400/30 rounded-full animate-spin-slow"></div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-24 h-24 sm:w-28 sm:h-28 border border-purple-400/40 rounded-full animate-pulse"></div>
          </div>
        </div>

        {/* Пульсирующий текст */}
        <div className="space-y-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white dark:text-slate-100 light:text-slate-800 animate-pulse">
            {t('loadingTitle')}
          </h2>
          <p className="text-lg sm:text-xl text-white/80 dark:text-slate-300 light:text-slate-600 animate-pulse" style={{ animationDelay: '0.5s' }}>
            {t('loadingSubtitle')}
          </p>
        </div>

        {/* Полоса загрузки */}
        <div className="mt-8 w-64 sm:w-80 mx-auto">
          <div className="w-full bg-white/20 dark:bg-slate-700/50 light:bg-slate-300/50 rounded-full h-2">
            <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full animate-pulse loading-bar"></div>
          </div>
        </div>

        {/* Точки загрузки */}
        <div className="flex justify-center mt-6 space-x-2">
          <div className="w-3 h-3 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
          <div className="w-3 h-3 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          <div className="w-3 h-3 bg-violet-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingAnimation;
