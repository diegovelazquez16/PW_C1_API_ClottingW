const express = require('express');
const router = express.Router();
const empleadoController = require('../controllers/empleadoController');

router.post('/empleados', empleadoController.createEmpleado);
router.get('/empleados', empleadoController.getAllEmpleados);
router.get('/empleados/:id', empleadoController.getEmpleadoById);
router.put('/empleados/:id', empleadoController.updateEmpleado);
router.delete('/empleados/:id', empleadoController.deleteEmpleado);

module.exports = router;
