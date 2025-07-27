import LogoAzulBlanco from '../assets/LogoAzulBlanco.svg';

export default function Nav() {
  return (
    <nav className="w-full flex items-center justify-between px-6 py-4 bg-[var(--color-denim-500)]" style={{ fontFamily: 'var(--font-display)' }}>
      {/* Logo */}
      <div className="flex items-center">
        <img src={LogoAzulBlanco} alt="Logo" className="h-40 w-50" />
      </div>
      {/* Secciones */}
      <div className="flex gap-8 text-[var(--color-white)] font-semibold text-lg">
        <a href="#nosotros" className="hover:underline">Nosotros</a>
        <a href="#anuncios" className="hover:underline-">Anuncios</a>
        <a href="#contacto" className="hover:underline">Contáctanos</a>
      </div>
      {/* Icono de menú */}
      <div className="flex items-center">
        {/* Icono de menú tipo hamburguesa */}
        <button className="p-2 group">
          <span className="block w-7 h-1 bg-[var(--color-white)] mb-1 group-hover:bg-[var(--color-ming-500)] transition-all"></span>
          <span className="block w-7 h-1 bg-[var(--color-white)] mb-1 group-hover:bg-[var(--color-ming-500)] transition-all"></span>
          <span className="block w-7 h-1 bg-[var(--color-white)] group-hover:bg-[var(--color-ming-500)] transition-all"></span>
        </button>
      </div>
    </nav>
  );
} 