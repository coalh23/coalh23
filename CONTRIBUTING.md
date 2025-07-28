# 🤝 Guía de Contribución

¡Gracias por tu interés en contribuir al proyecto del **Sitio Web Institucional del Colegio Adventista Libertad Horeb**! Este proyecto busca ser mantenible, escalable y basado en buenas prácticas de desarrollo. Por favor, sigue estas reglas antes de contribuir.

---

## ✅ Reglas de Contribución

###  📖 Lee toda la documentación antes de comenzar

Antes de realizar cualquier cambio, asegúrate de haber leído y comprendido los siguientes documentos del repositorio:

- `README.md`
- `SOFTWARE-ARCHITECTURE.pdf`
- `USE-CASES.pdf` (si aplica)
- `STYLE-GUIDE.md` (si está disponible)

Esto te dará claridad sobre los objetivos, estructura y lineamientos del proyecto.

---

### 🌿 Trabaja en una rama separada

**Nunca trabajes directamente sobre `main`.**  
Sigue este flujo:

git checkout feature/develop/hotfix/release

**Código limpio, comentado y SOLID**
Tu código debe:

Ser legible, modular y estar bien comentado.

Aplicar principios SOLID adaptados a React:

Componentes con una sola responsabilidad.

Hooks y lógica bien separada.

Evitar componentes monolíticos.

Seguir la arquitectura y estructura del proyecto.

Pasar las validaciones de ESLint y Prettier:

**🧪Prueba tus cambios**
Antes de hacer un PR:

Verifica que tu rama se compila sin errores (npm run dev).

Asegúrate de que la funcionalidad nueva no rompe vistas existentes.

Si agregas componentes o funciones, deja un comentario explicativo o crea documentación breve si es necesario.

**📋 Commits claros y consistentes**
Utiliza mensajes de commit descriptivos y breves, siguiendo el formato:

bash
Copiar
Editar
feat: agregar sección de recursos para padres
fix: corregir problema en la navegación móvil
refactor: separar componente de contacto


**EJEMPLO**
# Clona el repositorio
git clone https://github.com/coalh23/coalh23.git
cd coalh23

# Crea una nueva rama
git checkout -b feature/nombre-de-tu-feature

# Trabaja y guarda tus cambios

# Confirma los cambios
git add .
git commit -m "feat: descripción del cambio"

# Sube la rama
git push origin feature/nombre-de-tu-feature

# Crea un Pull Request en GitHub

