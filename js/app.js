

// Detectar si podemos usar Service Workers
if ( navigator.serviceWorker ) {
    navigator.serviceWorker.register('/sw.js')
        .then((register) => {
           /* setTimeout(() => {
                register.sync.register('posteo-gatitos');
                console.log('Se enviaron fotos de gatos');
            }, 3000);
            */
           Notification.requestPermission().then((resp) => {
               console.log('resp', resp);
               register.showNotification('Hola desde notificacion push')
           })
        });

}

if(window.caches) {
    // Creando el cache
    caches.open('prueba1').then((cache) => {
        //cache.add('/pages/offline.html');
        cache.addAll([
            '/index.html',
            '/img/main.jpg',
            '/css/style.css',
        ]).then(() => {
            cache.put('index.html', new Response('Hola Mundo'));
            //cache.delete('/css/styles.css')
        });

        cache.match('/index.html').then((resp) => {
            resp.text().then(console.log)
        });
    })
    // Comprobando que existe el cache
    caches.has('prueba1').then(console.log);
    // Eliminado el cache
    //caches.delete('prueba1').then(console.log);
    caches.keys().then(console.log);

}

/*const url = 'https://reqres.in/api/users/2'
fetch(url).then((resp) => resp.text()).then((data) => console.log(data));*/