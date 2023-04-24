const { response } = require('express');
const bcryptjs = require('bcryptjs')

const Usuario = require('../models/usuarios');

const { generarJWT } = require('../helpers/generar-jwt');


const login = async(req, res = response) => {

    const { correo, password } = req.body;

    try {
        // Verificar si el email existe
        const usuario = await Usuario.findOne({
            where: {
              correo: correo,
              estado: true
            }
          });
        if ( !usuario ) {
            return res.status(400).json({
                msg: 'Usuario / Password no son correctos'
            });
        }

        // SI el usuario está activo
        if ( !usuario.estado ) {
            return res.status(400).json({
                msg: 'Usuario / Password no son correctos'
            });
        }

        // Verificar la contraseña
        const validPassword = bcryptjs.compareSync( password, usuario.password );
        if ( !validPassword ) {
            return res.status(400).json({
                msg: 'Usuario / Password no son correctos'
            });
        }

        // Generar el JWT
        const token = await generarJWT( usuario.id );

        res.json({
            usuario,
            token
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }

}

module.exports = {
    login
}
