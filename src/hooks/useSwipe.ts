/**
 * Hook que maneja los gestos de swipe para dispositivos móviles
 * @param {SwipeConfig} config - Configuración del swipe (distancia mínima y callbacks)
 * @returns {Object} Objeto con ref para el elemento y funciones de manejo
 */

// Imports
import { useState, useRef, useCallback } from 'react';

// Interfaces
interface SwipeConfig {
  minSwipeDistance: number;
  onSwipeLeft: () => void;
  onSwipeRight: () => void;
}

// Componente principal
export const useSwipe = ({ minSwipeDistance, onSwipeLeft, onSwipeRight }: SwipeConfig) => {
  const [isSwiping] = useState(false);
  const touchStart = useRef<{ x: number; y: number } | null>(null);
  const touchEnd = useRef<{ x: number; y: number } | null>(null);

  const onTouchStart = useCallback((e: React.TouchEvent) => {
    touchEnd.current = null;
    touchStart.current = {
      x: e.targetTouches[0].clientX,
      y: e.targetTouches[0].clientY,
    };
  }, []);

  const onTouchMove = useCallback((e: React.TouchEvent) => {
    touchEnd.current = {
      x: e.targetTouches[0].clientX,
      y: e.targetTouches[0].clientY,
    };
  }, []);

  const onTouchEnd = useCallback(() => {
    if (!touchStart.current || !touchEnd.current) return;

    const distanceX = touchStart.current.x - touchEnd.current.x;
    const distanceY = touchStart.current.y - touchEnd.current.y;
    const isHorizontalSwipe = Math.abs(distanceX) > Math.abs(distanceY);

    if (isHorizontalSwipe && Math.abs(distanceX) > minSwipeDistance) {
      if (distanceX > 0) {
        // Swipe izquierda (pasar a siguiente imagen)
        onSwipeLeft();
      } else {
        // Swipe derecha (pasar a imagen anterior)
        onSwipeRight();
      }
    }

    touchStart.current = null;
    touchEnd.current = null;
  }, [minSwipeDistance, onSwipeLeft, onSwipeRight]);

  const swipeRef = useRef<HTMLDivElement>(null);

  return {
    swipeRef,
    onTouchStart,
    onTouchMove,
    onTouchEnd,
    isSwiping,
  };
}; 