const CACHE_NAME = 'quickshop-v1';
self.addEventListener('install', e => {
  self.skipWaiting();
});
self.addEventListener('activate', e => {
  e.clients.claim();
});
self.addEventListener('fetch', e => {
  if (e.request.url.includes('script.google.com')) return;
  e.respondWith(
    fetch(e.request).catch(() => caches.match(e.request))
  );
});
