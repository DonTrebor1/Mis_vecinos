// Mis Vecinos — service worker mínimo para uso offline (app shell).
// Todos los datos reales viven en localStorage, no aquí: esto solo cachea
// los archivos estáticos para que la app cargue sin conexión.
//
// Estrategia: red primero, caché como respaldo solo si no hay conexión.
// (Antes era "caché primero, red de fondo" -- eso servía páginas viejas
// aunque ya hubiera una versión nueva desplegada, hasta la segunda visita.
// Con red primero, en cuanto hay conexión siempre se ve lo último.)
//
// Sube CACHE_NAME en cada cambio de este archivo o de APP_SHELL para que
// el navegador limpie la caché anterior al activar la nueva versión.
var CACHE_NAME = "mis-vecinos-v2";
var APP_SHELL = [
  "./",
  "index.html",
  "panel.html",
  "incidencias.html",
  "comunidad.html",
  "documentos.html",
  "telefonos.html",
  "configuracion.html",
  "styles.css",
  "script.js",
  "manifest.json",
  "icons/icon.svg",
  "icons/icon-192.png",
  "icons/icon-512.png"
];

self.addEventListener("install", function (event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function (cache) { return cache.addAll(APP_SHELL); })
      .then(function () { self.skipWaiting(); })
  );
});

self.addEventListener("activate", function (event) {
  event.waitUntil(
    caches.keys()
      .then(function (keys) {
        return Promise.all(keys.filter(function (k) { return k !== CACHE_NAME; }).map(function (k) { return caches.delete(k); }));
      })
      .then(function () { self.clients.claim(); })
  );
});

self.addEventListener("fetch", function (event) {
  if (event.request.method !== "GET") return;
  if (!event.request.url.startsWith(self.location.origin)) return;
  event.respondWith(
    fetch(event.request)
      .then(function (response) {
        if (response && response.ok) {
          var copy = response.clone();
          caches.open(CACHE_NAME).then(function (cache) { cache.put(event.request, copy); });
        }
        return response;
      })
      .catch(function () { return caches.match(event.request); })
  );
});
