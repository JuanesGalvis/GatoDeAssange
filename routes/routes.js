const express = require('express')

// IMPORTAR MODELOS
const Art = require('../models/Articulos')
const Cart = require('../models/Caricaturas')
const Pods = require('../models/Podcasts')


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


module.exports = router;