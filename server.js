// Importar librerías y variables de entorno
const express = require('express')
const mongoose = require('mongoose')

const bodyParser = require('body-parser')    

const venv = require('./env')


// Iniciar Base de datos
mongoose.Promise = global.Promise;
mongoose.connect(venv.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
    })
    .then((info) => {
        console.log('BD CONECTADA');
    })
    .catch((err) => {
        console.log(err);
    })

// iniciar aplicación
const app = express();
app.set('port', venv.PORT)
app.use(express.json());
app.use(require('./routes/routes.js'))

app.use(bodyParser.urlencoded({
extended: true
})).use(bodyParser.json())

// RUTAS
app.use('/', express.static(__dirname+'/dist'))
app.use('/caricaturas', express.static(__dirname+'/dist'))
app.use('/podcast', express.static(__dirname+'/dist'))
app.use('/suscripcion', express.static(__dirname+'/dist'))
app.use('/donar', express.static(__dirname+'/dist'))

app.use('/pedir_caricatura', express.static(__dirname+'/dist'))
app.use('/pedir_podcast', express.static(__dirname+'/dist'))

app.use('/articulo', express.static(__dirname+'/dist'))

app.use('/not_Found', express.static(__dirname+'/dist'))

app.use((req, res) => {
    if (res.status(404)) {
        res.redirect('/not_Found')
    }
})

app.listen(app.get('port'), () => {
    console.log('Servidor Corriendo');
})