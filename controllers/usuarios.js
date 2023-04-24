const { response } = require('express');
const bcryptjs = require('bcryptjs');

const Usuario = require('../models/usuarios');

const usuariosPost = async(req, res = response) => {

  const { nombre, apellidos, correo, password, id_rol } = req.body;
  const usuario = new Usuario({ nombre, correo, apellidos, password, id_rol });

  // Encriptar la contraseña
  const salt = bcryptjs.genSaltSync();
  usuario.password = bcryptjs.hashSync( password, salt );

  // Guardar en BD
  await usuario.save();

  res.json({
      usuario
  });
}

module.exports = {
  usuariosPost
}