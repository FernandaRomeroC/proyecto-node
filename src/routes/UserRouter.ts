import { UserController } from "../controller/UsersController";
import express, { Request, Response } from "express";
import { LogInfo } from "../utils/logger";


let usersRouter = express.Router();

//GET http://localhost:8000/api/users?id=
usersRouter.route('/')
    //GET
    .get(async (req: Request, res: Response) => {

        let id: any = req?.query?.id;
        LogInfo(`Query param ${id}`);

        //instanciar controlador
        const controller: UserController = new UserController();

        //obtener respuesta
        const response = await controller.getUsers(id);

        //enviar respuesta
        return res.send(response);
    })

    //DELETE
    .delete(async (req: Request, res: Response) => {
        let id: any = req?.query?.id;
        LogInfo(`Query param ${id}`);

        const controller: UserController = new UserController();

        const response = await controller.deleteUserByID(id);

        return res.send(response)

    })

    //POST
    .post(async (req: Request, res: Response) => {
        
        const controller: UserController = new UserController();

        let user = {
            name: "nekito",
            email: "nekito@gmail.com",
            age: 1
        }
        
        const response = await controller.createUser(user);

        return res.send(response)
    })

    //PUT
    .put(async (req: Request, res: Response) => {
        let id: any = req?.query?.id;
        LogInfo(`Query param ${id}`);

        const controller: UserController = new UserController();

        let user = {
            name: "tuti",
            email: "tuti@gmail.com",
            age: 3
        }
        
        const response = await controller.updateUserById(id,user);

        return res.send(response)
    })

export default usersRouter;