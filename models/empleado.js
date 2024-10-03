module.exports = (sequelize, DataTypes) => {
    const Empleado = sequelize.define('Empleado', {
      id_empleado: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      nombres: {
        type: DataTypes.STRING(100),
        allowNull: false
      },
      apellidos: {
        type: DataTypes.STRING(100),
        allowNull: false
      },
      direccion: {
        type: DataTypes.STRING(100),
        allowNull: true
      },
      telefono: {
        type: DataTypes.BIGINT,
        allowNull: false
      },
      salario: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    }, {
      tableName: 'Empleado',
      timestamps: false
    });
  
    return Empleado;
  };
  