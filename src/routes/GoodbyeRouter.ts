import { GoodByeController } from "../controller/GoodByeController";
import express, { Request, Response } from "express";
import { LogInfo } from "../utils/logger";


let goodbyeRouter = express.Router();

//GET http://localhost:8000/api/hello?name=fernanda/
goodbyeRouter.route('/')
    .get(async (req: Request, res: Response) => {
        //obtener query param
        let name: any = req?.query?.name;
        LogInfo(`Query param: ${name}`)

        //instanciar controlador
        const controller: GoodByeController = new GoodByeController();

        //obtener respuesta
        const response = await controller.getMessage(name);

        //enviar respuesta
        return res.send(response);
    })

export default goodbyeRouter;