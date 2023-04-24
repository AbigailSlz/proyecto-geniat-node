
const { Router } = require('express');
const { check } = require('express-validator');

const {
    validarCampos,
    tieneRol,
    validarJWT
} = require('../middlewares/index.js');


const { emailExiste, esRolValido } = require('../helpers/db-validators');

const { usuariosPost } = require('../controllers/usuarios');

const router = Router();

router.post('/',[
    validarJWT,
    tieneRol('medio-alto', 'alto-medio','alto'),
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('apellidos', 'El apellido es obligatorio').not().isEmpty(),
    check('password', 'El password debe de ser más de 6 letras').isLength({ min: 6 }),
    check('correo', 'El correo no es válido').isEmail(),
    check('id_rol', 'El rol es obligatorio').not().isEmpty(),
    check('id_rol').custom( esRolValido ), //Validar que el rol se encuentre en la bd
    check('correo').custom( emailExiste ),
    validarCampos
], usuariosPost );

module.exports = router;