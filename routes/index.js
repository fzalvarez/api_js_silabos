const express = require('express');
const router = express.Router();
const silabosRouter = require('./silabos');

// Rutas principales de la API
router.get('/', (req, res) => {
  res.json({ message: 'API Principal' });
});

// Rutas relacionadas con silabos
router.use('/silabos', silabosRouter);

module.exports = router;
