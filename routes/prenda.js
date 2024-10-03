const express = require('express');
const router = express.Router();
const prendaController = require('../controllers/prendaController');

router.post('/prendas', prendaController.createPrenda);
router.get('/prendas', prendaController.getAllPrendas);
router.get('/prendas/:id', prendaController.getPrendaById);
router.put('/prendas/:id', prendaController.updatePrenda);
router.delete('/prendas/:id', prendaController.deletePrenda);

module.exports = router;
