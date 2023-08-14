const express = require('express')
const cors = require('cors')

class Server{

    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios';

        //Middelewares
        this.middeleware();
        //rutas de aplicacion
        this.routes();
    }


    middeleware(){

        //CORS
        this.app.use(cors());

        //Parseo y lectura de body
        this.app.use(express.json());

        //Directorio publico
        this.app.use(express.static('public'))

    }

    routes(){
        
        this.app.use(this.usuariosPath, require('../routers/user')); 
    }

    listen(){
        this.app.listen(process.env.PORT, ()=>{
            console.log('Servidor corriendo en:' , this.port);
        });
    }

}

module.exports = Server;