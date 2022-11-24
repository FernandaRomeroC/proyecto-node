import { IAuth } from "../../domain/interfaces/IAuth.interface";
import { IUser } from "../../domain/interfaces/IUser.interface";
import { BasicResponse, GoodbyeResponse } from "../types";

//name? significa que es opcional
export interface IHelloController {
    getMessage(name?:string) : Promise<BasicResponse>;
}

export interface IGoodbyeController {
    getMessage(name?:String):Promise<GoodbyeResponse>;
}

export interface IUsersController {
    // Read all users from database
    getUsers(page: number, limit: number, id?: string): Promise<any>;

    //Delete user by id
    deleteUserByID(id?:string): Promise<any>;

    //create new user
    createUser(user: any): Promise<any>;

    //update user by id
    updateUserById(id: string, user: any): Promise<any>;
}

export interface IKatasController {
    //Read all katas from database
    getKatas(page: number, limit: number, level?: string): Promise<any>;
    getKatasOrderValoration(): Promise<any>;
    getKatasOrderByChaces(): Promise<any>;
    updateValorationKata(id: string, valoration: string): Promise<any>;
}

export interface IAuthController {
    //register user
    registerUser(user: IUser) : Promise<any>;
    //login user
    loginUser(auth: IAuth): Promise<any>
    //logout user
    logoutUser(): Promise<any>;
}