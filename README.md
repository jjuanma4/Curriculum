# Currículum web de Juan Manuel Cuadrado Muñiz

Portfolio y currículum personal de un estudiante de DAM. Sitio estático hecho con HTML, CSS y JavaScript, sin dependencias.

## Estructura

```
Curriculum/
├── assets/
│   ├── cv/         # CV en PDF
│   ├── icons/      # favicon
│   ├── img/        # capturas: una carpeta por proyecto
│   └── pdf/        # documentación de los proyectos
├── css/            # reset, estilos, sidebar, proyecto, responsive
├── js/             # menu.js, portfolio.js
├── proyectos/      # una página de detalle por proyecto
│   └── plantilla-proyecto.html
├── index.html
├── sobremi.html
├── curriculum.html
├── portfolio.html
└── contacto.html
```

## Ver en local

Abre `index.html` en el navegador (en Windows: `start index.html`).

## Añadir un proyecto

1. Copia `proyectos/plantilla-proyecto.html` con el nombre del proyecto y rellénala.
2. Guarda las capturas en `assets/img/nombre-proyecto/`.
3. En `portfolio.html`, descomenta la plantilla de tarjeta dentro de `proyectos-grid` y cambia los datos.
   El filtro por tipo y el aviso de "sin proyectos" se gestionan solos.

## Publicar con GitHub Pages

Settings → Pages → Deploy from a branch → `main` / `(root)`.
