const { response } = require('express')


const tieneRol = ( ...roles  ) => {
    return (req, res = response, next) => {

        const rol = req.usuario.Role ? req.usuario.Role.rol: '';

        if ( !req.usuario ) {
            return res.status(500).json({
                msg: 'Sin token de autenticación'
            });
        }


        if ( !roles.includes( rol ) ) {
            return res.status(401).json({
                msg: `No cuenta con permisos para realizar esta acción`
            });
        }

        next();
    }
}



module.exports = {
    tieneRol
}