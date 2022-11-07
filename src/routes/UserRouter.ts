import { UserController } from "../controller/UsersController";
import express, { Request, Response } from "express";
import { LogInfo } from "../utils/logger";
import { IUser } from "../domain/interfaces/IUser.interface";

import bodyParser from "body-parser";
import { verifyToken } from "../middlewares/verifyToken.middleware";


let jsonParser = bodyParser.json();
let usersRouter = express.Router();

//GET http://localhost:8000/api/users?id=
usersRouter.route('/')
    //DELETE
    .delete(verifyToken, async (req: Request, res: Response) => {
        let id: any = req?.query?.id;
        LogInfo(`Query param ${id}`);

        const controller: UserController = new UserController();

        const response = await controller.deleteUserByID(id);

        return res.status(response.status).send(response)

    })

    //POST
    .post(jsonParser, async (req: Request, res: Response) => {
        
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
    .put(verifyToken, async (req: Request, res: Response) => {
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