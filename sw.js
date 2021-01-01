
// Ciclo de vida del SW

// En la instalación
self.addEventListener('install', (event) => {
    // Descargamos assets
    // Creamos caché
    console.log('Instalando service worker');
    const installation = new Promise((res, rej) => {
        setTimeout(() => {
            console.log('instalaciones terminadas');
            self.skipWaiting();
            res();
        }, 1000);
    });

    event.waitUntil(installation);
});

// En la activación
self.addEventListener('activate', (event) => {
    // Borrar caché viejo
    console.log('Service worker activado y listo');
})