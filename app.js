const express = require('express')
const app = express()
require('dotenv').config();
const port = process.env.PORT;

// Handle vars 
var hbs = require('hbs');

app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials', function (err) { });


//Servir contenido estatico 
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Carlos Laib',
        titulo: 'Curso de node'
    });
})

app.get('/generic', (req, res) => {
    res.render('generic', {
        nombre: 'Carlos Laib',
        titulo: 'Curso de node'
    });
});

app.get('/elements', (req, res) => {
    res.render('elements', {
        nombre: 'Carlos Laib',
        titulo: 'Curso de node'
    })
})

app.get('/hola', function (req, res) {
    res.send('Hello World')
})

// redireccion a otras paginas
// app.get('/generic', (req, res) => {
//     res.sendFile(__dirname + '/public/generic.html')
// })

// app.get('/elements', (req, res) => {
//     res.sendFile(__dirname + '/public/elements.html')
// })

app.get('*', function (req, res) {
    // res.send('404 | Page not found')
    res.sendFile(__dirname + '/public/404.html')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})