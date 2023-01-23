import mongoose, {Schema} from "mongoose";

const orderSchema = new Schema({
    name: String,
    lastName: String,
    phoneNumber: String,
    orderPrice:Number,
    quantity: Number,
    deliveryType:String,
    city:String,
    street:String,
    date: {
        type:Date,
        default:new Date()
    },
    house:{
        type:String,
        required:false
    },
    flat:{
        type:Number,
        required:false
    },
    status:{
        type:String,
        default:"pending"
    },
    product: {
        type: Schema.Types.ObjectId,
        ref:"Product"
    },
    user:{
        type: Schema.Types.ObjectId,
        ref:"User"
    }
})

export default mongoose.model("Order", orderSchema);