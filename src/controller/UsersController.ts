import { Delete, Get, Post, Put, Query, Route, Tags } from "tsoa";
import { IUsersController } from "./interfaces";
import { LogSuccess } from "../utils/logger";

//ORM - users collection
import { createUser, deleteUserByID, getAllUsers, getUserByID, updateUserById } from "../domain/orm/User.orm";

@Route("/api/users")
@Tags("UserController")
export class UserController implements IUsersController {
    /**
     * Endpoint to retreive the users in the collections "Users" od BD
     * @param { String | undefined } id id of user to retreive (optional)
     * @returns { any } All user o user found by id
     */
    @Get("/")
    public async getUsers(@Query()page: number, @Query()limit: number, @Query()id?: string): Promise<any> {

        let response = null;

        if (id) {
            LogSuccess(`[/api/users] Get User By ID: ${id}`);
            response = await getUserByID(id);
        }else{
            LogSuccess('[/api/users] Get User all');
            response = await getAllUsers(page, limit);
        }

        return response;
        
    }
    /**
     * Endpoint to retreive the users in the collections "Users" od BD
     * @param { String | undefined } id id of user to delete (optional)
     * @returns { any } Message informing if deletion was correct
     */
    @Delete("/")
    public async deleteUserByID(@Query()id?: string): Promise<any>{
       
        let response = null;

        if (id) {
            LogSuccess(`[/api/users] Delete User By ID: ${id}`);
            await deleteUserByID(id)
                .then((res) => {
                    response = {
                        status: 200,
                        message: `User with id ${id} delete successfully`                    }
                })
                .catch((e) => {
                    response = {
                        status: 400,
                        message: e
                    }
                })
        }else{
            LogSuccess('[/api/users] Delete User Request without id');
            response = {
                status: 400,
                message: "Please, provide an Id to remove from database"
            };
        }

        return response;
    }

    @Post("/")
    public async createUser(user: any) : Promise<any>{

        let response = null;

        if (user) {
            LogSuccess(`[/api/users] Create new User ${user}`);
            await createUser(user)
                .then((res) => {
                    response = {
                        message: `User ${user.name} created successfully`                    }
                })
                .catch((e) => {
                    response = {
                        message: e
                    }
                })
        }else{
            LogSuccess('[/api/users] Create new User Request without user');
            response = {
                message: "Please, provide an user to insert into database"
            };
        }

        return response;
    }

    @Put("/")
    public async updateUserById(@Query()id: string, user: any) : Promise<any>{

        let response = null;

        if (id) {
            LogSuccess(`[/api/users] update User by id ${id}`);
            await updateUserById(id, user)
                .then((res) => {
                    response = {
                        status: 204,
                        message: `User with id ${id} updated successfully`                    }
                })
                .catch((e) => {
                    response = {
                        status: 400,
                        message: e
                    }
                })
        }else{
            LogSuccess('[/api/users] update User Request without id');
            response = {
                status: 400,
                message: "Please, provide an id to update an user of database"
            };
        }

        return response;
    }
}


