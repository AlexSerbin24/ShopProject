import mongoose, {Schema, Types} from "mongoose";
import Order from "./Order.js";
const productSchema = new Schema({
    title:String,
    category: String,
    price: Number,
    description:String,
    rating: {type:Number, default: 0},
    imagines:[{
        type:Types.ObjectId,
        ref:"ProductImagine"
    }],
    
    comments:[{
        type:Types.ObjectId,
        ref:"Comment"
    }]
})


export default mongoose.model("Product", productSchema);