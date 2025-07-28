import { useState, useEffect } from 'react';

export const useCarouselState = (images: string[], autoPlayInterval: number) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    if (images.length <= 1) return;

    const interval = setInterval(() => {
      if (!isTransitioning) {
        setIsTransitioning(true);
        setTimeout(() => {
          setCurrentIndex((prevIndex) => 
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
          );
          setTimeout(() => {
            setIsTransitioning(false);
          }, 300);
        }, 300);
      }
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [images.length, autoPlayInterval, isTransitioning]);

  return { 
    currentIndex, 
    hoveredIndex, 
    isTransitioning, 
    setCurrentIndex, 
    setHoveredIndex, 
    setIsTransitioning 
  };
}; 