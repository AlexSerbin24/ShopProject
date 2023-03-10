import mongoose, { model, Schema } from "mongoose";

const tokenSchema = new Schema({
    user:{type:Schema.Types.ObjectId, ref: "User"},
    refreshToken:{type:String, required: true}
})

export default model("refreshToken", tokenSchema)