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
    getUsers(id?: string): Promise<any>

    //Delete user by id
    deleteUserByID(id?:string): Promise<any>

    //create new user
    createUser(user: any): Promise<any>

    //update user by id
    updateUserById(id: string, user: any): Promise<any>
}