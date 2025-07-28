import LogoAzulBlanco from '../assets/LogoAzulBlanco.svg';
import { useNavigationItems } from '../hooks/useNavigationItems';

export default function Nav() {
  const { navigationItems, linkClasses } = useNavigationItems();

  return (
    <header>
      <nav className="fixed top-0 w-full bg-[rgba(255,255,255,0.9)] border-b border-b-[var(--color-denim-100)]-500 border-t-3 border-[var(--color-denim-100)] rounded z-50">
        <div className="">
          <div className="flex items-center justify-between px-8">
            {/* Logo */}
            <div className="">
              <img src={LogoAzulBlanco} alt="Logo" className="ml-2 mt-2 h-12 w-auto scale-250" />
            </div>
            
            {/* Secciones de navegación */}
            <div className="hidden lg:flex items-center space-x-12">
              {navigationItems.map((item) => (
                <a 
                  key={item.href}
                  href={item.href} 
                  className={`nav-link ${item.color} ${linkClasses}`}
                >
                  {item.label}
                </a>
              ))}
            </div>
            
            {/* Botón de menú */}
            <div className="">
              <button className="navbar-toggler flex items-center space-x-1 group relative" type="button" aria-label="Toggle navigation">
                <span className="text-[var(--color-denim-100)] font-light text-lg tracking-wide group-hover:text-black transition-colors">Menú</span>
                <div className="w-0 h-0 border-l-4 border-l-transparent border-t-4 border-t-[var(--color-denim-100)] border-r-4 border-r-transparent group-hover:border-t-black transition-colors ml-4 mr-2"></div>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
} 