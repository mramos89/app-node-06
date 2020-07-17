const express = require('express')
const app = express()
const hbs = require('hbs');
const port = process.env.PORT || 3000;
require('./hbs/helpers')

hbs.registerPartials(__dirname + '/views/partials');
app.use(express.static(__dirname + '/public'));

//Express HBS engine
app.set('view engine', 'hbs');


/*app.get('/data', (req, res) => {
    let salida = {
        nombre: 'Moises',
        edad: 30,
        url: req.url
    };
    res.send(salida);
});*/

app.get('/', (req, res) => {

    res.render('home', {
        nombre: 'moises ramos'
    }); //renderizar el home.html
});

app.get('/about', (req, res) => {

    res.render('about'); //renderizar el home.html
});

app.listen(port, () => {
    console.log(`escuchando peticiones en el puerto ${port}`);
});