import { useState, useEffect, useRef } from 'react';

interface UseCountUpOptions {
  start?: number;
  end: number;
  duration?: number;
  decimals?: number;
  suffix?: string;
}

export function useCountUp({
  start = 0,
  end,
  duration = 2000,
  decimals = 0,
  suffix = '',
}: UseCountUpOptions) {
  const [count, setCount] = useState(start);
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          setIsInView(true);
          hasAnimated.current = true;
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isInView) return;

    const startTime = Date.now();
    const startValue = start;
    const endValue = end;

    const animate = () => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / duration, 1);
      
      // Easing function: easeOutQuart
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      
      const currentValue = startValue + (endValue - startValue) * easeOutQuart;
      setCount(currentValue);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, start, end, duration]);

  const formattedCount = decimals > 0 
    ? count.toFixed(decimals) 
    : Math.floor(count).toString();

  return { count: formattedCount + suffix, ref };
}
