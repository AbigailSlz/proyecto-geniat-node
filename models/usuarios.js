const { DataTypes } = require("sequelize");
const { db } = require('../database/config');
const  Roles  = require('../models/roles');


const Usuarios = db.define('Usuarios', {
    nombre: {
        type: DataTypes.STRING
    },
    apellidos: {
        type: DataTypes.STRING
    },
    correo: {
        type: DataTypes.STRING
    },
    password: {
        type: DataTypes.STRING
    },
    id_rol: {
        type: DataTypes.INTEGER
    },
    estado: {
        type: DataTypes.INTEGER,
        defaultValue: 1
    },
    createdAt: {
        type: DataTypes.DATE
    },
    updatedAt: {
        type: DataTypes.DATE
    }
});
Usuarios.belongsTo(Roles, {foreignKey: 'id_rol'})
module.exports = Usuarios;