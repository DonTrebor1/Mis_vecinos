// Mis Vecinos — service worker mínimo para uso offline (app shell).
// Todos los datos reales viven en localStorage, no aquí: esto solo cachea
// los archivos estáticos para que la app cargue sin conexión.
var CACHE_NAME = "mis-vecinos-v1";
var APP_SHELL = [
  "./",
  "index.html",
  "incidencias.html",
  "comunidad.html",
  "documentos.html",
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
    caches.open(CACHE_NAME).then(function (cache) { return cache.addAll(APP_SHELL); })
  );
  self.skipWaiting();
});

self.addEventListener("activate", function (event) {
  event.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(keys.filter(function (k) { return k !== CACHE_NAME; }).map(function (k) { return caches.delete(k); }));
    })
  );
  self.clients.claim();
});

self.addEventListener("fetch", function (event) {
  if (event.request.method !== "GET") return;
  event.respondWith(
    caches.match(event.request).then(function (cached) {
      var network = fetch(event.request)
        .then(function (response) {
          if (response && response.ok && event.request.url.startsWith(self.location.origin)) {
            var copy = response.clone();
            caches.open(CACHE_NAME).then(function (cache) { cache.put(event.request, copy); });
          }
          return response;
        })
        .catch(function () { return cached; });
      return cached || network;
    })
  );
});
