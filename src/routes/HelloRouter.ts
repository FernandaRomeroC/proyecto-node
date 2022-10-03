import express, { Request, Response } from "express";
import { HelloControler } from "../controller/HelloController";
import { LogInfo } from "../utils/logger";


let helloRouter = express.Router();

//GET http://localhost:8000/api/hello?name=fernanda/
helloRouter.route('/')
    .get(async (req: Request, res: Response) => {
        //obtener query param
        let name: any = req?.query?.name;
        LogInfo(`Query param: ${name}`)

        //instanciar controlador
        const controller: HelloControler = new HelloControler();

        //obtener respuesta
        const response = await controller.getMessage(name);

        //enviar respuesta
        return res.send(response);
    })

export default helloRouter;