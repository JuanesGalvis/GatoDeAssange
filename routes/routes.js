const express = require('express')

// IMPORTAR MODELOS
const Art = require('../models/Articulos')
const Cart = require('../models/Caricaturas')
const Pods = require('../models/Podcasts')

const Suscriptor = require('../models/Suscriptor')

const Pedir_Caricatura = require('../models/PedirCaricatura')
const Pedir_Podcast = require('../models/PedirPodcast')

const router = express.Router();

router.get('/api/', async (req, res) => {
    const data = await Art.find();
    res.json(data)
})

router.get('/api/caricaturas', async (req, res) => {
    const data = await Cart.find();
    res.json(data)
})

router.get('/api/podcasts', async (req, res) => {
    const data = await Pods.find();
    res.json(data)
})

router.post('/suscriptor', async (req, res) => {
    const NewSuscriptor = new Suscriptor(req.body);
    await NewSuscriptor.save();
    res.json({
        status: "Nuevo suscriptor agregado!"
    })
})

router.post('/pedir_caricatura', async (req, res) => {
    const RequestCaricatura = new Pedir_Caricatura(req.body);
    await RequestCaricatura.save();
    res.json({
        status: "Nuevo petición agregada!"
    })
})

router.post('/pedir_podcast', async (req, res) => {
    const RequestPodcast = new Pedir_Podcast(req.body);
    await RequestPodcast.save();
    res.json({
        status: "Nuevo petición agregada!"
    })
})

router.get('/api/:id', async (req, res) => {
    
    const Articulo = await Art.findById(req.params.id);
    res.json(Articulo)
})

module.exports = router;