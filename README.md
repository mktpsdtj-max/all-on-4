# Perfect Smile Dental — All-on-4

Landing bilingüe (ES/EN) para el tratamiento **All-on-4**.
Proyecto autónomo, pensado para su propio subdominio.

## Arrancar

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # genera dist/
npm run preview
```

## Rutas que genera

| URL | Qué es |
|---|---|
| `/` | redirige a `/es/` |
| `/es/` | landing en español |
| `/en/` | landing en inglés |

El subdominio ya identifica el tratamiento, así que la URL no lo repite.

## Dónde cambiar cada cosa

| Quiero cambiar… | Archivo |
|---|---|
| Cualquier texto de la landing | `src/data/content.ts` |
| Imágenes y posters de video | `src/data/content.ts` → constante `IMG` |
| Colores, tipografía, botones | `src/styles/global.css` (tokens en `:root`) |
| Navbar / footer / botones compartidos | `src/i18n/ui.ts` |
| Teléfono, WhatsApp, embed del mapa | `src/i18n/ui.ts` → `contact` |
| El subdominio (canónicas y hreflang) | `astro.config.mjs` → `site` |
| Cómo se ve un bloque | su `.astro` en `src/components/` |

## Estructura de la página

Hero (foto completa, texto centrado) → Por qué Tijuana (3 cards + mapa) →
El Sistema (video + tabs) → Beneficios (5 cards oscuras) →
Proceso (3 pasos con flechas) → Historias (galería slide) → CTA final.

Para reordenar o quitar una sección, edita `src/pages/[lang]/index.astro`:
las secciones se listan ahí en orden, una línea cada una.

## Videos

El video abre en un modal compartido (`VideoModal.astro`, montado una vez en el
layout). Para activarlo, en `src/data/content.ts` llena el objeto `video`:

```ts
video: {
  src: 'https://tu-cdn.com/all-on-4.mp4',   // o el embed de YouTube/Vimeo
  type: 'mp4',                               // 'mp4' | 'youtube' | 'vimeo'
  poster: 'https://.../preview.jpg',
  alt: '…', eyebrow: '…', title: '…',
}
```

El `poster` **no tiene que ser una foto aparte**: puede ser un fotograma del
propio video, o la miniatura automática de YouTube
(`https://img.youtube.com/vi/VIDEO_ID/maxresdefault.jpg`).

Mientras `src` esté vacío, el modal abre con un mensaje en vez de un
reproductor roto.

## Pendientes antes de publicar

- [ ] Reemplazar las imágenes placeholder (`IMG` en `content.ts`)
- [ ] Cargar el `src` del video
- [ ] Número toll-free y link de WhatsApp reales en `src/i18n/ui.ts`
- [ ] Subdominio real en `astro.config.mjs`

## Nota sobre los otros tratamientos

Este proyecto es autónomo: trae su propia copia del sistema de diseño
(`global.css`), el modal de video y los componentes compartidos. Si cambias un
token de marca o el teléfono, recuerda replicarlo en los otros tres subdominios.
