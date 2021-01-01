

// Detectar si podemos usar Service Workers
if ( navigator.serviceWorker ) {
    navigator.serviceWorker.register('/sw.js');
}

const url = 'https://reqres.in/api/users/2'
fetch(url).then((resp) => resp.text()).then((data) => console.log(data));