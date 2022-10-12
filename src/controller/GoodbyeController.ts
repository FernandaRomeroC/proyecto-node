import { Get, Query, Route, Tags } from "tsoa";
import { GoodbyeResponse } from "./types";
import { IGoodbyeController } from "./interfaces";
import { LogSuccess } from "../utils/logger";

@Route("/api/goodbye")
@Tags("GoodbyeController")
export class GoodbyeController implements IGoodbyeController{
    /**
     * Endpoint to retreive a message "Hello {name} and Date in JSON"
     * @param {String | undefined} name Name of user 
     * @returns { GoodbyeResponse } promise of GoodbyeResponse
     */
     @Get("/")
    public async getMessage(@Query()name?: string): Promise<GoodbyeResponse> {
       LogSuccess('[api/goodbye] Get Request');
       
       return{
        message:`Goodbye ${ name || "world" }`,
        date: new Date()
       }
    }

}