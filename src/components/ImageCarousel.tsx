// Imports
import AnimatedCircle from './AnimatedCircle';
import { useCarouselState } from '../hooks/useCarouselState';
import { useCarouselNavigation } from '../hooks/useCarouselNavigation';
import { useSwipe } from '../hooks/useSwipe';

// Interfaces
interface ImageCarouselProps {
  images: string[];
  width?: string;
  height?: string;
  autoPlayInterval?: number;
  showDots?: boolean;
  showArrows?: boolean;
}

// Componente principal
export default function ImageCarousel({ 
  images, 
  width = "w-full", 
  height = "h-64", 
  autoPlayInterval = 100,
  showDots = true
  
}: ImageCarouselProps) {
  const { 
    currentIndex, 
    hoveredIndex, 
    isTransitioning, 
    setCurrentIndex, 
    setHoveredIndex, 
    setIsTransitioning 
  } = useCarouselState(images, autoPlayInterval);

  const { goToSlide, goToPrevious, goToNext } = useCarouselNavigation(
    currentIndex,
    isTransitioning,
    images,
    setCurrentIndex,
    setIsTransitioning
  );

  // Hook para manejar swipe en dispositivos móviles
  const { swipeRef, onTouchStart, onTouchMove, onTouchEnd } = useSwipe({
    minSwipeDistance: 50, // Distancia mínima para considerar un swipe
    onSwipeLeft: goToNext, // Swipe izquierda = siguiente imagen
    onSwipeRight: goToPrevious, // Swipe derecha = imagen anterior
  });

  if (!images || images.length === 0) {
    return (
      <div className={`${width} ${height} bg-gray-200 flex items-center justify-center`}>
        <p className="text-gray-500">No hay imágenes disponibles</p>
      </div>
    );
  }

  return (
    <div 
      ref={swipeRef}
      className={`${width} ${height} relative overflow-hidden rounded-lg border-l-[1px] border-r-[1px] border-b-[1px] border-[var(--color-denim-100)]`}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {/* Imagen actual */}
      <div className="w-full h-full">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Overlay negro para fade */}
      <div 
        className={`absolute inset-0 bg-black transition-opacity duration-500 ease-in-out ${
          isTransitioning ? 'opacity-100' : 'opacity-0'
        }`}
      />

      {/* Barra izquierda invisible */}
      <div 
        className="absolute left-0 top-0 w-16 h-full transition-all duration-300 cursor-pointer z-10 group"
        onClick={goToPrevious}
        title="Imagen anterior"
      >
        {/* Barra negra semi-transparente para triángulo izquierdo */}
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[rgba(0,0,0,0.7)] px-3 py-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {/* Triángulo izquierdo */}
          <div className="w-0 h-0 border-t-8 border-t-transparent border-r-12 border-r-white border-b-8 border-b-transparent"></div>
        </div>
      </div>

      {/* Barra derecha invisible */}
      <div 
        className="absolute right-0 top-0 w-16 h-full transition-all duration-300 cursor-pointer z-10 group"
        onClick={goToNext}
        title="Siguiente imagen"
      >
        {/* triángulo derecho */}
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[rgba(0,0,0,0.7)] px-3 py-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {/* Triángulo derecho */}
          <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-white border-b-8 border-b-transparent"></div>
        </div>
      </div>

      {/* Círculos animados */}
      {showDots && images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
          {/* Barra negra semi-transparente */}
          <div className="bg-[rgba(0,0,0,0.7)] px-4 py-2 rounded-full">
            <div className="flex space-x-6">
              {images.map((_, index) => (
                <div
                  key={index}
                  className="group cursor-pointer"
                  onClick={() => goToSlide(index)}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <AnimatedCircle
                    size={25}
                    color="rgb(255, 255, 255)"
                    brightness={1}
                    opacity={0.8}
                    isAnimated={index === currentIndex || index === hoveredIndex}
                    animationSpeed={2}
                    strokeWidth={1}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 