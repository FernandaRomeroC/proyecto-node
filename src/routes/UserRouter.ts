import { UserController } from "../controller/UsersController";
import express, { Request, Response } from "express";
import { LogInfo } from "../utils/logger";
import { IUser } from "../domain/interfaces/IUser.interface";

import bcrypt from "bcrypt";

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
        return res.status(200).send(response);
    })

    //DELETE
    .delete(async (req: Request, res: Response) => {
        let id: any = req?.query?.id;
        LogInfo(`Query param ${id}`);

        const controller: UserController = new UserController();

        const response = await controller.deleteUserByID(id);

        return res.status(response.status).send(response)

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

        return res.status(201).send(response)
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

        return res.status(response.status).send(response)
    })



export default usersRouter;


/**
 * 
 * GET Documents => 200 OK
 * CREATION Documents => 201 OK
 * DELETION of Documents => 200 (Entity) / 204 (No return)
 * UPDATE of Documents => 200 (Entity) / 204 (No return)
 * 
 */ 