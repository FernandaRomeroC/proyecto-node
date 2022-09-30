"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
// Configuracion de .env 
dotenv_1.default.config();
// crear aplicacion
const app = (0, express_1.default)();
const port = process.env.PORT || 8000;
// definir primera ruta de la app
app.get('/', (req, res) => {
    // enviar saludo
    res.send('App Express + TS + Swagger + Mongoose!');
});
app.get('/hello', (req, res) => {
    // enviar saludo
    res.send('Welcome a ruta hello!');
});
// Ejecutar app
app.listen(port, () => {
    console.log(`Express server: running al http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map