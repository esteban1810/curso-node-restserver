const express = require('express')
const cors = require('cors')

class Server{
    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        //MIDLEWARES
        this.middlewares();
        //ROUTES
        this.routes();

    }

    middlewares(){
        //Peticiones desde otros sitios
        this.app.use(cors())

        //Para leer objetos .json
        this.app.use(express.json());

        //Crear un directorio publico
        this.app.use( express.static('public') )
    }

    routes(){
        this.app.use('/api/user', require('../routes/user'))
    }

    listen(){
        this.app.listen(this.port, () => {
          console.log(`Example app listening at http://localhost:${this.port}`)
        })
    }
}
 
module.exports = Server;