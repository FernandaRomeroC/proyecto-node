import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

// Configuracion de .env 
dotenv.config();

// crear aplicacion
const app: Express = express();
const port: string | number = process.env.PORT || 8000;

// definir primera ruta de la app
app.get('/', (req: Request, res: Response) => {
    // enviar saludo
    res.send('App Express + TS + Swagger + Mongoose!');
});

app.get('/hello', (req: Request, res: Response) => {
    // enviar saludo
    res.send('Welcome a ruta hello!');
});

// Ejecutar app
app.listen(port, () => {
    console.log(`Express server: running al http://localhost:${port}`)
});

