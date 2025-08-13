/**
 * Hook que proporciona los datos del menú desplegable
 * @returns {Object} Objeto con menuItems (array de opciones del menú)
 */

// Componente principal
export const useMenuItems = () => {
  const menuItems = [
    { href: "#inicio", label: "Inicio", icon: "🏠" },
    { href: "#historia", label: "Historia", icon: "📚" },
    { href: "#mision-vision", label: "Misión y Visión", icon: "🎯" },
    { href: "#anuncios", label: "Anuncios", icon: "📢" },
    { href: "#recursos", label: "Recursos", icon: "📁" },
    { href: "#galeria", label: "Galería", icon: "🖼️" },
    { href: "#contactanos", label: "Contáctanos", icon: "📞" }
  ];

  const menuItemClasses = "flex items-center space-x-3 px-4 py-3 text-gray-700 hover:bg-[var(--color-denim-100)] hover:text-white transition-all duration-200 rounded-lg cursor-pointer";

  return { menuItems, menuItemClasses };
}; 