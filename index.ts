import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

/**
 * CONFIGURACIÓN DE .ENV
 */
dotenv.config();


/**
 * CREACIÓN APP
 */
const app: Express = express();
const port: string | number = process.env.PORT || 8000;


/**
 * RUTAS
 */
app.get('/', (req: Request, res: Response) => {
    // enviar saludo
    res.send('App Express + TS + Swagger + Mongoose!');
});

app.get('/hello', (req: Request, res: Response) => {
    const name = req.query.name;
    res.send(`Hola, ${name === undefined ? 'Desconocido' : name}`);
});

app.get('/despedida', (req: Request, res: Response) => {
    const mensaje = {
        message: 'Goodbye, world'
    }
    res.send(mensaje);
})


/**
 * EJECUCIÓN DE APP
 */
app.listen(port, () => {
    console.log(`Express server: running al http://localhost:${port}`)
});


