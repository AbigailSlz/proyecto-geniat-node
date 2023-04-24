const { DataTypes } = require("sequelize");
const { db } = require('../database/config');


const Roles = db.define('Roles', {
    rol: {
        type: DataTypes.STRING,
        defaultValue: 1
    },
    createdAt: {
        type: DataTypes.DATE
    },
    updatedAt: {
        type: DataTypes.DATE
    }
});

module.exports = Roles;
