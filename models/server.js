const express = require('express');
const cors = require('cors');
const { db } = require('../database/config');

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.authPath     = '/api/auth';
        this.usuariosPath = '/api/usuarios';
        this.publicacionesPath = '/api/publicaciones';
        //Conectar a BD
        this.conectarDB();

        //middlewares
        this.middlewares();

        //Rutas de mi aplicación
        this.routes();
    }

    async conectarDB(){
        try {
            await db.authenticate();
            console.log('Base de datos en linea');
        } catch (error) {
            throw new Error(error);
        }
    }

    middlewares() {

        //CORS
        this.app.use( cors() );

        //Lectura y parseo del body
        this.app.use( express.json() );

        //Directorio público
    }

    routes() {
        this.app.use(this.authPath, require('../routes/auth'));
        this.app.use(this.usuariosPath, require('../routes/usuarios'));
        this.app.use(this.publicacionesPath, require('../routes/publicaciones'));
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en puerto', this.port);
        });
    }
}


module.exports = Server;