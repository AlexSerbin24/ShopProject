import mongoose, { Schema } from "mongoose";

const imgSchema = new Schema({
    imageUrl: String,
    product:{
        type:Schema.Types.ObjectId,
        ref:"Product"
    }
})

export default mongoose.model("ProductImagine",imgSchema)