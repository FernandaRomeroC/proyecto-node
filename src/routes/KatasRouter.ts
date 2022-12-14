import express, { Request, Response } from "express";
import { LogInfo } from "../utils/logger";
import { KatasController } from "../controller/KatasController";
import { verifyToken } from "../middlewares/verifyToken.middleware";


let katasRouter = express.Router();
let katasRouter2 = express.Router();
let katasRouter3 = express.Router();

//GET http://localhost:8000/api/katas
katasRouter.route('/')
    //GET
    .get(verifyToken, async (req: Request, res: Response) => {
        let level: any = req?.query?.level;
        let page: any = req?.query?.page || 1;
        let limit: any = req?.query?.limit || 10;

        LogInfo(`Query param ${level}`);
        
        //instanciar controlador
        const controller: KatasController = new KatasController();

        //obtener respuesta
        const response = await controller.getKatas(page, limit, level);

        //enviar respuesta
        return res.send(response);
    })

    //PUT
    .put(verifyToken, async (req: Request, res: Response) => {
        let id: any = req?.query?.id;
        LogInfo(`Query param ${id}`);

        let valoration: any = req?.query?.valoration;
        LogInfo(`Query param ${valoration}`);

        const controller: KatasController = new KatasController();
       
        const response = await controller.updateValorationKata(id, valoration);

        return res.send(response)
    })  

   

//GET http://localhost:8000/api/katas/valoration
katasRouter.route('/valoration')
    //GET
    .get(verifyToken, async (req: Request, res: Response) => {
                
        //instanciar controlador
        const controller: KatasController = new KatasController();

        //obtener respuesta
        const response = await controller.getKatasOrderValoration();

        //enviar respuesta
        return res.send(response);
    })


//GET http://localhost:8000/api/katas/chaces
katasRouter.route('/chaces')
//GET
.get(verifyToken, async (req: Request, res: Response) => {
            
    //instanciar controlador
    const controller: KatasController = new KatasController();

    //obtener respuesta
    const response = await controller.getKatasOrderByChaces();

    //enviar respuesta
    return res.send(response);
})
   

export default [katasRouter]