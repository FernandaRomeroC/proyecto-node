import { userEntity } from "../entities/User.entity";
import { LogSuccess, LogError } from "../../utils/logger";


//CRUD

/**
 * Method to obtain all users from collection "Users" in Mongo Server
 */
export const getAllUsers = async(): Promise<any[] | undefined> => {
    try{
        let userModel = userEntity();
        return await userModel.find({})
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
export const updateUserById = async( id: string, user: any,): Promise<any | undefined> => {
    try{
        let userModel = userEntity();
        return await userModel.findByIdAndUpdate(id, user);
    }
    catch(error){
        LogError(`[ORM ERROR]: Update user ${id}: ${error}`);
    }
}
