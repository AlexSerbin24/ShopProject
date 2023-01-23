import mongoose, {Schema} from "mongoose";

const roleSchema = new Schema({
    rolename:String,
    users: [{
        type: Schema.Types.ObjectId,
        ref:"User"
    }]
})

export default mongoose.model("Role", roleSchema);