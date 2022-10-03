import { BasicResponse } from "../types";

//name? significa que es opcional
export interface IHelloController {
    getMessage(name?:string) : Promise<BasicResponse>;
}