import express, { Express, Request, Response } from "express";

//swagger
import swaggerUi from "swagger-ui-express";

//seguridad
import cors from 'cors';
import helmet from 'helmet';

//todo HTTPS

//Root router
import rootRuter from '../routes';
import mongoose from "mongoose";


//crear Express App
const server: Express = express();

// * Swagger config and route
server.use(
    '/docs',
    swaggerUi.serve,
    swaggerUi.setup(undefined, {
        swaggerOptions: {
            url: "/swagger.json",
            explorer: true
        }
    })
)

//definir server use /api y ejecute el root router
server.use('/api', rootRuter);

//static server
server.use(express.static('public'));

//todo configuracion mongoose
//puerto/nombrebasedatos/
mongoose.connect('mongodb://localhost:27017/ejemploNode')

//seguridad config
server.use(helmet());
server.use(cors());

//tipo contenido tiene que mostrar
server.use(express.urlencoded({
    extended: true,
    limit: '50mb'
}))

server.use(express.json({
    limit: '50mb'
}));

//redireccion de http://localhost:8000 ---> http://localhost:8000/api
server.get('/', (req: Request, res: Response) => {
    res.redirect('/api');
})

export default server;