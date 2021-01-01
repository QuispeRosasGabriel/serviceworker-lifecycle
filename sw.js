
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
        }, 1);
    });

    event.waitUntil(installation);
});

// En la activación
self.addEventListener('activate', (event) => {
    // Borrar caché viejo
    console.log('Service worker activado y listo');
});

// Cuando se recupera la conexion a internet
self.addEventListener('sync', (event) => {
    console.log('recuperamos la conexion');
    console.log(event);
    console.log(event.tag);
});

// Push Notifications 
self.addEventListener('push', (event) => {
    console.log('notificacion recibida');
});


self.addEventListener('fetch', (event) => {
    const offLineResp = new Response(`
        Bienvenido a mi página web

        Para usarla necesitas internet
    `);

    const resp = fetch(event.request)
        .catch(() => offLineResp);

    event.respondWith(resp);
})

// Fetch: Manejo de intercepciones http
/*self.addEventListener('fetch', (event) => {

    // Aplicar estrategias del caché
    console.log('Event fetch', event.request.url);

    if (event.request.url.includes('reqres.in')) {
        const resp = new Response(`{
            ok: false,
            mensaje: 'xd'
        }`);

        event.respondWith(resp);
    }
});*/