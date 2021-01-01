
// Ciclo de vida del SW

// En la instalación
self.addEventListener('install',(event) => {
    // Descargamos assets
    // Creamos caché
    console.log('Instalando service worker');

});

// En la activación
self.addEventListener('activate', (event) => {
    // Borrar caché viejo
    console.log('Service worker activado y listo');

})