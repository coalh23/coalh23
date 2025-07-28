export const useNavigationItems = () => {
  const navigationItems = [
    { href: "#contacto", label: "Contáctanos", color: "text-black" },
    { href: "#anuncios", label: "Anuncios", color: "text-gray-500" },
    { href: "#nosotros", label: "Nosotros", color: "text-gray-500" }
  ];
  
  const linkClasses = "font-light text-lg tracking-wide hover:text-[var(--color-denim-100)] transition-colors duration-300";
  
  return { navigationItems, linkClasses };
}; 