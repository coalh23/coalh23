import Nav from '../components/Nav'
import ImageCarousel from '../components/ImageCarousel'
import imagen2023 from '../../public/INICIO/2023.jpg'
import imagenActividad from '../../public/INICIO/Actividad.jpg'
import imagenBonito from '../../public/INICIO/Bonito.jpg'
import imagenNinos from '../../public/INICIO/niños.jpg'
import imagenOtra from '../../public/INICIO/otra.jpg'

function Inicio() {
  // Array de imágenes del carrusel usando imports
  const carouselImages = [
    imagen2023,
    imagenActividad,
    imagenBonito,
    imagenNinos,
    imagenOtra
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
