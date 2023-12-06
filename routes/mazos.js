/*
    Ruta: /api/mazos
*/
const { Router } = require('express');

const { getAllMazos } = require('../controllers/mazos')

const router = Router();

router.get('/getAllMazos', getAllMazos);

module.exports = router;