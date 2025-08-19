// Imports
import { useEffect } from 'react'
import Nav from '../components/Nav'
import ContactButton from '../components/ContactButton'
import Footer from '../components/Footer'
import ImageCarousel from '../components/ImageCarousel'
import imagen2023 from '../../public/INICIO/2023.jpg'
import imagenActividad from '../../public/INICIO/Actividad.jpg'
import imagenBonito from '../../public/INICIO/Bonito.jpg'
import imagenNinos from '../../public/INICIO/niños.jpg'
import imagenOtra from '../../public/INICIO/otra.jpg'
import colegio from '../../public/INICIO/colegio.png'

// Componente principal
function Inicio() {
	// Array de imágenes del carrusel
	const carouselImages = [
		imagen2023,
		imagenActividad,
		imagenBonito,
		imagenNinos,
		imagenOtra
	];

	// Animaciones ligeras al hacer scroll (IntersectionObserver)
	useEffect(() => {
		const elements = document.querySelectorAll('.reveal-on-scroll');
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.add('opacity-100', 'translate-y-0');
					entry.target.classList.remove('opacity-0', 'translate-y-6');
				}
			});
		}, { threshold: 0.2 });

		elements.forEach((el) => observer.observe(el));
		return () => observer.disconnect();
	}, []);

	return (
		<>
			{/* Navbar */}
			<Nav />
			{/* Carrusel */}
			<div id="inicio" className="relative">
				<ImageCarousel 
					images={carouselImages}
					width="w-full"
					height="h-screen"
					autoPlayInterval={4000}
					showDots={true}
				/>
			</div>

			{/* Sección Nosotros */}
			<section id="nosotros" className="relative w-full bg-white">
				<div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-20">
					<div className="text-center mb-10 reveal-on-scroll opacity-0 translate-y-6 transition-all duration-700 ease-out">
						<h2 className="text-3xl lg:text-4xl font-light text-[var(--color-denim-100)] tracking-wide">Nosotros</h2>
						<div className="mx-auto mt-3 h-0.5 w-24 bg-[var(--color-denim-100)]/60"></div>
					</div>

					{/* Imagen colegio debajo del título */}
					<div className="reveal-on-scroll opacity-0 translate-y-6 transition-all duration-700 ease-out">
						<div className="max-w-5xl mx-auto rounded-xl overflow-hidden border border-[var(--color-denim-100)]/20 shadow-sm">
							<img src={colegio} alt="Colegio COALH" className="w-full h-72 lg:h-96 object-cover" />
						</div>
					</div>

					{/* Descripción amplia */}
					<div className="mt-20 flex items-center justify-center reveal-on-scroll opacity-0 translate-y-6 transition-all duration-700 ease-out ">
						<div className="max-w-4xl text-center">
							<p className="text-gray-700 leading-relaxed text-lg lg:text-xl">
								Somos el Colegio Adventista Libertad Horeb, una comunidad educativa rural donde la fe, el conocimiento y los valores caminan juntos. Creemos que cada estudiante es único y que la educación debe desarrollar todo su potencial para servir a Dios y a los demás.
							</p>
							<p className="text-gray-700 leading-relaxed text-lg lg:text-xl mt-6">
								Nuestra metodología combina el aprendizaje académico con la formación espiritual, física y social. Enseñamos a pensar, a crear y a actuar con propósito, fomentando la curiosidad, la cooperación y el servicio. Aquí, cada clase es una experiencia que prepara a nuestros estudiantes para brillar en su vida personal, profesional y espiritual.
							</p>
						</div>
					</div>

					{/* Historia */}
					<div id="historia" className="relative w-full bg-white mt-20">
							<div className="text-center mb-10 reveal-on-scroll opacity-0 translate-y-6 transition-all duration-700 ease-out">
								<h2 className="text-3xl lg:text-4xl font-light text-[var(--color-denim-100)] tracking-wide">Historia</h2>
								<div className="mx-auto mt-3 h-0.5 w-24 bg-[var(--color-denim-100)]/60"></div>
							</div>
							{/* Imagen de la historia */}
							<div>
								<div className="max-w-5xl mx-auto rounded-xl overflow-hidden border border-[var(--color-denim-100)]/20 shadow-sm">
									<img src={imagenBonito} alt="Historia COALH" className="w-full h-72 lg:h-96 object-cover" />
								</div>
							</div>

							{/* Descripción de la historia */}
							<div className="mt-20 flex items-center justify-center reveal-on-scroll opacity-0 translate-y-6 transition-all duration-700 ease-out ">
						<div className="max-w-4xl text-center">
							<p className="text-gray-700 leading-relaxed text-lg lg:text-xl">
								Desde 1979, el Colegio Adventista Libertad Horeb ha sido un faro de educación y valores en la vereda La Hermosa, sector “Casesín”. Nacimos del esfuerzo conjunto de padres, docentes y líderes comunitarios que soñaban con un lugar donde los niños aprendieran no solo conocimientos, sino también principios para la vida. Hoy seguimos creciendo, brindando educación preescolar y básica primaria en un ambiente de fe, servicio y excelencia.
							</p>
						</div>
					</div>
							
					</div>

					{/* Misión y Visión */}
					<div id="mision-vision" className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-10 rounded-2xl p-6 bg-gradient-to-br from-[var(--color-denim-100)]/10 via-white to-[var(--color-ming-100)]/10">
						<div className="reveal-on-scroll opacity-0 translate-y-6 transition-all duration-700 ease-out">
							<div className=" text-center rounded-xl border border-[var(--color-denim-100)]/20 p-6 bg-white/90 backdrop-blur shadow-lg shimmer-border">
								<div className="flex justify-center mb-3">
									<svg className="h-20 w-20 mb-5" viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
										<defs>
											<linearGradient id="grad-mision" x1="0%" y1="0%" x2="100%" y2="0%">
												<stop offset="0%" stopColor="var(--color-denim-100)" />
												<stop offset="33%" stopColor="var(--color-ming-100)" />
												<stop offset="66%" stopColor="var(--color-warm-100)" />
												<stop offset="100%" stopColor="#f5f7fa" />
												<animateTransform attributeName="gradientTransform" attributeType="XML" type="rotate" from="0 0.5 0.5" to="360 0.5 0.5" dur="10s" repeatCount="indefinite" />
											</linearGradient>
										</defs>
										<circle cx="12" cy="12" r="9" stroke="url(#grad-mision)" fill="none" />
										<circle cx="12" cy="12" r="5" stroke="url(#grad-mision)" fill="none" />
										<circle cx="12" cy="12" r="1.5" fill="url(#grad-mision)" stroke="none" />
										<path d="M19 5l-4 1 1-4" stroke="url(#grad-mision)" fill="none" />
									</svg>
								</div>
								<h2 className="text-3xl lg:text-4xl font-light text-[var(--color-denim-100)] tracking-wide mb-10">Misión</h2>
								<p className="text-gray-700 leading-relaxed text-lg lg:text-xl">
									Formar niños y jóvenes íntegros que glorifiquen a Dios, guiados por la influencia del Espíritu Santo, para que vivan una experiencia personal con Cristo y se conviertan en ciudadanos ejemplares, capaces de compartir el evangelio con amor.
								</p>
							</div>
						</div>
						<div className="reveal-on-scroll opacity-0 translate-y-6 transition-all duration-700 ease-out">
							<div className=" text-center rounded-xl border border-[var(--color-denim-100)]/20 p-6 bg-white/90 backdrop-blur shadow-lg shimmer-border">
								<div className="flex justify-center mb-3">
									<svg className="h-20 w-20 mb-5" viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
										<defs>
											<linearGradient id="grad-vision" x1="0%" y1="0%" x2="100%" y2="0%">
												<stop offset="0%" stopColor="var(--color-denim-100)" />
												<stop offset="33%" stopColor="var(--color-ming-100)" />
												<stop offset="66%" stopColor="var(--color-warm-100)" />
												<stop offset="100%" stopColor="#f5f7fa" />
												<animateTransform attributeName="gradientTransform" attributeType="XML" type="rotate" from="0 0.5 0.5" to="360 0.5 0.5" dur="10s" repeatCount="indefinite" />
											</linearGradient>
										</defs>
										<path d="M2 12s4-6 10-6 10 6 10 6-4 6-10 6-10-6-10-6z" stroke="url(#grad-vision)" />
										<circle cx="12" cy="12" r="3" stroke="url(#grad-vision)" />
									</svg>
								</div>
								<h2 className="text-3xl lg:text-4xl font-light text-[var(--color-denim-100)] tracking-wide mb-10">Visión</h2>
								<p className="text-gray-700 leading-relaxed text-lg lg:text-xl">
									Ser reconocidos como una institución rural de excelencia, donde la formación espiritual, académica y social se fundamenta en principios bíblico-cristianos, ofreciendo educación de alta calidad y un compromiso firme con nuestra filosofía cristiana.
								</p>
							</div>
						</div>
					</div>

					{/* CTA */}
					<div className="mt-20 lg:mt-20 flex justify-center reveal-on-scroll opacity-0 translate-y-6 transition-all duration-700 ease-out">
						<ContactButton href="#contactanos" ariaLabel="Ir a sección contáctanos">Contáctanos</ContactButton>
					</div>
				</div>
			</section>
			<Footer />
		</>
	)
}

export default Inicio
