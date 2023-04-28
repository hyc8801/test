const CACHE_NAME = 'offline';
const OFFLINE_URL = 'index.html';

console.log(`worer 加载了...`)

self.addEventListener('install', function(event) {
  console.log('[ServiceWorker] Install');
  
});

self.addEventListener('activate', (event) => {
  console.log('[ServiceWorker] Activate');
});

self.addEventListener('fetch', function(event) {
  console.log('[ServiceWorker] fetch');
});
