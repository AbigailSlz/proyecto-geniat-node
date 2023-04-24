const { response, request } = require('express');

const Publicaciones = require('../models/publicaciones');
const Usuarios = require('../models/usuarios');
const Roles = require('../models/roles');

const publicacionesGet = async(req = request, res = response) => {

    let resPublicaciones = await Publicaciones.findAll({
        include: {
            model:Usuarios,
            attributes:['nombre', 'apellidos', ],
            include:[{
                model: Roles,
                attributes: ['rol']
            }]
        },
        attributes: ['id','titulo', 'descripcion','createdAt'],
        where:{
            estado: 1
        }
      });

    const publicaciones = resPublicaciones.map((publicacion) => {
        return {
           "id": publicacion.id,
           "titulo": publicacion.titulo,
           "descripcion": publicacion.descripcion,
           "fecha_creación": publicacion.createdAt,
           "nombre": `${publicacion.Usuario.nombre} ${publicacion.Usuario.apellidos}`,
           "rol": publicacion.Usuario.Role.rol
        }
    })

    res.json({
        publicaciones
    });
}

const publicacionesPost = async(req, res = response) => {
    const { titulo, descripcion } = req.body;
    const { id } = req.usuario;
    const publicacion = new Publicaciones({ titulo, descripcion, id_usuario: id });

    await publicacion.save();

    res.json({
        msg: "Publicación creada correctamente."
    });
}

const publicacionesPut = async(req, res = response) => {
    const {id } = req.params;
    const { titulo, descripcion } = req.body;

    await Publicaciones.update({ titulo: titulo, descripcion: descripcion }, {
        where: {
          id: id
        }
      });

    res.json({
        msg: "Publicación actualizada correctamente."
    });
}

const publicacionesDelete = async(req, res = response) => {
    const {id } = req.params;

    await Publicaciones.update({ estado: 0 }, {
        where: {
          id: id
        }
      });

    res.json({
        msg: "Publicación eliminada correctamente."
    });
}




module.exports = {
    publicacionesGet,
    publicacionesPost,
    publicacionesPut,
    publicacionesDelete
}