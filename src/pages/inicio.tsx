import Nav from '../components/Nav'
import ImageCarousel from '../components/ImageCarousel'

function Inicio() {
  // Array de imágenes del carrusel
  const carouselImages = [
    '/INICIO/2023.jpg',
    '/INICIO/jesus1.png',
    '/INICIO/Bonito.jpg',
    './INICIO/jesus2.png',
    '/INICIO/otra.jpg'
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
