/**
 * Hook que maneja el estado del menú desplegable
 * @returns {Object} Objeto con estado del menú y funciones de control
 */

// Imports
import { useState, useCallback } from 'react';

// Componente principal
export const useMenuState = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen(prev => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  return {
    isMenuOpen,
    toggleMenu,
    closeMenu
  };
}; 