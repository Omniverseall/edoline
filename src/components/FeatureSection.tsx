import React, { useRef } from 'react';
import { useInView } from '../hooks/useInView';

interface FeatureSectionProps {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  imageAlt: string;
  features: string[];
  direction?: 'left' | 'right';
  gradient?: string;
}

const FeatureSection: React.FC<FeatureSectionProps> = ({
  id,
  title,
  subtitle,
  description,
  image,
  imageAlt,
  features,
  direction = 'right',
  gradient = 'from-blue-500/20 to-violet-500/20',
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.1 });
  
  return (
    <section id={id} ref={sectionRef} className="section relative overflow-hidden">
      {/* Background gradient */}
      <div className={`absolute -z-10 w-[800px] h-[800px] rounded-full filter blur-[120px] bg-gradient-to-r ${gradient} opacity-30 ${direction === 'right' ? 'left-0 -translate-x-1/2' : 'right-0 translate-x-1/2'} top-1/2 -translate-y-1/2`}></div>
      
      <div className="container">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${direction === 'left' ? 'lg:flex-row-reverse' : ''}`}>
          {/* Text content */}
          <div className={`${isInView ? 'animate-slide-up' : 'opacity-0'}`}>
            <h3 className="text-lg font-medium text-blue-400 mb-2">{subtitle}</h3>
            <h2 className="mb-6 gradient-text">{title}</h2>
            <p className="text-gray-300 mb-8 text-lg">
              {description}
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center">
                    <span className="text-xs font-bold">{index + 1}</span>
                  </div>
                  <span className="text-gray-200">{feature}</span>
                </div>
              ))}
            </div>
            
            
          </div>
          
          {/* Image/illustration */}
          <div className={`${isInView ? 'animate-slide-in-right' : 'opacity-0'} glass rounded-2xl p-1 overflow-hidden`}>
            <img 
              src={image} 
              alt={imageAlt} 
              className="w-full h-auto rounded-xl object-cover"
              style={{ 
                animationDelay: '0.2s',
                transform: isInView ? 'translateY(0)' : 'translateY(40px)',
                opacity: isInView ? 1 : 0,
                transition: 'transform 0.8s ease-out, opacity 0.8s ease-out',
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;