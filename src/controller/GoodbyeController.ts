import { BasicResponse, GoodbyeResponse } from "./types";
import { IGoodByeController } from "./interfaces";
import { LogSuccess } from "../utils/logger";


export class GoodByeController implements IGoodByeController{
    
    public async getMessage(name?: string): Promise<GoodbyeResponse> {
       LogSuccess('[api/goodbye] Get Request');
       
       return{
        message:`Goodbye ${ name || "world" }`,
        date: new Date()
       }
    }

}