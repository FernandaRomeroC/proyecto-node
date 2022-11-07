import { userEntity } from "../entities/User.entity";
import { LogSuccess, LogError } from "../../utils/logger";
import { IAuth } from "../interfaces/IAuth.interface";
import { IUser } from "../interfaces/IUser.interface";

import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

//import variable de entorno
import dotenv from "dotenv";
dotenv.config();
const secret = process.env.SECRECTTEXT || "";

//register user
export const registerUser = async( user: IUser): Promise<any | undefined> => {
    try{
        let userModel = userEntity();
        return await userModel.create(user);
    }
    catch(error){
        LogError(`[ORM ERROR]: Register user : ${error}`);
    }
}

//login user
export const loginUser = async( auth: IAuth): Promise<any | undefined> => {
    try{
        let userModel = userEntity();
        let userFound: IUser | undefined;
        let token = undefined;

        //Find user by email
        await userModel.findOne({ email: auth.email })
            .then((res: IUser) => {
                userFound = res;
            })
            .catch((e) => {
                console.error( '[ERROR Auth]');
                throw new Error(`[ERROR Auth] ${e}`);
            }) 
        
        //check if pass is valid
        let validPassword = bcrypt.compareSync(auth.password, userFound!.password);

        if (!validPassword){
            //401 -> no autorizado
            console.error( '[ERROR Auth] password not valid');
            throw new Error(`[ERROR Auth] password not valid`);
        }

        //create jwt
        token = jwt.sign({email: userFound!.email}, secret, {
            expiresIn: "2h"
        })

        return {
            user: userFound,
            token
        };
    }
    catch (error){
        LogError(`[ORM ERROR]: Login user: ${error}`);
    }
}


//login user
export const logoutUser = async(): Promise<any | undefined> => {
   
}