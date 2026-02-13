const CACHE_VERSION = 'morphframe-v1.0.3'; // INCREMENT THIS TO FORCE UPDATE
const FILES_TO_CACHE = [
    './',
    './index.html',
    './manifest.json'
];

// 1. INSTALL: Cache files and force immediate activation
self.addEventListener('install', (event) => {
    console.log('[SW] Installing version:', CACHE_VERSION);
    
    // Force this SW to become the active one, bypassing the "waiting" state
    self.skipWaiting(); 

    event.waitUntil(
        caches.open(CACHE_VERSION).then((cache) => {
            return cache.addAll(FILES_TO_CACHE);
        })
    );
});

// 2. ACTIVATE: Clean up old caches and take control of clients
self.addEventListener('activate', (event) => {
    console.log('[SW] Activating version:', CACHE_VERSION);

    event.waitUntil(
        Promise.all([
            // Delete old caches that don't match current version
            caches.keys().then((cacheNames) => {
                return Promise.all(
                    cacheNames.map((cacheName) => {
                        if (cacheName !== CACHE_VERSION) {
                            console.log('[SW] Deleting old cache:', cacheName);
                            return caches.delete(cacheName);
                        }
                    })
                );
            }),
            // Take control of all open clients (tabs) immediately
            self.clients.claim() 
        ])
    );
});

// 3. FETCH: Cache First, fall back to Network
self.addEventListener('fetch', (event) => {
    // We ignore chrome-extension:// requests or other non-http protocols
    if (!event.request.url.startsWith('http')) return;

    event.respondWith(
        caches.match(event.request).then((response) => {
            // Return cached response if found, else fetch from network
            return response || fetch(event.request);
        })
    );
});
