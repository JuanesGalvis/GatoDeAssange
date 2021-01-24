// Importar librerías y variables de entorno
const express = require('express')
const mongoose = require('mongoose')
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
app.use(express.json())
app.use(require('./routes/routes.js'))

// desplegar staticos y servidor
app.use('/', express.static(__dirname+'/dist'))
app.listen(app.get('port'), () => {
    console.log('Servidor Corriendo');
})