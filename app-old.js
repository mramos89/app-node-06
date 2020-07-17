const http = require('http');

http.createServer((req, res) => {

        let salida = {
            nombre: 'Moises',
            edad: 30,
            url: req.url
        }
        res.writeHead(200, { 'content-type': 'application/json' })
        res.write(JSON.stringify(salida));
        res.end();

    })
    .listen(8080);

console.log('escuchando el puerto 8080');