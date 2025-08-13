// Imports
import LogoAzulBlanco from '../assets/LogoAzulBlanco.svg';
import { useNavigationItems } from '../hooks/useNavigationItems';
import { useMenuState } from '../hooks/useMenuState';
import MenuDropdown from './MenuDropdown';

// Componente principal
export default function Nav() {
  // Hooks
  const { navigationItems, linkClasses } = useNavigationItems();
  const { isMenuOpen, toggleMenu, closeMenu } = useMenuState();

  return (
    <header>
      {/* Navbar normal - se oculta cuando el menú está abierto */}
      {!isMenuOpen && (
        <nav className="fixed top-0 w-full bg-[rgba(255,255,255,0.9)] border-b border-b-[var(--color-denim-100)]-500 border-t-3 border-[var(--color-denim-100)] rounded z-50">
          <div className="">
            <div className="flex items-center justify-between px-8">
              {/* Logo con enlace a inicio */}
              <div className="">
                <a 
                  href="#inicio" 
                  className="cursor-pointer hover:opacity-80 transition-opacity duration-200"
                >
                  <img src={LogoAzulBlanco} alt="Logo" className="ml-2 mt-2 h-12 w-auto scale-250" />
                </a>
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
              <div className="relative">
                <button 
                  className="flex items-center space-x-1 group relative" 
                  type="button" 
                  onClick={toggleMenu}
                  aria-label="Toggle navigation"
                >
                  <span className="text-[var(--color-denim-100)] font-light text-lg tracking-wide group-hover:text-black transition-colors">Menú</span>
                  <div className="w-0 h-0 border-l-4 border-l-transparent border-t-4 border-t-[var(--color-denim-100)] border-r-4 border-r-transparent group-hover:border-t-black transition-all duration-300 ml-4 mr-2"></div>
                </button>
              </div>
            </div>
          </div>
        </nav>
      )}
      
      {/* Menú desplegable */}
      <MenuDropdown isOpen={isMenuOpen} onClose={closeMenu} />
    </header>
  );
} 