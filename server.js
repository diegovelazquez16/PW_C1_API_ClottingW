const express = require('express');
const cors = require('cors');
const empleadoRoutes = require('./routes/empleado');


const app = express();

app.use(cors({
  origin: 'http://localhost:4200',  
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());

app.use('/api/empleados', empleadoRoutes);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Conexión con la base de datos exitosa y modelos sincronizados. ${PORT}`);
});

module.exports = app;
