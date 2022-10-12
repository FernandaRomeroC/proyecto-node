import { BasicResponse, GoodbyeResponse } from "../types";

//name? significa que es opcional
export interface IHelloController {
    getMessage(name?:string) : Promise<BasicResponse>;
}

export interface IGoodByeController {
    getMessage(name?:String):Promise<GoodbyeResponse>;
}