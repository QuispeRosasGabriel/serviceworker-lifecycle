

// Detectar si podemos usar Service Workers
if ( navigator.serviceWorker ) {
    navigator.serviceWorker.register('/sw.js')
        .then((register) => {
            setTimeout(() => {
                register.sync.register('posteo-gatitos');
                console.log('Se enviaron fotos de gatos');
            }, 3000);
        });
}

/*const url = 'https://reqres.in/api/users/2'
fetch(url).then((resp) => resp.text()).then((data) => console.log(data));*/