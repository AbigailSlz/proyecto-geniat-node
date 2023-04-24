
const { Router } = require('express');
const { check } = require('express-validator');

const {
    validarCampos,
    validarJWT,
    tieneRole
} = require('../middlewares/index.js');


const { publicacionesGet } = require('../controllers/publicaciones');

const router = Router();


router.get('/', publicacionesGet );



module.exports = router;