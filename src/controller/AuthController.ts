import { Delete, Get, Post, Put, Query, Route, Tags } from "tsoa";
import { IAuthController } from "./interfaces";
import { LogSuccess, LogError, LogWarning } from "../utils/logger";

//ORM - users collection
import { IUser } from "../domain/interfaces/IUser.interface";
import { IAuth } from "../domain/interfaces/IAuth.interface";
import { loginUser, registerUser } from "../domain/orm/Auth.orm";


@Route("/api/users")
@Tags("AuthController")
export class AuthController implements IAuthController {
    
   
    @Post("/register")
    public async registerUser(user: IUser): Promise<any> {
        
        let response = null;

        if (user) {
            LogSuccess(`[/api/auth/register] Register User ${user}`);

            await registerUser(user)
                .then((res) => {
                    response = {
                        message: `User ${user.name} register successfully`                    }
                })
                .catch((e) => {
                    response = {
                        message: e
                    }
                })
        }else{
            LogWarning('[/api/auth/register] Register User Request without user');
            response = {
                message: "Please, provide an user to insert into database"
            };
        }

        return response;
    }

    @Post("/login")
    public async loginUser(auth: IAuth): Promise<any> {
        let response = null;

        if (auth) {
            LogSuccess(`[/api/auth/login] Register User ${auth}`);

            await loginUser(auth)
                .then((res) => {
                    response = {
                        message: `User ${auth.email} logged in successfully`,
                        token: res.token
                    }
                })
                .catch((e) => {
                    response = {
                        message: e
                    }
                })
        }else{
            LogWarning('[/api/auth/login] Login User Request without auth');
            response = {
                message: "Please, provide an auth"
            };
        }

        return response;
    }

    @Post("/logout")
    logoutUser(): Promise<any> {
        throw new Error("Method not implemented.");
    }
}


