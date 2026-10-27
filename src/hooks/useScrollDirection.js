import { useState, useEffect, useRef } from 'react';

export const useScrollDirection = () => {
  const [direction, setDirection] = useState('down');
  const [velocity, setVelocity] = useState(0);
  const [progress, setProgress] = useState(0);
  const lastScrollY = useRef(0);
  const lastTime = useRef(Date.now());

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const currentTime = Date.now();
      const timeDelta = currentTime - lastTime.current;
      const scrollDelta = currentScrollY - lastScrollY.current;

      if (timeDelta > 0) {
        const currentVelocity = Math.abs(scrollDelta) / timeDelta;
        setVelocity(currentVelocity);
      }

      if (scrollDelta > 5) {
        setDirection('down');
      } else if (scrollDelta < -5) {
        setDirection('up');
      }

      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = totalHeight > 0 ? (currentScrollY / totalHeight) * 100 : 0;
      setProgress(currentProgress);

      lastScrollY.current = currentScrollY;
      lastTime.current = currentTime;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return { direction, velocity, progress };
};
