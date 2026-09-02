# Mis Vecinos

Gestión de incidencias, avisos, votaciones y documentos de una comunidad de
vecinos. Pensada para que cualquier residente pueda reportar un problema del
edificio, seguir su estado, enterarse de los avisos del administrador y
consultar actas y normativa, todo desde el móvil.

**Demo en vivo:** https://dontrebor1.github.io/Mis_vecinos/

## Funcionalidades

- **Inicio**: pantalla de acceso rápido con un lanzador a cada sección y
  los accesos más usados (nueva incidencia, ver documentos).
- **Panel de la comunidad**: incidencias pendientes/resueltas (clicables,
  llevan a la lista filtrada), documentos disponibles, gráfica de
  incidencias del año y tiempo medio de resolución, y actividad reciente
  con enlace directo a cada incidencia — todo calculado en el momento a
  partir de tus propios datos.
- **Incidencias**: descripción, categoría (fontanería, electricidad,
  ascensor, limpieza, zonas comunes...), prioridad, varias fotos, comentarios,
  y un flujo de estados Pendiente → Vista → Resuelta. Buscador y filtros por
  categoría/prioridad.
- **Comunidad**: tablón de avisos del administrador y votaciones rápidas
  (pregunta + hasta 4 opciones, resultados en vivo, un voto por dispositivo).
- **Documentos**: actas de reuniones, normativa, seguros y presupuestos,
  organizados por categoría y con buscador.
- **Identificación por vivienda, no por persona**: quien reporta, comenta o
  vota puede firmar como "3ºB" en vez de con su nombre — no se pide ni se
  guarda ningún dato personal.
- **Accesibilidad**: modo oscuro, contraste alto (combinable con oscuro),
  tamaño de texto ajustable, y toda la interfaz en español, catalán e inglés.
- **Copia de seguridad**: exportar/importar todos los datos en JSON, porque
  todo vive en el navegador y un `localStorage` borrado se pierde para
  siempre si no hay copia.
- **Instalable (PWA)**: `manifest.json` + service worker — se puede añadir a
  la pantalla de inicio del móvil y funciona sin conexión una vez cargada.
- **Datos de ejemplo**: un botón en Configuración rellena la app con
  incidencias, avisos y una votación ficticios para probarla de un vistazo.

## Stack

HTML, CSS y JavaScript sin frameworks ni paso de build — abrir `index.html`
(o servirlo con cualquier servidor estático) y ya funciona. Tipografías
Fraunces + Public Sans vía Google Fonts. Sin dependencias de terceros en
tiempo de ejecución.

## Estructura

```
index.html          Inicio: lanzador con accesos a cada sección
panel.html           Panel de la comunidad: estadísticas, gráfico, actividad
incidencias.html     Reportar y gestionar incidencias
comunidad.html        Avisos y votaciones
documentos.html      Actas, normativa, seguros, presupuestos
configuracion.html   Apariencia, idioma, copia de seguridad
styles.css           Estilos compartidos
script.js            Lógica compartida (cada página inicializa solo lo que tiene)
manifest.json        Manifest de la PWA
service-worker.js    Cache de la app shell para uso offline
icons/                Icono de la app (SVG + PNG 192/512)
documentos/            PDFs reales de las actas
```

## Probarlo en local

```bash
python3 -m http.server 8000
# abrir http://localhost:8000
```

No hace falta build ni instalar nada.

## Estado actual y roadmap

Todo el estado (incidencias, avisos, votaciones, preferencias) vive en el
`localStorage` del navegador de cada persona — no hay servidor ni base de
datos todavía, así que los datos no se comparten entre vecinos ni entre
dispositivos. Es una decisión deliberada para esta fase, no una limitación
oculta: el frontend está construido pensando en que un backend real (con
autenticación por vivienda, datos compartidos entre todos los vecinos, y
notificaciones) sea la siguiente fase.
