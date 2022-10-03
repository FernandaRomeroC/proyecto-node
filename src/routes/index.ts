/**
 * Root router
 * Encargado de las rutas
 */

import express, { Request, Response } from 'express';
import helloRouter from './HelloRouter';
import { LogInfo } from '../utils/logger';

//instancia del server
let server = express();

//instanciar rutas
let rootRouter = express.Router();

//activar por peticiones /api
rootRouter.get('/', (req:Request, res: Response) => {
   LogInfo('GET: http://localhost:8000/api')
    res.send(`No se que onda`)
});

//rendireccionamiento a ruta y controlador
server.use('/', rootRouter); //http://localhost:8000/api/
server.use('/hello', helloRouter); //http://localhost:8000/api/hello

export default server;