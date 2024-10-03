const express = require('express');
const cors = require('cors');
const empleadoRoutes = require('./routes/empleado');
const proveedorRoutes = require('./routes/proveedor');
const prendaRoutes = require('./routes/prenda');
const pedidoProveedorRoutes = require('./routes/pedidoProveedor');

const app = express();

// Configurar CORS
app.use(cors({
  origin: 'http://localhost:4200',  // Ajustar según tu aplicación frontend
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// Middleware para parsear JSON
app.use(express.json());

// Rutas
app.use('/api/empleados', empleadoRoutes);
app.use('/api/proveedores', proveedorRoutes);
app.use('/api/prendas', prendaRoutes);
app.use('/api/pedidosProveedores', pedidoProveedorRoutes);

// Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});

module.exports = app;
