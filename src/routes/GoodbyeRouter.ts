import express, { Request, Response } from "express";
import { LogInfo } from "../utils/logger";
import { GoodbyeResponse } from "../controller/types";
import { GoodbyeController } from "../controller/GoodbyeController";


let goodbyeRouter = express.Router();

//GET http://localhost:8000/api/hello?name=fernanda/
goodbyeRouter.route('/')
    .get(async (req: Request, res: Response) => {
        //obtener query param
        let name: any = req?.query?.name;
        LogInfo(`Query param: ${name}`)

        //instanciar controlador
        const controller: GoodbyeController = new GoodbyeController();

        //obtener respuesta
        const response: GoodbyeResponse = await controller.getMessage(name);

        //enviar respuesta
        return res.send(response);
    })

export default goodbyeRouter;