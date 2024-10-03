const express = require('express');
const bodyParser = require('body-parser');
const empleadoRoutes = require('./routes/empleado');
const proveedorRoutes = require('./routes/proveedor');
const prendaRoutes = require('./routes/prenda');
const pedidoProveedorRoutes = require('./routes/pedidoProveedor');
const app = express();

app.use(bodyParser.json());

app.use(empleadoRoutes);
app.use(proveedorRoutes);
app.use(prendaRoutes);
app.use(pedidoProveedorRoutes);
module.exports = app;
