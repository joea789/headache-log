self.addEventListener('fetch', (event) => {
    // This allows the app to load even without internet
    event.respondWith(fetch(event.request).catch(() => caches.match(event.request)));
});