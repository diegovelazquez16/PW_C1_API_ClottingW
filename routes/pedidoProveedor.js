const express = require('express');
const router = express.Router();
const pedidoProveedorController = require('../controllers/pedidoProveedorController');

router.post('/pedidosproveedores', pedidoProveedorController.createPedidoProveedor);
router.get('/pedidosproveedores', pedidoProveedorController.getAllPedidosProveedor);
router.get('/pedidosproveedores/:id', pedidoProveedorController.getPedidoProveedorById);
router.put('/pedidosproveedores/:id', pedidoProveedorController.updatePedidoProveedor);
router.delete('/pedidosproveedores/:id', pedidoProveedorController.deletePedidoProveedor);

module.exports = router;
