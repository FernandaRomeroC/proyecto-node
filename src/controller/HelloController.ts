import { Get, Query, Route, Tags } from "tsoa";
import { BasicResponse } from "./types";
import { IHelloController } from "./interfaces";
import { LogSuccess } from "../utils/logger";


@Route("/api/hello")
@Tags("HelloControler")
export class HelloControler implements IHelloController{
    /**
     * Endpoint to retreive a message "Hello {name} in JSON"
     * @param { String | undefined } name Name of user to be greeted
     * @returns { BasicResponse } Promise of BasicResponse
     */
    @Get("/")
    public async getMessage(@Query()name?: string): Promise<BasicResponse> {
       LogSuccess('[api/hello] Get Request');
       
       return{
        message:`Hello ${ name || "world" }`
       }
    }

}