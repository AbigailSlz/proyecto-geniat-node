const { response, request } = require('express');
const jwt = require('jsonwebtoken');

const Usuario = require('../models/usuarios');
const Roles = require('../models/roles');


const validarJWT = async( req = request, res = response, next ) => {

    const token = req.header('x-token');

    if ( !token ) {
        return res.status(401).json({
            msg: 'No hay token en la petición'
        });
    }

    try {

        const { uid } = jwt.verify( token, process.env.SECRETORPRIVATEKEY );

        // leer el usuario que corresponde al uid
        const usuario = await Usuario.findOne( {
            where:{
                id: uid
            },
            include: Roles
        });

        if( !usuario ) {
            return res.status(401).json({
                msg: 'Token no válido'
            })
        }

        // Verificar si el usuario tiene estado true
        if ( !usuario.estado ) {
            return res.status(401).json({
                msg: 'Token no válido'
            })
        }

        req.usuario = usuario;
        next();

    } catch (error) {
        console.log(error);
        res.status(401).json({
            msg: 'Token no válido'
        })
    }

}

module.exports = {
    validarJWT
}