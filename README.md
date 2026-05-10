# AlexoBot PCs

Sitio estatico para `alexobot.com`, orientado a promocionar reparacion de computadoras, consolas y telefonos.

## Estructura

- `index.html`: pagina principal.
- `styles.css`: estilos globales, grid de fondo, layout responsive.
- `scripts.js`: menu movil, animaciones, formulario con `mailto` y embed opcional de Canva.
- `Fotos/Assets/Logo.png`: logo provisional. Puedes reemplazarlo por el logo final conservando el mismo nombre.
- `Paginas/Reparaciones.html`: pagina de detalle de servicios.

## Personalizacion rapida

- Instagram: cambia `instagramHandle` en `scripts.js`.
- Correo: cambia `contactEmail` en `scripts.js` y los `mailto:` en los HTML si quieres otro destino.
- Canva: pega el enlace embed en `data-canva-url=""` dentro de `index.html`, seccion `tarjeta`.
- Fotos reales: reemplaza los SVG de `Fotos/Assets/` o cambia los `src` de las imagenes en `index.html`.
- Disket Mono: el CSS intenta usar la fuente instalada localmente; si tienes el archivo webfont, agregalo al `@font-face` de `styles.css`.
