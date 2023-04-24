const Roles = require('../models/roles');
const Usuario = require('../models/usuarios');

const esRolValido = async(rol = '') => {
  const existeRol = await Roles.findOne({
    where: {
      id: rol
    }
   });
  if ( !existeRol ) {
      throw new Error(`El rol ${ rol } no está registrado en la BD`);
  }
}

const emailExiste = async( correo = '' ) => {
    // Verificar si el correo existe
    const existeEmail = await Usuario.findOne({
        where: {
          correo: correo
        }
      });
    if ( existeEmail ) {
        throw new Error(`El correo: ${ correo }, ya está registrado`);
    }
}

module.exports = {
  esRolValido,
  emailExiste
}

