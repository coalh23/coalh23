import Nav from '../components/Nav'
import ImageCarousel from '../components/ImageCarousel'

function Inicio() {
  // Array de imágenes del carrusel
  const carouselImages = [
    '/coalh23/public/INICIO/2023.jpg',
    '/coalh23/public/INICIO/jesus1.png',
    '/coalh23/public/INICIO/Bonito.jpg',
    '/coalh23/public/INICIO/jesus2.png',
    '/coalh23/public/INICIO/otra.jpg'
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
