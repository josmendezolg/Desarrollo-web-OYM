# Portafolio Jose Mendez

Portafolio profesional para un Desarrollador Full-Stack e Ingeniero de IA. Estilo cyberpunk, modo oscuro y diseño responsivo. Es un sitio estático: no necesita servidor, base de datos ni instalación.

## Contenido

1. [Estructura del proyecto](#1-estructura-del-proyecto)
2. [Tecnologías](#2-tecnologías)
3. [Cómo ejecutarlo](#3-cómo-ejecutarlo)
4. [Secciones de la página](#4-secciones-de-la-página)
5. [Personalización paso a paso](#5-personalización-paso-a-paso)
6. [Cómo funciona el CSS](#6-cómo-funciona-el-css)
7. [Cómo funciona el JavaScript](#7-cómo-funciona-el-javascript)
8. [Accesibilidad y rendimiento](#8-accesibilidad-y-rendimiento)
9. [Publicar en internet](#9-publicar-en-internet)
10. [Solución de problemas](#10-solución-de-problemas)

---

## 1. Estructura del proyecto

```
portafolio-jose-mendez/
├── index.html        Estructura y contenido de la página
├── css/
│   └── styles.css    Todos los estilos (colores, neón, animaciones)
├── js/
│   └── main.js       Interactividad (filtros, escritura, botón subir)
├── img/
│   └── jose.svg      Imagen de marcador de la foto de perfil
└── README.md         Esta documentación
```

`index.html` enlaza `css/styles.css` en el `<head>` y `js/main.js` al final del `<body>`.

## 2. Tecnologías

| Tecnología | Uso | Origen |
|---|---|---|
| HTML5 | Estructura semántica | Local |
| CSS3 | Estilos, variables, animaciones, `backdrop-filter` | Local |
| JavaScript (ES6) | Interactividad, sin librerías propias | Local |
| Bootstrap 5.3.3 | Rejilla, navbar y menú móvil | CDN jsDelivr |
| Bootstrap Icons 1.11.3 | Íconos de tarjetas y redes sociales | CDN jsDelivr |
| Orbitron y Chakra Petch | Tipografías (títulos y texto) | Google Fonts |

Bootstrap, los íconos y las fuentes se cargan desde internet. Sin conexión la página se ve, pero sin esos recursos.

## 3. Cómo ejecutarlo

1. Descomprime el `.zip`.
2. Abre `index.html` con doble clic en tu navegador.

Opcional, para desarrollo con recarga automática:

- **VS Code:** instala la extensión *Live Server*, clic derecho en `index.html` y *Open with Live Server*.
- **Terminal:** dentro de la carpeta ejecuta `npx serve` o `python3 -m http.server 8000` y abre `http://localhost:8000`.

## 4. Secciones de la página

| Sección | Id | Descripción |
|---|---|---|
| Navbar flotante | `nav` | Barra fija con efecto cristal. Marca la sección activa al hacer scroll y se cierra sola en móvil al elegir un enlace. |
| Hero | `#inicio` | Nombre con efecto glitch, roles que se escriben solos, biografía, dos botones y foto con marco neón. |
| Stack tecnológico | `#stack` | 8 tarjetas con brillo neón al pasar el cursor. |
| Proyectos | `#proyectos` | 6 tarjetas con filtros Todos, Web, IA y Backend. |
| Footer | `#contacto` | Mensaje de contacto, íconos sociales y año automático. |
| Volver arriba | `#top` | Botón que aparece tras bajar 500 px. |

## 5. Personalización paso a paso

### 5.1 Foto de perfil

Guarda tu foto en `img/` (por ejemplo `img/jose.jpg`, cuadrada, mínimo 600×600 px) y cambia el `src` en `index.html`:

```html
<img alt="Foto de Jose Mendez" src="img/jose.jpg">
```

### 5.2 Nombre, roles y biografía

- **Nombre:** cambia el texto y el atributo `data-text` del `<h1 class="glitch">`. Deben ser idénticos, porque el efecto glitch duplica el texto con `data-text`.
- **Roles que se escriben:** edita el arreglo en `js/main.js`:
  ```js
  const roles = ['Desarrollador Full-Stack', 'Ingeniero de IA', 'Constructor de productos'];
  ```
- **Biografía:** edita el párrafo con clase `bio`.
- **Título de la pestaña:** edita `<title>` en el `<head>`.

### 5.3 Colores

Todos los colores están en variables al inicio de `css/styles.css`:

```css
:root{
  --void:#07060f;    /* fondo */
  --panel:#100c1f;   /* tarjetas */
  --line:#2a2145;    /* bordes */
  --cyan:#00f0ff;    /* neón principal */
  --magenta:#ff2bd6; /* neón secundario */
  --amber:#f7ff3c;   /* acento (roles, etiquetas) */
  --text:#d9d6ee;    /* texto */
  --mute:#8f89b0;    /* texto secundario */
}
```

Cambiar una variable actualiza toda la página.

### 5.4 Stack tecnológico

Cada tarjeta tiene este formato:

```html
<div class="col-6 col-md-3">
  <div class="tech">          <!-- añade la clase "m" para brillo magenta -->
    <i class="bi bi-robot"></i>
    <h3>Inteligencia artificial</h3>
    <p>LLMs, agentes, RAG, Claude API</p>
  </div>
</div>
```

- El ícono se elige en [icons.getbootstrap.com](https://icons.getbootstrap.com); usa el nombre con el prefijo `bi bi-`.
- Para añadir o quitar tarjetas, copia o borra el bloque completo. En escritorio caben 4 por fila.

### 5.5 Proyectos y filtros

Cada proyecto es un bloque con clase `item`. La categoría se define en `data-c`:

```html
<div class="col-md-6 col-lg-4 item" data-c="web ia">
  <article class="proj">
    <div class="thumb" style="background:linear-gradient(135deg,var(--cyan),#3a7bff)">
      <i class="bi bi-cash-coin"></i>
    </div>
    <div class="body">
      <h3>Nombre del proyecto</h3>
      <p>Descripción breve.</p>
      <div><span class="tag">React</span><span class="tag">Supabase</span></div>
    </div>
  </article>
</div>
```

- `data-c` acepta una o varias categorías separadas por espacio (`"web ia"` aparece en ambos filtros).
- **Nueva categoría:** añade un botón en `.filters` con `data-f="mobile"` y usa `data-c="mobile"` en los proyectos. El JavaScript no cambia.
- **Imagen real en vez del degradado:** sustituye el `<div class="thumb">` por `<img src="img/proyecto1.jpg" alt="..." class="w-100" style="height:140px;object-fit:cover">`.
- **Enlace al proyecto:** envuelve el `<h3>` en `<a href="https://..." target="_blank" rel="noopener">`.

### 5.6 Redes sociales y contacto

En el `<footer>` reemplaza los `href` de GitHub, LinkedIn y X por tus perfiles, y `mailto:tu@correo.com` por tu correo. Para añadir otra red, copia un `<a>` y usa un ícono como `bi-instagram` o `bi-youtube`.

### 5.7 Enlaces del navbar

Cada `nav-link` apunta al `id` de una sección. Si añades una sección nueva, dale un `id` y añade su enlace al menú; el resaltado por scroll la detecta sola.

## 6. Cómo funciona el CSS

`css/styles.css` está ordenado por bloques, con esta lógica:

| Bloque | Qué hace |
|---|---|
| `:root` | Variables de color. |
| `body` | Fondo oscuro con cuadrícula sutil hecha con dos `linear-gradient`. |
| Navbar flotante | `position:fixed`, centrado, `backdrop-filter:blur` para el efecto cristal. |
| Hero y `.glitch` | Dos capas con `::before` y `::after` (cian y magenta) recortadas con `clip-path` y animadas con `@keyframes gl`. |
| `.role` | Cursor parpadeante con `::after` y `@keyframes blink`. |
| `.photo` | Marco con esquinas cortadas (`clip-path:polygon`) y líneas de escaneo (`repeating-linear-gradient`). |
| `.tech` | Tarjetas de stack. El neón se logra con varios `box-shadow` en `:hover`. |
| Filtros y `.proj` | Botones tipo píldora y tarjetas de proyecto. `.item.hide` oculta con `display:none`. |
| Footer y `.social` | Íconos cuadrados con brillo al pasar el cursor. |
| `#top` | Botón fijo, oculto por defecto y visible con la clase `.show`. |
| `prefers-reduced-motion` | Desactiva animaciones si el usuario lo pide en su sistema. |

Tip: para bajar la intensidad del neón, reduce los valores de blur en los `box-shadow` (por ejemplo de `42px` a `20px`).

## 7. Cómo funciona el JavaScript

`js/main.js` tiene cinco bloques independientes:

1. **Año del footer:** escribe `new Date().getFullYear()` en `#year`.
2. **Roles rotativos:** una función recursiva con `setTimeout` escribe y borra cada rol del arreglo `roles`.
3. **Filtros de proyectos:** al pulsar un botón lee `data-f` y muestra solo los `.item` cuyo `data-c` lo contiene. `Todos` muestra todos.
4. **Botón Volver arriba y enlace activo:** un único listener de `scroll` (pasivo) muestra el botón pasados 500 px y marca el enlace de la sección visible.
5. **Menú móvil:** al pulsar un enlace cierra el menú colapsable con la API de Bootstrap.

La variable del botón se llama `backTop` a propósito: `top` es una propiedad reservada del navegador (`window.top`) y declararla con `const` provoca el error `Identifier 'top' has already been declared`.

## 8. Accesibilidad y rendimiento

- Contraste alto de texto sobre fondo oscuro.
- Foco visible en teclado (contorno ámbar).
- `aria-label` en el botón del menú, los íconos sociales, el botón de subir y el grupo de filtros.
- Animaciones desactivadas con `prefers-reduced-motion`.
- Enlaces externos con `rel="noopener"`.
- Sin imágenes pesadas: el peso total propio es menor a 30 KB. Si añades fotos, comprímelas (WebP o JPG optimizado).

## 9. Publicar en internet

Al ser un sitio estático, puedes publicarlo gratis:

- **GitHub Pages:** sube la carpeta a un repositorio, ve a *Settings → Pages* y elige la rama `main`. El sitio queda en `https://tu-usuario.github.io/tu-repo/`.
- **Netlify:** entra a [app.netlify.com/drop](https://app.netlify.com/drop) y arrastra la carpeta.
- **Vercel:** importa el repositorio y despliega sin configuración adicional.

Antes de publicar: reemplaza los textos y proyectos de ejemplo, actualiza tus enlaces sociales y tu correo, y revisa que la foto cargue desde `img/`.

## 10. Solución de problemas

| Problema | Causa probable | Solución |
|---|---|---|
| La página se ve sin estilos | Ruta incorrecta a `css/styles.css` o carpeta movida | Mantén la estructura de la sección 1. |
| Sin íconos ni Bootstrap | Sin conexión a internet o CDN bloqueado | Conéctate, o descarga Bootstrap e íconos y enlázalos de forma local. |
| Filtros, escritura y botón subir no funcionan | Error de JavaScript | Abre la consola (F12) y revisa el mensaje. Comprueba que `js/main.js` carga. |
| `Identifier 'top' has already been declared` | Variable llamada `top` | Renómbrala (aquí ya es `backTop`). |
| La foto no aparece | Ruta o nombre de archivo incorrectos (mayúsculas cuentan) | Verifica que `img/jose.jpg` exista y coincida con el `src`. |
| El efecto glitch se ve desalineado | `data-text` distinto del texto del `<h1>` | Haz que ambos sean idénticos. |
| El menú móvil no abre | El script de Bootstrap no cargó | Verifica la línea `bootstrap.bundle.min.js` al final de `index.html`. |

---

Autor: Jose Mendez.
