# Portafolio Multimedia Profesional

Portafolio de **Julián Steven Rojas Aya** — productor multimedia.

Sitio de una sola página con estética inspirada en Lain (terminal / CRT nostálgico) que muestra:
diseño gráfico, modelado 3D, producción audiovisual, campañas Meta Ads y desarrollo web.

## Características

- Diseño oscuro con estética Lain (scanlines sutiles, fondo de partículas interactivo, fuente pixel).
- Fondo de partículas sutil que reacciona al mouse.
- Cinta informativa animada, barra de progreso de scroll y tarjetas que se "reparten" una a una como un maso de cartas.
- Secciones: Sobre Mí, Diseños, Proyectos Web, Proyectos Arquitectónicos, 3D, Audiovisual, Meta Ads y Catálogo.
- Galerías con Fancybox, videos locales, reproductores de audio y PDF embebido.
- Contacto por correo, teléfono y WhatsApp.
- Hoja de vida descargable.
- Animaciones de aparición al hacer scroll y menú con scrollspy.

## Estructura

```
.
├── index.html          # Página principal
├── style.css           # Estilos
├── logo.png            # Logo / favicon
├── hoja-de-vida.pdf    # Hoja de vida descargable
├── js/                 # Scripts auxiliares
└── media/
    ├── img/            # Imágenes (incluye 3d/ y nuevos/)
    ├── audio/          # Producciones musicales
    └── ...
```

## Desplegar en GitHub Pages

1. Ve a **Settings** del repositorio.
2. En la sección **Pages** (menú lateral izquierdo), en *Build and deployment*.
3. En *Source* selecciona **Deploy from a branch**.
4. Elige la rama `main` y la carpeta `/ (root)`.
5. Guarda. El sitio quedará en:
   `https://Julian0066.github.io/portafolio-j/`

## Nota sobre archivos grandes

Algunos videos y el catálogo superan los 50 MB. Funcionan con normalidad, pero si el
repositorio crece demasiado se recomienda migrarlos a [Git LFS](https://git-lfs.github.com/)
o comprimirlos.

## Contacto

- Correo: [jr7julian@gmail.com](mailto:jr7julian@gmail.com)
- Teléfono / WhatsApp: [322 439 4883](https://wa.me/573224394883)