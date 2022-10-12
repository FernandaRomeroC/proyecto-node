import { userEntity } from "../entities/User.entity";
import { LogSuccess, LogError } from "../../utils/logger";


//CRUD

/**
 * Method to obtain all users from collection "Users" in Mongo Server
 */
export const GetAllUsers = async() => {
    try{
        let userModel = userEntity();

        return await userModel.find({isDelete: false})
    }
    catch (error){
        LogError(`[ORM ERROR]: Getting All users: ${error}`);
    }
}


//Get user by id
//get user by email
//get user by id
//create new user
//update user by id
