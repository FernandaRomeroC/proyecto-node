import dotenv from "dotenv";
import server from "./src/server";
import { LogError, LogSuccess } from "./src/utils/logger";

// * CONFIGURACIÓN DE .ENV
dotenv.config();

const port = process.env.PORT || 8000;


// * EJECUTAR SERVER
server.listen(port, () =>{
    LogSuccess(`[SERVER ON]: Running in http://localhost:${port}/api`);
})

// * CONTROLAR ERROR DEL SERVER
server.on('error', (error) => {
    LogError(`[SERVER ERROR]: ${error}`);
})
