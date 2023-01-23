import mongoose, {Schema} from "mongoose";

const userSchema = new Schema({
    email:String,
    password: String,
    roles: [{
        type: String,
        ref:"Role"
    }],
    orders:[{
        type: Schema.Types.ObjectId,
        ref:"Order"
    }],

})

export default mongoose.model("User", userSchema);