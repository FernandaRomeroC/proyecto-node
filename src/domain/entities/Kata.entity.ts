import mongoose from "mongoose";
import { userEntity } from "./User.entity";

export const kataEntity = () => {
    
    let kataSchema = new mongoose.Schema(
        {
            name: String,
            descripcion: String,
            level: Number,
            date: Date,
            valoration: Number,
            chaces: Number,
            validationNumber: Number
        }
    )

    return mongoose.models.katas || mongoose.model('katas', kataSchema);

}
