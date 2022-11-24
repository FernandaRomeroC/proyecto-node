import mongoose from "mongoose";
import { userEntity } from "./User.entity";

export const kataEntity = () => {
    
    let kataSchema = new mongoose.Schema(
        {
            name: {type: String, required: true},
            descripcion: {type: String, required: true},
            level: {type: Number, required: true},
            date: {type: Date, required: true},
            valoration: {type: Number, required: true},
            chaces: {type: Number, required: true},
            validationNumber: {type: Number, required: true}
        }
    )

    return mongoose.models.katas || mongoose.model('katas', kataSchema);

}
