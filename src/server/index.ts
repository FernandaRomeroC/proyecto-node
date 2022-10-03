import express, { Express, Request, Response } from "express";

//seguridad
import cors from 'cors';
import helmet from "helmet";

//todo HTTPS

//Root router
import rootRuter from '../routes';


//crear Express App
const server: Express = express();

//definir server use /api y ejecute el root router
server.use('/api', rootRuter)


//todo configuracion mongoose


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