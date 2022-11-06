import { AuthController } from "@/controller/AuthController";
import express, { Request, Response } from "express";
import { LogInfo } from "../utils/logger";
import { IUser } from "../domain/interfaces/IUser.interface";

import bcrypt from "bcrypt";
import { IAuth } from "../domain/interfaces/IAuth.interface";

let authRouter = express.Router();

authRouter.route('/auth/register')
    .post (async (req: Request, res: Response) => {

        let {name, email, password, age} = req.body;
        let hashedPassword = "";

        if (name && email && password && age){
            //obtain the password in request and cypher
            hashedPassword = bcrypt.hashSync(password, 8)

            let newUser: IUser = {
                name,
                email,
                password: hashedPassword,
                age
            }

            const controller: AuthController = new AuthController();
            
            const response = await controller.registerUser(newUser);

            return res.status(200).send(response)
        }
    })

authRouter.route('/auth/login')
    .post (async (req: Request, res: Response) => {

        let {email, password} = req.body;
        let hashedPassword = "";

        if (email && password){
            //obtain the password in request and cypher
            hashedPassword = bcrypt.hashSync(password, 8)

            let auth: IAuth = {
                email,
                password
            }

            const controller: AuthController = new AuthController();
            const response = await controller.loginUser(auth);
            return res.status(200).send(response)
        }
    })


export default authRouter;