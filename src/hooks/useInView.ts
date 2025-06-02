import { useState, useEffect, RefObject } from 'react';

interface InViewOptions {
  threshold?: number | number[];
  rootMargin?: string;
  root?: Element | null;
  once?: boolean; // Добавим опцию для срабатывания только один раз
}

export function useInView(
  ref: RefObject<Element>,
  options: InViewOptions = { threshold: 0.1, once: false }
): boolean {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
        if (options.once) {
          observer.unobserve(entry.target); // Отписываемся, если once: true
        }
      } else {
        if (!options.once) { // Если не `once`, то сбрасываем isInView при выходе из вида
          setIsInView(false);
        }
      }
    }, options);

    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [ref, options]); // options как зависимость

  return isInView;
}