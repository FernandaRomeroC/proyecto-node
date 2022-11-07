import { AuthController } from "../controller/AuthController";
import express, { Request, Response } from "express";
import { IUser } from "../domain/interfaces/IUser.interface";

import bcrypt from "bcrypt";
import { IAuth } from "../domain/interfaces/IAuth.interface";

//para leer body 
import bodyParser from "body-parser";

//Midleware 
import { verifyToken } from "../middlewares/verifyToken.middleware";
import { Controller } from "tsoa";

let jsonParser = bodyParser.json();
let authRouter = express.Router();

authRouter.route('/register')
    .post (jsonParser, async (req: Request, res: Response) => {

        let {name, email, password, age} = req?.body;
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
        }else{
            return res.status(400).send({
                message: "[ERROR]No user can be registered"
            })
        }
    })

authRouter.route('/login')
    .post (jsonParser, async (req: Request, res: Response) => {

        let {email, password} = req?.body;
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
        }else{
            return res.status(400).send({
                message: "[ERROR]No user can be found"
            })
        }
    });

//Route protected by jwt
authRouter.route('/me')
    .get(verifyToken, async (req: Request, res: Response) => {
        //obtener id del user
        let id: any = req?.query?.id;

        if (id){
            //controlador
            const controller: AuthController = new AuthController();

            //obtain response
            let response = await controller.userData(id);

            return res.status(200).send(response);

        }else{
            return res.status(401).send({
                message: "You are not authorised to perform this action"
            })
        }

    })



export default authRouter;