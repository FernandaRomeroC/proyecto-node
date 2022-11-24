import { LogSuccess, LogError } from "../../utils/logger";
import { kataEntity } from "../entities/Kata.entity";
import { IKatas } from "../interfaces/IKatas.interface";


//CRUD

/**
 * Method to obtain all katas from collection "Katas" in Mongo Server
 */
export const getAllKatas = async(): Promise<any[] | undefined> => {
    try{
        let katasModel = kataEntity();
        return await katasModel.find({})
    }
    catch (error){
        LogError(`[ORM ERROR]: Getting All katas: ${error}`);
    }
}


//Get katas by level
export const getKatasByLevel = async(level: String): Promise<any | undefined> => {
    try{
        let katasModel = kataEntity();
        return await katasModel.find({level: level});
    }
    catch (error){
        LogError(`[ORM ERROR]: Getting katas by level: ${error}`);
    }
}

//Get five katas newly
export const getFiveKatasNewly = async(page: number, limit: number): Promise<any | undefined> => {
    try{
        let kataModel = kataEntity();
        let response: any = {};

        await kataModel.find({isDelete: false})
            .sort({_id: -1})
            .limit(limit)
            .skip((page - 1) * limit)
            .select('name email age') //es la projection en mongo
            .exec()
            .then((katas: IKatas[]) => {
                response.katas = katas;
            })
        
        await kataModel.countDocuments()
            .then((total: number) => {
                response.totalPages = Math.ceil(total / limit);
                response.currentPage = page;
            })
        
        return response;
    }
    catch (error){
        LogError(`[ORM ERROR]: Getting katas by level: ${error}`);
    }
}

//Get katas order y valoration 
export const getKatasOrderByValoration = async(): Promise<any | undefined> => {
    try{
        let katasModel = kataEntity();
        return await katasModel.find({}).sort({valoration: -1});
    }
    catch (error){
        LogError(`[ORM ERROR]: Getting katas order by valoration `);
    }
}

//update valoration katas
//Debes poder valorar una Kata con una nueva nota y debe almacenarse la media
export const updateKatasById = async( id: String, kata: any): Promise<any | undefined> => {
    try{
       
        let katasModel = kataEntity();
        return await katasModel.findByIdAndUpdate(id, kata);
    }
    catch(error){
        LogError(`[ORM ERROR]: Update kata ${id}: ${error}`);
    }
}

export const getKataById = async (id: string): Promise<any | undefined> => {
    try{
        let katasModel = kataEntity();
        return await katasModel.findById(id);
    }
    catch(error){
        LogError(`[ORM ERROR]: Getting kata by id ${id}: ${error}`);
    }
}


export const getKatasOrderByChaces = async (): Promise<any | undefined> => {
    try{
        let katasModel = kataEntity();
        return await katasModel.find({}).sort({chaces: 1});
    }
    catch(error){
        LogError(`[ORM ERROR]: Getting kata order by chaces`);
    }
}

