// Service Worker v20260315 - Cache Buster
// Clears ALL browser caches on install to ensure fresh content

const CACHE_VERSION = 'v20260315';

self.addEventListener('install', (event) => {
  // Skip waiting - activate immediately
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          // Delete ALL caches regardless of version
          console.log('[SW] Deleting cache:', cacheName);
          return caches.delete(cacheName);
        })
      );
    }).then(() => {
      // Take control of all open pages immediately
      return self.clients.claim();
    })
  );
});

// Network-first strategy: always try network, fall back to cache
self.addEventListener('fetch', (event) => {
  // Only handle GET requests
  if (event.request.method !== 'GET') return;

  event.respondWith(
    fetch(event.request, { cache: 'no-store' })
      .catch(() => caches.match(event.request))
  );
});
