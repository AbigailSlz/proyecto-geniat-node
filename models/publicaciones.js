const { DataTypes } = require("sequelize");
const { db } = require('../database/config');
const  Usuarios  = require('../models/usuarios');

const Publicaciones = db.define('Publicaciones', {
    titulo: {
        type: DataTypes.STRING
    },
    descripcion: {
        type: DataTypes.STRING
    },
    fecha_creacion: {
        type: DataTypes.STRING
    },
    id_usuario: {
        type: DataTypes.INTEGER
    },
    estado: {
        type: DataTypes.INTEGER
    },
    createdAt: {
        type: DataTypes.DATE
    },
    updatedAt: {
        type: DataTypes.DATE
    }
});
Publicaciones.belongsTo(Usuarios, {foreignKey: 'id_usuario'})
module.exports = Publicaciones;