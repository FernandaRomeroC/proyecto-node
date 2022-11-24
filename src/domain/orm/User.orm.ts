import { userEntity } from "../entities/User.entity";
import { LogSuccess, LogError } from "../../utils/logger";
import { IUser } from "../interfaces/IUser.interface";
import { UserResponse } from "../types/UsersResponse.types";


//CRUD

/**
 * Method to obtain all users from collection "Users" in Mongo Server
 */
export const getAllUsers = async(page: number, limit: number): Promise<any[] | undefined> => {
    try{
        let userModel = userEntity();
        let response: any = {};

        await userModel.find({isDelete: false})
            .limit(limit)
            .skip((page - 1) * limit)
            .select('name email age') //es la projection en mongo
            .exec()
            .then((users: IUser[]) => {
                /*users.forEach((user: IUser) => {
                    user.password = ''
                });*/
                response.users = users;
            })
        
        await userModel.countDocuments()
            .then((total: number) => {
                response.totalPages = Math.ceil(total / limit);
                response.currentPage = page;
            })
        
        return response;
    }
    catch (error){
        LogError(`[ORM ERROR]: Getting All users: ${error}`);
    }
}


//Get user by id
export const getUserByID = async(id: String): Promise<any | undefined> => {
    try{
        let userModel = userEntity();
        return await userModel.findById(id);
    }
    catch (error){
        LogError(`[ORM ERROR]: Getting user by ID: ${error}`);
    }
}


//Delete user by id
export const deleteUserByID = async(id: String): Promise<any | undefined> => {
    try{
        let userModel = userEntity();
        return await userModel.deleteOne({ _id: id});
    }
    catch (error){
        LogError(`[ORM ERROR]: Deleting user by ID: ${error}`);
    }
}


//create new user
export const createUser = async(user: any) : Promise<any | undefined> => {
    try{
        let userModel = userEntity();
        return await userModel.create(user);
    }
    catch(error){
        LogError(`[ORM ERROR]: Creating user : ${error}`);
    }
}


//update user by id
export const updateUserById = async( id: string, user: any): Promise<any | undefined> => {
    try{
        let userModel = userEntity();
        return await userModel.findByIdAndUpdate(id, user);
    }
    catch(error){
        LogError(`[ORM ERROR]: Update user ${id}: ${error}`);
    }
}
