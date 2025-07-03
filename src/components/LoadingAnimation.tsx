import React, { useState, useEffect } from 'react';
import favicon from "./favicon.png";

interface LoadingAnimationProps {
  onComplete: () => void;
}

const LoadingAnimation: React.FC<LoadingAnimationProps> = ({ onComplete }) => {
  const [currentPhase, setCurrentPhase] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const phases = [
      { delay: 0, duration: 800 },      // Phase 0: Logo появляется
      { delay: 800, duration: 600 },    // Phase 1: Particles появляются
      { delay: 1400, duration: 800 },   // Phase 2: Text появляется
      { delay: 2200, duration: 400 },   // Phase 3: Progress bar
      { delay: 2600, duration: 300 }    // Phase 4: Завершение
    ];

    const timers = phases.map((phase, index) => 
      setTimeout(() => setCurrentPhase(index), phase.delay)
    );

    const completeTimer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 300);
    }, 2900);

    return () => {
      timers.forEach(timer => clearTimeout(timer));
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center transition-all duration-300 ${
      isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
    }`}>
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-cyan-600/20 animate-pulse"></div>
      </div>
      
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-1 h-1 bg-white/30 rounded-full transition-all duration-1000 ${
              currentPhase >= 1 ? 'opacity-100 animate-bounce' : 'opacity-0'
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center max-w-md mx-auto px-4">
        {/* Logo with Glow Effect */}
        <div className="mb-8 flex justify-center">
          <div className={`relative transition-all duration-800 ease-out ${
            currentPhase >= 0 
              ? 'opacity-100 transform scale-100 rotate-0' 
              : 'opacity-0 transform scale-50 rotate-180'
          }`}>
            <div className="absolute inset-0 bg-blue-500/50 rounded-full filter blur-xl animate-pulse"></div>
            <img 
              src={favicon} 
              alt="EdoLine" 
              className="relative w-20 h-20 sm:w-24 sm:h-24 drop-shadow-2xl" 
            />
          </div>
        </div>

        {/* Brand Name with Typewriter Effect */}
        <div className={`mb-6 transition-all duration-600 ease-out ${
          currentPhase >= 2 
            ? 'opacity-100 transform translate-y-0' 
            : 'opacity-0 transform translate-y-8'
        }`}>
          <h1 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 mb-2">
            EdoLine
          </h1>
          <p className="text-white/80 text-sm sm:text-base tracking-wide">
            Digital Document Management Platform
          </p>
        </div>

        {/* Progress Bar */}
        <div className={`mb-6 transition-all duration-400 ease-out ${
          currentPhase >= 3 
            ? 'opacity-100 transform translate-y-0' 
            : 'opacity-0 transform translate-y-4'
        }`}>
          <div className="w-full bg-white/20 rounded-full h-1 overflow-hidden">
            <div className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse transition-all duration-1000 ease-out"
                 style={{ width: currentPhase >= 3 ? '100%' : '0%' }}>
            </div>
          </div>
        </div>

        {/* Loading Text */}
        <div className={`transition-all duration-400 ease-out ${
          currentPhase >= 2 
            ? 'opacity-100 transform translate-y-0' 
            : 'opacity-0 transform translate-y-4'
        }`}>
          <p className="text-white/60 text-xs sm:text-sm animate-pulse">
            {currentPhase >= 4 ? 'Ready!' : 'Loading...'}
          </p>
        </div>

        {/* Geometric Shapes */}
        <div className="absolute -top-10 -left-10 w-20 h-20 border border-blue-400/30 rounded-full animate-spin-slow"></div>
        <div className="absolute -bottom-10 -right-10 w-16 h-16 border border-purple-400/30 rounded-lg animate-pulse"></div>
        <div className="absolute top-1/2 -right-8 w-12 h-12 border border-cyan-400/30 rounded-full animate-bounce"></div>
      </div>
    </div>
  );
};

export default LoadingAnimation;