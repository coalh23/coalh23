import Nav from '../components/Nav'
import ImageCarousel from '../components/ImageCarousel'

function Inicio() {
  // Array de imágenes del carrusel
  const carouselImages = [
    '/coalh23/src/assets/INICIO/2023.jpg',
    '/coalh23/src/assets/INICIO/jesus1.png',
    '/coalh23/src/assets/INICIO/Bonito.jpg',
    '/coalh23/src/assets/INICIO/jesus2.png',
    '/coalh23/src/assets/INICIO/otra.jpg'
  ];

  return (
    <>
      <Nav />
      {/* Contenido principal */}
      <div className="relative">
        <ImageCarousel 
          images={carouselImages}
          width="w-full"
          height="h-screen"
          autoPlayInterval={4000}
          showDots={true}
        />
      </div>
    </>
  )
}

export default Inicio
