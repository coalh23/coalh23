# 🌐 COALH - Página Web Institucional

Este es el repositorio del sitio web oficial del **Colegio Adventista Libertad Horeb** (COALH), una SPA estática desarrollada con React, Vite y TailwindCSS, hospedada en GitHub Pages.

---

## 🚀 Tecnologías principales

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [GitHub Pages](https://pages.github.com/)
- ESLint & Prettier

---

## 📦 Requisitos previos

Asegúrate de tener instalados:

- Node.js (v18 o superior): https://nodejs.org/
- Git: https://git-scm.com/

---

## 🛠️ Instalación y ejecución local

1. **Clona el repositorio**

git clone https://github.com/coalh23/coalh23.git
cd coalh23

2. **Instala las dependencias y ejecuta**
  npm install
  npm run dev

3. **En tu navegador abre **
  http://localhost:5173

**Estructura de carpetas**

/coalh23
├── public/                     # Archivos estáticos públicos (Imagenes)
│   └── INICIO/
│
├── src/                        # Código fuente principal
│   ├── assets/                # Recursos estáticos (íconos, tipografías, imágenes)
│   ├── components/            # Componentes reutilizables (Navbar, Footer, etc.)
│   ├── data/                  # Archivos .json simulando una base de datos
│   ├── hooks/                 # Lógica reutilizable (ej. formularios, filtros)
│   ├── pages/                 # Vistas principales del sitio (cada ruta)
│   ├── routes/                # Configuración de rutas con react-router
│   ├── styles/                # Tailwind config / estilos base
│   ├── App.tsx                # Componente raíz
│   └── main.tsx               # Punto de entrada (monta la app)
│
├── tailwind.config.js         # Configuración de Tailwind
├── vite.config.ts             # Configuración de Vite
├── index.html                 # HTML principal (entrada única)
├── README.md                  # Documentación general del proyecto
└── package.json               # Dependencias y scripts



