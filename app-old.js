const http = require('node:http');

http.createServer((req, res) => {

    // res.writeHead(200, { 'Content-Type': 'application/json' });
    // res.setHeader('Content-Disposition', 'attachment; filename=lista.csv');
    // res.writeHead(200, { 'Content-Type': 'application/csv' });


    res.write('hola mundo');
    res.end();
})
    .listen(8080);

console.log('Escuchando el puerto', 8080)