import SimboloAzul from '../assets/SimboloAzul.png';

function Footer() {
	return (
		<footer className="mt-24 bg-white border-t border-[var(--color-denim-100)]/35">
			<div className="max-w-7xl mx-auto px-6 lg:px-8 py-10 grid grid-cols-1 md:grid-cols-4 gap-30">
				<div>
					<h3 className="text-[var(--color-denim-100)] text-xl font-light tracking-wide">COALH</h3>
					<p className="text-gray-600 mt-3 text-sm leading-relaxed">Colegio Adventista Libertad Horeb. Educación con propósito, fe y excelencia.</p>
				</div>
				<div>
					<h4 className="text-[var(--color-denim-100)] font-light tracking-wide">Contacto</h4>
					<ul className="mt-3 space-y-1 text-gray-600 text-sm">
						<li>Tel: + 57 3177883362 </li>
						<li>Correo: coalh.23@gmail.com</li>
						<li>Dirección: Vereda La Hermosa, Sector Casesín</li>
					</ul>
				</div>
				<div>
					<h4 className="text-[var(--color-denim-100)] font-light tracking-wide">Enlaces</h4>
					<ul className="mt-3 space-y-1 text-gray-600 text-sm">
						<li><a href="https://www.facebook.com/coal.horeb" target="_blank" className="hover:text-[var(--color-ming-100)] transition-colors">Facebook</a></li>
						<li><a href="#nosotros" className="hover:text-[var(--color-ming-100)] transition-colors">Instagram</a></li>
						<li><a href="#mision-vision" className="hover:text-[var(--color-ming-100)] transition-colors">Whatsapp</a></li>
					</ul>
				</div>
				<div className='mt-7'>
					<img src={SimboloAzul} alt="Logo" className="ml-2 mt-2 h-12 w-auto scale-250" />
				</div>
			</div>
			<div className="border-t border-[var(--color-denim-100)]/35 py-4">
				<p className="text-center text-xs text-gray-500">© {new Date().getFullYear()} COALH. Todos los derechos reservados.</p>
			</div>
		</footer>
	)
}

export default Footer


