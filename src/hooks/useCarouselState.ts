/**
 * Hook que maneja el estado del carrusel de imágenes
 * @param {string[]} images - Array de URLs de imágenes
 * @param {number} autoPlayInterval - Intervalo en ms para el cambio automático
 * @returns {Object} Objeto con estados del carrusel y funciones setter
 */

// Imports
import { useState, useEffect } from 'react';

// Componente principal
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