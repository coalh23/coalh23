import LogoAzulBlanco from '../assets/LogoAzulBlanco.svg';
import { useMenuItems } from '../hooks/useMenuItems';

interface MenuDropdownProps {
  isOpen: boolean;
  onClose: () => void;
}

/**
 * Componente del menú desplegable con animaciones suaves
 */
export default function MenuDropdown({ isOpen, onClose }: MenuDropdownProps) {
  const { menuItems } = useMenuItems();

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay con blur para el contenido de la página (por debajo del navbar) */}
      <div 
        className="fixed inset-0 bg-black/10 backdrop-blur-sm z-30 animate-in fade-in duration-200"
        onClick={onClose}
      />
      
      {/* Menú desplegable - reemplaza al navbar */}
      <div className="fixed top-0 left-0 right-0 bg-[rgba(255,255,255,0.9)] border-b border-b-[var(--color-denim-100)]-500 border-t-3 border-[var(--color-denim-100)] rounded z-50 overflow-hidden animate-in slide-in-from-top-2 duration-300">
        {/* Líneas decorativas laterales */}
        <div className="absolute left-0 top-0 w-px h-full bg-gradient-to-b from-transparent via-[var(--color-denim-100)] to-transparent opacity-30"></div>
        <div className="absolute right-0 top-0 w-px h-full bg-gradient-to-b from-transparent via-[var(--color-denim-100)] to-transparent opacity-30"></div>
        
        {/* Líneas decorativas horizontales sutiles */}
        <div className="absolute left-8 top-1/4 w-16 h-px bg-gradient-to-r from-transparent via-[var(--color-denim-100)] to-transparent opacity-20"></div>
        <div className="absolute right-8 top-1/4 w-16 h-px bg-gradient-to-l from-transparent via-[var(--color-denim-100)] to-transparent opacity-20"></div>
        <div className="absolute left-8 bottom-1/4 w-16 h-px bg-gradient-to-r from-transparent via-[var(--color-denim-100)] to-transparent opacity-20"></div>
        <div className="absolute right-8 bottom-1/4 w-16 h-px bg-gradient-to-l from-transparent via-[var(--color-denim-100)] to-transparent opacity-20"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
          {/* Logo centrado con enlace a inicio */}
          <div className="flex justify-center mb-4">
            <a 
              href="#inicio" 
              onClick={onClose}
              className="cursor-pointer hover:opacity-80 transition-opacity duration-200"
            >
              <img src={LogoAzulBlanco} alt="Logo" className="ml-2 mt-2 h-12 w-auto scale-250" />
            </a>
          </div>

          {/* Lista de opciones: responsivo y apilado */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 lg:gap-x-10 lg:gap-y-4 mb-6">
            {menuItems.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                onClick={onClose}
                className="group relative flex items-center gap-2 px-3 py-2 text-[var(--color-denim-100)] font-light text-base sm:text-lg tracking-wide hover:text-white transition-all duration-300 rounded-lg"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <span className="text-lg sm:text-xl">{item.icon}</span>
                <span>{item.label}</span>
                {/* Fondo azul en hover */}
                <span className="pointer-events-none absolute inset-0 bg-[var(--color-denim-100)] rounded-lg opacity-0 transition-opacity duration-300 group-hover:opacity-100 -z-10" />
              </a>
            ))}
          </div>

          {/* Botón Menú centrado debajo de todo */}
          <div className="flex justify-center">
            <button 
              className="flex items-center space-x-1 group relative" 
              type="button" 
              onClick={onClose}
              aria-label="Cerrar menú"
            >
              <span className="text-[var(--color-denim-100)] font-light text-lg tracking-wide group-hover:text-black transition-colors">Menú</span>
              <div className="w-0 h-0 border-l-4 border-l-transparent border-t-4 border-t-[var(--color-denim-100)] border-r-4 border-r-transparent group-hover:border-t-black transition-all duration-300 ml-4 mr-2 rotate-180"></div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
} 