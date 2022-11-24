import { Delete, Get, Post, Put, Query, Route, Tags } from "tsoa";
import { IKatasController } from "./interfaces";
import { LogSuccess, LogError } from "../utils/logger";
import { query } from "express";

//ORM - users collection
import { getAllKatas, getFiveKatasNewly, getKataById, getKatasByLevel, getKatasOrderByChaces, getKatasOrderByValoration, updateKatasById } from "../domain/orm/Kata.orm";


@Route("/api/katas")
@Tags("KatasController")
export class KatasController implements IKatasController {
    /**
     * Endpoint to retreive the users in the collections "katas" od BD
     * @returns { any } All katas o katas found by level
     */
    @Get("/")
    public async getKatas(@Query()page: number, @Query()limit: number, @Query()level?: String): Promise<any> {
        let response = null;

        if (level){
            LogSuccess(`[/api/katas] Get All Katas by level successfy`);
            response = await getKatasByLevel(level);
        }else{
            LogSuccess(`[/api/katas] Get All Katas order by desc successfy`);
            response = await getFiveKatasNewly(page, limit);
        }
        return response;
        
    }  

    /**
     * Endpoint to retreive the users in the collections "katas" od BD
     * @returns { any } All katas order by valoration
     */
    @Get("/")
    public async getKatasOrderValoration(): Promise<any> {
         
        LogSuccess(`[/api/katas] Get All Katas order by valoration successfy}`);
        const response = await getKatasOrderByValoration();
         
        return response;
         
    } 
    
    /**
     * Endpoint to update valoration of de kata in the collections "katas" od BD
     * @returns  Message
     */
    @Put("/")
    public async updateValorationKata(id: string, valoration: string): Promise<any> {
        let response = null;
        let valorationNew: number = 0;
        let kataOld: any = null;

        if (id) {
            LogSuccess(`[/api/katas] update kata by id ${id}`);

            await getKataById(id)
                .then((res) => {
                    kataOld = res;
                })
                .catch((e) => {
                    response = {
                        message: e
                    }
                })
            let kata:any = {

            }
            if (kataOld.validationNumber !== 0){
                //calculo media
                valorationNew = Math.round((parseInt(valoration) + kataOld.valoration) / (kataOld.validationNumber+1));
                kataOld.valoration = valorationNew;
                kataOld.validationNumber = kataOld.validationNumber +1;
  
                await updateKatasById(id, kataOld)
                    .then((res) => {
                        response = {
                            message: `Kata with id ${id} updated successfully`                    }
                    })
                    .catch((e) => {
                        response = {
                            message: e
                        }
                    })
            } 
            
        }else{
            LogSuccess('[/api/katas] update kata Request without id');
            response = {
                message: "Please, provide an id to update an kata of database"
            };
        }

        return response;
        
    }

    /**
     * Endpoint to retreive the users in the collections "katas" od BD
     * @returns { any } All katas order by chaces
     */
    @Get("/")
    public async getKatasOrderByChaces(): Promise<any> {
        
        LogSuccess(`[/api/katas] Get All Katas order by valoration successfy}`);
        const response = await getKatasOrderByChaces();
        
        return response;
        
    } 
        
}


