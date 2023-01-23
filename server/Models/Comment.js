import mongoose, {Schema} from "mongoose";


const commentSchema = new Schema({
    text:String,
    date:Date,
    rating:Number,
    userName:String,
    userLastName:String,
    userId: {
        ref:"User",
        type:Schema.Types.ObjectId,
    },

    productId:{
        ref:"Product",
        type:Schema.Types.ObjectId
    }
});

export default mongoose.model("Comment", commentSchema);