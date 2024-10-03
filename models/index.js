const Sequelize = require('sequelize');
const config = require('../config/config.json');
const sequelize = new Sequelize(
'AR', // esto lo cambian por el nombre de la db vacia que crearon en mysql
  'root',
  'v3lazqu3z', //esta es la contraseña de mysql
  {
    host: config.development.host,
    dialect: config.development.dialect,
  }
);

const db = {};
db.ORM = Sequelize;
db.connection = sequelize;

// Importar modelos
db.Empleado = require('./empleado')(sequelize, Sequelize);
db.Proveedor = require('./proveedor')(sequelize, Sequelize);
db.Prenda = require('./prenda')(sequelize, Sequelize);
db.PedidoProveedor = require('./pedidoProveedor')(sequelize, Sequelize);


module.exports = db;
