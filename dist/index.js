"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
/**
 * CONFIGURACIÓN DE .ENV
 */
dotenv_1.default.config();
/**
 * CREACIÓN APP
 */
const app = (0, express_1.default)();
const port = process.env.PORT || 8000;
/**
 * RUTAS
 */
app.get('/', (req, res) => {
    // enviar saludo
    res.send('App Express + TS + Swagger + Mongoose!');
});
app.get('/hello', (req, res) => {
    const name = req.query.name;
    res.send(`Hola, ${name === undefined ? 'Desconocido' : name}`);
});
app.get('/despedida', (req, res) => {
    const mensaje = {
        message: 'Goodbye, world'
    };
    res.send(mensaje);
});
/**
 * EJECUCIÓN DE APP
 */
app.listen(port, () => {
    console.log(`Express server: running al http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map