import mongoose from "mongoose";
import  {IUser} from "../interfaces/IUser.interface";

export const userEntity = () => {

    let userSchema2 = new mongoose.Schema<IUser>(
        {
            name: {type: String, required: true},
            email: {type: String, required: true},
            password: {type: String, required: true},
            age: {type: Number, required: true}
        }
    )

    return mongoose.models.users || mongoose.model<IUser>('users', userSchema2);

}
