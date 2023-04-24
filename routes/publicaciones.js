
const { Router } = require('express');
const { check } = require('express-validator');

const {
    validarCampos,
    validarJWT,
    tieneRole,
    tieneRol
} = require('../middlewares/index.js');


const { publicacionesGet, publicacionesPost, publicacionesPut, publicacionesDelete } = require('../controllers/publicaciones');

const router = Router();


router.get('/', [
    validarJWT,
    tieneRol('medio', 'alto-medio', 'alto'),
], publicacionesGet );

router.post('/', [
    validarJWT,
    tieneRol('medio-alto', 'alto-medio','alto'),
    check('titulo', 'El titulo es obligatorio').not().isEmpty(),
    check('descripcion', 'La descripción es obligatoria').not().isEmpty(),
    validarCampos,
], publicacionesPost );

router.put('/:id', [
    validarJWT,
    tieneRol('alto-medio','alto'),
    check('titulo', 'El titulo es obligatorio').not().isEmpty(),
    check('descripcion', 'La descripción es obligatoria').not().isEmpty(),
    validarCampos,
], publicacionesPut );

router.delete('/:id', [
    validarJWT,
    tieneRol('alto'),
], publicacionesDelete );

module.exports = router;