/**
 * Hook que proporciona las funciones de navegación para el carrusel
 * @param {number} currentIndex - Índice actual de la imagen
 * @param {boolean} isTransitioning - Estado de transición en curso
 * @param {string[]} images - Array de URLs de imágenes
 * @param {Function} setCurrentIndex - Función para cambiar el índice actual
 * @param {Function} setIsTransitioning - Función para cambiar el estado de transición
 * @returns {Object} Objeto con funciones de navegación (goToSlide, goToPrevious, goToNext)
 */

// Componente principal
export const useCarouselNavigation = (
  currentIndex: number, 
  isTransitioning: boolean, 
  images: string[],
  setCurrentIndex: (index: number | ((prev: number) => number)) => void,
  setIsTransitioning: (transitioning: boolean) => void
) => {
  const goToSlide = (index: number) => {
    if (isTransitioning || index === currentIndex) return;
    
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex(index);
      setTimeout(() => {
        setIsTransitioning(false);
      }, 300);
    }, 300);
  };

  const goToPrevious = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex: number) => 
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
      setTimeout(() => {
        setIsTransitioning(false);
      }, 300);
    }, 300);
  };

  const goToNext = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex: number) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
      setTimeout(() => {
        setIsTransitioning(false);
      }, 300);
    }, 300);
  };

  return { goToSlide, goToPrevious, goToNext };
}; 