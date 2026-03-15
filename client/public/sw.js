// Service Worker v20260315c - NUCLEAR Cache Buster
// Kills ALL caches, unregisters self, forces browser to reload fresh
const CACHE_VERSION = 'v20260315c';

self.addEventListener('install', (event) => {
  console.log('[SW] Installing:', CACHE_VERSION);
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  console.log('[SW] Activating:', CACHE_VERSION);
  event.waitUntil(
    // Delete ALL caches
    caches.keys().then((keys) => Promise.all(keys.map(k => {
      console.log('[SW] Deleting cache:', k);
      return caches.delete(k);
    }))).then(() => self.clients.claim()).then(() => {
      // Notify all clients to reload
      return self.clients.matchAll({ type: 'window' }).then(clients => {
        clients.forEach(client => {
          client.postMessage({ type: 'CACHE_CLEARED', version: CACHE_VERSION });
        });
      });
    })
  );
});

// NETWORK ONLY - never cache, always fresh
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;
  event.respondWith(
    fetch(event.request, { cache: 'no-store' }).catch(() => caches.match(event.request))
  );
});
