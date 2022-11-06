import { userEntity } from "../entities/User.entity";
import { LogSuccess, LogError } from "../../utils/logger";
import { IAuth } from "../interfaces/IAuth.interface";
import { IUser } from "../interfaces/IUser.interface";

import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
//CRUD

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

        //Find user by email
        userModel.findOne({ email: auth.email }, (err: any, user: IUser) =>{
            if (err){
                //500
            }

            if (!user){
                //404
            }

            //use bcrypt to compare password
            let validPassword = bcrypt.compareSync(auth.password, user.password);

            if (!validPassword){
                //401 -> no autorizado
            }

            //create jwt
            let token = jwt.sign({email: user.email}, "MYSECRETWORD", {
                expiresIn: "2h"
            })

            return token;

        })

        
    }
    catch (error){
        LogError(`[ORM ERROR]: Login user: ${error}`);
    }
}


//login user
export const logoutUser = async(): Promise<any | undefined> => {
   
}